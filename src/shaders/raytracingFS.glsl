#include include.glsl;
// #include utils.glsl;
// #include noises.glsl;
#include distances.glsl;

//============================================================================

varying vec2 vUv;

vec4 dUnionTransp( const in vec4 d1, const in vec4 d2, const in float transpOption )
{
	// Negate the distance to the transparency object if transpOption is 0.0
	// This allows us to retrace out of transparency
	vec4 vScaled = vec4(d2.x * (transpOption * 2.0 - 1.0), d2.yzw);

	// The condition allows us to ignore transparency for secondary rays
	return mix(d1, vScaled, step(vScaled.x, d1.x) * step(0.0, transpOption));

	// transpOption
    // - TRANSP_NO (= -1.0): d2를 불투명 처리 (= 빛이 못들어간다) ==> return d1
    // - TRANSP_YES (= 1.0): d1과 d2 간의 정상적인 union 작업 수행 ==> return min(d1, d2)
    // - TRANSP_INV (= 0.0): d2를 투명 처리 (= d2의 내부를 외부로 변경해서 ray 진행 허용) ==> return vec4(-d2.x, d2.yzw)
}

vec4 dUnionAbs( const in vec4 d1, const in vec4 d2 )
{
	return mix( d2, d1, step( abs(d1.x), abs(d2.x) ) );
}

vec4 texSphere( in sampler2D tex, in vec3 n )
{
	// equirectangular projection: normal to texUV
	vec2 uv = vec2( acos(n.y) / PI, atan(n.z, n.x) / PI * 0.5 + 0.5 );
	return texture( tex, uv );
}

//============================================================================

//#define ENABLE_TEST_RENDER

#ifdef LOW_QUALITY
	#define MAX_RAY_ITER 128    //16
#else
	#define MAX_RAY_ITER 512    //32
	#define ENABLE_AMBIENT_OCCLUSION
	#define DOUBLE_SIDED_TRANSPARENCY
#endif

#ifdef ENABLE_HARD_SHADOWS
	#undef ENABLE_SOFT_SHADOWS
#else
	#define ENABLE_SOFT_SHADOWS
#endif

#define ENABLE_SPECULAR
#define ENABLE_REFLECTIONS
#define ENABLE_TRANSPARENCY
#define ENABLE_FOG
#define ENABLE_TEXTURE			// now not working

#define ENABLE_DIRECTIONAL_LIGHT
#define ENABLE_DIRECTIONAL_LIGHT_FLARE
// #define ENABLE_POINT_LIGHT
// #define ENABLE_POINT_LIGHT_FLARE

const float FOG_DENSITY = 0.05;

const float GROUND 	= 1.0; // cf: sky = 0.0
const float GOLD 	= 2.0;
const float SILVER 	= 3.0;
const float WALL 	= 4.0;
const float PIPE 	= 5.0;
const float WATER 	= 6.0;
const float WATER2 	= 7.0;
const float SPHERE  = 8.0;  // textureMaps[0]
const float POOLTILE= 9.0;
const float TEXMAP0 = 10.0;	// textureMaps[0]
const float TEXMAP1 = 11.0;	// textureMaps[1]

struct Ray
{
	vec3 o;    // ray origin
	vec3 d;    // ray direction
	float min; // ro + rd * min = start point
	float max; // ro + rd * max = end point
};
struct Hit
{
	vec3 p;  // p = ro + rd * t
	vec3 n;  // unit normal vector
	float t; // travel distance of ray
	vec3 m;	 // x = mtlID, yz = texUV
};
struct Indirect
{
	vec3 reflection;   // reflected color
	vec3 transmission; // transmitted color (refraction)
};
struct Material
{
	vec3 albedo;		// diffuse reflectivity (= cTexture * cTexture)
	float R0;			// reflectance = reflection coeff for light incoming parallel to the normal (= [(n1-n2)/(n1+n2)]^2 )
	float smoothness;	// related to alpha for (n*h)^alpha
	float transparency; // diffuse*(1-tr) + transmission*tr where tr = transparency (transmission occurs when tr > 0.0)
	float relIOR;	    // relative index of refraction, defined as n1/n2 (where n1=come, n2=go)

	// cf: n(Air) = 1.0003, n(Water)=1.333, n(common Glass)=1.52, n(Diamond)=2.42
	// n(Aluminium/Al)=1.0972, n(Copper/Cu)=0.46090, n(Iron/Fe)=2.9304
	// n(Gold/Au)=0.27049, n(Silver/Ag)=0.15016, n(Titanium/Ti)=2.6112, n(Lead/Pb)=2.6
	// critical angle: theta1 = arcsin(n2/n1 * sin(PI/2)) for total internal reflection

