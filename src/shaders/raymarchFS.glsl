#include distances.glsl

precision mediump float;

varying vec2 vUv;

uniform float time;
uniform mat4 cameraWorldMatrix;
uniform mat4 cameraProjectionMatrixInverse;
uniform sampler2D textureMaps[2];

const vec3 lightDir = vec3(1,1,1);
const vec3 lightColor = vec3(1.0);

#define SKY_COLOR vec3(0.529, 0.808, 0.922)
#define GROUND  1.0
#define RED     2.0
#define GREEN   3.0
#define BLUE    4.0

vec2 primitivesScene( vec3 p )
{
    // plane
    vec2 result = vec2( fPlane( p ), GROUND );

    // sphere
    vec3 c = vec3( 0.0, 2.0 + 0.5*sin(time), 0.0 );
    vec2 d1 = vec2( fSphere( p-c, 1.0 ), RED );
    result = dUnion( result, d1 );

    // box
    vec2 d3 = vec2( fBox( p-vec3(0,1,0), vec3(1) ), GREEN );
    result = dUnion( result, d3 );

    // sphere
    vec2 d2 = vec2( fSphere( p-vec3(1,1,0), 1.0 ), BLUE );
    result = dSubtract( result, d2 );

    return result;
}
vec2 spheresScene( vec3 p )
{
    vec2 result = vec2( fPlane(p), GROUND );

    vec3 q = sRepeat(p, vec3(6,6,6));

    vec2 d2 = vec2( fSphere( q, 1.0 ), GREEN );
    result = dUnion( result, d2 );

    return result;
}

vec2 sceneMap( vec3 p )
{
    // return primitivesScene( p );
    return spheresScene( p );
}

vec3 materialColor( float mtlID, vec3 p )
{
    if( mtlID == GROUND )
        return vec3(0.5) * texture( textureMaps[0], p.xz/20.0 ).rgb;
    else if( mtlID == RED )
        return vec3(1,0,0);
    else if( mtlID == GREEN )
        return vec3(0,1,0);
    else if( mtlID == BLUE )
        return vec3(0,0,1);
    else
        return vec3(0.0);
}

vec3 getPhongShading( in vec3 col, in float s, in vec3 ld, in vec3 lc, in vec3 p, in vec3 n, in vec3 rd )
// s = shininess (= 32, 64, 128, 256...)
// ld = light direction
// lc = light color
{
    float lfactor = 1.0;
    vec3 v = -rd;
    vec3 h = normalize(ld + v);
    float amb = 0.01;
    float diff = max(dot(ld,n),0.0);
    float spec = pow(max(dot(n,h),0.0), s);

    return col*amb + (col*diff + spec) * lc * lfactor;

    // < Blinn-Phong reflection >
    // col = kd*ia + { kd(L*N)*id + ks(R*V)^alpha*is } * (atten*shadow*ao)
    // col = kd*ia + { albedo*(L*N) + (N*H)^alpha } * lightCol * (atten*shadow*ao)
    // R*V (phong model) = N*H (blinn-phong model) (where H=L+V)
    // kd = albedo, ks = vec3(1.0)
    // atten = lightPower/(dist*dist)
    // alpha = shininess (eg: 16, 32, 64, 128)
    // i = incoming light, k = material
    // d = diffuse, s = specular, a = ambient
}

vec3 getLighting( vec3 p, vec3 n, vec3 ld, vec3 lc, vec3 rd, float mtlID )
{
    float shadow = sceneShadow(p, ld, 0.1, 10.0);
    float ao = sceneAO(p, n);

    float shininess = 32.0;
    vec3 color;

    vec3 mtlCol = materialColor( mtlID, p );
    if( mtlID == GROUND )
    {
        color = mtlCol;
    }
    else
    {
        color = getPhongShading( mtlCol, shininess, ld, lc, p, n, rd );
    }
    color *= (shadow * ao);
    return color;
}

vec3 render( vec3 ro, vec3 rd )
{
    //----------------------------------------------------
    // step 1: primary scene color: direct lighting pass
    //----------------------------------------------------

    vec2 t = rayMarching( ro, rd, 0.0, MAX_RAY_DIST );
    // t.x = travel distance
    // t.y = material ID
    float mtlID = t.y;

    if( t.x > MAX_RAY_DIST )
    {
        return SKY_COLOR; // skyColor
    }

    vec3 ld = normalize(lightDir);
    vec3 lc = lightColor;

	vec3 p = ro + rd * t.x;
    vec3 n = ( mtlID == GROUND ) ? vec3(0,1,0) : sceneNormal( p );
    vec3 color = getLighting( p, n, ld, lc, rd, mtlID );

    //----------------------------------------------------
    // step 2: secondary scene color: reflection pass
    //----------------------------------------------------

    vec3 r = reflect(rd, n);
    t = rayMarching( p, r, 0.1, MAX_RAY_DIST );
    if( t.x < MAX_RAY_DIST )
    {
        mtlID = t.y;
        p = p + r * t.x;
        n = sceneNormal( p );
        color += getLighting( p, n, ld, lc, r, mtlID );
    }
    else
    {
        if( mtlID != GROUND ) color += SKY_COLOR;
    }

    return color;
}

void main()
{
    vec2 uv = vUv.xy;

    vec3 ro = cameraPosition;
    vec3 rd = ( cameraProjectionMatrixInverse * vec4( uv*2.0 - 1.0, 0.0, 1.0 ) ).xyz;
    rd = ( cameraWorldMatrix * vec4( rd, 0.0 ) ).xyz;
    rd = normalize( rd );

    vec3 color = render( ro, rd );
    color = pow( color, vec3(1.0/2.2) ); // gamma correction

    gl_FragColor = vec4( color, 1.0 );
}