	// cf: IOR (= n) (https://pixelandpoly.com/ior.html)
	// - Air: 1.000		Aluminum: 1.390 ~ 1.440
	// - Gold: 0.47		Iron: 2.950		Glass: 1.500
	// - Plastic: 1.460	Diamond: 2.418
	// - Water: 1.325

	// cf: R0 = reflection coefficient at normal incidence
	// higher R0 ==> more light is reflected ==> more mirror-like appearance (거울)
	// lower R0 ==> more light is transmitted ==> more transparent appearance (유리)

	// cf: Schlick Approximation:
	// specular reflection coefficient
	//     R(t) = R0 + (1 - R0)(1 - cos(t))^5
	// where R0 = [(n1 - n2)/(n1 + n2)]^2
	//       cos(t) = dot(H,V) (where H = normalize(R + V), V = surf to eye)
};
struct Shading
{
	vec3 diffuse;
	vec3 specular;
};
struct PointLight
{
	vec3 pos;
	vec3 col;
};
struct DirectionalLight
{
	vec3 dir;
	vec3 col;
};

//----------------------------------------------------------------------------
// Scene Description
//----------------------------------------------------------------------------
vec2 sceneMap( in vec3 p ){ return vec2(0.0); } // dummy (why: distances.glsl)

vec4 dCheckerBoard( const in vec3 p )
{
	return vec4( fPlane( p-vec3(0.0), vec3(0.0, 1.0, 0.0) ), GROUND, p.xy );
}

// Choose one and comment out the rest
// #define EXAMPLE_BOX
// #define EXAMPLE_BOX_CYL_CONE
#define EXAMPLE_INF_SPHERES
// #define EXAMPLE_SPHERE
// #define EXAMPLE_CROSS
vec4 simpleScene( const in vec3 p )
{
	vec3 tex0 = vec3(TEXMAP0, p.z, p.x);
	vec3 tex1 = vec3(TEXMAP1, p.x, p.y);
	vec3 gold = vec3(GOLD, p.z, p.x);
	vec3 silver = vec3(SILVER, p.z, p.x);

#if 1
	vec4 res = dCheckerBoard( p );
#else
	vec4 res = vec4(1000.0, -1.0, p.xy);
#endif

#if defined(EXAMPLE_BOX)
	res = dUnion( res, vec4( fBox(p-vec3(0.5, 0.5, 0.5), vec3(0.5)), silver ) );

#elif defined(EXAMPLE_BOX_CYL_CONE)
	res = dUnion( res, vec4( fBox(p-vec3(0.5, 0.5, 0.5), vec3(0.25)), tex0 ) );
	res = dUnion( res, vec4( fCylinder(p-vec3(1, 0.3, 0), vec2(0.2, 0.3)), tex1 ) );
	res = dUnion( res, vec4( fCone(p-vec3(0.0, 0.9, 1.0), vec3(0.8, 0.1, 0.6) ), gold ) );

#elif defined(EXAMPLE_INF_SPHERES)
	vec3 q = sRepeat( p, vec3(10.0, 10.0, 10.0) );
	res = dUnion( res, vec4( fSphere(q, 2.5), tex0 ) );

#elif defined(EXAMPLE_SPHERE)
	res = dUnion( res, vec4( fSphere(p-vec3(0, 2.5, 0), 2.5), tex0 ) );

#elif defined(EXAMPLE_CROSS)
	float k = 0.1;
	vec3 h = sTranslate( p, vec3(0, 2, 0) );
	vec4 dcy1 = vec4( fCylinder(h, vec2(1.0, 2.0)), gold );
	vec4 dcy2 = vec4( fCylinder(h.yzx, vec2(0.5, 2.0)), silver );
	res = dUnion( res, dBlend( dcy1, dcy2, k ) );
#endif

	return res;
}

vec4 primitiveScene( const in vec3 p )
{
	vec3 gold = vec3(GOLD, p.xy); // p.xy = texUV
	
	vec4 res = dCheckerBoard( p );
	res = dUnion( res, vec4( fSphere(    p-vec3( 0.0,0.25, 0.0), 0.25 ), gold ) );
	res = dUnion( res, vec4( fBox(       p-vec3( 1.0,0.25, 0.0), vec3(0.25) ), gold ) );
	res = dUnion( res, vec4( fTorus(     p-vec3( 0.0,0.25, 1.0), vec2(0.20,0.05) ), gold ) );
	res = dUnion( res, vec4( fCapsule(   p,vec3(-1.3,0.10,-0.1), vec3(-0.8,0.50,0.2), 0.1  ), gold ) );
	res = dUnion( res, vec4( fTriPrism(  p-vec3(-1.0,0.25,-1.0), vec2(0.25,0.05) ), gold ) );
	res = dUnion( res, vec4( fCylinder(  p-vec3( 1.0,0.30,-1.0), vec2(0.1,0.2) ), gold ) );
	res = dUnion( res, vec4( fCone(      p-vec3( 0.0,0.50,-1.0), vec3(0.8,0.6,0.3) ), gold ) );
	res = dUnion( res, vec4( fTorus82(   p-vec3( 0.0,0.25, 2.0), vec2(0.20,0.05) ), gold ) );
	res = dUnion( res, vec4( fTorus88(   p-vec3(-1.0,0.25, 2.0), vec2(0.20,0.05) ), gold ) );
	res = dUnion( res, vec4( fCylinder(  p-vec3( 1.0,0.30, 2.0), vec2(0.1,0.2) ), gold ) );
	res = dUnion( res, vec4( fHexPrism(  p-vec3(-1.0,0.20, 1.0), vec2(0.25,0.05) ), gold ) );
	res = dUnion( res, vec4( fSubtract(  fBox( p-vec3(-2.0,0.2, 1.0), vec3(0.2)), fSphere( p-vec3(-2.0,0.2, 1.0), 0.25)), gold ) );
	res = dUnion( res, vec4( fSubtract( fTorus82(  p-vec3(-2.0,0.2, 0.0), vec2(0.20,0.1)), fCylinder( sRepeat( vec3(atan(p.x+2.0,p.z)/6.2831, p.y, 0.02+0.5*length(p-vec3(-2.0,0.2,0.0)) ), vec3(0.05,1.0,0.05)), vec2(0.02,0.6))), gold ) );
	res = dUnion( res, vec4( 0.7*fSphere( p-vec3(-2.0,0.25,-1.0), 0.2 ) + 0.03*sin(50.0*p.x)*sin(50.0*p.y)*sin(50.0*p.z), gold ) );
	res = dUnion( res, vec4( 0.5*fTorus( sTwist(p-vec3(-2.0,0.25, 2.0), 20.0), vec2(0.20,0.05)), gold ) );
	res = dUnion( res, vec4( fConeSection( p-vec3( 0.0,0.35,-2.0), 0.15, 0.2, 0.1 ), gold ) );
	res = dUnion( res, vec4( fEllipsoid( p-vec3( 1.0,0.35,-2.0), vec3(0.15, 0.2, 0.05) ), gold ) );
	return res;
}

vec4 water( const in vec3 p, const in vec2 ripplePos )
{
	const float waterElevation = 0.0;//-0.1;
	const float waterNoiseScale = 0.25;//0.025;
	const float waterSpeed = 20.0;//8.0;//80.0;
	const float waterFreq = 10.0;//10.0;//30.0;

	// vec2 ripplePos = vec2(0.0, 0.0);

	// noise
	vec2 noiseDomain = p.xz;
	noiseDomain.x = length(p.xz - ripplePos);

	// optional
	// for( int i = 0; i < 5; i++ ) {
	// 	noiseDomain.x += length(p.xz - triSmooth22( p.xz ));
	// }

	float noiseScale = 1.0 / (1.0 + noiseDomain.x) * waterNoiseScale;

	noiseDomain *= waterFreq;
	noiseDomain.x += (-time) * waterSpeed;

	// water
	float water = p.y - waterElevation;
	water += fNoise(noiseDomain) * noiseScale;
	return vec4(water, WATER2, p.xz);
}
vec4 waterScene( const in vec3 p )
{
	vec3 submerged = vec3(SPHERE, p.x, p.z); // ball submerged in water
	vec3 floating = vec3(SILVER, p.x, p.z);  // ball floating on water
	vec3 poolTile = vec3(POOLTILE, p.x*0.125, p.z*0.125);

	vec4 res = dUnionAbs(
		vec4( fSphere(p-vec3( 0, 0.1 + 0.1*sin(time*15.0), 0 ), 1.0), floating ),
		vec4( fSphere(p-vec3( -1.5, -2.5, 0 ), 1.0 ), submerged )
	);
	res = dUnionAbs( res, vec4( fPlane(p-vec3(0,-5,0)), poolTile ) );
	res = dUnionAbs( res, water(p, vec2(0,0)) );

	return res;
}

//----------------------------------------------------------------------------

vec4 _sceneMap( const in vec3 p )
// return (distance, mtlID, texUV)
{
	// return simpleScene( p );
	// return primitiveScene( p );
	return waterScene( p );
}

Material getMaterial( const in Hit hit )
{
#if 0		// reflectance of a material
mtl.albedo = vec3(0.93, 0.88, 0.38);	// Gold
mtl.albedo = vec3(0.26, 0.28, 0.26);	// Iridium
mtl.albedo = vec3(0.44, 0.435, 0.43);	// Iron
mtl.albedo = vec3(0.50, 0.47, 0.36);	// Nickel
mtl.albedo = vec3(0.93, 0.80, 0.46);	// Copper
mtl.albedo = vec3(0.63, 0.62, 0.57);	// Platinum
mtl.albedo = vec3(0.97, 0.97, 0.96);	// Silver
#endif

	Material mtl;
	if(hit.m.x == TEXMAP0) // textureMaps[0]
	{
		mtl.albedo = texture( textureMaps[0], hit.m.yz ).rgb;
		mtl.R0 = (1.0003-0.27049)/(1.0003+0.27049);
		mtl.R0 *= mtl.R0;
		mtl.smoothness = 1.0;
		mtl.transparency = 0.0;
	}
	else if(hit.m.x == TEXMAP1) // textureMaps[1]
	{
		mtl.albedo = texture( textureMaps[1], hit.m.yz ).rgb;
		// mtl.R0 = 0.333;//0.2;//2.0;
		// mtl.R0 *= mtl.R0;
		mtl.R0 = (1.0003-0.27049)/(1.0003+0.27049);
		mtl.R0 *= mtl.R0;
		mtl.smoothness = 1.0;
		mtl.transparency = 0.0;
	}
	else if(hit.m.x == GROUND)
	{
		float ncell = 2.0;//5.0;	// ncell = no. cell per unit length (e.g. if ncell=2, then cellsize=0.5)
		float f = mod( floor(ncell * hit.p.z) + floor(ncell * hit.p.x), 2.0 );
		mtl.albedo = 0.4 + 0.1*f*vec3(1.0);
		mtl.R0 = 4.0;//0.8;
		mtl.smoothness = 1.0;
		mtl.transparency = 0.0;
	}
	else if(hit.m.x == GOLD)
	{
		mtl.albedo = vec3(1.0, 0.84, 0.0);
		mtl.R0 = (1.0003-0.27049)/(1.0003+0.27049);
		mtl.R0 *= mtl.R0;
		mtl.smoothness = 1.0;
		mtl.transparency = 0.0;
	}
	else if(hit.m.x == SILVER)
	{
		mtl.albedo = vec3(0.75, 0.75, 0.75);
		mtl.R0 = (1.0003-0.15016)/(1.0003+0.15016);
		mtl.R0 *= mtl.R0;
		mtl.smoothness = 1.0;
		mtl.transparency = 0.0;
	}
	else if(hit.m.x == WALL)
	{
		// floor
		mtl.R0 = 0.02;
	#ifdef ENABLE_TEXTURE
		//hit.m.yz = fragTexCoord;
		vec3 texCol = texture(textureMaps[0], hit.m.yz * 0.25).rgb;

		mtl.albedo = texCol * texCol;
		mtl.smoothness = mtl.albedo.r;
		mtl.transparency = 0.0;
	#else
		// textureless version
		vec2 tile = step(vec2(0.15), fract(hit.m.yz));
		mtl.albedo = vec3(1.0) * (tile.x * tile.y * 0.8 + 0.2);
		mtl.smoothness = 1.0;
	#endif
	}
	else if(hit.m.x == PIPE)
	{
		mtl.R0 = 0.8;
		mtl.smoothness = 1.0;
		mtl.albedo = vec3(0.5);
		mtl.transparency = 0.0;
	}
	else if(hit.m.x == WATER)
	{
		mtl.R0 = 0.01;
		mtl.smoothness = 1.0;
		mtl.transparency = 1.0;
		mtl.relIOR = 1.0 / 1.3330;	// n1(air) / n2(water)
		const float extinctionScale = 2.0;
		const vec3 extinction = vec3(0.3, 0.7, 0.9);
		mtl.albedo = (vec3(1.0) - extinction) * extinctionScale; // becomes extinction for transparency
	}
	//================================
	// used for waterScene
	//================================
	else if(hit.m.x == WATER2)
	{
		mtl.R0 = 0.1;
		mtl.smoothness = 1.0;
		mtl.transparency = 0.8;
		mtl.relIOR = 1.0 / 1.3330;	// n1(air) / n2(water)
		const float extinctionScale = 0.0;
		const vec3 extinction = vec3(0.3, 0.7, 0.9);
		mtl.albedo = (vec3(1.0) - extinction) * extinctionScale; // becomes extinction for transparency
	}
	else if(hit.m.x == SPHERE) // textureMaps[0]
	{
		mtl.albedo = texSphere( textureMaps[0], hit.n ).rgb;
		mtl.R0 = (1.0003-0.27049)/(1.0003+0.27049);
		mtl.R0 *= mtl.R0;
		mtl.smoothness = 1.0;
		mtl.transparency = 0.0;
	}
	else if(hit.m.x == POOLTILE) // textureMaps[1]
	{
		mtl.albedo = texture( textureMaps[1], hit.m.yz ).rgb;
		mtl.R0 = (1.0003-0.27049)/(1.0003+0.27049);
		mtl.R0 *= mtl.R0;
		mtl.smoothness = 1.0;
		mtl.transparency = 0.0;
	}
	//================================
	else
	{
		// red color not to define a material
		mtl.albedo = vec3(1,0,0);
		mtl.smoothness = 1.0;
		mtl.transparency = 0.0;
	}
	return mtl;
}

vec3 getSkyGradient( const in vec3 rd )
{
	const vec3 skyCol = vec3(0.7, 0.8, 1.0);
	const vec3 groundCol = skyCol * 0.5;
	float w = clamp(rd.y, 0.0, 1.0); // w = clamp(rd.y, 0.0, 1.0)
	return mix(groundCol, skyCol, w); // skyGradient = groundCol*(1-w) + skyCol * w
}

PointLight getPointLight()
{
	// PointLight result;
	// result.pos = vec3(0.5, 1.0, -2.0);
    // //result.col = vec3(32.0, 6.0, 1.0) * 10.0;
	// result.col = vec3(32.0, 6.0, 1.0) * 2.0;
	// return result;

	PointLight result;
	result.pos = vec3(1.0, 1.0, 0.0);
	// result.col = vec3(32.0, 6.0, 1.0) * 2.0;
	result.col = vec3(32.0, 6.0, 1.0) * 0.0;
	return result;
}

DirectionalLight getDirectionalLight()
{
	// DirectionalLight result;
	// result.dir = normalize(vec3(-0.2, -0.3, 0.5));
    // //result.col = vec3(8.0, 7.5, 7.0);
	// result.col = vec3(2.0, 1.5, 1.0);
	// return result;

	DirectionalLight result;
	vec3 pos = vec3(1,1,0);
	result.dir = normalize(-pos); // dir to origin
	result.col = vec3(2.0, 1.5, 1.0);
	return result;
}

vec3 getAmbientLight( const in vec3 n )
{
	return getSkyGradient( n ); // Lc = skyGradient
}

//----------------------------------------------------------------------------
// Raymarching
//----------------------------------------------------------------------------

vec3 _sceneNormal( in vec3 p )
{
	vec3 eps = vec3( EPS, 0.0, 0.0 );
	return normalize( vec3(
		_sceneMap(p + eps.xyy).x - _sceneMap(p - eps.xyy).x,
		_sceneMap(p + eps.yxy).x - _sceneMap(p - eps.yxy).x,
		_sceneMap(p + eps.yyx).x - _sceneMap(p - eps.yyx).x
	));
}

void rayMarch( const in Ray ray, out Hit hit, const int maxIter )
{
    hit.t = ray.min;
    hit.m.x = 0.0;

    for( int i = 0; i <= MAX_RAY_ITER; i++ )
    {
        hit.p = ray.o + ray.d * hit.t;
		vec4 d = _sceneMap( hit.p );
		d.x = abs(d.x);
        hit.m = d.yzw;

        // abs allows backward stepping - should only be necessary for non uniform distance functions
        if( (abs(d.x) <= EPS) || (hit.t >= ray.max) || (i > maxIter) ) break;
        hit.t = hit.t + d.x;
    }

    if( hit.t >= ray.max )
    {
        hit.t = MAX_RAY_DIST;
        hit.p = ray.o + ray.d * hit.t;
        hit.m.x = 0.0; // maybe sky
    }
}

float sceneShadow( const in vec3 p, const in vec3 n, const in vec3 ld, const in float ldist )
{
#if defined(ENABLE_HARD_SHADOWS)		// #ifdef ENABLE_HARD_SHADOWS
    Ray shadowRay;
    shadowRay.d = ld;
    shadowRay.o = p;
    const float bias = 0.05;
    shadowRay.min = bias / abs(dot(ld, n));
    shadowRay.max = ldist - shadowRay.min;
    Hit hit;
    rayMarch(shadowRay, hit, 32);
    float shadow = step(0.0, hit.t) * step(ldist, hit.t );
    return shadow;

#elif defined(ENABLE_SOFT_SHADOWS)
    const float bias = 0.05;
    float t = bias / abs(dot(ld, n));
    float tmax = ldist - t;
    float result = 1.0;
    for( int i=0; i<16; i++ )
    {
        float d = abs(_sceneMap( p + ld*t ).x);
		// float d = (_sceneMap( p + ld*t ).x);
        result = min( result, 8.0*d/t );
        t += clamp( d, 0.02, 0.10 ); //psk
        if( d < 0.001 || t > tmax ) break;
    }
    return clamp( result, 0.0, 1.0 );

#else
    return 1.0;

#endif
}

float sceneAO(const in Hit hit)
{
#ifdef ENABLE_AMBIENT_OCCLUSION
    float scaleOcc = 0.2; //psk
    float ao = 1.0;
    float t = 0.0;
    for(int i = 0; i <= 5; i++)
    {
        t += 0.1;
        float d = abs(_sceneMap( hit.p + hit.n * t ).x);
        ao *= 1.0 - max( 0.0, (t - d) * scaleOcc / t );
    }
    return ao;
#else
    return 1.0;
#endif
}

//----------------------------------------------------------------------------
// Lighting and Shading
//----------------------------------------------------------------------------
void applyAtmosphere(inout vec3 col, const in Ray ray, const in Hit hit)
{
#ifdef ENABLE_FOG
    float fogAmount = exp(hit.t * -FOG_DENSITY);
    vec3 fog = getSkyGradient(ray.d);
    #ifdef ENABLE_DIRECTIONAL_LIGHT_FLARE
        DirectionalLight directionalLight = getDirectionalLight();
        float fDirDot = clamp(dot(-directionalLight.dir, ray.d), 0.0, 1.0);
        fog += directionalLight.col * pow(fDirDot, 10.0);
    #endif
    col = mix(fog, col, fogAmount);
#endif

#ifdef ENABLE_POINT_LIGHT_FLARE
    PointLight pointLight = getPointLight();
    vec3 toLight = pointLight.pos - ray.o;
    vec3 closestPoint = ray.o + ray.d * clamp(dot(toLight, ray.d), 0.0, hit.t);
    float dist = length(closestPoint - pointLight.pos);
    col += pointLight.col * 0.01 / (dist * dist);
#endif
}

float schlick( const in vec3 H, const in vec3 v, const in float R0, const in float smoothFactor)
// v = ray.d
{
	// R(t) = R0 + (1 - R0)(1 - cos(t))^5
	//      = R0 + (1 - R0)(1 - H o V)^5  (= fresnel)
	return R0 + (1.0 - R0) * pow(clamp((1.0 - dot(H, -v)), 0.0, 1.0), 5.0) * smoothFactor; // fresnel = R0 + (1.0 - R0) * (1 - H o V)^5 * smoothFactor
}

vec3 applyFresnel(const in vec3 diffuse, const in vec3 specular, const in vec3 n, const in vec3 v, const in Material mtl)
// v = ray.d
{
	vec3 R = reflect(v, n); // R = reflect(-V, N)
	vec3 H = normalize(R + -v); // H = R + V
	float F = schlick(H, v, mtl.R0, mtl.smoothness * 0.9 + 0.1); // F = fresnel
	return mix(diffuse, specular, F); // return (Ld*Md) * (1-F) + Ls * (F)
}

float getPhongSpecularIntensity(const in vec3 v, const in vec3 ld, const in vec3 n, const in float smoothness)
// v = ray.d = eyePos to surfPos
// ld = surfPos to lightPos
{          
	vec3 H = normalize(ld - v);  // H = L + V
	float specPower = exp2(4.0 + 6.0 * smoothness);  // smoothness ==> specPower (= shininess)
	float specIntensity = (specPower + 2.0) * 0.125; // specPower ==> specIntensity (= specIntensity)
	return pow(max(0.0, dot(H, n)), specPower) * specIntensity;   // specWt = specIntensity * NoH^(shininess)
}

Shading applyPointLight( const in PointLight light, const in vec3 sfPos, const in vec3 v, const in vec3 n, const in Material mtl )
// v = ray.d = eyePos to surfPos
{
	vec3 L = light.pos - sfPos;
	vec3 l = normalize(L);
	float ldist = length(L);
	float atten = 1.0 / (ldist * ldist);
	float shadow = sceneShadow( sfPos, n, l, ldist );

	vec3 diffuse = light.col * shadow * atten * max(0.0, dot(l, n));

	Shading shading;
	shading.diffuse = diffuse;
	shading.specular = diffuse * getPhongSpecularIntensity( v, l, n, mtl.smoothness ); // Ls = Ld * specWt
	return shading;
}

Shading applyDirectionalLight( const in DirectionalLight light, const in vec3 sfPos, const in vec3 v, const in vec3 n, const in Material mtl )
// v = ray.d = eyePos to surfPos
{
	const float shadowRayLength = 10.0;
	vec3 l = -light.dir;
	float shadow = sceneShadow( sfPos, n, l, shadowRayLength );

	vec3 diffuse = light.col * shadow * max(0.0, dot(l, n));

	Shading shading;
	shading.diffuse = diffuse;
	shading.specular = diffuse * getPhongSpecularIntensity( v, l, n, mtl.smoothness ); // Ls = Ld * specWt
	return shading;
}

vec3 shadeSurface(const in Ray ray, const in Hit hit, const in Indirect indirect, const in Material mtl)
{
	Shading shading;
	shading.diffuse = vec3(0.0);  // totalLd = 0.0
	shading.specular = vec3(0.0); // totalLs = 0.0

	float ao = sceneAO(hit);
	shading.diffuse  += getAmbientLight(hit.n) * ao;
	shading.specular += indirect.reflection;

#ifdef ENABLE_POINT_LIGHT
    Shading pointLighting = applyPointLight(getPointLight(), hit.p, ray.d, hit.n, mtl);
    shading.diffuse  += pointLighting.diffuse;
    shading.specular += pointLighting.specular;
#endif

#ifdef ENABLE_DIRECTIONAL_LIGHT
    Shading dirLighting = applyDirectionalLight(getDirectionalLight(), hit.p, ray.d, hit.n, mtl);
    shading.diffuse  += dirLighting.diffuse;
    shading.specular += dirLighting.specular;
#endif

	vec3 totalDiffuse = mix(
		shading.diffuse * mtl.albedo,
		indirect.transmission,
		mtl.transparency
	);
	vec3 totalSpecular = shading.specular;

	vec3 sceneCol;
#ifdef ENABLE_SPECULAR
	// cf: sceneCol = (totalDiffuse) * (1-fresnel) + totalSpecular * (fresnel)
    sceneCol = applyFresnel( totalDiffuse, totalSpecular, hit.n, ray.d, mtl );
#else
    sceneCol = totalDiffuse;
#endif

	return sceneCol;
}

vec3 getSceneColourSecondary( const in Ray ray );

vec3 getReflection( const in Ray ray, const in Hit hit )
{
#ifdef ENABLE_REFLECTIONS    
{
	// get colour from reflected ray
    const float separation = 0.1;//psk
    Ray reflectRay;
    reflectRay.d = reflect(ray.d, hit.n);
    reflectRay.o = hit.p;
    reflectRay.max = 16.0;//psk
    reflectRay.min = separation / abs(dot(reflectRay.d, hit.n));
    return getSceneColourSecondary(reflectRay);
}
#else
    return getSkyGradient(reflect(ray.d, hit.n));
#endif
}

vec3 getTransmission( const in Ray ray, const in Hit hit, const in Material mtl )
{
	#ifdef ENABLE_TRANSPARENCY

		const float separation = 0.05;//psk
		Ray transmitRay;
		transmitRay.d = refract(ray.d, hit.n, mtl.relIOR);
		transmitRay.o = hit.p;
		transmitRay.max = 16.0;//psk
		transmitRay.min = separation / abs(dot(transmitRay.d, hit.n));

		#ifdef DOUBLE_SIDED_TRANSPARENCY

			Hit hit2;
			rayMarch(transmitRay, hit2, 32);
			hit2.n = _sceneNormal(hit2.p);

			Ray transmitRay2;
			transmitRay2.d = refract(transmitRay.d, hit2.n, 1.0 / mtl.relIOR);
			transmitRay2.o = hit2.p;
			transmitRay2.max = 16.0;
			transmitRay2.min = 0.0; //separation / abs(dot(transmitRay2.d, hit2.n));
			// transmitRay2.min = separation / abs(dot(transmitRay2.d, hit2.n));

			float extinctionDist = hit2.t;
			vec3 sceneCol = getSceneColourSecondary(transmitRay2);

		#else

			vec3 sceneCol = getSceneColourSecondary(transmitRay);
			float extinctionDist = 0.5;//psk

		#endif

		vec3 mtlExtinction = mtl.albedo;
		// extinction should really be exp(-) but this is a nice hack to get RGB
		vec3 extinction = (1.0 / (1.0 + (mtlExtinction * extinctionDist)));
		return sceneCol * extinction;

	#else

		return getSkyGradient(reflect(ray.d, hit.n));

	#endif
}

vec3 getSceneColourSecondary( const in Ray ray )
// no reflections, no transparency, used for secondary rays
{
	Hit hit;
	rayMarch(ray, hit, 32);

	vec3 sceneCol;
	if( hit.m.x < 0.5 )
	{
		sceneCol = getSkyGradient(ray.d);
	}
	else
	{
		hit.n = _sceneNormal(hit.p);

		// use sky gradient instead of reflection
		Indirect indirect;
		indirect.reflection = getSkyGradient(reflect(ray.d, hit.n));

		Material mtl = getMaterial(hit);
		mtl.transparency = 0.0;

		// apply lighting
		sceneCol = shadeSurface(ray, hit, indirect, mtl);
	}

	applyAtmosphere(sceneCol, ray, hit);
	return sceneCol;
}

vec3 getSceneColourTestVersion( const in Ray ray )
{
	vec3 sceneCol;
	Hit hit;
	rayMarch(ray, hit, 256);
	if( hit.m.x < 0.5 )
	{
		sceneCol = getSkyGradient(ray.d);
	}
	else
    {
		float t = hit.t;
        vec3 pos = hit.p;
		hit.n = _sceneNormal(hit.p);
		vec3 nor = hit.n;
        vec3 ref = reflect( ray.d, nor );
		//vec3 col = 0.45 + 0.3*sin( vec3(0.05,0.08,0.10)*(m-1.0) ); // material
		Material material = getMaterial( hit );
		vec3 col = material.albedo;
		float occ = sceneAO( hit );
		// lighitng
		vec3 lig = normalize( vec3(-0.6, 0.7, -0.5) );
		float amb = clamp( 0.5+0.5*nor.y, 0.0, 1.0 );
        float dif = clamp( dot( nor, lig ), 0.0, 1.0 );
        float bac = clamp( dot( nor, normalize(vec3(-lig.x,0.0,-lig.z))), 0.0, 1.0 )*clamp( 1.0-pos.y,0.0,1.0);
        float dom = smoothstep( -0.1, 0.1, ref.y );
        float fre = pow( clamp(1.0+dot(nor, ray.d), 0.0,1.0), 2.0 );
		float spe = pow(clamp( dot( ref, lig ), 0.0, 1.0 ),16.0);
		dif *= sceneShadow( pos, nor, lig, 2.5 );		// 2.5 = max distance from hitPos to lightPos
		dom *= sceneShadow( pos, nor, ref, 2.5 );
		vec3 lin = vec3(0.0);
		float scale = 2.0;//1.2;
        lin += scale*dif*vec3(1.00,0.85,0.55);
		lin += scale*spe*vec3(1.00,0.85,0.55)*dif;
        lin += 0.20*amb*vec3(0.50,0.70,1.00)*occ;
        lin += 0.30*dom*vec3(0.50,0.70,1.00)*occ;
        lin += 0.30*bac*vec3(0.25,0.25,0.25)*occ;
        lin += 0.40*fre*vec3(1.00,1.00,1.00)*occ;
		col = col*lin;
    	col = mix( col, vec3(0.8,0.9,1.0), 1.0-exp( -0.0002*t*t ) ); // fog
		col = clamp(col, 0.0, 1.0);
		sceneCol = pow( col, vec3(0.4545) ); //psk
    }
	return sceneCol;
}

vec3 getSceneColourPrimary( const in Ray ray )
{
#ifdef ENABLE_TEST_RENDER

	return getSceneColourTestVersion( ray );

#else

	Hit hit;
	rayMarch(ray, hit, 256);

	vec3 sceneCol;
	if( hit.m.x < 0.5 )
	{
		sceneCol = getSkyGradient(ray.d);

		// fragment depth
		gl_FragDepth = 0.99;
	}
	else
	{
		// surface normal
		hit.n = _sceneNormal(hit.p);

		// material selection
		Material mtl = getMaterial(hit);

		// surface reflection
		Indirect indirect;
		indirect.reflection = getReflection(ray, hit);

		// surface transmission
		if( mtl.transparency > 0.0 )
		{
			indirect.transmission = getTransmission(ray, hit, mtl);
		}

		// apply lighting
		sceneCol = shadeSurface(ray, hit, indirect, mtl);

		// fragment depth
		gl_FragDepth = getFragDepth( hit.p );
	}

	applyAtmosphere(sceneCol, ray, hit);
	return sceneCol;

#endif
}

Ray getCameraRay( vec2 uv )
{
	vec3 ro = cameraPosition;
#if 0
    vec3 rd = ( cameraProjectionMatrixInverse * vec4( uv*2.0 - 1.0, 0.0, 1.0 ) ).xyz;
    rd = ( cameraWorldMatrix * vec4( rd, 0.0 ) ).xyz;
    rd = normalize( rd );
#else
    vec4 fragPos = cameraWorldMatrix * (cameraProjectionMatrixInverse * vec4( uv*2.0 - 1.0, 0.0, 1.0 ));
    vec3 rd = normalize( fragPos.xyz/fragPos.w - ro );
#endif

    Ray ray;
	ray.o = ro;
	ray.d = rd;
	ray.min = 0.0;
	ray.max = MAX_RAY_DIST;
	return ray;
}

vec3 Tonemap( const in vec3 col )
{
	return 1.0 - exp2( -col );
}

void main()
{
    Ray ray = getCameraRay( vUv.xy );

	vec3 sceneCol = getSceneColourPrimary( ray );

	float exposure = 1.5;
	gl_FragColor = vec4( Tonemap(sceneCol * exposure), 1.0 );
}