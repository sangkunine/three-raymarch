(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="178",ni={ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Go=0,ns=1,Vo=2,no=1,Wo=2,en=3,_n=0,bt=1,tn=2,vn=0,ii=1,is=2,rs=3,as=4,Xo=5,wn=100,qo=101,Yo=102,Ko=103,jo=104,Zo=200,$o=201,Jo=202,Qo=203,Kr=204,jr=205,ec=206,tc=207,nc=208,ic=209,rc=210,ac=211,sc=212,oc=213,cc=214,Zr=0,$r=1,Jr=2,si=3,Qr=4,ea=5,ta=6,na=7,io=0,lc=1,fc=2,gn=0,dc=1,hc=2,uc=3,pc=4,mc=5,vc=6,gc=7,ro=300,oi=301,ci=302,ia=303,ra=304,fr=306,li=1e3,Pn=1001,aa=1002,kt=1003,_c=1004,Li=1005,Wt=1006,mr=1007,Dn=1008,Yt=1009,ao=1010,so=1011,yi=1012,Fa=1013,In=1014,nn=1015,bi=1016,Oa=1017,za=1018,Si=1020,oo=35902,co=1021,lo=1022,Ht=1023,Mi=1026,Ei=1027,fo=1028,Ba=1029,ho=1030,Ha=1031,ka=1033,tr=33776,nr=33777,ir=33778,rr=33779,sa=35840,oa=35841,ca=35842,la=35843,fa=36196,da=37492,ha=37496,ua=37808,pa=37809,ma=37810,va=37811,ga=37812,_a=37813,xa=37814,ya=37815,Sa=37816,Ma=37817,Ea=37818,Ta=37819,ba=37820,Aa=37821,ar=36492,Ra=36494,wa=36495,uo=36283,Ca=36284,Pa=36285,Da=36286,xc=3200,yc=3201,Sc=0,Mc=1,mn="",It="srgb",fi="srgb-linear",cr="linear",Ke="srgb",Bn=7680,ss=519,Ec=512,Tc=513,bc=514,po=515,Ac=516,Rc=517,wc=518,Cc=519,os=35044,cs="300 es",rn=2e3,lr=2001;class Fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sr=Math.PI/180,La=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function Oe(i,e,t){return Math.max(e,Math.min(t,i))}function Pc(i,e){return(i%e+e)%e}function vr(i,e,t){return(1-t)*i+t*e}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Dc={DEG2RAD:sr};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],d=n[r+2],h=n[r+3];const u=a[s+0],m=a[s+1],_=a[s+2],y=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=_,e[t+3]=y;return}if(h!==y||c!==u||l!==m||d!==_){let p=1-o;const f=c*u+l*m+d*_+h*y,A=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const I=Math.sqrt(T),P=Math.atan2(I,f*A);p=Math.sin(p*P)/I,o=Math.sin(o*P)/I}const M=o*A;if(c=c*p+u*M,l=l*p+m*M,d=d*p+_*M,h=h*p+y*M,p===1-o){const I=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=I,l*=I,d*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],d=n[r+3],h=a[s],u=a[s+1],m=a[s+2],_=a[s+3];return e[t]=o*_+d*h+c*m-l*u,e[t+1]=c*_+d*u+l*h-o*m,e[t+2]=l*_+d*m+o*u-c*h,e[t+3]=d*_-o*h-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(r/2),h=o(a/2),u=c(n/2),m=c(r/2),_=c(a/2);switch(s){case"XYZ":this._x=u*d*h+l*m*_,this._y=l*m*h-u*d*_,this._z=l*d*_+u*m*h,this._w=l*d*h-u*m*_;break;case"YXZ":this._x=u*d*h+l*m*_,this._y=l*m*h-u*d*_,this._z=l*d*_-u*m*h,this._w=l*d*h+u*m*_;break;case"ZXY":this._x=u*d*h-l*m*_,this._y=l*m*h+u*d*_,this._z=l*d*_+u*m*h,this._w=l*d*h-u*m*_;break;case"ZYX":this._x=u*d*h-l*m*_,this._y=l*m*h+u*d*_,this._z=l*d*_-u*m*h,this._w=l*d*h+u*m*_;break;case"YZX":this._x=u*d*h+l*m*_,this._y=l*m*h+u*d*_,this._z=l*d*_-u*m*h,this._w=l*d*h-u*m*_;break;case"XZY":this._x=u*d*h-l*m*_,this._y=l*m*h-u*d*_,this._z=l*d*_+u*m*h,this._w=l*d*h+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-c)*m,this._y=(a-l)*m,this._z=(s-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(a-l)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(s-r)/m,this._x=(a+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+s*o+r*l-a*c,this._y=r*d+s*c+a*o-n*l,this._z=a*d+s*l+n*c-r*o,this._w=s*d-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=s*h+this._w*u,this._x=n*h+this._x*u,this._y=r*h+this._y*u,this._z=a*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ls.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ls.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),d=2*(o*t-a*r),h=2*(a*n-s*t);return this.x=t+c*l+s*h-o*d,this.y=n+c*d+o*l-a*h,this.z=r+c*h+a*d-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gr.copy(this).projectOnVector(e),this.sub(gr)}reflect(e){return this.sub(gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gr=new N,ls=new Un;class Ie{constructor(e,t,n,r,a,s,o,c,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=s,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],m=n[5],_=n[8],y=r[0],p=r[3],f=r[6],A=r[1],T=r[4],M=r[7],I=r[2],P=r[5],w=r[8];return a[0]=s*y+o*A+c*I,a[3]=s*p+o*T+c*P,a[6]=s*f+o*M+c*w,a[1]=l*y+d*A+h*I,a[4]=l*p+d*T+h*P,a[7]=l*f+d*M+h*w,a[2]=u*y+m*A+_*I,a[5]=u*p+m*T+_*P,a[8]=u*f+m*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*s*d-t*o*l-n*a*d+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*s-o*l,u=o*c-d*a,m=l*a-s*c,_=t*h+n*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*l-d*n)*y,e[2]=(o*n-r*s)*y,e[3]=u*y,e[4]=(d*t-r*c)*y,e[5]=(r*a-o*t)*y,e[6]=m*y,e[7]=(n*c-l*t)*y,e[8]=(s*t-n*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_r.makeScale(e,t)),this}rotate(e){return this.premultiply(_r.makeRotation(-e)),this}translate(e,t){return this.premultiply(_r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new Ie;function mo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ti(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lc(){const i=Ti("canvas");return i.style.display="block",i}const fs={};function ri(i){i in fs||(fs[i]=!0,console.warn(i))}function Ic(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Uc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ds=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hs=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fc(){const i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Ke&&(r.r=an(r.r),r.g=an(r.g),r.b=an(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ke&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mn?cr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ri("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ri("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:e,whitePoint:n,transfer:cr,toXYZ:ds,fromXYZ:hs,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:ds,fromXYZ:hs,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}const ke=Fc();function an(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hn;class Oc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hn===void 0&&(Hn=Ti("canvas")),Hn.width=e.width,Hn.height=e.height;const r=Hn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Hn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ti("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=an(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(an(t[n]/255)*255):t[n]=an(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zc=0;class Ga{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(xr(r[s].image)):a.push(xr(r[s]))}else a=xr(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bc=0;const yr=new N;class St extends Fn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Pn,r=Pn,a=Wt,s=Dn,o=Ht,c=Yt,l=St.DEFAULT_ANISOTROPY,d=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Ai(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yr).x}get height(){return this.source.getSize(yr).y}get depth(){return this.source.getSize(yr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case li:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case li:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=ro;St.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],m=c[5],_=c[9],y=c[2],p=c[6],f=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,M=(m+1)/2,I=(f+1)/2,P=(d+u)/4,w=(h+y)/4,U=(_+p)/4;return T>M&&T>I?T<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(T),r=P/n,a=w/n):M>I?M<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),n=P/r,a=U/r):I<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(I),n=w/a,r=U/a),this.set(n,r,a,t),this}let A=Math.sqrt((p-_)*(p-_)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(h-y)/A,this.z=(u-d)/A,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hc extends Fn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new St(r);this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ga(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vo extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kc extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ft.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ft.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ft.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ft):Ft.fromBufferAttribute(a,s),Ft.applyMatrix4(e.matrixWorld),this.expandByPoint(Ft);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ii.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ii.copy(n.boundingBox)),Ii.applyMatrix4(e.matrixWorld),this.union(Ii)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ft),Ft.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mi),Ui.subVectors(this.max,mi),kn.subVectors(e.a,mi),Gn.subVectors(e.b,mi),Vn.subVectors(e.c,mi),cn.subVectors(Gn,kn),ln.subVectors(Vn,Gn),Sn.subVectors(kn,Vn);let t=[0,-cn.z,cn.y,0,-ln.z,ln.y,0,-Sn.z,Sn.y,cn.z,0,-cn.x,ln.z,0,-ln.x,Sn.z,0,-Sn.x,-cn.y,cn.x,0,-ln.y,ln.x,0,-Sn.y,Sn.x,0];return!Sr(t,kn,Gn,Vn,Ui)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,kn,Gn,Vn,Ui))?!1:(Ni.crossVectors(cn,ln),t=[Ni.x,Ni.y,Ni.z],Sr(t,kn,Gn,Vn,Ui))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ft).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ft).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jt=[new N,new N,new N,new N,new N,new N,new N,new N],Ft=new N,Ii=new Ri,kn=new N,Gn=new N,Vn=new N,cn=new N,ln=new N,Sn=new N,mi=new N,Ui=new N,Ni=new N,Mn=new N;function Sr(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Mn.fromArray(i,a);const o=r.x*Math.abs(Mn.x)+r.y*Math.abs(Mn.y)+r.z*Math.abs(Mn.z),c=e.dot(Mn),l=t.dot(Mn),d=n.dot(Mn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Gc=new Ri,vi=new N,Mr=new N;class Va{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gc.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vi.subVectors(e,this.center);const t=vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vi.copy(e.center).add(Mr)),this.expandByPoint(vi.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zt=new N,Er=new N,Fi=new N,fn=new N,Tr=new N,Oi=new N,br=new N;class go{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.origin).addScaledVector(this.direction,t),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Er.copy(e).add(t).multiplyScalar(.5),Fi.copy(t).sub(e).normalize(),fn.copy(this.origin).sub(Er);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Fi),o=fn.dot(this.direction),c=-fn.dot(Fi),l=fn.lengthSq(),d=Math.abs(1-s*s);let h,u,m,_;if(d>0)if(h=s*c-o,u=s*o-c,_=a*d,h>=0)if(u>=-_)if(u<=_){const y=1/d;h*=y,u*=y,m=h*(h+s*u+2*o)+u*(s*h+u+2*c)+l}else u=a,h=Math.max(0,-(s*u+o)),m=-h*h+u*(u+2*c)+l;else u=-a,h=Math.max(0,-(s*u+o)),m=-h*h+u*(u+2*c)+l;else u<=-_?(h=Math.max(0,-(-s*a+o)),u=h>0?-a:Math.min(Math.max(-a,-c),a),m=-h*h+u*(u+2*c)+l):u<=_?(h=0,u=Math.min(Math.max(-a,-c),a),m=u*(u+2*c)+l):(h=Math.max(0,-(s*a+o)),u=h>0?a:Math.min(Math.max(-a,-c),a),m=-h*h+u*(u+2*c)+l);else u=s>0?-a:a,h=Math.max(0,-(s*u+o)),m=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Er).addScaledVector(Fi,u),m}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const n=Zt.dot(this.direction),r=Zt.dot(Zt)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,r,a){Tr.subVectors(t,e),Oi.subVectors(n,e),br.crossVectors(Tr,Oi);let s=this.direction.dot(br),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;fn.subVectors(this.origin,e);const c=o*this.direction.dot(Oi.crossVectors(fn,Oi));if(c<0)return null;const l=o*this.direction.dot(Tr.cross(fn));if(l<0||c+l>s)return null;const d=-o*fn.dot(br);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,r,a,s,o,c,l,d,h,u,m,_,y,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,d,h,u,m,_,y,p)}set(e,t,n,r,a,s,o,c,l,d,h,u,m,_,y,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=c,f[2]=l,f[6]=d,f[10]=h,f[14]=u,f[3]=m,f[7]=_,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Wn.setFromMatrixColumn(e,0).length(),a=1/Wn.setFromMatrixColumn(e,1).length(),s=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const u=s*d,m=s*h,_=o*d,y=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=m+_*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=_+m*l,t[10]=s*c}else if(e.order==="YXZ"){const u=c*d,m=c*h,_=l*d,y=l*h;t[0]=u+y*o,t[4]=_*o-m,t[8]=s*l,t[1]=s*h,t[5]=s*d,t[9]=-o,t[2]=m*o-_,t[6]=y+u*o,t[10]=s*c}else if(e.order==="ZXY"){const u=c*d,m=c*h,_=l*d,y=l*h;t[0]=u-y*o,t[4]=-s*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=s*d,t[9]=y-u*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const u=s*d,m=s*h,_=o*d,y=o*h;t[0]=c*d,t[4]=_*l-m,t[8]=u*l+y,t[1]=c*h,t[5]=y*l+u,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const u=s*c,m=s*l,_=o*c,y=o*l;t[0]=c*d,t[4]=y-u*h,t[8]=_*h+m,t[1]=h,t[5]=s*d,t[9]=-o*d,t[2]=-l*d,t[6]=m*h+_,t[10]=u-y*h}else if(e.order==="XZY"){const u=s*c,m=s*l,_=o*c,y=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+y,t[5]=s*d,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*d,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vc,e,Wc)}lookAt(e,t,n){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),dn.crossVectors(n,wt),dn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),dn.crossVectors(n,wt)),dn.normalize(),zi.crossVectors(wt,dn),r[0]=dn.x,r[4]=zi.x,r[8]=wt.x,r[1]=dn.y,r[5]=zi.y,r[9]=wt.y,r[2]=dn.z,r[6]=zi.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],m=n[13],_=n[2],y=n[6],p=n[10],f=n[14],A=n[3],T=n[7],M=n[11],I=n[15],P=r[0],w=r[4],U=r[8],S=r[12],x=r[1],C=r[5],V=r[9],B=r[13],K=r[2],j=r[6],X=r[10],$=r[14],H=r[3],oe=r[7],de=r[11],Se=r[15];return a[0]=s*P+o*x+c*K+l*H,a[4]=s*w+o*C+c*j+l*oe,a[8]=s*U+o*V+c*X+l*de,a[12]=s*S+o*B+c*$+l*Se,a[1]=d*P+h*x+u*K+m*H,a[5]=d*w+h*C+u*j+m*oe,a[9]=d*U+h*V+u*X+m*de,a[13]=d*S+h*B+u*$+m*Se,a[2]=_*P+y*x+p*K+f*H,a[6]=_*w+y*C+p*j+f*oe,a[10]=_*U+y*V+p*X+f*de,a[14]=_*S+y*B+p*$+f*Se,a[3]=A*P+T*x+M*K+I*H,a[7]=A*w+T*C+M*j+I*oe,a[11]=A*U+T*V+M*X+I*de,a[15]=A*S+T*B+M*$+I*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],m=e[14],_=e[3],y=e[7],p=e[11],f=e[15];return _*(+a*c*h-r*l*h-a*o*u+n*l*u+r*o*m-n*c*m)+y*(+t*c*m-t*l*u+a*s*u-r*s*m+r*l*d-a*c*d)+p*(+t*l*h-t*o*m-a*s*h+n*s*m+a*o*d-n*l*d)+f*(-r*o*d-t*c*h+t*o*u+r*s*h-n*s*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],m=e[11],_=e[12],y=e[13],p=e[14],f=e[15],A=h*p*l-y*u*l+y*c*m-o*p*m-h*c*f+o*u*f,T=_*u*l-d*p*l-_*c*m+s*p*m+d*c*f-s*u*f,M=d*y*l-_*h*l+_*o*m-s*y*m-d*o*f+s*h*f,I=_*h*c-d*y*c-_*o*u+s*y*u+d*o*p-s*h*p,P=t*A+n*T+r*M+a*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=A*w,e[1]=(y*u*a-h*p*a-y*r*m+n*p*m+h*r*f-n*u*f)*w,e[2]=(o*p*a-y*c*a+y*r*l-n*p*l-o*r*f+n*c*f)*w,e[3]=(h*c*a-o*u*a-h*r*l+n*u*l+o*r*m-n*c*m)*w,e[4]=T*w,e[5]=(d*p*a-_*u*a+_*r*m-t*p*m-d*r*f+t*u*f)*w,e[6]=(_*c*a-s*p*a-_*r*l+t*p*l+s*r*f-t*c*f)*w,e[7]=(s*u*a-d*c*a+d*r*l-t*u*l-s*r*m+t*c*m)*w,e[8]=M*w,e[9]=(_*h*a-d*y*a-_*n*m+t*y*m+d*n*f-t*h*f)*w,e[10]=(s*y*a-_*o*a+_*n*l-t*y*l-s*n*f+t*o*f)*w,e[11]=(d*o*a-s*h*a-d*n*l+t*h*l+s*n*m-t*o*m)*w,e[12]=I*w,e[13]=(d*y*r-_*h*r+_*n*u-t*y*u-d*n*p+t*h*p)*w,e[14]=(_*o*r-s*y*r-_*n*c+t*y*c+s*n*p-t*o*p)*w,e[15]=(s*h*r-d*o*r+d*n*c-t*h*c-s*n*u+t*o*u)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,d=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+n,d*c-r*s,0,l*c-r*o,d*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,d=s+s,h=o+o,u=a*l,m=a*d,_=a*h,y=s*d,p=s*h,f=o*h,A=c*l,T=c*d,M=c*h,I=n.x,P=n.y,w=n.z;return r[0]=(1-(y+f))*I,r[1]=(m+M)*I,r[2]=(_-T)*I,r[3]=0,r[4]=(m-M)*P,r[5]=(1-(u+f))*P,r[6]=(p+A)*P,r[7]=0,r[8]=(_+T)*w,r[9]=(p-A)*w,r[10]=(1-(u+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Wn.set(r[0],r[1],r[2]).length();const s=Wn.set(r[4],r[5],r[6]).length(),o=Wn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Ot.copy(this);const l=1/a,d=1/s,h=1/o;return Ot.elements[0]*=l,Ot.elements[1]*=l,Ot.elements[2]*=l,Ot.elements[4]*=d,Ot.elements[5]*=d,Ot.elements[6]*=d,Ot.elements[8]*=h,Ot.elements[9]*=h,Ot.elements[10]*=h,t.setFromRotationMatrix(Ot),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=rn){const c=this.elements,l=2*a/(t-e),d=2*a/(n-r),h=(t+e)/(t-e),u=(n+r)/(n-r);let m,_;if(o===rn)m=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===lr)m=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=rn){const c=this.elements,l=1/(t-e),d=1/(n-r),h=1/(s-a),u=(t+e)*l,m=(n+r)*d;let _,y;if(o===rn)_=(s+a)*h,y=-2*h;else if(o===lr)_=a*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wn=new N,Ot=new ct,Vc=new N(0,0,0),Wc=new N(1,1,1),dn=new N,zi=new N,wt=new N,us=new ct,ps=new Un;class sn{constructor(e=0,t=0,n=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],d=r[9],h=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Oe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return us.makeRotationFromQuaternion(e),this.setFromRotationMatrix(us,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ps.setFromEuler(this),this.setFromQuaternion(ps,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class _o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xc=0;const ms=new N,Xn=new Un,$t=new ct,Bi=new N,gi=new N,qc=new N,Yc=new Un,vs=new N(1,0,0),gs=new N(0,1,0),_s=new N(0,0,1),xs={type:"added"},Kc={type:"removed"},qn={type:"childadded",child:null},Ar={type:"childremoved",child:null};class gt extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new N,t=new sn,n=new Un,r=new N(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ie}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(vs,e)}rotateY(e){return this.rotateOnAxis(gs,e)}rotateZ(e){return this.rotateOnAxis(_s,e)}translateOnAxis(e,t){return ms.copy(e).applyQuaternion(this.quaternion),this.position.add(ms.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vs,e)}translateY(e){return this.translateOnAxis(gs,e)}translateZ(e){return this.translateOnAxis(_s,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bi.copy(e):Bi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(gi,Bi,this.up):$t.lookAt(Bi,gi,this.up),this.quaternion.setFromRotationMatrix($t),r&&($t.extractRotation(r.matrixWorld),Xn.setFromRotationMatrix($t),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xs),qn.child=e,this.dispatchEvent(qn),qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kc),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xs),qn.child=e,this.dispatchEvent(qn),qn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,e,qc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,Yc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),d=s(e.images),h=s(e.shapes),u=s(e.skeletons),m=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function s(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DEFAULT_UP=new N(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new N,Jt=new N,Rr=new N,Qt=new N,Yn=new N,Kn=new N,ys=new N,wr=new N,Cr=new N,Pr=new N,Dr=new ot,Lr=new ot,Ir=new ot;class Bt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zt.subVectors(e,t),r.cross(zt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){zt.subVectors(r,t),Jt.subVectors(n,t),Rr.subVectors(e,t);const s=zt.dot(zt),o=zt.dot(Jt),c=zt.dot(Rr),l=Jt.dot(Jt),d=Jt.dot(Rr),h=s*l-o*o;if(h===0)return a.set(0,0,0),null;const u=1/h,m=(l*c-o*d)*u,_=(s*d-o*c)*u;return a.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Qt)===null?!1:Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,Qt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Qt.x),c.addScaledVector(s,Qt.y),c.addScaledVector(o,Qt.z),c)}static getInterpolatedAttribute(e,t,n,r,a,s){return Dr.setScalar(0),Lr.setScalar(0),Ir.setScalar(0),Dr.fromBufferAttribute(e,t),Lr.fromBufferAttribute(e,n),Ir.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Dr,a.x),s.addScaledVector(Lr,a.y),s.addScaledVector(Ir,a.z),s}static isFrontFacing(e,t,n,r){return zt.subVectors(n,t),Jt.subVectors(e,t),zt.cross(Jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),zt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;Yn.subVectors(r,n),Kn.subVectors(a,n),wr.subVectors(e,n);const c=Yn.dot(wr),l=Kn.dot(wr);if(c<=0&&l<=0)return t.copy(n);Cr.subVectors(e,r);const d=Yn.dot(Cr),h=Kn.dot(Cr);if(d>=0&&h<=d)return t.copy(r);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return s=c/(c-d),t.copy(n).addScaledVector(Yn,s);Pr.subVectors(e,a);const m=Yn.dot(Pr),_=Kn.dot(Pr);if(_>=0&&m<=_)return t.copy(a);const y=m*l-c*_;if(y<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Kn,o);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return ys.subVectors(a,r),o=(h-d)/(h-d+(m-_)),t.copy(r).addScaledVector(ys,o);const f=1/(p+y+u);return s=y*f,o=u*f,t.copy(n).addScaledVector(Yn,s).addScaledVector(Kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Hi={h:0,s:0,l:0};function Ur(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ke.workingColorSpace){if(e=Pc(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Ur(s,a,e+1/3),this.g=Ur(s,a,e),this.b=Ur(s,a,e-1/3)}return ke.colorSpaceToWorking(this,r),this}setStyle(e,t=It){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=xo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=an(e.r),this.g=an(e.g),this.b=an(e.b),this}copyLinearToSRGB(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return ke.workingToColorSpace(vt.copy(this),e),Math.round(Oe(vt.r*255,0,255))*65536+Math.round(Oe(vt.g*255,0,255))*256+Math.round(Oe(vt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(vt.copy(this),t);const n=vt.r,r=vt.g,a=vt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const d=(o+s)/2;if(o===s)c=0,l=0;else{const h=s-o;switch(l=d<=.5?h/(s+o):h/(2-s-o),s){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=It){ke.workingToColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,r=vt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Hi);const n=vr(hn.h,Hi.h,t),r=vr(hn.s,Hi.s,t),a=vr(hn.l,Hi.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new qe;qe.NAMES=xo;let jc=0;class dr extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=ii,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kr,this.blendDst=jr,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ss,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bn,this.stencilZFail=Bn,this.stencilZPass=Bn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kr&&(n.blendSrc=this.blendSrc),this.blendDst!==jr&&(n.blendDst=this.blendDst),this.blendEquation!==wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ss&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yo extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new N,ki=new Le;let Zc=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=os,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ki.fromBufferAttribute(this,t),ki.applyMatrix3(e),this.setXY(t,ki.x,ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),a=Et(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==os&&(e.usage=this.usage),e}}class So extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mo extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ln extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $c=0;const Lt=new ct,Nr=new gt,jn=new N,Ct=new Ri,_i=new Ri,pt=new N;class On extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mo(e)?Mo:So)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ie().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ln(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Ct.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];_i.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Ct.min,_i.min),Ct.expandByPoint(pt),pt.addVectors(Ct.max,_i.max),Ct.expandByPoint(pt)):(Ct.expandByPoint(_i.min),Ct.expandByPoint(_i.max))}Ct.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)pt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)pt.fromBufferAttribute(o,l),c&&(jn.fromBufferAttribute(e,l),pt.add(jn)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new N,c[U]=new N;const l=new N,d=new N,h=new N,u=new Le,m=new Le,_=new Le,y=new N,p=new N;function f(U,S,x){l.fromBufferAttribute(n,U),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),u.fromBufferAttribute(a,U),m.fromBufferAttribute(a,S),_.fromBufferAttribute(a,x),d.sub(l),h.sub(l),m.sub(u),_.sub(u);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(C),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(C),o[U].add(y),o[S].add(y),o[x].add(y),c[U].add(p),c[S].add(p),c[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,S=A.length;U<S;++U){const x=A[U],C=x.start,V=x.count;for(let B=C,K=C+V;B<K;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new N,M=new N,I=new N,P=new N;function w(U){I.fromBufferAttribute(r,U),P.copy(I);const S=o[U];T.copy(S),T.sub(I.multiplyScalar(I.dot(S))).normalize(),M.crossVectors(P,S);const C=M.dot(c[U])<0?-1:1;s.setXYZW(U,T.x,T.y,T.z,C)}for(let U=0,S=A.length;U<S;++U){const x=A[U],C=x.start,V=x.count;for(let B=C,K=C+V;B<K;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new N,a=new N,s=new N,o=new N,c=new N,l=new N,d=new N,h=new N;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,y),s.fromBufferAttribute(t,p),d.subVectors(s,a),h.subVectors(r,a),d.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),h.subVectors(r,a),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let m=0,_=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*d;for(let f=0;f<d;f++)u[_++]=l[m++]}return new qt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],m=e(u,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const m=l[h];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const a=e.morphAttributes;for(const l in a){const d=[],h=a[l];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,d=s.length;l<d;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ss=new ct,En=new go,Gi=new Va,Ms=new N,Vi=new N,Wi=new N,Xi=new N,Fr=new N,qi=new N,Es=new N,Yi=new N;class Xt extends gt{constructor(e=new On,t=new yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){qi.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const d=o[c],h=a[c];d!==0&&(Fr.fromBufferAttribute(h,e),s?qi.addScaledVector(Fr,d):qi.addScaledVector(Fr.sub(t),d))}t.add(qi)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(a),En.copy(e.ray).recast(e.near),!(Gi.containsPoint(En.origin)===!1&&(En.intersectSphere(Gi,Ms)===null||En.origin.distanceToSquared(Ms)>(e.far-e.near)**2))&&(Ss.copy(a).invert(),En.copy(e.ray).applyMatrix4(Ss),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,En)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,u=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,y=u.length;_<y;_++){const p=u[_],f=s[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=A,I=T;M<I;M+=3){const P=o.getX(M),w=o.getX(M+1),U=o.getX(M+2);r=Ki(this,f,e,n,l,d,h,P,w,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=_,f=y;p<f;p+=3){const A=o.getX(p),T=o.getX(p+1),M=o.getX(p+2);r=Ki(this,s,e,n,l,d,h,A,T,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,y=u.length;_<y;_++){const p=u[_],f=s[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=A,I=T;M<I;M+=3){const P=M,w=M+1,U=M+2;r=Ki(this,f,e,n,l,d,h,P,w,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=_,f=y;p<f;p+=3){const A=p,T=p+1,M=p+2;r=Ki(this,s,e,n,l,d,h,A,T,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Jc(i,e,t,n,r,a,s,o){let c;if(e.side===bt?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===_n,o),c===null)return null;Yi.copy(o),Yi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Yi);return l<t.near||l>t.far?null:{distance:l,point:Yi.clone(),object:i}}function Ki(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,Vi),i.getVertexPosition(c,Wi),i.getVertexPosition(l,Xi);const d=Jc(i,e,t,n,Vi,Wi,Xi,Es);if(d){const h=new N;Bt.getBarycoord(Es,Vi,Wi,Xi,h),r&&(d.uv=Bt.getInterpolatedAttribute(r,o,c,l,h,new Le)),a&&(d.uv1=Bt.getInterpolatedAttribute(a,o,c,l,h,new Le)),s&&(d.normal=Bt.getInterpolatedAttribute(s,o,c,l,h,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new N,materialIndex:0};Bt.getNormal(Vi,Wi,Xi,u.normal),d.face=u,d.barycoord=h}return d}class wi extends On{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],d=[],h=[];let u=0,m=0;_("z","y","x",-1,-1,n,t,e,s,a,0),_("z","y","x",1,-1,n,t,-e,s,a,1),_("x","z","y",1,1,e,n,t,r,s,2),_("x","z","y",1,-1,e,n,-t,r,s,3),_("x","y","z",1,-1,e,t,n,r,a,4),_("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Ln(l,3)),this.setAttribute("normal",new Ln(d,3)),this.setAttribute("uv",new Ln(h,2));function _(y,p,f,A,T,M,I,P,w,U,S){const x=M/w,C=I/U,V=M/2,B=I/2,K=P/2,j=w+1,X=U+1;let $=0,H=0;const oe=new N;for(let de=0;de<X;de++){const Se=de*C-B;for(let Fe=0;Fe<j;Fe++){const Ze=Fe*x-V;oe[y]=Ze*A,oe[p]=Se*T,oe[f]=K,l.push(oe.x,oe.y,oe.z),oe[y]=0,oe[p]=0,oe[f]=P>0?1:-1,d.push(oe.x,oe.y,oe.z),h.push(Fe/w),h.push(1-de/U),$+=1}}for(let de=0;de<U;de++)for(let Se=0;Se<w;Se++){const Fe=u+Se+j*de,Ze=u+Se+j*(de+1),W=u+(Se+1)+j*(de+1),te=u+(Se+1)+j*de;c.push(Fe,Ze,te),c.push(Ze,W,te),H+=6}o.addGroup(m,H,S),m+=H,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function yt(i){const e={};for(let t=0;t<i.length;t++){const n=di(i[t]);for(const r in n)e[r]=n[r]}return e}function Qc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const el={clone:di,merge:yt};var tl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tl,this.fragmentShader=nl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=Qc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class To extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const un=new N,Ts=new Le,bs=new Le;class Ut extends To{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(un.x,un.y).multiplyScalar(-e/un.z),un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(un.x,un.y).multiplyScalar(-e/un.z)}getViewSize(e,t){return this.getViewBounds(e,Ts,bs),t.subVectors(bs,Ts)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zn=-90,$n=1;class il extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(Zn,$n,e,t);r.layers=this.layers,this.add(r);const a=new Ut(Zn,$n,e,t);a.layers=this.layers,this.add(a);const s=new Ut(Zn,$n,e,t);s.layers=this.layers,this.add(s);const o=new Ut(Zn,$n,e,t);o.layers=this.layers,this.add(o);const c=new Ut(Zn,$n,e,t);c.layers=this.layers,this.add(c);const l=new Ut(Zn,$n,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(h,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class bo extends St{constructor(e=[],t=oi,n,r,a,s,o,c,l,d){super(e,t,n,r,a,s,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rl extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wi(5,5,5),a=new on({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:vn});a.uniforms.tEquirect.value=t;const s=new Xt(r,a),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Wt),new il(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}class ji extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const al={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),f=this._getHandJoint(l,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&u>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(al)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sl extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zr=new N,ol=new N,cl=new Ie;class pn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=zr.subVectors(n,t).cross(ol.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cl.getNormalMatrix(e),r=this.coplanarPoint(zr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new Va,ll=new Le(.5,.5),Zi=new N;class Wa{constructor(e=new pn,t=new pn,n=new pn,r=new pn,a=new pn,s=new pn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],c=r[3],l=r[4],d=r[5],h=r[6],u=r[7],m=r[8],_=r[9],y=r[10],p=r[11],f=r[12],A=r[13],T=r[14],M=r[15];if(n[0].setComponents(c-a,u-l,p-m,M-f).normalize(),n[1].setComponents(c+a,u+l,p+m,M+f).normalize(),n[2].setComponents(c+s,u+d,p+_,M+A).normalize(),n[3].setComponents(c-s,u-d,p-_,M-A).normalize(),n[4].setComponents(c-o,u-h,p-y,M-T).normalize(),t===rn)n[5].setComponents(c+o,u+h,p+y,M+T).normalize();else if(t===lr)n[5].setComponents(o,h,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){Tn.center.set(0,0,0);const t=ll.distanceTo(e.center);return Tn.radius=.7071067811865476+t,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Zi.x=r.normal.x>0?e.max.x:e.min.x,Zi.y=r.normal.y>0?e.max.y:e.min.y,Zi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ao extends St{constructor(e,t,n=In,r,a,s,o=kt,c=kt,l,d=Mi,h=1){if(d!==Mi&&d!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,a,s,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ci extends On{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,d=c+1,h=e/o,u=t/c,m=[],_=[],y=[],p=[];for(let f=0;f<d;f++){const A=f*u-s;for(let T=0;T<l;T++){const M=T*h-a;_.push(M,-A,0),y.push(0,0,1),p.push(T/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<o;A++){const T=A+l*f,M=A+l*(f+1),I=A+1+l*(f+1),P=A+1+l*f;m.push(T,M,P),m.push(M,I,P)}this.setIndex(m),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.widthSegments,e.heightSegments)}}class fl extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dl extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Br={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class hl{constructor(e,t,n){const r=this;let a=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,a===!1&&r.onStart!==void 0&&r.onStart(d,s,o),a=!0},this.itemEnd=function(d){s++,r.onProgress!==void 0&&r.onProgress(d,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const m=l[h],_=l[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null}}}const ul=new hl;class Xa{constructor(e){this.manager=e!==void 0?e:ul,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn=new WeakMap;class pl extends Xa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Br.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);else{let h=Jn.get(s);h===void 0&&(h=[],Jn.set(s,h)),h.push({onLoad:t,onError:r})}return s}const o=Ti("img");function c(){d(),t&&t(this);const h=Jn.get(this)||[];for(let u=0;u<h.length;u++){const m=h[u];m.onLoad&&m.onLoad(this)}Jn.delete(this),a.manager.itemEnd(e)}function l(h){d(),r&&r(h),Br.remove(`image:${e}`);const u=Jn.get(this)||[];for(let m=0;m<u.length;m++){const _=u[m];_.onError&&_.onError(h)}Jn.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Br.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class ml extends Xa{constructor(e){super(e)}load(e,t,n,r){const a=new St,s=new pl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class vl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Hr=new ct,As=new N,Rs=new N;class gl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;As.setFromMatrixPosition(e.matrixWorld),t.position.copy(As),Rs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rs),t.updateMatrixWorld(),Hr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ro extends To{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _l extends gl{constructor(){super(new Ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xl extends vl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new _l}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yl extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ws{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Oe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Sl extends Fn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Cs(i,e,t,n){const r=Ml(n);switch(t){case co:return i*e;case fo:return i*e/r.components*r.byteLength;case Ba:return i*e/r.components*r.byteLength;case ho:return i*e*2/r.components*r.byteLength;case Ha:return i*e*2/r.components*r.byteLength;case lo:return i*e*3/r.components*r.byteLength;case Ht:return i*e*4/r.components*r.byteLength;case ka:return i*e*4/r.components*r.byteLength;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ir:case rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:case la:return Math.max(i,16)*Math.max(e,8)/4;case sa:case ca:return Math.max(i,8)*Math.max(e,8)/2;case fa:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ar:case Ra:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uo:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pa:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ml(i){switch(i){case Yt:case ao:return{byteLength:1,components:1};case yi:case so:case bi:return{byteLength:2,components:1};case Oa:case za:return{byteLength:2,components:4};case In:case Fa:case nn:return{byteLength:4,components:1};case oo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wo(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function El(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,d);else{h.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<h.length;m++){const _=h[u],y=h[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,h[u]=y)}h.length=u+1;for(let m=0,_=h.length;m<_;m++){const y=h[m];i.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}var Tl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Al=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ll=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Il=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ul=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ol=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ql=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$l=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ql=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,af=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ef=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,md=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ld=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Id=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,th=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ih=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Tl,alphahash_pars_fragment:bl,alphamap_fragment:Al,alphamap_pars_fragment:Rl,alphatest_fragment:wl,alphatest_pars_fragment:Cl,aomap_fragment:Pl,aomap_pars_fragment:Dl,batching_pars_vertex:Ll,batching_vertex:Il,begin_vertex:Ul,beginnormal_vertex:Nl,bsdfs:Fl,iridescence_fragment:Ol,bumpmap_pars_fragment:zl,clipping_planes_fragment:Bl,clipping_planes_pars_fragment:Hl,clipping_planes_pars_vertex:kl,clipping_planes_vertex:Gl,color_fragment:Vl,color_pars_fragment:Wl,color_pars_vertex:Xl,color_vertex:ql,common:Yl,cube_uv_reflection_fragment:Kl,defaultnormal_vertex:jl,displacementmap_pars_vertex:Zl,displacementmap_vertex:$l,emissivemap_fragment:Jl,emissivemap_pars_fragment:Ql,colorspace_fragment:ef,colorspace_pars_fragment:tf,envmap_fragment:nf,envmap_common_pars_fragment:rf,envmap_pars_fragment:af,envmap_pars_vertex:sf,envmap_physical_pars_fragment:gf,envmap_vertex:of,fog_vertex:cf,fog_pars_vertex:lf,fog_fragment:ff,fog_pars_fragment:df,gradientmap_pars_fragment:hf,lightmap_pars_fragment:uf,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:vf,lights_toon_fragment:_f,lights_toon_pars_fragment:xf,lights_phong_fragment:yf,lights_phong_pars_fragment:Sf,lights_physical_fragment:Mf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Tf,lights_fragment_maps:bf,lights_fragment_end:Af,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:Df,map_pars_fragment:Lf,map_particle_fragment:If,map_particle_pars_fragment:Uf,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:Ff,morphinstance_vertex:Of,morphcolor_vertex:zf,morphnormal_vertex:Bf,morphtarget_pars_vertex:Hf,morphtarget_vertex:kf,normal_fragment_begin:Gf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Zf,iridescence_pars_fragment:$f,opaque_fragment:Jf,packing:Qf,premultiplied_alpha_fragment:ed,project_vertex:td,dithering_fragment:nd,dithering_pars_fragment:id,roughnessmap_fragment:rd,roughnessmap_pars_fragment:ad,shadowmap_pars_fragment:sd,shadowmap_pars_vertex:od,shadowmap_vertex:cd,shadowmask_pars_fragment:ld,skinbase_vertex:fd,skinning_pars_vertex:dd,skinning_vertex:hd,skinnormal_vertex:ud,specularmap_fragment:pd,specularmap_pars_fragment:md,tonemapping_fragment:vd,tonemapping_pars_fragment:gd,transmission_fragment:_d,transmission_pars_fragment:xd,uv_pars_fragment:yd,uv_pars_vertex:Sd,uv_vertex:Md,worldpos_vertex:Ed,background_vert:Td,background_frag:bd,backgroundCube_vert:Ad,backgroundCube_frag:Rd,cube_vert:wd,cube_frag:Cd,depth_vert:Pd,depth_frag:Dd,distanceRGBA_vert:Ld,distanceRGBA_frag:Id,equirect_vert:Ud,equirect_frag:Nd,linedashed_vert:Fd,linedashed_frag:Od,meshbasic_vert:zd,meshbasic_frag:Bd,meshlambert_vert:Hd,meshlambert_frag:kd,meshmatcap_vert:Gd,meshmatcap_frag:Vd,meshnormal_vert:Wd,meshnormal_frag:Xd,meshphong_vert:qd,meshphong_frag:Yd,meshphysical_vert:Kd,meshphysical_frag:jd,meshtoon_vert:Zd,meshtoon_frag:$d,points_vert:Jd,points_frag:Qd,shadow_vert:eh,shadow_frag:th,sprite_vert:nh,sprite_frag:ih},ie={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Vt={basic:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:yt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:yt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:yt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:yt([ie.points,ie.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:yt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:yt([ie.common,ie.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:yt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:yt([ie.sprite,ie.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:yt([ie.common,ie.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:yt([ie.lights,ie.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Vt.physical={uniforms:yt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const $i={r:0,b:0,g:0},bn=new sn,rh=new ct;function ah(i,e,t,n,r,a,s){const o=new qe(0);let c=a===!0?0:1,l,d,h=null,u=0,m=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function y(T){let M=!1;const I=_(T);I===null?f(o,c):I&&I.isColor&&(f(I,1),M=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,M){const I=_(M);I&&(I.isCubeTexture||I.mapping===fr)?(d===void 0&&(d=new Xt(new wi(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:di(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),bn.copy(M.backgroundRotation),bn.x*=-1,bn.y*=-1,bn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),d.material.uniforms.envMap.value=I,d.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(rh.makeRotationFromEuler(bn)),d.material.toneMapped=ke.getTransfer(I.colorSpace)!==Ke,(h!==I||u!==I.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=I,u=I.version,m=i.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Xt(new Ci(2,2),new on({name:"BackgroundMaterial",uniforms:di(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ke.getTransfer(I.colorSpace)!==Ke,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||u!==I.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=I,u=I.version,m=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,M){T.getRGB($i,Eo(i)),n.buffers.color.setClear($i.r,$i.g,$i.b,M,s)}function A(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),c=M,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(o,c)},render:y,addToRenderList:p,dispose:A}}function sh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let a=r,s=!1;function o(x,C,V,B,K){let j=!1;const X=h(B,V,C);a!==X&&(a=X,l(a.object)),j=m(x,B,V,K),j&&_(x,B,V,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,M(x,C,V,B),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function h(x,C,V){const B=V.wireframe===!0;let K=n[x.id];K===void 0&&(K={},n[x.id]=K);let j=K[C.id];j===void 0&&(j={},K[C.id]=j);let X=j[B];return X===void 0&&(X=u(c()),j[B]=X),X}function u(x){const C=[],V=[],B=[];for(let K=0;K<t;K++)C[K]=0,V[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:B,object:x,attributes:{},index:null}}function m(x,C,V,B){const K=a.attributes,j=C.attributes;let X=0;const $=V.getAttributes();for(const H in $)if($[H].location>=0){const de=K[H];let Se=j[H];if(Se===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor)),de===void 0||de.attribute!==Se||Se&&de.data!==Se.data)return!0;X++}return a.attributesNum!==X||a.index!==B}function _(x,C,V,B){const K={},j=C.attributes;let X=0;const $=V.getAttributes();for(const H in $)if($[H].location>=0){let de=j[H];de===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));const Se={};Se.attribute=de,de&&de.data&&(Se.data=de.data),K[H]=Se,X++}a.attributes=K,a.attributesNum=X,a.index=B}function y(){const x=a.newAttributes;for(let C=0,V=x.length;C<V;C++)x[C]=0}function p(x){f(x,0)}function f(x,C){const V=a.newAttributes,B=a.enabledAttributes,K=a.attributeDivisors;V[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),K[x]!==C&&(i.vertexAttribDivisor(x,C),K[x]=C)}function A(){const x=a.newAttributes,C=a.enabledAttributes;for(let V=0,B=C.length;V<B;V++)C[V]!==x[V]&&(i.disableVertexAttribArray(V),C[V]=0)}function T(x,C,V,B,K,j,X){X===!0?i.vertexAttribIPointer(x,C,V,K,j):i.vertexAttribPointer(x,C,V,B,K,j)}function M(x,C,V,B){y();const K=B.attributes,j=V.getAttributes(),X=C.defaultAttributeValues;for(const $ in j){const H=j[$];if(H.location>=0){let oe=K[$];if(oe===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),oe!==void 0){const de=oe.normalized,Se=oe.itemSize,Fe=e.get(oe);if(Fe===void 0)continue;const Ze=Fe.buffer,W=Fe.type,te=Fe.bytesPerElement,xe=W===i.INT||W===i.UNSIGNED_INT||oe.gpuType===Fa;if(oe.isInterleavedBufferAttribute){const ce=oe.data,ye=ce.stride,Ge=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let Re=0;Re<H.locationSize;Re++)f(H.location+Re,ce.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Re=0;Re<H.locationSize;Re++)p(H.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Re=0;Re<H.locationSize;Re++)T(H.location+Re,Se/H.locationSize,W,de,ye*te,(Ge+Se/H.locationSize*Re)*te,xe)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)f(H.location+ce,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<H.locationSize;ce++)p(H.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ce=0;ce<H.locationSize;ce++)T(H.location+ce,Se/H.locationSize,W,de,Se*te,Se/H.locationSize*ce*te,xe)}}else if(X!==void 0){const de=X[$];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(H.location,de);break;case 3:i.vertexAttrib3fv(H.location,de);break;case 4:i.vertexAttrib4fv(H.location,de);break;default:i.vertexAttrib1fv(H.location,de)}}}}A()}function I(){U();for(const x in n){const C=n[x];for(const V in C){const B=C[V];for(const K in B)d(B[K].object),delete B[K];delete C[V]}delete n[x]}}function P(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const V in C){const B=C[V];for(const K in B)d(B[K].object),delete B[K];delete C[V]}delete n[x.id]}function w(x){for(const C in n){const V=n[C];if(V[x.id]===void 0)continue;const B=V[x.id];for(const K in B)d(B[K].object),delete B[K];delete V[x.id]}}function U(){S(),s=!0,a!==r&&(a=r,l(a.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:p,disableUnusedAttributes:A}}function oh(i,e,t){let n;function r(l){n=l}function a(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function s(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];t.update(m,n,1)}function c(l,d,h,u){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)s(l[_],d[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y]*u[y];t.update(_,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ch(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){return!(w!==Ht&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const U=w===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Yt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==nn&&!U)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:I,maxSamples:P}}function lh(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new pn,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||r;return r=u,n=h.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,m){const _=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!r||_===null||_.length===0||a&&!p)a?d(null):l();else{const A=a?0:n,T=A*4;let M=f.clippingState||null;c.value=M,M=d(_,u,T,m);for(let I=0;I!==T;++I)M[I]=t[I];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,m,_){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=c.value,_!==!0||p===null){const f=m+y*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<f)&&(p=new Float32Array(f));for(let T=0,M=m;T!==y;++T,M+=4)s.copy(h[T]).applyMatrix4(A,o),s.normal.toArray(p,M),p[M+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function fh(i){let e=new WeakMap;function t(s,o){return o===ia?s.mapping=oi:o===ra&&(s.mapping=ci),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===ia||o===ra)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new rl(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const ti=4,Ps=[.125,.215,.35,.446,.526,.582],Cn=20,kr=new Ro,Ds=new qe;let Gr=null,Vr=0,Wr=0,Xr=!1;const Rn=(1+Math.sqrt(5))/2,Qn=1/Rn,Ls=[new N(-Rn,Qn,0),new N(Rn,Qn,0),new N(-Qn,0,Rn),new N(Qn,0,Rn),new N(0,Rn,-Qn),new N(0,Rn,Qn),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],dh=new N;class Is{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=dh}=a;Gr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ns(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gr,Vr,Wr),this._renderer.xr.enabled=Xr,e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oi||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:bi,format:Ht,colorSpace:fi,depthBuffer:!1},r=Us(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Us(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hh(a)),this._blurMaterial=uh(a,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,n,r,a){const c=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(Ds),h.toneMapping=gn,h.autoClear=!1;const _=new yo({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),y=new Xt(new wi,_);let p=!1;const f=e.background;f?f.isColor&&(_.color.copy(f),e.background=null,p=!0):(_.color.copy(Ds),p=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(c.up.set(0,l[A],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+d[A],a.y,a.z)):T===1?(c.up.set(0,0,l[A]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+d[A],a.z)):(c.up.set(0,l[A],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+d[A]));const M=this._cubeSize;Ji(r,T*M,A>2?M:0,M,M),h.setRenderTarget(r),p&&h.render(y,c),h.render(e,c)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=m,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===oi||e.mapping===ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ns());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Xt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;Ji(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Ls[(r-a-1)%Ls.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Xt(this._lodPlanes[r],l),u=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Cn-1),y=a/_,p=isFinite(a)?1+Math.floor(d*y):Cn;p>Cn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cn}`);const f=[];let A=0;for(let w=0;w<Cn;++w){const U=w/y,S=Math.exp(-U*U/2);f.push(S),w===0?A+=S:w<p&&(A+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/A;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=_,u.mipInt.value=T-n;const M=this._sizeLods[r],I=3*M*(r>T-ti?r-T+ti:0),P=4*(this._cubeSize-M);Ji(t,I,P,3*M,2*M),c.setRenderTarget(t),c.render(h,kr)}}function hh(i){const e=[],t=[],n=[];let r=i;const a=i-ti+1+Ps.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let c=1/o;s>i-ti?c=Ps[s-i+ti-1]:s===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,y=3,p=2,f=1,A=new Float32Array(y*_*m),T=new Float32Array(p*_*m),M=new Float32Array(f*_*m);for(let P=0;P<m;P++){const w=P%3*2/3-1,U=P>2?0:-1,S=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];A.set(S,y*_*P),T.set(u,p*_*P);const x=[P,P,P,P,P,P];M.set(x,f*_*P)}const I=new On;I.setAttribute("position",new qt(A,y)),I.setAttribute("uv",new qt(T,p)),I.setAttribute("faceIndex",new qt(M,f)),e.push(I),r>ti&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Us(i,e,t){const n=new Nn(i,e,t);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function uh(i,e,t){const n=new Float32Array(Cn),r=new N(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ns(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Fs(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function qa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ph(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ia||c===ra,d=c===oi||c===ci;if(l||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Is(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return l&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Is(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function mh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ri("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function vh(i,e,t,n){const r={},a=new WeakMap;function s(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",s),delete r[u.id];const m=a.get(u);m&&(e.remove(m),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function l(h){const u=[],m=h.index,_=h.attributes.position;let y=0;if(m!==null){const A=m.array;y=m.version;for(let T=0,M=A.length;T<M;T+=3){const I=A[T+0],P=A[T+1],w=A[T+2];u.push(I,P,P,w,w,I)}}else if(_!==void 0){const A=_.array;y=_.version;for(let T=0,M=A.length/3-1;T<M;T+=3){const I=T+0,P=T+1,w=T+2;u.push(I,P,P,w,w,I)}}else return;const p=new(mo(u)?Mo:So)(u,1);p.version=y;const f=a.get(h);f&&e.remove(f),a.set(h,p)}function d(h){const u=a.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&l(h)}else l(h);return a.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function gh(i,e,t){let n;function r(u){n=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function c(u,m){i.drawElements(n,m,a,u*s),t.update(m,n,1)}function l(u,m,_){_!==0&&(i.drawElementsInstanced(n,m,a,u*s,_),t.update(m,n,_))}function d(u,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,u,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];t.update(p,n,1)}function h(u,m,_,y){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<u.length;f++)l(u[f]/s,m[f],y[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,u,0,y,0,_);let f=0;for(let A=0;A<_;A++)f+=m[A]*y[A];t.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function _h(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xh(i,e,t){const n=new WeakMap,r=new ot;function a(s,o,c){const l=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let x=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),p===!0&&(M=3);let I=o.attributes.position.count*M,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const w=new Float32Array(I*P*4*h),U=new vo(w,I,P,h);U.type=nn,U.needsUpdate=!0;const S=M*4;for(let C=0;C<h;C++){const V=f[C],B=A[C],K=T[C],j=I*P*4*C;for(let X=0;X<V.count;X++){const $=X*S;_===!0&&(r.fromBufferAttribute(V,X),w[j+$+0]=r.x,w[j+$+1]=r.y,w[j+$+2]=r.z,w[j+$+3]=0),y===!0&&(r.fromBufferAttribute(B,X),w[j+$+4]=r.x,w[j+$+5]=r.y,w[j+$+6]=r.z,w[j+$+7]=0),p===!0&&(r.fromBufferAttribute(K,X),w[j+$+8]=r.x,w[j+$+9]=r.y,w[j+$+10]=r.z,w[j+$+11]=K.itemSize===4?r.w:1)}}u={count:h,texture:U,size:new Le(I,P)},n.set(o,u),o.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const y=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function yh(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return h}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}const Co=new St,Os=new Ao(1,1),Po=new vo,Do=new kc,Lo=new bo,zs=[],Bs=[],Hs=new Float32Array(16),ks=new Float32Array(9),Gs=new Float32Array(4);function hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=zs[r];if(a===void 0&&(a=new Float32Array(r),zs[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hr(i,e){let t=Bs[e];t===void 0&&(t=new Int32Array(e),Bs[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),ut(t,e)}}function Eh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),ut(t,e)}}function Th(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),ut(t,e)}}function bh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Gs.set(n),i.uniformMatrix2fv(this.addr,!1,Gs),ut(t,n)}}function Ah(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;ks.set(n),i.uniformMatrix3fv(this.addr,!1,ks),ut(t,n)}}function Rh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,n))return;Hs.set(n),i.uniformMatrix4fv(this.addr,!1,Hs),ut(t,n)}}function wh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ch(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),ut(t,e)}}function Ph(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),ut(t,e)}}function Dh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),ut(t,e)}}function Lh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ih(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),ut(t,e)}}function Uh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),ut(t,e)}}function Nh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),ut(t,e)}}function Fh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Os.compareFunction=po,a=Os):a=Co,t.setTexture2D(e||a,r)}function Oh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Do,r)}function zh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Lo,r)}function Bh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Po,r)}function Hh(i){switch(i){case 5126:return Sh;case 35664:return Mh;case 35665:return Eh;case 35666:return Th;case 35674:return bh;case 35675:return Ah;case 35676:return Rh;case 5124:case 35670:return wh;case 35667:case 35671:return Ch;case 35668:case 35672:return Ph;case 35669:case 35673:return Dh;case 5125:return Lh;case 36294:return Ih;case 36295:return Uh;case 36296:return Nh;case 35678:case 36198:case 36298:case 36306:case 35682:return Fh;case 35679:case 36299:case 36307:return Oh;case 35680:case 36300:case 36308:case 36293:return zh;case 36289:case 36303:case 36311:case 36292:return Bh}}function kh(i,e){i.uniform1fv(this.addr,e)}function Gh(i,e){const t=hi(e,this.size,2);i.uniform2fv(this.addr,t)}function Vh(i,e){const t=hi(e,this.size,3);i.uniform3fv(this.addr,t)}function Wh(i,e){const t=hi(e,this.size,4);i.uniform4fv(this.addr,t)}function Xh(i,e){const t=hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qh(i,e){const t=hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Yh(i,e){const t=hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Kh(i,e){i.uniform1iv(this.addr,e)}function jh(i,e){i.uniform2iv(this.addr,e)}function Zh(i,e){i.uniform3iv(this.addr,e)}function $h(i,e){i.uniform4iv(this.addr,e)}function Jh(i,e){i.uniform1uiv(this.addr,e)}function Qh(i,e){i.uniform2uiv(this.addr,e)}function eu(i,e){i.uniform3uiv(this.addr,e)}function tu(i,e){i.uniform4uiv(this.addr,e)}function nu(i,e,t){const n=this.cache,r=e.length,a=hr(t,r);ht(n,a)||(i.uniform1iv(this.addr,a),ut(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Co,a[s])}function iu(i,e,t){const n=this.cache,r=e.length,a=hr(t,r);ht(n,a)||(i.uniform1iv(this.addr,a),ut(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Do,a[s])}function ru(i,e,t){const n=this.cache,r=e.length,a=hr(t,r);ht(n,a)||(i.uniform1iv(this.addr,a),ut(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Lo,a[s])}function au(i,e,t){const n=this.cache,r=e.length,a=hr(t,r);ht(n,a)||(i.uniform1iv(this.addr,a),ut(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Po,a[s])}function su(i){switch(i){case 5126:return kh;case 35664:return Gh;case 35665:return Vh;case 35666:return Wh;case 35674:return Xh;case 35675:return qh;case 35676:return Yh;case 5124:case 35670:return Kh;case 35667:case 35671:return jh;case 35668:case 35672:return Zh;case 35669:case 35673:return $h;case 5125:return Jh;case 36294:return Qh;case 36295:return eu;case 36296:return tu;case 35678:case 36198:case 36298:case 36306:case 35682:return nu;case 35679:case 36299:case 36307:return iu;case 35680:case 36300:case 36308:case 36293:return ru;case 36289:case 36303:case 36311:case 36292:return au}}class ou{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hh(t.type)}}class cu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=su(t.type)}}class lu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function Vs(i,e){i.seq.push(e),i.map[e.id]=e}function fu(i,e,t){const n=i.name,r=n.length;for(qr.lastIndex=0;;){const a=qr.exec(n),s=qr.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){Vs(t,l===void 0?new ou(o,i,e):new cu(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new lu(o),Vs(t,h)),t=h}}}class or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);fu(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Ws(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const du=37297;let hu=0;function uu(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Xs=new Ie;function pu(i){ke._getMatrix(Xs,ke.workingColorSpace,i);const e=`mat3( ${Xs.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(i)){case cr:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qs(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+uu(i.getShaderSource(e),s)}else return r}function mu(i,e){const t=pu(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vu(i,e){let t;switch(e){case dc:t="Linear";break;case hc:t="Reinhard";break;case uc:t="Cineon";break;case pc:t="ACESFilmic";break;case vc:t="AgX";break;case gc:t="Neutral";break;case mc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qi=new N;function gu(){ke.getLuminanceCoefficients(Qi);const i=Qi.x.toFixed(4),e=Qi.y.toFixed(4),t=Qi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _u(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xi).join(`
`)}function xu(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yu(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function xi(i){return i!==""}function Ys(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ks(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Su=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(Su,Eu)}const Mu=new Map;function Eu(i,e){let t=Ne[e];if(t===void 0){const n=Mu.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const Tu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function js(i){return i.replace(Tu,bu)}function bu(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Zs(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Au(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===no?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===en&&(e="SHADOWMAP_TYPE_VSM"),e}function Ru(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oi:case ci:e="ENVMAP_TYPE_CUBE";break;case fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wu(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Cu(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case io:e="ENVMAP_BLENDING_MULTIPLY";break;case lc:e="ENVMAP_BLENDING_MIX";break;case fc:e="ENVMAP_BLENDING_ADD";break}return e}function Pu(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Du(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Au(t),l=Ru(t),d=wu(t),h=Cu(t),u=Pu(t),m=_u(t),_=xu(a),y=r.createProgram();let p,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xi).join(`
`),f.length>0&&(f+=`
`)):(p=[Zs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),f=[Zs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==gn?vu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,mu("linearToOutputTexel",t.outputColorSpace),gu(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xi).join(`
`)),s=Ia(s),s=Ys(s,t),s=Ks(s,t),o=Ia(o),o=Ys(o,t),o=Ks(o,t),s=js(s),o=js(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===cs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=A+p+s,M=A+f+o,I=Ws(r,r.VERTEX_SHADER,T),P=Ws(r,r.FRAGMENT_SHADER,M);r.attachShader(y,I),r.attachShader(y,P),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(C){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(I).trim(),K=r.getShaderInfoLog(P).trim();let j=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,I,P);else{const $=qs(r,I,"vertex"),H=qs(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+$+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||K==="")&&(X=!1);X&&(C.diagnostics={runnable:j,programLog:V,vertexShader:{log:B,prefix:p},fragmentShader:{log:K,prefix:f}})}r.deleteShader(I),r.deleteShader(P),U=new or(r,y),S=yu(r,y)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,du)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hu++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=P,this}let Lu=0;class Iu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Uu(e),t.set(e,n)),n}}class Uu{constructor(e){this.id=Lu++,this.code=e,this.usedTimes=0}}function Nu(i,e,t,n,r,a,s){const o=new _o,c=new Iu,l=new Set,d=[],h=r.logarithmicDepthBuffer,u=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,x,C,V,B){const K=V.fog,j=B.geometry,X=S.isMeshStandardMaterial?V.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),H=$&&$.mapping===fr?$.image.height:null,oe=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=de!==void 0?de.length:0;let Fe=0;j.morphAttributes.position!==void 0&&(Fe=1),j.morphAttributes.normal!==void 0&&(Fe=2),j.morphAttributes.color!==void 0&&(Fe=3);let Ze,W,te,xe;if(oe){const Xe=Vt[oe];Ze=Xe.vertexShader,W=Xe.fragmentShader}else Ze=S.vertexShader,W=S.fragmentShader,c.update(S),te=c.getVertexShaderID(S),xe=c.getFragmentShaderID(S);const ce=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ge=B.isInstancedMesh===!0,Re=B.isBatchedMesh===!0,nt=!!S.map,it=!!S.matcap,Ve=!!$,b=!!S.aoMap,_t=!!S.lightMap,We=!!S.bumpMap,Je=!!S.normalMap,ve=!!S.displacementMap,Be=!!S.emissiveMap,Ee=!!S.metalnessMap,Ue=!!S.roughnessMap,ft=S.anisotropy>0,E=S.clearcoat>0,v=S.dispersion>0,F=S.iridescence>0,G=S.sheen>0,Y=S.transmission>0,k=ft&&!!S.anisotropyMap,ge=E&&!!S.clearcoatMap,re=E&&!!S.clearcoatNormalMap,me=E&&!!S.clearcoatRoughnessMap,_e=F&&!!S.iridescenceMap,Z=F&&!!S.iridescenceThicknessMap,le=G&&!!S.sheenColorMap,Ae=G&&!!S.sheenRoughnessMap,be=!!S.specularMap,ne=!!S.specularColorMap,Pe=!!S.specularIntensityMap,R=Y&&!!S.transmissionMap,ae=Y&&!!S.thicknessMap,J=!!S.gradientMap,he=!!S.alphaMap,Q=S.alphaTest>0,q=!!S.alphaHash,ue=!!S.extensions;let De=gn;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(De=i.toneMapping);const Qe={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:W,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Re,batchingColor:Re&&B._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&B.instanceColor!==null,instancingMorph:Ge&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:fi,alphaToCoverage:!!S.alphaToCoverage,map:nt,matcap:it,envMap:Ve,envMapMode:Ve&&$.mapping,envMapCubeUVHeight:H,aoMap:b,lightMap:_t,bumpMap:We,normalMap:Je,displacementMap:u&&ve,emissiveMap:Be,normalMapObjectSpace:Je&&S.normalMapType===Mc,normalMapTangentSpace:Je&&S.normalMapType===Sc,metalnessMap:Ee,roughnessMap:Ue,anisotropy:ft,anisotropyMap:k,clearcoat:E,clearcoatMap:ge,clearcoatNormalMap:re,clearcoatRoughnessMap:me,dispersion:v,iridescence:F,iridescenceMap:_e,iridescenceThicknessMap:Z,sheen:G,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:be,specularColorMap:ne,specularIntensityMap:Pe,transmission:Y,transmissionMap:R,thicknessMap:ae,gradientMap:J,opaque:S.transparent===!1&&S.blending===ii&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:Q,alphaHash:q,combine:S.combine,mapUv:nt&&y(S.map.channel),aoMapUv:b&&y(S.aoMap.channel),lightMapUv:_t&&y(S.lightMap.channel),bumpMapUv:We&&y(S.bumpMap.channel),normalMapUv:Je&&y(S.normalMap.channel),displacementMapUv:ve&&y(S.displacementMap.channel),emissiveMapUv:Be&&y(S.emissiveMap.channel),metalnessMapUv:Ee&&y(S.metalnessMap.channel),roughnessMapUv:Ue&&y(S.roughnessMap.channel),anisotropyMapUv:k&&y(S.anisotropyMap.channel),clearcoatMapUv:ge&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&y(S.sheenRoughnessMap.channel),specularMapUv:be&&y(S.specularMap.channel),specularColorMapUv:ne&&y(S.specularColorMap.channel),specularIntensityMapUv:Pe&&y(S.specularIntensityMap.channel),transmissionMapUv:R&&y(S.transmissionMap.channel),thicknessMapUv:ae&&y(S.thicknessMap.channel),alphaMapUv:he&&y(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Je||ft),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(nt||he),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Fe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:nt&&S.map.isVideoTexture===!0&&ke.getTransfer(S.map.colorSpace)===Ke,decodeVideoTextureEmissive:Be&&S.emissiveMap.isVideoTexture===!0&&ke.getTransfer(S.emissiveMap.colorSpace)===Ke,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===bt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ue&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function f(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(A(x,S),T(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function A(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const x=_[S.type];let C;if(x){const V=Vt[x];C=el.clone(V.uniforms)}else C=S.uniforms;return C}function I(S,x){let C;for(let V=0,B=d.length;V<B;V++){const K=d[V];if(K.cacheKey===x){C=K,++C.usedTimes;break}}return C===void 0&&(C=new Du(i,x,S,a),d.push(C)),C}function P(S){if(--S.usedTimes===0){const x=d.indexOf(S);d[x]=d[d.length-1],d.pop(),S.destroy()}}function w(S){c.remove(S)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:I,releaseProgram:P,releaseShaderCache:w,programs:d,dispose:U}}function Fu(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Ou(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $s(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Js(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(h,u,m,_,y,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:m,groupOrder:_,renderOrder:h.renderOrder,z:y,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=y,f.group=p),e++,f}function o(h,u,m,_,y,p){const f=s(h,u,m,_,y,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(h,u,m,_,y,p){const f=s(h,u,m,_,y,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,u){t.length>1&&t.sort(h||Ou),n.length>1&&n.sort(u||$s),r.length>1&&r.sort(u||$s)}function d(){for(let h=e,u=i.length;h<u;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:d,sort:l}}function zu(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new Js,i.set(n,[s])):r>=a.length?(s=new Js,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bu(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new qe};break;case"SpotLight":t={position:new N,direction:new N,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Hu(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ku=0;function Gu(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vu(i){const e=new Bu,t=Hu(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,a=new ct,s=new ct;function o(l){let d=0,h=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,_=0,y=0,p=0,f=0,A=0,T=0,M=0,I=0,P=0,w=0;l.sort(Gu);for(let S=0,x=l.length;S<x;S++){const C=l[S],V=C.color,B=C.intensity,K=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=V.r*B,h+=V.g*B,u+=V.b*B;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],B);w++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,H=t.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=C.shadow.matrix,A++}n.directional[m]=X,m++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(V).multiplyScalar(B),X.distance=K,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[y]=X;const $=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,$.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[y]=$.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=j,M++}y++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(V).multiplyScalar(B),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=X,p++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const $=C.shadow,H=t.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=C.shadow.matrix,T++}n.point[_]=X,_++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(B),X.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[f]=X,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const U=n.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==y||U.rectAreaLength!==p||U.hemiLength!==f||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==M||U.numSpotMaps!==I||U.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=w,U.directionalLength=m,U.pointLength=_,U.spotLength=y,U.rectAreaLength=p,U.hemiLength=f,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=M,U.numSpotMaps=I,U.numLightProbes=w,n.version=ku++)}function c(l,d){let h=0,u=0,m=0,_=0,y=0;const p=d.matrixWorldInverse;for(let f=0,A=l.length;f<A;f++){const T=l[f];if(T.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(T.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(p),s.identity(),a.copy(T.matrixWorld),a.premultiply(p),s.extractRotation(a),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),_++}else if(T.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){const M=n.hemi[y];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:o,setupView:c,state:n}}function Qs(i){const e=new Vu(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function s(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function Wu(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Qs(i),e.set(r,[o])):a>=s.length?(o=new Qs(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Xu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yu(i,e,t){let n=new Wa;const r=new Le,a=new Le,s=new ot,o=new fl({depthPacking:yc}),c=new dl,l={},d=t.maxTextureSize,h={[_n]:bt,[bt]:_n,[tn]:tn},u=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Xu,fragmentShader:qu}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new On;_.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Xt(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let f=this.type;this.render=function(P,w,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),V=i.state;V.setBlending(vn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=f!==en&&this.type===en,K=f===en&&this.type!==en;for(let j=0,X=P.length;j<X;j++){const $=P[j],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const oe=H.getFrameExtents();if(r.multiply(oe),a.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/oe.x),r.x=a.x*oe.x,H.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/oe.y),r.y=a.y*oe.y,H.mapSize.y=a.y)),H.map===null||B===!0||K===!0){const Se=this.type!==en?{minFilter:kt,magFilter:kt}:{};H.map!==null&&H.map.dispose(),H.map=new Nn(r.x,r.y,Se),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const de=H.getViewportCount();for(let Se=0;Se<de;Se++){const Fe=H.getViewport(Se);s.set(a.x*Fe.x,a.y*Fe.y,a.x*Fe.z,a.y*Fe.w),V.viewport(s),H.updateMatrices($,Se),n=H.getFrustum(),M(w,U,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===en&&A(H,U),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,C)};function A(P,w){const U=e.update(y);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Nn(r.x,r.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(w,null,U,u,y,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(w,null,U,m,y,null)}function T(P,w,U,S){let x=null;const C=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)x=C;else if(x=U.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const V=x.uuid,B=w.uuid;let K=l[V];K===void 0&&(K={},l[V]=K);let j=K[B];j===void 0&&(j=x.clone(),K[B]=j,w.addEventListener("dispose",I)),x=j}if(x.visible=w.visible,x.wireframe=w.wireframe,S===en?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=i.properties.get(x);V.light=U}return x}function M(P,w,U,S,x){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===en)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const B=e.update(P),K=P.material;if(Array.isArray(K)){const j=B.groups;for(let X=0,$=j.length;X<$;X++){const H=j[X],oe=K[H.materialIndex];if(oe&&oe.visible){const de=T(P,oe,S,x);P.onBeforeShadow(i,P,w,U,B,de,H),i.renderBufferDirect(U,null,B,de,P,H),P.onAfterShadow(i,P,w,U,B,de,H)}}}else if(K.visible){const j=T(P,K,S,x);P.onBeforeShadow(i,P,w,U,B,j,null),i.renderBufferDirect(U,null,B,j,P,null),P.onAfterShadow(i,P,w,U,B,j,null)}}const V=P.children;for(let B=0,K=V.length;B<K;B++)M(V[B],w,U,S,x)}function I(P){P.target.removeEventListener("dispose",I);for(const U in l){const S=l[U],x=P.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Ku={[Zr]:$r,[Jr]:ta,[Qr]:na,[si]:ea,[$r]:Zr,[ta]:Jr,[na]:Qr,[ea]:si};function ju(i,e){function t(){let R=!1;const ae=new ot;let J=null;const he=new ot(0,0,0,0);return{setMask:function(Q){J!==Q&&!R&&(i.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){R=Q},setClear:function(Q,q,ue,De,Qe){Qe===!0&&(Q*=De,q*=De,ue*=De),ae.set(Q,q,ue,De),he.equals(ae)===!1&&(i.clearColor(Q,q,ue,De),he.copy(ae))},reset:function(){R=!1,J=null,he.set(-1,0,0,0)}}}function n(){let R=!1,ae=!1,J=null,he=null,Q=null;return{setReversed:function(q){if(ae!==q){const ue=e.get("EXT_clip_control");q?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),ae=q;const De=Q;Q=null,this.setClear(De)}},getReversed:function(){return ae},setTest:function(q){q?ce(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(q){J!==q&&!R&&(i.depthMask(q),J=q)},setFunc:function(q){if(ae&&(q=Ku[q]),he!==q){switch(q){case Zr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case Jr:i.depthFunc(i.LESS);break;case si:i.depthFunc(i.LEQUAL);break;case Qr:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=q}},setLocked:function(q){R=q},setClear:function(q){Q!==q&&(ae&&(q=1-q),i.clearDepth(q),Q=q)},reset:function(){R=!1,J=null,he=null,Q=null,ae=!1}}}function r(){let R=!1,ae=null,J=null,he=null,Q=null,q=null,ue=null,De=null,Qe=null;return{setTest:function(Xe){R||(Xe?ce(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Xe){ae!==Xe&&!R&&(i.stencilMask(Xe),ae=Xe)},setFunc:function(Xe,Nt,Kt){(J!==Xe||he!==Nt||Q!==Kt)&&(i.stencilFunc(Xe,Nt,Kt),J=Xe,he=Nt,Q=Kt)},setOp:function(Xe,Nt,Kt){(q!==Xe||ue!==Nt||De!==Kt)&&(i.stencilOp(Xe,Nt,Kt),q=Xe,ue=Nt,De=Kt)},setLocked:function(Xe){R=Xe},setClear:function(Xe){Qe!==Xe&&(i.clearStencil(Xe),Qe=Xe)},reset:function(){R=!1,ae=null,J=null,he=null,Q=null,q=null,ue=null,De=null,Qe=null}}}const a=new t,s=new n,o=new r,c=new WeakMap,l=new WeakMap;let d={},h={},u=new WeakMap,m=[],_=null,y=!1,p=null,f=null,A=null,T=null,M=null,I=null,P=null,w=new qe(0,0,0),U=0,S=!1,x=null,C=null,V=null,B=null,K=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=$>=2);let oe=null,de={};const Se=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Ze=new ot().fromArray(Se),W=new ot().fromArray(Fe);function te(R,ae,J,he){const Q=new Uint8Array(4),q=i.createTexture();i.bindTexture(R,q),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<J;ue++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ae+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return q}const xe={};xe[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),s.setFunc(si),We(!1),Je(ns),ce(i.CULL_FACE),b(vn);function ce(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function ye(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function Ge(R,ae){return h[R]!==ae?(i.bindFramebuffer(R,ae),h[R]=ae,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ae),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Re(R,ae){let J=m,he=!1;if(R){J=u.get(ae),J===void 0&&(J=[],u.set(ae,J));const Q=R.textures;if(J.length!==Q.length||J[0]!==i.COLOR_ATTACHMENT0){for(let q=0,ue=Q.length;q<ue;q++)J[q]=i.COLOR_ATTACHMENT0+q;J.length=Q.length,he=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,he=!0);he&&i.drawBuffers(J)}function nt(R){return _!==R?(i.useProgram(R),_=R,!0):!1}const it={[wn]:i.FUNC_ADD,[qo]:i.FUNC_SUBTRACT,[Yo]:i.FUNC_REVERSE_SUBTRACT};it[Ko]=i.MIN,it[jo]=i.MAX;const Ve={[Zo]:i.ZERO,[$o]:i.ONE,[Jo]:i.SRC_COLOR,[Kr]:i.SRC_ALPHA,[rc]:i.SRC_ALPHA_SATURATE,[nc]:i.DST_COLOR,[ec]:i.DST_ALPHA,[Qo]:i.ONE_MINUS_SRC_COLOR,[jr]:i.ONE_MINUS_SRC_ALPHA,[ic]:i.ONE_MINUS_DST_COLOR,[tc]:i.ONE_MINUS_DST_ALPHA,[ac]:i.CONSTANT_COLOR,[sc]:i.ONE_MINUS_CONSTANT_COLOR,[oc]:i.CONSTANT_ALPHA,[cc]:i.ONE_MINUS_CONSTANT_ALPHA};function b(R,ae,J,he,Q,q,ue,De,Qe,Xe){if(R===vn){y===!0&&(ye(i.BLEND),y=!1);return}if(y===!1&&(ce(i.BLEND),y=!0),R!==Xo){if(R!==p||Xe!==S){if((f!==wn||M!==wn)&&(i.blendEquation(i.FUNC_ADD),f=wn,M=wn),Xe)switch(R){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFunc(i.ONE,i.ONE);break;case rs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case as:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rs:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case as:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}A=null,T=null,I=null,P=null,w.set(0,0,0),U=0,p=R,S=Xe}return}Q=Q||ae,q=q||J,ue=ue||he,(ae!==f||Q!==M)&&(i.blendEquationSeparate(it[ae],it[Q]),f=ae,M=Q),(J!==A||he!==T||q!==I||ue!==P)&&(i.blendFuncSeparate(Ve[J],Ve[he],Ve[q],Ve[ue]),A=J,T=he,I=q,P=ue),(De.equals(w)===!1||Qe!==U)&&(i.blendColor(De.r,De.g,De.b,Qe),w.copy(De),U=Qe),p=R,S=!1}function _t(R,ae){R.side===tn?ye(i.CULL_FACE):ce(i.CULL_FACE);let J=R.side===bt;ae&&(J=!J),We(J),R.blending===ii&&R.transparent===!1?b(vn):b(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),a.setMask(R.colorWrite);const he=R.stencilWrite;o.setTest(he),he&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Be(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(R){x!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),x=R)}function Je(R){R!==Go?(ce(i.CULL_FACE),R!==C&&(R===ns?i.cullFace(i.BACK):R===Vo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),C=R}function ve(R){R!==V&&(X&&i.lineWidth(R),V=R)}function Be(R,ae,J){R?(ce(i.POLYGON_OFFSET_FILL),(B!==ae||K!==J)&&(i.polygonOffset(ae,J),B=ae,K=J)):ye(i.POLYGON_OFFSET_FILL)}function Ee(R){R?ce(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Ue(R){R===void 0&&(R=i.TEXTURE0+j-1),oe!==R&&(i.activeTexture(R),oe=R)}function ft(R,ae,J){J===void 0&&(oe===null?J=i.TEXTURE0+j-1:J=oe);let he=de[J];he===void 0&&(he={type:void 0,texture:void 0},de[J]=he),(he.type!==R||he.texture!==ae)&&(oe!==J&&(i.activeTexture(J),oe=J),i.bindTexture(R,ae||xe[R]),he.type=R,he.texture=ae)}function E(){const R=de[oe];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{i.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{i.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{i.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{i.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{i.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(R){Ze.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Ze.copy(R))}function Ae(R){W.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),W.copy(R))}function be(R,ae){let J=l.get(ae);J===void 0&&(J=new WeakMap,l.set(ae,J));let he=J.get(R);he===void 0&&(he=i.getUniformBlockIndex(ae,R.name),J.set(R,he))}function ne(R,ae){const he=l.get(ae).get(R);c.get(ae)!==he&&(i.uniformBlockBinding(ae,he,R.__bindingPointIndex),c.set(ae,he))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},oe=null,de={},h={},u=new WeakMap,m=[],_=null,y=!1,p=null,f=null,A=null,T=null,M=null,I=null,P=null,w=new qe(0,0,0),U=0,S=!1,x=null,C=null,V=null,B=null,K=null,Ze.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ce,disable:ye,bindFramebuffer:Ge,drawBuffers:Re,useProgram:nt,setBlending:b,setMaterial:_t,setFlipSided:We,setCullFace:Je,setLineWidth:ve,setPolygonOffset:Be,setScissorTest:Ee,activeTexture:Ue,bindTexture:ft,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:_e,texImage3D:Z,updateUBOMapping:be,uniformBlockBinding:ne,texStorage2D:re,texStorage3D:me,texSubImage2D:G,texSubImage3D:Y,compressedTexSubImage2D:k,compressedTexSubImage3D:ge,scissor:le,viewport:Ae,reset:Pe}}function Zu(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,d=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return m?new OffscreenCanvas(E,v):Ti("canvas")}function y(E,v,F){let G=1;const Y=ft(E);if((Y.width>F||Y.height>F)&&(G=F/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const k=Math.floor(G*Y.width),ge=Math.floor(G*Y.height);h===void 0&&(h=_(k,ge));const re=v?_(k,ge):h;return re.width=k,re.height=ge,re.getContext("2d").drawImage(E,0,0,k,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+k+"x"+ge+")."),re}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,v,F,G,Y=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let k=v;if(v===i.RED&&(F===i.FLOAT&&(k=i.R32F),F===i.HALF_FLOAT&&(k=i.R16F),F===i.UNSIGNED_BYTE&&(k=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.R8UI),F===i.UNSIGNED_SHORT&&(k=i.R16UI),F===i.UNSIGNED_INT&&(k=i.R32UI),F===i.BYTE&&(k=i.R8I),F===i.SHORT&&(k=i.R16I),F===i.INT&&(k=i.R32I)),v===i.RG&&(F===i.FLOAT&&(k=i.RG32F),F===i.HALF_FLOAT&&(k=i.RG16F),F===i.UNSIGNED_BYTE&&(k=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RG8UI),F===i.UNSIGNED_SHORT&&(k=i.RG16UI),F===i.UNSIGNED_INT&&(k=i.RG32UI),F===i.BYTE&&(k=i.RG8I),F===i.SHORT&&(k=i.RG16I),F===i.INT&&(k=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RGB8UI),F===i.UNSIGNED_SHORT&&(k=i.RGB16UI),F===i.UNSIGNED_INT&&(k=i.RGB32UI),F===i.BYTE&&(k=i.RGB8I),F===i.SHORT&&(k=i.RGB16I),F===i.INT&&(k=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),F===i.UNSIGNED_INT&&(k=i.RGBA32UI),F===i.BYTE&&(k=i.RGBA8I),F===i.SHORT&&(k=i.RGBA16I),F===i.INT&&(k=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),v===i.RGBA){const ge=Y?cr:ke.getTransfer(G);F===i.FLOAT&&(k=i.RGBA32F),F===i.HALF_FLOAT&&(k=i.RGBA16F),F===i.UNSIGNED_BYTE&&(k=ge===Ke?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function M(E,v){let F;return E?v===null||v===In||v===Si?F=i.DEPTH24_STENCIL8:v===nn?F=i.DEPTH32F_STENCIL8:v===yi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===In||v===Si?F=i.DEPTH_COMPONENT24:v===nn?F=i.DEPTH_COMPONENT32F:v===yi&&(F=i.DEPTH_COMPONENT16),F}function I(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==kt&&E.minFilter!==Wt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function P(E){const v=E.target;v.removeEventListener("dispose",P),U(v),v.isVideoTexture&&d.delete(v)}function w(E){const v=E.target;v.removeEventListener("dispose",w),x(v)}function U(E){const v=n.get(E);if(v.__webglInit===void 0)return;const F=E.source,G=u.get(F);if(G){const Y=G[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(E),Object.keys(G).length===0&&u.delete(F)}n.remove(E)}function S(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const F=E.source,G=u.get(F);delete G[v.__cacheKey],s.memory.textures--}function x(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let Y=0;Y<v.__webglFramebuffer[G].length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[G][Y]);else i.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)i.deleteFramebuffer(v.__webglFramebuffer[G]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=E.textures;for(let G=0,Y=F.length;G<Y;G++){const k=n.get(F[G]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),s.memory.textures--),n.remove(F[G])}n.remove(E)}let C=0;function V(){C=0}function B(){const E=C;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),C+=1,E}function K(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function j(E,v){const F=n.get(E);if(E.isVideoTexture&&Ee(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(F,E,v);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function X(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){xe(F,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function $(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){xe(F,E,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function H(E,v){const F=n.get(E);if(E.version>0&&F.__version!==E.version){ce(F,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const oe={[li]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},de={[kt]:i.NEAREST,[_c]:i.NEAREST_MIPMAP_NEAREST,[Li]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[mr]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},Se={[Ec]:i.NEVER,[Cc]:i.ALWAYS,[Tc]:i.LESS,[po]:i.LEQUAL,[bc]:i.EQUAL,[wc]:i.GEQUAL,[Ac]:i.GREATER,[Rc]:i.NOTEQUAL};function Fe(E,v){if(v.type===nn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Wt||v.magFilter===mr||v.magFilter===Li||v.magFilter===Dn||v.minFilter===Wt||v.minFilter===mr||v.minFilter===Li||v.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,oe[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,oe[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,oe[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,de[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===kt||v.minFilter!==Li&&v.minFilter!==Dn||v.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",P));const G=v.source;let Y=u.get(G);Y===void 0&&(Y={},u.set(G,Y));const k=K(v);if(k!==E.__cacheKey){Y[k]===void 0&&(Y[k]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Y[k].usedTimes++;const ge=Y[E.__cacheKey];ge!==void 0&&(Y[E.__cacheKey].usedTimes--,ge.usedTimes===0&&S(v)),E.__cacheKey=k,E.__webglTexture=Y[k].texture}return F}function W(E,v,F){return Math.floor(Math.floor(E/F)/v)}function te(E,v,F,G){const k=E.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,G,v.data);else{k.sort((Z,le)=>Z.start-le.start);let ge=0;for(let Z=1;Z<k.length;Z++){const le=k[ge],Ae=k[Z],be=le.start+le.count,ne=W(Ae.start,v.width,4),Pe=W(le.start,v.width,4);Ae.start<=be+1&&ne===Pe&&W(Ae.start+Ae.count-1,v.width,4)===ne?le.count=Math.max(le.count,Ae.start+Ae.count-le.start):(++ge,k[ge]=Ae)}k.length=ge+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),me=i.getParameter(i.UNPACK_SKIP_PIXELS),_e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Z=0,le=k.length;Z<le;Z++){const Ae=k[Z],be=Math.floor(Ae.start/4),ne=Math.ceil(Ae.count/4),Pe=be%v.width,R=Math.floor(be/v.width),ae=ne,J=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Pe,R,ae,J,F,G,v.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,me),i.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function xe(E,v,F){let G=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=i.TEXTURE_3D);const Y=Ze(E,v),k=v.source;t.bindTexture(G,E.__webglTexture,i.TEXTURE0+F);const ge=n.get(k);if(k.version!==ge.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);const re=ke.getPrimaries(ke.workingColorSpace),me=v.colorSpace===mn?null:ke.getPrimaries(v.colorSpace),_e=v.colorSpace===mn||re===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Z=y(v.image,!1,r.maxTextureSize);Z=Ue(v,Z);const le=a.convert(v.format,v.colorSpace),Ae=a.convert(v.type);let be=T(v.internalFormat,le,Ae,v.colorSpace,v.isVideoTexture);Fe(G,v);let ne;const Pe=v.mipmaps,R=v.isVideoTexture!==!0,ae=ge.__version===void 0||Y===!0,J=k.dataReady,he=I(v,Z);if(v.isDepthTexture)be=M(v.format===Ei,v.type),ae&&(R?t.texStorage2D(i.TEXTURE_2D,1,be,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,be,Z.width,Z.height,0,le,Ae,null));else if(v.isDataTexture)if(Pe.length>0){R&&ae&&t.texStorage2D(i.TEXTURE_2D,he,be,Pe[0].width,Pe[0].height);for(let Q=0,q=Pe.length;Q<q;Q++)ne=Pe[Q],R?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ne.width,ne.height,le,Ae,ne.data):t.texImage2D(i.TEXTURE_2D,Q,be,ne.width,ne.height,0,le,Ae,ne.data);v.generateMipmaps=!1}else R?(ae&&t.texStorage2D(i.TEXTURE_2D,he,be,Z.width,Z.height),J&&te(v,Z,le,Ae)):t.texImage2D(i.TEXTURE_2D,0,be,Z.width,Z.height,0,le,Ae,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){R&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,be,Pe[0].width,Pe[0].height,Z.depth);for(let Q=0,q=Pe.length;Q<q;Q++)if(ne=Pe[Q],v.format!==Ht)if(le!==null)if(R){if(J)if(v.layerUpdates.size>0){const ue=Cs(ne.width,ne.height,v.format,v.type);for(const De of v.layerUpdates){const Qe=ne.data.subarray(De*ue/ne.data.BYTES_PER_ELEMENT,(De+1)*ue/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,De,ne.width,ne.height,1,le,Qe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ne.width,ne.height,Z.depth,le,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,be,ne.width,ne.height,Z.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ne.width,ne.height,Z.depth,le,Ae,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,be,ne.width,ne.height,Z.depth,0,le,Ae,ne.data)}else{R&&ae&&t.texStorage2D(i.TEXTURE_2D,he,be,Pe[0].width,Pe[0].height);for(let Q=0,q=Pe.length;Q<q;Q++)ne=Pe[Q],v.format!==Ht?le!==null?R?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ne.width,ne.height,le,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,be,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ne.width,ne.height,le,Ae,ne.data):t.texImage2D(i.TEXTURE_2D,Q,be,ne.width,ne.height,0,le,Ae,ne.data)}else if(v.isDataArrayTexture)if(R){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,be,Z.width,Z.height,Z.depth),J)if(v.layerUpdates.size>0){const Q=Cs(Z.width,Z.height,v.format,v.type);for(const q of v.layerUpdates){const ue=Z.data.subarray(q*Q/Z.data.BYTES_PER_ELEMENT,(q+1)*Q/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,Z.width,Z.height,1,le,Ae,ue)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,Ae,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,Z.width,Z.height,Z.depth,0,le,Ae,Z.data);else if(v.isData3DTexture)R?(ae&&t.texStorage3D(i.TEXTURE_3D,he,be,Z.width,Z.height,Z.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,Ae,Z.data)):t.texImage3D(i.TEXTURE_3D,0,be,Z.width,Z.height,Z.depth,0,le,Ae,Z.data);else if(v.isFramebufferTexture){if(ae)if(R)t.texStorage2D(i.TEXTURE_2D,he,be,Z.width,Z.height);else{let Q=Z.width,q=Z.height;for(let ue=0;ue<he;ue++)t.texImage2D(i.TEXTURE_2D,ue,be,Q,q,0,le,Ae,null),Q>>=1,q>>=1}}else if(Pe.length>0){if(R&&ae){const Q=ft(Pe[0]);t.texStorage2D(i.TEXTURE_2D,he,be,Q.width,Q.height)}for(let Q=0,q=Pe.length;Q<q;Q++)ne=Pe[Q],R?J&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,le,Ae,ne):t.texImage2D(i.TEXTURE_2D,Q,be,le,Ae,ne);v.generateMipmaps=!1}else if(R){if(ae){const Q=ft(Z);t.texStorage2D(i.TEXTURE_2D,he,be,Q.width,Q.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Ae,Z)}else t.texImage2D(i.TEXTURE_2D,0,be,le,Ae,Z);p(v)&&f(G),ge.__version=k.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ce(E,v,F){if(v.image.length!==6)return;const G=Ze(E,v),Y=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const k=n.get(Y);if(Y.version!==k.__version||G===!0){t.activeTexture(i.TEXTURE0+F);const ge=ke.getPrimaries(ke.workingColorSpace),re=v.colorSpace===mn?null:ke.getPrimaries(v.colorSpace),me=v.colorSpace===mn||ge===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const _e=v.isCompressedTexture||v.image[0].isCompressedTexture,Z=v.image[0]&&v.image[0].isDataTexture,le=[];for(let q=0;q<6;q++)!_e&&!Z?le[q]=y(v.image[q],!0,r.maxCubemapSize):le[q]=Z?v.image[q].image:v.image[q],le[q]=Ue(v,le[q]);const Ae=le[0],be=a.convert(v.format,v.colorSpace),ne=a.convert(v.type),Pe=T(v.internalFormat,be,ne,v.colorSpace),R=v.isVideoTexture!==!0,ae=k.__version===void 0||G===!0,J=Y.dataReady;let he=I(v,Ae);Fe(i.TEXTURE_CUBE_MAP,v);let Q;if(_e){R&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Pe,Ae.width,Ae.height);for(let q=0;q<6;q++){Q=le[q].mipmaps;for(let ue=0;ue<Q.length;ue++){const De=Q[ue];v.format!==Ht?be!==null?R?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,De.width,De.height,be,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,Pe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,0,0,De.width,De.height,be,ne,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue,Pe,De.width,De.height,0,be,ne,De.data)}}}else{if(Q=v.mipmaps,R&&ae){Q.length>0&&he++;const q=ft(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Pe,q.width,q.height)}for(let q=0;q<6;q++)if(Z){R?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,le[q].width,le[q].height,be,ne,le[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Pe,le[q].width,le[q].height,0,be,ne,le[q].data);for(let ue=0;ue<Q.length;ue++){const Qe=Q[ue].image[q].image;R?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,Qe.width,Qe.height,be,ne,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,Pe,Qe.width,Qe.height,0,be,ne,Qe.data)}}else{R?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,be,ne,le[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Pe,be,ne,le[q]);for(let ue=0;ue<Q.length;ue++){const De=Q[ue];R?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,0,0,be,ne,De.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ue+1,Pe,be,ne,De.image[q])}}}p(v)&&f(i.TEXTURE_CUBE_MAP),k.__version=Y.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ye(E,v,F,G,Y,k){const ge=a.convert(F.format,F.colorSpace),re=a.convert(F.type),me=T(F.internalFormat,ge,re,F.colorSpace),_e=n.get(v),Z=n.get(F);if(Z.__renderTarget=v,!_e.__hasExternalTextures){const le=Math.max(1,v.width>>k),Ae=Math.max(1,v.height>>k);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,k,me,le,Ae,v.depth,0,ge,re,null):t.texImage2D(Y,k,me,le,Ae,0,ge,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Be(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Y,Z.__webglTexture,0,ve(v)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Y,Z.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(E,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const G=v.depthTexture,Y=G&&G.isDepthTexture?G.type:null,k=M(v.stencilBuffer,Y),ge=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=ve(v);Be(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,k,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,k,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,k,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,E)}else{const G=v.textures;for(let Y=0;Y<G.length;Y++){const k=G[Y],ge=a.convert(k.format,k.colorSpace),re=a.convert(k.type),me=T(k.internalFormat,ge,re,k.colorSpace),_e=ve(v);F&&Be(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,me,v.width,v.height):Be(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,me,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,me,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(v.depthTexture);G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const Y=G.__webglTexture,k=ve(v);if(v.depthTexture.format===Mi)Be(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(v.depthTexture.format===Ei)Be(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function nt(E){const v=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=G}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const G=E.texture.mipmaps;G&&G.length>0?Re(v.__webglFramebuffer[0],E):Re(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=i.createRenderbuffer(),Ge(v.__webglDepthbuffer[G],E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,k)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ge(v.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(E,v,F){const G=n.get(E);v!==void 0&&ye(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&nt(E)}function Ve(E){const v=E.texture,F=n.get(E),G=n.get(v);E.addEventListener("dispose",w);const Y=E.textures,k=E.isWebGLCubeRenderTarget===!0,ge=Y.length>1;if(ge||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=v.version,s.memory.textures++),k){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let me=0;me<v.mipmaps.length;me++)F.__webglFramebuffer[re][me]=i.createFramebuffer()}else F.__webglFramebuffer[re]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)F.__webglFramebuffer[re]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ge)for(let re=0,me=Y.length;re<me;re++){const _e=n.get(Y[re]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),s.memory.textures++)}if(E.samples>0&&Be(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<Y.length;re++){const me=Y[re];F.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const _e=a.convert(me.format,me.colorSpace),Z=a.convert(me.type),le=T(me.internalFormat,_e,Z,me.colorSpace,E.isXRRenderTarget===!0),Ae=ve(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,le,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,F.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)ye(F.__webglFramebuffer[re][me],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,me);else ye(F.__webglFramebuffer[re],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,me=Y.length;re<me;re++){const _e=Y[re],Z=n.get(_e);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),Fe(i.TEXTURE_2D,_e),ye(F.__webglFramebuffer,E,_e,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),p(_e)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,G.__webglTexture),Fe(re,v),v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)ye(F.__webglFramebuffer[me],E,v,i.COLOR_ATTACHMENT0,re,me);else ye(F.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,re,0);p(v)&&f(re),t.unbindTexture()}E.depthBuffer&&nt(E)}function b(E){const v=E.textures;for(let F=0,G=v.length;F<G;F++){const Y=v[F];if(p(Y)){const k=A(E),ge=n.get(Y).__webglTexture;t.bindTexture(k,ge),f(k),t.unbindTexture()}}}const _t=[],We=[];function Je(E){if(E.samples>0){if(Be(E)===!1){const v=E.textures,F=E.width,G=E.height;let Y=i.COLOR_BUFFER_BIT;const k=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(E),re=v.length>1;if(re)for(let _e=0;_e<v.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const me=E.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);const Z=n.get(v[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,F,G,0,0,F,G,Y,i.NEAREST),c===!0&&(_t.length=0,We.length=0,_t.push(i.COLOR_ATTACHMENT0+_e),E.depthBuffer&&E.resolveDepthBuffer===!1&&(_t.push(k),We.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let _e=0;_e<v.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);const Z=n.get(v[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ve(E){return Math.min(r.maxSamples,E.samples)}function Be(E){const v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ee(E){const v=s.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function Ue(E,v){const F=E.colorSpace,G=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==fi&&F!==mn&&(ke.getTransfer(F)===Ke?(G!==Ht||Y!==Yt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function ft(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=it,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Be}function $u(i,e){function t(n,r=mn){let a;const s=ke.getTransfer(r);if(n===Yt)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ao)return i.BYTE;if(n===so)return i.SHORT;if(n===yi)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===co)return i.ALPHA;if(n===lo)return i.RGB;if(n===Ht)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===fo)return i.RED;if(n===Ba)return i.RED_INTEGER;if(n===ho)return i.RG;if(n===Ha)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===tr||n===nr||n===ir||n===rr)if(s===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===tr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===tr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===oa||n===ca||n===la)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===sa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ca)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===da||n===ha)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===fa||n===da)return s===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ha)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ua||n===pa||n===ma||n===va||n===ga||n===_a||n===xa||n===ya||n===Sa||n===Ma||n===Ea||n===Ta||n===ba||n===Aa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ua)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pa)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ma)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ga)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xa)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ma)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ea)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ar||n===Ra||n===wa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ar)return s===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ra)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uo||n===Ca||n===Pa||n===Da)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ar)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Da)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ju=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ep{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new St,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new on({vertexShader:Ju,fragmentShader:Qu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tp extends Fn{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,m=null,_=null;const y=new ep,p=t.getContextAttributes();let f=null,A=null;const T=[],M=[],I=new Le;let P=null;const w=new Ut;w.viewport=new ot;const U=new Ut;U.viewport=new ot;const S=[w,U],x=new yl;let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=T[W];return te===void 0&&(te=new Or,T[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=T[W];return te===void 0&&(te=new Or,T[W]=te),te.getGripSpace()},this.getHand=function(W){let te=T[W];return te===void 0&&(te=new Or,T[W]=te),te.getHandSpace()};function B(W){const te=M.indexOf(W.inputSource);if(te===-1)return;const xe=T[te];xe!==void 0&&(xe.update(W.inputSource,W.frame,l||s),xe.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",j);for(let W=0;W<T.length;W++){const te=M[W];te!==null&&(M[W]=null,T[W].disconnect(te))}C=null,V=null,y.reset(),e.setRenderTarget(f),m=null,u=null,h=null,r=null,A=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",K),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ce=null,ye=null;p.depth&&(ye=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=p.stencil?Ei:Mi,ce=p.stencil?Si:In);const Ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:a};h=new XRWebGLBinding(r,t),u=h.createProjectionLayer(Ge),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),A=new Nn(u.textureWidth,u.textureHeight,{format:Ht,type:Yt,depthTexture:new Ao(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const xe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Nn(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(W){for(let te=0;te<W.removed.length;te++){const xe=W.removed[te],ce=M.indexOf(xe);ce>=0&&(M[ce]=null,T[ce].disconnect(xe))}for(let te=0;te<W.added.length;te++){const xe=W.added[te];let ce=M.indexOf(xe);if(ce===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=M.length){M.push(xe),ce=Ge;break}else if(M[Ge]===null){M[Ge]=xe,ce=Ge;break}if(ce===-1)break}const ye=T[ce];ye&&ye.connect(xe)}}const X=new N,$=new N;function H(W,te,xe){X.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(xe.matrixWorld);const ce=X.distanceTo($),ye=te.projectionMatrix.elements,Ge=xe.projectionMatrix.elements,Re=ye[14]/(ye[10]-1),nt=ye[14]/(ye[10]+1),it=(ye[9]+1)/ye[5],Ve=(ye[9]-1)/ye[5],b=(ye[8]-1)/ye[0],_t=(Ge[8]+1)/Ge[0],We=Re*b,Je=Re*_t,ve=ce/(-b+_t),Be=ve*-b;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Be),W.translateZ(ve),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ye[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ee=Re+ve,Ue=nt+ve,ft=We-Be,E=Je+(ce-Be),v=it*nt/Ue*Ee,F=Ve*nt/Ue*Ee;W.projectionMatrix.makePerspective(ft,E,v,F,Ee,Ue),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,xe=W.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(xe=y.depthFar)),x.near=U.near=w.near=te,x.far=U.far=w.far=xe,(C!==x.near||V!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,V=x.far),w.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,x.layers.mask=w.layers.mask|U.layers.mask;const ce=W.parent,ye=x.cameras;oe(x,ce);for(let Ge=0;Ge<ye.length;Ge++)oe(ye[Ge],ce);ye.length===2?H(x,w,U):x.projectionMatrix.copy(w.projectionMatrix),de(W,x,ce)};function de(W,te,xe){xe===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(xe.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=La*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Se=null;function Fe(W,te){if(d=te.getViewerPose(l||s),_=te,d!==null){const xe=d.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let ce=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let Re=0;Re<xe.length;Re++){const nt=xe[Re];let it=null;if(m!==null)it=m.getViewport(nt);else{const b=h.getViewSubImage(u,nt);it=b.viewport,Re===0&&(e.setRenderTargetTextures(A,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(A))}let Ve=S[Re];Ve===void 0&&(Ve=new Ut,Ve.layers.enable(Re),Ve.viewport=new ot,S[Re]=Ve),Ve.matrix.fromArray(nt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(nt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(it.x,it.y,it.width,it.height),Re===0&&(x.matrix.copy(Ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(Ve)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Re=h.getDepthInformation(xe[0]);Re&&Re.isValid&&Re.texture&&y.init(e,Re,r.renderState)}}for(let xe=0;xe<T.length;xe++){const ce=M[xe],ye=T[xe];ce!==null&&ye!==void 0&&ye.update(ce,te,l||s)}Se&&Se(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ze=new wo;Ze.setAnimationLoop(Fe),this.setAnimationLoop=function(W){Se=W},this.dispose=function(){}}}const An=new sn,np=new ct;function ip(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Eo(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,A,T,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(p,f):f.isMeshToonMaterial?(a(p,f),h(p,f)):f.isMeshPhongMaterial?(a(p,f),d(p,f)):f.isMeshStandardMaterial?(a(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(a(p,f),_(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),y(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,A,T):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===bt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===bt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const A=e.get(f),T=A.envMap,M=A.envMapRotation;T&&(p.envMap.value=T,An.copy(M),An.x*=-1,An.y*=-1,An.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),p.envMapRotation.value.setFromMatrix4(np.makeRotationFromEuler(An)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,A,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*A,p.scale.value=T*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,A){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const A=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function rp(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const M=T.program;n.uniformBlockBinding(A,M)}function l(A,T){let M=r[A.id];M===void 0&&(_(A),M=d(A),r[A.id]=M,A.addEventListener("dispose",p));const I=T.program;n.updateUBOMapping(A,I);const P=e.render.frame;a[A.id]!==P&&(u(A),a[A.id]=P)}function d(A){const T=h();A.__bindingPointIndex=T;const M=i.createBuffer(),I=A.__size,P=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function h(){for(let A=0;A<o;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){const T=r[A.id],M=A.uniforms,I=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let P=0,w=M.length;P<w;P++){const U=Array.isArray(M[P])?M[P]:[M[P]];for(let S=0,x=U.length;S<x;S++){const C=U[S];if(m(C,P,S,I)===!0){const V=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let j=0;j<B.length;j++){const X=B[j],$=y(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,V+K,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,K),K+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,T,M,I){const P=A.value,w=T+"_"+M;if(I[w]===void 0)return typeof P=="number"||typeof P=="boolean"?I[w]=P:I[w]=P.clone(),!0;{const U=I[w];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return I[w]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function _(A){const T=A.uniforms;let M=0;const I=16;for(let w=0,U=T.length;w<U;w++){const S=Array.isArray(T[w])?T[w]:[T[w]];for(let x=0,C=S.length;x<C;x++){const V=S[x],B=Array.isArray(V.value)?V.value:[V.value];for(let K=0,j=B.length;K<j;K++){const X=B[K],$=y(X),H=M%I,oe=H%$.boundary,de=H+oe;M+=oe,de!==0&&I-de<$.storage&&(M+=I-de),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=$.storage}}}const P=M%I;return P>0&&(M+=I-P),A.__size=M,A.__cache={},this}function y(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const M=s.indexOf(T.__bindingPointIndex);s.splice(M,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete a[T.id]}function f(){for(const A in r)i.deleteBuffer(r[A]);s=[],r={},a={}}return{bind:c,update:l,dispose:f}}class ap{constructor(e={}){const{canvas:t=Lc(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const _=new Uint32Array(4),y=new Int32Array(4);let p=null,f=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let I=!1;this._outputColorSpace=It;let P=0,w=0,U=null,S=-1,x=null;const C=new ot,V=new ot;let B=null;const K=new qe(0);let j=0,X=t.width,$=t.height,H=1,oe=null,de=null;const Se=new ot(0,0,X,$),Fe=new ot(0,0,X,$);let Ze=!1;const W=new Wa;let te=!1,xe=!1;const ce=new ct,ye=new ct,Ge=new N,Re=new ot,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Ve(){return U===null?H:1}let b=n;function _t(g,D){return t.getContext(g,D)}try{const g={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",q,!1),b===null){const D="webgl2";if(b=_t(D,g),b===null)throw _t(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let We,Je,ve,Be,Ee,Ue,ft,E,v,F,G,Y,k,ge,re,me,_e,Z,le,Ae,be,ne,Pe,R;function ae(){We=new mh(b),We.init(),ne=new $u(b,We),Je=new ch(b,We,e,ne),ve=new ju(b,We),Je.reverseDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),Be=new _h(b),Ee=new Fu,Ue=new Zu(b,We,ve,Ee,Je,ne,Be),ft=new fh(M),E=new ph(M),v=new El(b),Pe=new sh(b,v),F=new vh(b,v,Be,Pe),G=new yh(b,F,v,Be),le=new xh(b,Je,Ue),me=new lh(Ee),Y=new Nu(M,ft,E,We,Je,Pe,me),k=new ip(M,Ee),ge=new zu,re=new Wu(We),Z=new ah(M,ft,E,ve,G,m,c),_e=new Yu(M,G,Je),R=new rp(b,Be,Je,ve),Ae=new oh(b,We,Be),be=new gh(b,We,Be),Be.programs=Y.programs,M.capabilities=Je,M.extensions=We,M.properties=Ee,M.renderLists=ge,M.shadowMap=_e,M.state=ve,M.info=Be}ae();const J=new tp(M,b);this.xr=J,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const g=We.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=We.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(g){g!==void 0&&(H=g,this.setSize(X,$,!1))},this.getSize=function(g){return g.set(X,$)},this.setSize=function(g,D,O=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=g,$=D,t.width=Math.floor(g*H),t.height=Math.floor(D*H),O===!0&&(t.style.width=g+"px",t.style.height=D+"px"),this.setViewport(0,0,g,D)},this.getDrawingBufferSize=function(g){return g.set(X*H,$*H).floor()},this.setDrawingBufferSize=function(g,D,O){X=g,$=D,H=O,t.width=Math.floor(g*O),t.height=Math.floor(D*O),this.setViewport(0,0,g,D)},this.getCurrentViewport=function(g){return g.copy(C)},this.getViewport=function(g){return g.copy(Se)},this.setViewport=function(g,D,O,z){g.isVector4?Se.set(g.x,g.y,g.z,g.w):Se.set(g,D,O,z),ve.viewport(C.copy(Se).multiplyScalar(H).round())},this.getScissor=function(g){return g.copy(Fe)},this.setScissor=function(g,D,O,z){g.isVector4?Fe.set(g.x,g.y,g.z,g.w):Fe.set(g,D,O,z),ve.scissor(V.copy(Fe).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(g){ve.setScissorTest(Ze=g)},this.setOpaqueSort=function(g){oe=g},this.setTransparentSort=function(g){de=g},this.getClearColor=function(g){return g.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor(...arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha(...arguments)},this.clear=function(g=!0,D=!0,O=!0){let z=0;if(g){let L=!1;if(U!==null){const ee=U.texture.format;L=ee===ka||ee===Ha||ee===Ba}if(L){const ee=U.texture.type,se=ee===Yt||ee===In||ee===yi||ee===Si||ee===Oa||ee===za,pe=Z.getClearColor(),fe=Z.getClearAlpha(),we=pe.r,Ce=pe.g,Me=pe.b;se?(_[0]=we,_[1]=Ce,_[2]=Me,_[3]=fe,b.clearBufferuiv(b.COLOR,0,_)):(y[0]=we,y[1]=Ce,y[2]=Me,y[3]=fe,b.clearBufferiv(b.COLOR,0,y))}else z|=b.COLOR_BUFFER_BIT}D&&(z|=b.DEPTH_BUFFER_BIT),O&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",q,!1),Z.dispose(),ge.dispose(),re.dispose(),Ee.dispose(),ft.dispose(),E.dispose(),G.dispose(),Pe.dispose(),R.dispose(),Y.dispose(),J.dispose(),J.removeEventListener("sessionstart",ja),J.removeEventListener("sessionend",Za),xn.stop()};function he(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const g=Be.autoReset,D=_e.enabled,O=_e.autoUpdate,z=_e.needsUpdate,L=_e.type;ae(),Be.autoReset=g,_e.enabled=D,_e.autoUpdate=O,_e.needsUpdate=z,_e.type=L}function q(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function ue(g){const D=g.target;D.removeEventListener("dispose",ue),De(D)}function De(g){Qe(g),Ee.remove(g)}function Qe(g){const D=Ee.get(g).programs;D!==void 0&&(D.forEach(function(O){Y.releaseProgram(O)}),g.isShaderMaterial&&Y.releaseShaderCache(g))}this.renderBufferDirect=function(g,D,O,z,L,ee){D===null&&(D=nt);const se=L.isMesh&&L.matrixWorld.determinant()<0,pe=Fo(g,D,O,z,L);ve.setMaterial(z,se);let fe=O.index,we=1;if(z.wireframe===!0){if(fe=F.getWireframeAttribute(O),fe===void 0)return;we=2}const Ce=O.drawRange,Me=O.attributes.position;let ze=Ce.start*we,Ye=(Ce.start+Ce.count)*we;ee!==null&&(ze=Math.max(ze,ee.start*we),Ye=Math.min(Ye,(ee.start+ee.count)*we)),fe!==null?(ze=Math.max(ze,0),Ye=Math.min(Ye,fe.count)):Me!=null&&(ze=Math.max(ze,0),Ye=Math.min(Ye,Me.count));const st=Ye-ze;if(st<0||st===1/0)return;Pe.setup(L,z,pe,O,fe);let et,$e=Ae;if(fe!==null&&(et=v.get(fe),$e=be,$e.setIndex(et)),L.isMesh)z.wireframe===!0?(ve.setLineWidth(z.wireframeLinewidth*Ve()),$e.setMode(b.LINES)):$e.setMode(b.TRIANGLES);else if(L.isLine){let Te=z.linewidth;Te===void 0&&(Te=1),ve.setLineWidth(Te*Ve()),L.isLineSegments?$e.setMode(b.LINES):L.isLineLoop?$e.setMode(b.LINE_LOOP):$e.setMode(b.LINE_STRIP)}else L.isPoints?$e.setMode(b.POINTS):L.isSprite&&$e.setMode(b.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)ri("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))$e.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Te=L._multiDrawStarts,rt=L._multiDrawCounts,He=L._multiDrawCount,At=fe?v.get(fe).bytesPerElement:1,zn=Ee.get(z).currentProgram.getUniforms();for(let Rt=0;Rt<He;Rt++)zn.setValue(b,"_gl_DrawID",Rt),$e.render(Te[Rt]/At,rt[Rt])}else if(L.isInstancedMesh)$e.renderInstances(ze,st,L.count);else if(O.isInstancedBufferGeometry){const Te=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,rt=Math.min(O.instanceCount,Te);$e.renderInstances(ze,st,rt)}else $e.render(ze,st)};function Xe(g,D,O){g.transparent===!0&&g.side===tn&&g.forceSinglePass===!1?(g.side=bt,g.needsUpdate=!0,Di(g,D,O),g.side=_n,g.needsUpdate=!0,Di(g,D,O),g.side=tn):Di(g,D,O)}this.compile=function(g,D,O=null){O===null&&(O=g),f=re.get(O),f.init(D),T.push(f),O.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),g!==O&&g.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();const z=new Set;return g.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ee=L.material;if(ee)if(Array.isArray(ee))for(let se=0;se<ee.length;se++){const pe=ee[se];Xe(pe,O,L),z.add(pe)}else Xe(ee,O,L),z.add(ee)}),f=T.pop(),z},this.compileAsync=function(g,D,O=null){const z=this.compile(g,D,O);return new Promise(L=>{function ee(){if(z.forEach(function(se){Ee.get(se).currentProgram.isReady()&&z.delete(se)}),z.size===0){L(g);return}setTimeout(ee,10)}We.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Nt=null;function Kt(g){Nt&&Nt(g)}function ja(){xn.stop()}function Za(){xn.start()}const xn=new wo;xn.setAnimationLoop(Kt),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(g){Nt=g,J.setAnimationLoop(g),g===null?xn.stop():xn.start()},J.addEventListener("sessionstart",ja),J.addEventListener("sessionend",Za),this.render=function(g,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(D),D=J.getCamera()),g.isScene===!0&&g.onBeforeRender(M,g,D,U),f=re.get(g,T.length),f.init(D),T.push(f),ye.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(ye),xe=this.localClippingEnabled,te=me.init(this.clippingPlanes,xe),p=ge.get(g,A.length),p.init(),A.push(p),J.enabled===!0&&J.isPresenting===!0){const ee=M.xr.getDepthSensingMesh();ee!==null&&ur(ee,D,-1/0,M.sortObjects)}ur(g,D,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(oe,de),it=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,it&&Z.addToRenderList(p,g),this.info.render.frame++,te===!0&&me.beginShadows();const O=f.state.shadowsArray;_e.render(O,g,D),te===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,L=p.transmissive;if(f.setupLights(),D.isArrayCamera){const ee=D.cameras;if(L.length>0)for(let se=0,pe=ee.length;se<pe;se++){const fe=ee[se];Ja(z,L,g,fe)}it&&Z.render(g);for(let se=0,pe=ee.length;se<pe;se++){const fe=ee[se];$a(p,g,fe,fe.viewport)}}else L.length>0&&Ja(z,L,g,D),it&&Z.render(g),$a(p,g,D);U!==null&&w===0&&(Ue.updateMultisampleRenderTarget(U),Ue.updateRenderTargetMipmap(U)),g.isScene===!0&&g.onAfterRender(M,g,D),Pe.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(f=T[T.length-1],te===!0&&me.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function ur(g,D,O,z){if(g.visible===!1)return;if(g.layers.test(D.layers)){if(g.isGroup)O=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(D);else if(g.isLight)f.pushLight(g),g.castShadow&&f.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||W.intersectsSprite(g)){z&&Re.setFromMatrixPosition(g.matrixWorld).applyMatrix4(ye);const se=G.update(g),pe=g.material;pe.visible&&p.push(g,se,pe,O,Re.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||W.intersectsObject(g))){const se=G.update(g),pe=g.material;if(z&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Re.copy(g.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Re.copy(se.boundingSphere.center)),Re.applyMatrix4(g.matrixWorld).applyMatrix4(ye)),Array.isArray(pe)){const fe=se.groups;for(let we=0,Ce=fe.length;we<Ce;we++){const Me=fe[we],ze=pe[Me.materialIndex];ze&&ze.visible&&p.push(g,se,ze,O,Re.z,Me)}}else pe.visible&&p.push(g,se,pe,O,Re.z,null)}}const ee=g.children;for(let se=0,pe=ee.length;se<pe;se++)ur(ee[se],D,O,z)}function $a(g,D,O,z){const L=g.opaque,ee=g.transmissive,se=g.transparent;f.setupLightsView(O),te===!0&&me.setGlobalState(M.clippingPlanes,O),z&&ve.viewport(C.copy(z)),L.length>0&&Pi(L,D,O),ee.length>0&&Pi(ee,D,O),se.length>0&&Pi(se,D,O),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ja(g,D,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Nn(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?bi:Yt,minFilter:Dn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace}));const ee=f.state.transmissionRenderTarget[z.id],se=z.viewport||C;ee.setSize(se.z*M.transmissionResolutionScale,se.w*M.transmissionResolutionScale);const pe=M.getRenderTarget(),fe=M.getActiveCubeFace(),we=M.getActiveMipmapLevel();M.setRenderTarget(ee),M.getClearColor(K),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),it&&Z.render(O);const Ce=M.toneMapping;M.toneMapping=gn;const Me=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),te===!0&&me.setGlobalState(M.clippingPlanes,z),Pi(g,O,z),Ue.updateMultisampleRenderTarget(ee),Ue.updateRenderTargetMipmap(ee),We.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ye=0,st=D.length;Ye<st;Ye++){const et=D[Ye],$e=et.object,Te=et.geometry,rt=et.material,He=et.group;if(rt.side===tn&&$e.layers.test(z.layers)){const At=rt.side;rt.side=bt,rt.needsUpdate=!0,Qa($e,O,z,Te,rt,He),rt.side=At,rt.needsUpdate=!0,ze=!0}}ze===!0&&(Ue.updateMultisampleRenderTarget(ee),Ue.updateRenderTargetMipmap(ee))}M.setRenderTarget(pe,fe,we),M.setClearColor(K,j),Me!==void 0&&(z.viewport=Me),M.toneMapping=Ce}function Pi(g,D,O){const z=D.isScene===!0?D.overrideMaterial:null;for(let L=0,ee=g.length;L<ee;L++){const se=g[L],pe=se.object,fe=se.geometry,we=se.group;let Ce=se.material;Ce.allowOverride===!0&&z!==null&&(Ce=z),pe.layers.test(O.layers)&&Qa(pe,D,O,fe,Ce,we)}}function Qa(g,D,O,z,L,ee){g.onBeforeRender(M,D,O,z,L,ee),g.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),L.onBeforeRender(M,D,O,z,g,ee),L.transparent===!0&&L.side===tn&&L.forceSinglePass===!1?(L.side=bt,L.needsUpdate=!0,M.renderBufferDirect(O,D,z,L,g,ee),L.side=_n,L.needsUpdate=!0,M.renderBufferDirect(O,D,z,L,g,ee),L.side=tn):M.renderBufferDirect(O,D,z,L,g,ee),g.onAfterRender(M,D,O,z,L,ee)}function Di(g,D,O){D.isScene!==!0&&(D=nt);const z=Ee.get(g),L=f.state.lights,ee=f.state.shadowsArray,se=L.state.version,pe=Y.getParameters(g,L.state,ee,D,O),fe=Y.getProgramCacheKey(pe);let we=z.programs;z.environment=g.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(g.isMeshStandardMaterial?E:ft).get(g.envMap||z.environment),z.envMapRotation=z.environment!==null&&g.envMap===null?D.environmentRotation:g.envMapRotation,we===void 0&&(g.addEventListener("dispose",ue),we=new Map,z.programs=we);let Ce=we.get(fe);if(Ce!==void 0){if(z.currentProgram===Ce&&z.lightsStateVersion===se)return ts(g,pe),Ce}else pe.uniforms=Y.getUniforms(g),g.onBeforeCompile(pe,M),Ce=Y.acquireProgram(pe,fe),we.set(fe,Ce),z.uniforms=pe.uniforms;const Me=z.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Me.clippingPlanes=me.uniform),ts(g,pe),z.needsLights=zo(g),z.lightsStateVersion=se,z.needsLights&&(Me.ambientLightColor.value=L.state.ambient,Me.lightProbe.value=L.state.probe,Me.directionalLights.value=L.state.directional,Me.directionalLightShadows.value=L.state.directionalShadow,Me.spotLights.value=L.state.spot,Me.spotLightShadows.value=L.state.spotShadow,Me.rectAreaLights.value=L.state.rectArea,Me.ltc_1.value=L.state.rectAreaLTC1,Me.ltc_2.value=L.state.rectAreaLTC2,Me.pointLights.value=L.state.point,Me.pointLightShadows.value=L.state.pointShadow,Me.hemisphereLights.value=L.state.hemi,Me.directionalShadowMap.value=L.state.directionalShadowMap,Me.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Me.spotShadowMap.value=L.state.spotShadowMap,Me.spotLightMatrix.value=L.state.spotLightMatrix,Me.spotLightMap.value=L.state.spotLightMap,Me.pointShadowMap.value=L.state.pointShadowMap,Me.pointShadowMatrix.value=L.state.pointShadowMatrix),z.currentProgram=Ce,z.uniformsList=null,Ce}function es(g){if(g.uniformsList===null){const D=g.currentProgram.getUniforms();g.uniformsList=or.seqWithValue(D.seq,g.uniforms)}return g.uniformsList}function ts(g,D){const O=Ee.get(g);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Fo(g,D,O,z,L){D.isScene!==!0&&(D=nt),Ue.resetTextureUnits();const ee=D.fog,se=z.isMeshStandardMaterial?D.environment:null,pe=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:fi,fe=(z.isMeshStandardMaterial?E:ft).get(z.envMap||se),we=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!O.morphAttributes.position,ze=!!O.morphAttributes.normal,Ye=!!O.morphAttributes.color;let st=gn;z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(st=M.toneMapping);const et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$e=et!==void 0?et.length:0,Te=Ee.get(z),rt=f.state.lights;if(te===!0&&(xe===!0||g!==x)){const xt=g===x&&z.id===S;me.setState(z,g,xt)}let He=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==rt.state.version||Te.outputColorSpace!==pe||L.isBatchedMesh&&Te.batching===!1||!L.isBatchedMesh&&Te.batching===!0||L.isBatchedMesh&&Te.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Te.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Te.instancing===!1||!L.isInstancedMesh&&Te.instancing===!0||L.isSkinnedMesh&&Te.skinning===!1||!L.isSkinnedMesh&&Te.skinning===!0||L.isInstancedMesh&&Te.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Te.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Te.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Te.instancingMorph===!1&&L.morphTexture!==null||Te.envMap!==fe||z.fog===!0&&Te.fog!==ee||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==me.numPlanes||Te.numIntersection!==me.numIntersection)||Te.vertexAlphas!==we||Te.vertexTangents!==Ce||Te.morphTargets!==Me||Te.morphNormals!==ze||Te.morphColors!==Ye||Te.toneMapping!==st||Te.morphTargetsCount!==$e)&&(He=!0):(He=!0,Te.__version=z.version);let At=Te.currentProgram;He===!0&&(At=Di(z,D,L));let zn=!1,Rt=!1,ui=!1;const tt=At.getUniforms(),Pt=Te.uniforms;if(ve.useProgram(At.program)&&(zn=!0,Rt=!0,ui=!0),z.id!==S&&(S=z.id,Rt=!0),zn||x!==g){ve.buffers.depth.getReversed()?(ce.copy(g.projectionMatrix),Uc(ce),Nc(ce),tt.setValue(b,"projectionMatrix",ce)):tt.setValue(b,"projectionMatrix",g.projectionMatrix),tt.setValue(b,"viewMatrix",g.matrixWorldInverse);const Mt=tt.map.cameraPosition;Mt!==void 0&&Mt.setValue(b,Ge.setFromMatrixPosition(g.matrixWorld)),Je.logarithmicDepthBuffer&&tt.setValue(b,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&tt.setValue(b,"isOrthographic",g.isOrthographicCamera===!0),x!==g&&(x=g,Rt=!0,ui=!0)}if(L.isSkinnedMesh){tt.setOptional(b,L,"bindMatrix"),tt.setOptional(b,L,"bindMatrixInverse");const xt=L.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),tt.setValue(b,"boneTexture",xt.boneTexture,Ue))}L.isBatchedMesh&&(tt.setOptional(b,L,"batchingTexture"),tt.setValue(b,"batchingTexture",L._matricesTexture,Ue),tt.setOptional(b,L,"batchingIdTexture"),tt.setValue(b,"batchingIdTexture",L._indirectTexture,Ue),tt.setOptional(b,L,"batchingColorTexture"),L._colorsTexture!==null&&tt.setValue(b,"batchingColorTexture",L._colorsTexture,Ue));const Dt=O.morphAttributes;if((Dt.position!==void 0||Dt.normal!==void 0||Dt.color!==void 0)&&le.update(L,O,At),(Rt||Te.receiveShadow!==L.receiveShadow)&&(Te.receiveShadow=L.receiveShadow,tt.setValue(b,"receiveShadow",L.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Pt.envMap.value=fe,Pt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Pt.envMapIntensity.value=D.environmentIntensity),Rt&&(tt.setValue(b,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&Oo(Pt,ui),ee&&z.fog===!0&&k.refreshFogUniforms(Pt,ee),k.refreshMaterialUniforms(Pt,z,H,$,f.state.transmissionRenderTarget[g.id]),or.upload(b,es(Te),Pt,Ue)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(or.upload(b,es(Te),Pt,Ue),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&tt.setValue(b,"center",L.center),tt.setValue(b,"modelViewMatrix",L.modelViewMatrix),tt.setValue(b,"normalMatrix",L.normalMatrix),tt.setValue(b,"modelMatrix",L.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const xt=z.uniformsGroups;for(let Mt=0,pr=xt.length;Mt<pr;Mt++){const yn=xt[Mt];R.update(yn,At),R.bind(yn,At)}}return At}function Oo(g,D){g.ambientLightColor.needsUpdate=D,g.lightProbe.needsUpdate=D,g.directionalLights.needsUpdate=D,g.directionalLightShadows.needsUpdate=D,g.pointLights.needsUpdate=D,g.pointLightShadows.needsUpdate=D,g.spotLights.needsUpdate=D,g.spotLightShadows.needsUpdate=D,g.rectAreaLights.needsUpdate=D,g.hemisphereLights.needsUpdate=D}function zo(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(g,D,O){const z=Ee.get(g);z.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ee.get(g.texture).__webglTexture=D,Ee.get(g.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:O,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,D){const O=Ee.get(g);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const Bo=b.createFramebuffer();this.setRenderTarget=function(g,D=0,O=0){U=g,P=D,w=O;let z=!0,L=null,ee=!1,se=!1;if(g){const fe=Ee.get(g);if(fe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(b.FRAMEBUFFER,null),z=!1;else if(fe.__webglFramebuffer===void 0)Ue.setupRenderTarget(g);else if(fe.__hasExternalTextures)Ue.rebindTextures(g,Ee.get(g.texture).__webglTexture,Ee.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const Me=g.depthTexture;if(fe.__boundDepthTexture!==Me){if(Me!==null&&Ee.has(Me)&&(g.width!==Me.image.width||g.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(g)}}const we=g.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(se=!0);const Ce=Ee.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?L=Ce[D][O]:L=Ce[D],ee=!0):g.samples>0&&Ue.useMultisampledRTT(g)===!1?L=Ee.get(g).__webglMultisampledFramebuffer:Array.isArray(Ce)?L=Ce[O]:L=Ce,C.copy(g.viewport),V.copy(g.scissor),B=g.scissorTest}else C.copy(Se).multiplyScalar(H).floor(),V.copy(Fe).multiplyScalar(H).floor(),B=Ze;if(O!==0&&(L=Bo),ve.bindFramebuffer(b.FRAMEBUFFER,L)&&z&&ve.drawBuffers(g,L),ve.viewport(C),ve.scissor(V),ve.setScissorTest(B),ee){const fe=Ee.get(g.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,O)}else if(se){const fe=Ee.get(g.texture),we=D;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,fe.__webglTexture,O,we)}else if(g!==null&&O!==0){const fe=Ee.get(g.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,fe.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(g,D,O,z,L,ee,se,pe=0){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Ee.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe){ve.bindFramebuffer(b.FRAMEBUFFER,fe);try{const we=g.textures[pe],Ce=we.format,Me=we.type;if(!Je.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=g.width-z&&O>=0&&O<=g.height-L&&(g.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+pe),b.readPixels(D,O,z,L,ne.convert(Ce),ne.convert(Me),ee))}finally{const we=U!==null?Ee.get(U).__webglFramebuffer:null;ve.bindFramebuffer(b.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(g,D,O,z,L,ee,se,pe=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Ee.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe)if(D>=0&&D<=g.width-z&&O>=0&&O<=g.height-L){ve.bindFramebuffer(b.FRAMEBUFFER,fe);const we=g.textures[pe],Ce=we.format,Me=we.type;if(!Je.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,ze),b.bufferData(b.PIXEL_PACK_BUFFER,ee.byteLength,b.STREAM_READ),g.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+pe),b.readPixels(D,O,z,L,ne.convert(Ce),ne.convert(Me),0);const Ye=U!==null?Ee.get(U).__webglFramebuffer:null;ve.bindFramebuffer(b.FRAMEBUFFER,Ye);const st=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Ic(b,st,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,ze),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ee),b.deleteBuffer(ze),b.deleteSync(st),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,D=null,O=0){const z=Math.pow(2,-O),L=Math.floor(g.image.width*z),ee=Math.floor(g.image.height*z),se=D!==null?D.x:0,pe=D!==null?D.y:0;Ue.setTexture2D(g,0),b.copyTexSubImage2D(b.TEXTURE_2D,O,0,0,se,pe,L,ee),ve.unbindTexture()};const Ho=b.createFramebuffer(),ko=b.createFramebuffer();this.copyTextureToTexture=function(g,D,O=null,z=null,L=0,ee=null){ee===null&&(L!==0?(ri("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let se,pe,fe,we,Ce,Me,ze,Ye,st;const et=g.isCompressedTexture?g.mipmaps[ee]:g.image;if(O!==null)se=O.max.x-O.min.x,pe=O.max.y-O.min.y,fe=O.isBox3?O.max.z-O.min.z:1,we=O.min.x,Ce=O.min.y,Me=O.isBox3?O.min.z:0;else{const Dt=Math.pow(2,-L);se=Math.floor(et.width*Dt),pe=Math.floor(et.height*Dt),g.isDataArrayTexture?fe=et.depth:g.isData3DTexture?fe=Math.floor(et.depth*Dt):fe=1,we=0,Ce=0,Me=0}z!==null?(ze=z.x,Ye=z.y,st=z.z):(ze=0,Ye=0,st=0);const $e=ne.convert(D.format),Te=ne.convert(D.type);let rt;D.isData3DTexture?(Ue.setTexture3D(D,0),rt=b.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ue.setTexture2DArray(D,0),rt=b.TEXTURE_2D_ARRAY):(Ue.setTexture2D(D,0),rt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,D.unpackAlignment);const He=b.getParameter(b.UNPACK_ROW_LENGTH),At=b.getParameter(b.UNPACK_IMAGE_HEIGHT),zn=b.getParameter(b.UNPACK_SKIP_PIXELS),Rt=b.getParameter(b.UNPACK_SKIP_ROWS),ui=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,et.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,et.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,we),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ce),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Me);const tt=g.isDataArrayTexture||g.isData3DTexture,Pt=D.isDataArrayTexture||D.isData3DTexture;if(g.isDepthTexture){const Dt=Ee.get(g),xt=Ee.get(D),Mt=Ee.get(Dt.__renderTarget),pr=Ee.get(xt.__renderTarget);ve.bindFramebuffer(b.READ_FRAMEBUFFER,Mt.__webglFramebuffer),ve.bindFramebuffer(b.DRAW_FRAMEBUFFER,pr.__webglFramebuffer);for(let yn=0;yn<fe;yn++)tt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ee.get(g).__webglTexture,L,Me+yn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ee.get(D).__webglTexture,ee,st+yn)),b.blitFramebuffer(we,Ce,se,pe,ze,Ye,se,pe,b.DEPTH_BUFFER_BIT,b.NEAREST);ve.bindFramebuffer(b.READ_FRAMEBUFFER,null),ve.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(L!==0||g.isRenderTargetTexture||Ee.has(g)){const Dt=Ee.get(g),xt=Ee.get(D);ve.bindFramebuffer(b.READ_FRAMEBUFFER,Ho),ve.bindFramebuffer(b.DRAW_FRAMEBUFFER,ko);for(let Mt=0;Mt<fe;Mt++)tt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Dt.__webglTexture,L,Me+Mt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Dt.__webglTexture,L),Pt?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xt.__webglTexture,ee,st+Mt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,xt.__webglTexture,ee),L!==0?b.blitFramebuffer(we,Ce,se,pe,ze,Ye,se,pe,b.COLOR_BUFFER_BIT,b.NEAREST):Pt?b.copyTexSubImage3D(rt,ee,ze,Ye,st+Mt,we,Ce,se,pe):b.copyTexSubImage2D(rt,ee,ze,Ye,we,Ce,se,pe);ve.bindFramebuffer(b.READ_FRAMEBUFFER,null),ve.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Pt?g.isDataTexture||g.isData3DTexture?b.texSubImage3D(rt,ee,ze,Ye,st,se,pe,fe,$e,Te,et.data):D.isCompressedArrayTexture?b.compressedTexSubImage3D(rt,ee,ze,Ye,st,se,pe,fe,$e,et.data):b.texSubImage3D(rt,ee,ze,Ye,st,se,pe,fe,$e,Te,et):g.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ee,ze,Ye,se,pe,$e,Te,et.data):g.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ee,ze,Ye,et.width,et.height,$e,et.data):b.texSubImage2D(b.TEXTURE_2D,ee,ze,Ye,se,pe,$e,Te,et);b.pixelStorei(b.UNPACK_ROW_LENGTH,He),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,At),b.pixelStorei(b.UNPACK_SKIP_PIXELS,zn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Rt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ui),ee===0&&D.generateMipmaps&&b.generateMipmap(rt),ve.unbindTexture()},this.copyTextureToTexture3D=function(g,D,O=null,z=null,L=0){return ri('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(g,D,O,z,L)},this.initRenderTarget=function(g){Ee.get(g).__webglFramebuffer===void 0&&Ue.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?Ue.setTextureCube(g,0):g.isData3DTexture?Ue.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?Ue.setTexture2DArray(g,0):Ue.setTexture2D(g,0),ve.unbindTexture()},this.resetState=function(){P=0,w=0,U=null,ve.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}const eo={type:"change"},Ya={type:"start"},Io={type:"end"},er=new go,to=new pn,sp=Math.cos(70*Dc.DEG2RAD),dt=new N,Tt=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yr=1e-6;class op extends Sl{constructor(e,t=null){super(e,t),this.state=je.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ni.ROTATE,MIDDLE:ni.DOLLY,RIGHT:ni.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Un,this._lastTargetPosition=new N,this._quat=new Un().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ws,this._sphericalDelta=new ws,this._scale=1,this._panOffset=new N,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new N,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lp.bind(this),this._onPointerDown=cp.bind(this),this._onPointerUp=fp.bind(this),this._onContextMenu=gp.bind(this),this._onMouseWheel=up.bind(this),this._onKeyDown=pp.bind(this),this._onTouchStart=mp.bind(this),this._onTouchMove=vp.bind(this),this._onMouseDown=dp.bind(this),this._onMouseMove=hp.bind(this),this._interceptControlDown=_p.bind(this),this._interceptControlUp=xp.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eo),this.update(),this.state=je.NONE}update(e=null){const t=this.object.position;dt.copy(t).sub(this.target),dt.applyQuaternion(this._quat),this._spherical.setFromVector3(dt),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Tt:n>Math.PI&&(n-=Tt),r<-Math.PI?r+=Tt:r>Math.PI&&(r-=Tt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(dt.setFromSpherical(this._spherical),dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=dt.length();s=this._clampDistance(o*this._scale);const c=o-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),s=dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(er.origin.copy(this.object.position),er.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(er.direction))<sp?this.object.lookAt(this.target):(to.setFromNormalAndCoplanarPoint(this.object.up,this.target),er.intersectPlane(to,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Yr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yr||this._lastTargetPosition.distanceToSquared(this.target)>Yr?(this.dispatchEvent(eo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tt/60*this.autoRotateSpeed*e:Tt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dt.setFromMatrixColumn(t,0),dt.multiplyScalar(-e),this._panOffset.add(dt)}_panUp(e,t){this.screenSpacePanning===!0?dt.setFromMatrixColumn(t,1):(dt.setFromMatrixColumn(t,0),dt.crossVectors(this.object.up,dt)),dt.multiplyScalar(e),this._panOffset.add(dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;dt.copy(r).sub(this.target);let a=dt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,s=n.width,o=n.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Tt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Tt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Tt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Tt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Tt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Tt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function cp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function lp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fp(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Io),this.state=je.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function dp(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=je.DOLLY;break;case ni.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}break;case ni.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Ya)}function hp(i){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function up(i){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(i.preventDefault(),this.dispatchEvent(Ya),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Io))}function pp(i){this.enabled!==!1&&this._handleKeyDown(i)}function mp(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=je.TOUCH_ROTATE;break;case ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=je.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Ya)}function vp(i){switch(this._trackPointer(i),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=je.NONE}}function gp(i){this.enabled!==!1&&i.preventDefault()}function _p(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xp(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var yp=`#ifndef RAYMARCH_DISTANCES\r
#define RAYMARCH_DISTANCES

float fPlane(vec3 p) { return p.y; }\r
float fPlane(vec3 p, vec3 n){ return dot(n, p); }\r
float fSphere(vec3 p, float s) { return length(p)-s; }\r
float fBox(vec3 p, vec3 b) {\r
    vec3 d = abs(p) - b;\r
    return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));\r
}\r
float fEllipsoid(vec3 p, vec3 r) { return (length( p/r ) - 1.0) * min(min(r.x,r.y),r.z); }\r
float uRoundBox(vec3 p, vec3 b, float r) { return length(max(abs(p)-b,0.0))-r; }\r
float fRoundBox(vec3 p, vec3 b, float r) { return length(max(abs(p)-b+vec3(r),0.0))-r; }\r
float fTorus(vec3 p, vec2 t) { return length( vec2(length(p.xz)-t.x,p.y) )-t.y; }\r
float fHexPrism(vec3 p, vec2 h) {\r
    vec3 q = abs(p);\r
#if 0\r
    return max(q.z-h.y,max((q.x*0.866025+q.y*0.5),q.y)-h.x);\r
#else\r
    float d1 = q.z-h.y;\r
    float d2 = max((q.x*0.866025+q.y*0.5),q.y)-h.x;\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
#endif\r
}\r
float fCapsule(vec3 p, vec3 a, vec3 b, float r) {\r
	vec3 pa = p-a, ba = b-a;\r
	float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\r
	return length( pa - ba*h ) - r;\r
}\r
float fEquilateralTriangle(vec2 p) {\r
    const float k = 1.73205;
    p.x = abs(p.x) - 1.0;\r
    p.y = p.y + 1.0/k;\r
    if( p.x + k*p.y > 0.0 ) p = vec2( p.x - k*p.y, -k*p.x - p.y )/2.0;\r
    p.x += 2.0 - 2.0*clamp( (p.x+2.0)/2.0, 0.0, 1.0 );\r
    return -length(p)*sign(p.y);\r
}\r
float fTriPrism(vec3 p, vec2 h) {\r
    vec3 q = abs(p);\r
    float d1 = q.z-h.y;\r
#if 1\r
    
    float d2 = max(q.x*0.866025+p.y*0.5,-p.y)-h.x*0.5;\r
#else\r
    
    h.x *= 0.866025;\r
    float d2 = fEquilateralTriangle(p.xy/h.x)*h.x;\r
#endif\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
}\r
float fCylinder(vec3 p, vec2 h) {\r
  vec2 d = abs(vec2(length(p.xz),p.y)) - h;\r
  return min(max(d.x,d.y),0.0) + length(max(d,0.0));\r
}\r
float fCone(vec3 p, vec3 c) {\r
    vec2 q = vec2( length(p.xz), p.y );\r
    float d1 = -q.y-c.z;\r
    float d2 = max( dot(q,c.xy), q.y);\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
}\r
float fConeSection(vec3 p, float h, float r1, float r2) {\r
    float d1 = -p.y - h;\r
    float q = p.y - h;\r
    float si = 0.5*(r1-r2)/h;\r
    float d2 = max( sqrt( dot(p.xz,p.xz)*(1.0-si*si)) + q*si - r2, q );\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
}\r
float fPryamid4(vec3 p, vec3 h) {\r
    
    
    float box = fBox( p - vec3(0,-2.0*h.z,0), vec3(2.0*h.z) );\r
    float d = 0.0;\r
    d = max( d, abs( dot(p, vec3( -h.x, h.y, 0 )) ));\r
    d = max( d, abs( dot(p, vec3(  h.x, h.y, 0 )) ));\r
    d = max( d, abs( dot(p, vec3(  0, h.y, h.x )) ));\r
    d = max( d, abs( dot(p, vec3(  0, h.y,-h.x )) ));\r
    float octa = d - h.z;\r
    return max(-box,octa); 
}\r
float length2(vec2 p) { return sqrt( p.x*p.x + p.y*p.y ); }\r
float length6(vec2 p) {\r
	p = p*p*p; p = p*p;\r
	return pow( p.x + p.y, 1.0/6.0 );\r
}\r
float length8(vec2 p) {\r
	p = p*p; p = p*p; p = p*p;\r
	return pow( p.x + p.y, 1.0/8.0 );\r
}\r
float fTorus82(vec3 p, vec2 t) {\r
    vec2 q = vec2(length2(p.xz)-t.x,p.y);\r
    return length8(q)-t.y;\r
}\r
float fTorus88(vec3 p, vec2 t) {\r
    vec2 q = vec2(length8(p.xz)-t.x,p.y);\r
    return length8(q)-t.y;\r
}\r
float fCylinder6(vec3 p, vec2 h) { return max( length6(p.xz)-h.x, abs(p.y)-h.y ); }

float fSinusoidalPlasma(vec3 p) { return sin(p.x)*cos(p.y)*sin(p.z) + 0.5*sin(p.x*2.0)*cos(p.y*2.0)*sin(p.z*2.0); }\r
float fsmin(float a, float b, float k) {\r
    
	float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);\r
	return mix(b, a, h) - k*h*(1.0-h);\r
}\r
#if 1\r
float fsmax(float a, float b, float k) {\r
    
	float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);\r
	return mix(a, b, h) + k*h*(1.0-h);\r
}\r
#else\r
float fsmax(float a, float b, float k) {\r
    
	float h = clamp(0.5 + 0.5*(a-b)/k, 0.0, 1.0);\r
	return mix(b, a, h) + k*h*(1.0-h);\r
    
}\r
#endif

float fUnion( const in float f1, const in float f2 )\r
{\r
	return mix(f1, f2, step(f2, f1));\r
}\r
float fIntersect( const in float f1, const in float f2 )\r
{\r
	return mix(f2, f1, step(f2, f1));\r
}\r
float fSubtract( const in float f1, const in float f2 )\r
{\r
	return fIntersect(f1, -f2);\r
}\r
float fDisplace( const in float f1, const in float ds )\r
{\r
	return f1+ds;\r
}\r
float fSmoothPoly( const in float a, const in float b, const in float k ) 
{\r
	float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );\r
	return mix( b, a, h ) - k*h*(1.0-h);\r
}\r
float fSmoothExp( const in float a, const in float b, const in float k ) 
{\r
	float res = exp( -k*a ) + exp( -k*b );\r
	return -log( res )/k;\r
}\r
float fSmoothPow( const in float a, const in float b, const in float k ) 
{\r
	float aa = pow( a, k );\r
	float bb = pow( b, k );\r
	return pow( (aa*bb) / (aa+bb), 1.0/k );\r
}\r
float fNoise( const in vec2 p )\r
{\r
	vec2 s = sin(p * 0.6345) + sin(p * 1.62423);\r
	return dot(s, vec2(0.125)) + 0.5;\r
}

vec2 dUnion(vec2 d1, vec2 d2) { return mix(d1, d2, step(d2.x, d1.x)); }\r
vec2 dIntersect(vec2 d1, vec2 d2) { return mix(d2, d1, step(d2.x, d1.x)); }\r
vec2 dSubtract(vec2 d1, vec2 d2) { return dIntersect(d1, vec2(-d2.x, d2.y)); }

vec2 dDisplace(vec2 d1, float ds) { return vec2(d1.x + ds, d1.y); }\r
vec2 dSmoothUnion(vec2 d1, vec2 d2, float k) {\r
    
	float f = fsmin( d1.x, d2.x, k );\r
	float m = mix( d1.y, d2.y, step(d2.x, d1.x) );\r
	return vec2(f, m);\r
}\r
vec2 dSmoothIntersect(vec2 d1, vec2 d2, float k) {\r
    
	float f = fsmax( d1.x, d2.x, k );\r
	float m = mix( d1.y, d2.y, step(d1.x, d2.x) );\r
	return vec2(f, m);\r
}\r
vec2 dSmoothSubtract(vec2 d1, vec2 d2, float k) { return dSmoothIntersect(d1, vec2(-d2.x, d2.y), k); }

vec4 dUnion( const in vec4 d1, const in vec4 d2 )\r
{\r
	return mix(d1, d2, step(d2.x, d1.x));\r
}\r
vec4 dIntersect( const in vec4 d1, const in vec4 d2 )\r
{\r
	return mix(d2, d1, step(d2.x,d1.x));\r
}\r
vec4 dSubtract( const in vec4 d1, const in vec4 d2 )\r
{\r
	return dIntersect(d1, vec4(-d2.x, d2.yzw));\r
}\r
vec4 dDisplace( const in vec4 d1, const in float ds )

{\r
	return vec4( d1.x+ds, d1.yzw );\r
}\r
vec4 dBlend( const in vec4 d1, const in vec4 d2, const in float k )

{\r
	float fdist = fSmoothPoly( d1.x, d2.x, k );\r
	vec3 vmat = mix( d1.yzw, d2.yzw, step(d2.x, d1.x) );\r
	return vec4( fdist, vmat );\r
}

vec3 sRepeat(vec3 p, vec3 spacing) {\r
    
    
	vec3 q = p - 0.5*spacing;\r
	return mod(q, spacing) - 0.5*spacing;\r
}\r
vec3 sTwist(vec3 p, float angle) {\r
    
	float c = cos( angle*p.y );\r
	float s = sin( angle*p.y );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 twist = m*p.zx;\r
	return vec3( twist.y, p.y, twist.x );\r
}\r
vec3 sTwistY(vec3 p, float angle) {\r
    
	return sTwist( p, angle );\r
}\r
vec3 sTwistZ(vec3 p, float angle) {\r
    
	vec3 q = p.yzx;\r
	q = sTwist( q, angle );\r
	return q.zxy;\r
}\r
vec3 sTwistX(vec3 p, float angle) {\r
    
	vec3 q = p.zxy;\r
	q = sTwist( q, angle );\r
	return q.yzx;\r
}\r
vec3 sTranslate(vec3 p, vec3 t) { return p - t; }\r
vec3 sRotateX(vec3 p, float angle) {\r
	float s = sin(angle);\r
	float c = cos(angle);\r
	return vec3( p.x, c*p.y+s*p.z, -s*p.y+c*p.z );\r
}\r
vec3 sRotateY(vec3 p, float angle) {\r
	
    float s = -sin(angle);\r
	float c = cos(angle);\r
	return vec3( c*p.x+s*p.z, p.y, -s*p.x+c*p.z );\r
}\r
vec3 sRotateZ(vec3 p, float angle) {\r
	float s = sin(angle);\r
	float c = cos(angle);\r
	return vec3( c*p.x+s*p.y, -s*p.x+c*p.y, p.z );\r
}

vec3 sCheapBendY(vec3 p, float angle) {\r
    
	float c = cos( angle*p.x );\r
	float s = sin( angle*p.x );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 b = m*p.zx;\r
	return vec3( b.y, p.y, b.x );\r
}\r
vec3 sCheapBendZ(vec3 p, float angle) {\r
    
	float c = cos( angle*p.y );\r
	float s = sin( angle*p.y );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 b = m*p.xy;\r
	return vec3( b.x, b.y, p.z );\r
}\r
vec3 sCheapBendX(vec3 p, float angle) {\r
    
	float c = cos( angle*p.z );\r
	float s = sin( angle*p.z );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 b = m*p.yz;\r
	return vec3( p.x, b.x, b.y );\r
}

#define EPS             0.001   
#define MAX_RAY_ITER    512     
#define MIN_RAY_DIST    0.02    
#define MAX_RAY_DIST    64.0    
#define MAX_SHADOW_ITER 64      
#define MIN_SHADOW_DIST 0.005   
#define MAX_SHADOW_DIST 10.0    

vec2 sceneMap( in vec3 p );

float sceneShadow( in vec3 ro, in vec3 rd, in float tmin, in float tmax, in float k )

{\r
	float shade = 1.0;\r
    float t = tmin;\r
    for(int i = 0; i < MAX_SHADOW_ITER; i++)\r
    {\r
        float h = sceneMap(ro + rd * t).x;\r
        shade = min( shade, k * h / t );\r
        t += clamp( h, 0.5, 1.0 );\r
        if( h < EPS || t > tmax ) break;\r
    }\r
    return min( max(shade, 0.0) + 0.1, 1.0 ); 
}\r
float sceneShadow( in vec3 ro, in vec3 rd )\r
{\r
    return sceneShadow( ro, rd, MIN_SHADOW_DIST, MAX_RAY_DIST*0.5, 64.0 ); 
}

float sceneShadow( in vec3 ro, in vec3 rd, float tmin, float k )

{\r
    float shade = 1.0;\r
    float t = tmin;\r
    for(int i=0; i<40; i++)\r
    {\r
        float h = sceneMap(ro + rd*t).x;\r
        shade = min( shade, smoothstep(0.0, 1.0, k*h/t) );\r
		t += clamp( h, 0.05, 0.5 );\r
		if( h < 0.0001 ) break;\r
    }\r
    return clamp(shade, 0.0, 1.0);\r
}

float sceneAO( in vec3 p, in vec3 n )\r
{\r
    float ao = 0.0;\r
    float s = 1.0;\r
    for(int i = 0; i < 6; i++)\r
    {\r
        float off = 0.001 + 0.2 * float(i)/5.0;\r
        float t = sceneMap( n * off + p ).x;\r
        ao += ( off - t ) * s;\r
        s *= 0.4;\r
    }\r
    return smoothstep( 0.0, 1.0, clamp(1.0-12.0*ao, 0.0, 1.0) );\r
}

vec3 sceneNormal( in vec3 p )\r
{\r
    vec3 eps = vec3(EPS, 0.0, 0.0);\r
    vec3 n = vec3(\r
            sceneMap(p + eps.xyy).x - sceneMap(p - eps.xyy).x,\r
            sceneMap(p + eps.yxy).x - sceneMap(p - eps.yxy).x,\r
            sceneMap(p + eps.yyx).x - sceneMap(p - eps.yyx).x);\r
    return normalize(n);\r
}

vec3 sceneNormal( in vec3 p, in float t )\r
{\r
    vec2 eps = vec2( 0.005*t, 0.0 );\r
	return normalize( vec3(\r
            sceneMap(p + eps.xyy).x - sceneMap(p - eps.xyy).x,\r
            sceneMap(p + eps.yxy).x - sceneMap(p - eps.yxy).x,\r
            sceneMap(p + eps.yyx).x - sceneMap(p - eps.yyx).x ) );\r
}

float rayTracing( in vec3 ro, in vec3 rd, in float tmin, in float tmax, in float mfac )\r
{\r
    float t = tmin;\r
	for(int i = 0; i < MAX_RAY_ITER; i++)\r
	{\r
		float d = sceneMap( ro + rd*t ).x;\r
		if( d < EPS || t > tmax ) break;\r
        t += mfac * d; 
	}\r
	return t;\r
}

vec2 rayMarching( in vec3 ro, in vec3 rd, float tmin, float tmax )

{\r
    float m = -1.0;\r
    float t = tmin;\r
    for(int i = 0; i < MAX_RAY_ITER; i++)\r
    {\r
        vec2 d = sceneMap( ro + rd*t );\r
        if( d.x < EPS || t > tmax ) break;\r
        t += d.x;\r
        m = d.y;\r
    }\r
    if( t > tmax ) m = -1.0;\r
    return vec2(t, m);\r
}

vec2 rayMarching( in vec3 ro, in vec3 rd )\r
{\r
    return rayMarching( ro, rd, MIN_RAY_DIST, MAX_RAY_DIST );\r
}

float bisectTracing( in vec3 ro, in vec3 rd, in float tmin, in float tmax )\r
{\r
    float t = tmin, told = tmin, mid, dn;\r
    float d = sceneMap(ro + rd*t).x;\r
    float sgn = sign(d);\r
    for(int i=0; i<80; i++)\r
    {\r
        if( sign(d) != sgn || d < EPS || t > tmax ) break;\r
        told = t;\r
        t += step(-1.0, -d)*(log(abs(d) + 1.1)*0.7 - d*0.7) + d*0.7;\r
        d = sceneMap(ro + rd*t).x;\r
    }\r
    if( sign(d) != sgn )\r
    {\r
        dn = sign( sceneMap(ro + rd*told).x );\r
        vec2 iv = vec2(told, t);\r
        for(int ii=0; ii<8; ii++)\r
        {\r
            mid = dot(iv, vec2(0.5));\r
            float d = sceneMap(ro + rd*mid).x;\r
            if( abs(d) < EPS ) break;\r
            iv = mix( vec2(iv.x, mid), vec2(mid, iv.y), step(0.0, d*dn) );\r
        }\r
        t = mid;\r
    }\r
    return t;\r
}

vec2 bisectMarching( in vec3 ro, in vec3 rd, in float tmin, in float tmax )

{\r
    float m = -1.0;\r
    float t = tmin, told = tmin, mid, dn;\r
    vec2 d = sceneMap(ro + rd*t); m = d.y;\r
    float sgn = sign(d.x);\r
    for(int i=0; i<80; i++)\r
    {\r
        if( sign(d.x) != sgn || d.x < EPS || t > tmax ) break;\r
        told = t;\r
        t += step(-1.0, -d.x)*(log(abs(d.x) + 1.1)*0.7 - d.x*0.7) + d.x*0.7;\r
        d = sceneMap(ro + rd*t); m = d.y;\r
    }\r
    if( sign(d.x) != sgn )\r
    {\r
        dn = sign( sceneMap(ro + rd*told).x );\r
        vec2 iv = vec2(told, t);\r
        for(int ii=0; ii<8; ii++)\r
        {\r
            mid = dot(iv, vec2(0.5));\r
            vec2 d = sceneMap(ro + rd*mid); m = d.y;\r
            if( abs(d.x) < EPS ) break;\r
            iv = mix( vec2(iv.x, mid), vec2(mid, iv.y), step(0.0, d.x*dn) );\r
        }\r
        t = mid;\r
    }\r
    return vec2(t, m);\r
}

mat3 cameraMatrix( vec3 ro, vec3 ta )\r
{\r
    vec3 cw = normalize( ta - ro );\r
    vec3 cu = normalize( cross(cw, vec3(0.0, 1.0, 0.0)) );\r
    vec3 cv = normalize( cross(cu, cw) );\r
    return mat3(cu, cv, cw);\r
}

#endif

precision mediump float;

varying vec2 vUv;

uniform float time;\r
uniform mat4 cameraWorldMatrix;\r
uniform mat4 cameraProjectionMatrixInverse;\r
uniform sampler2D textureMaps[2];

const vec3 lightDir = vec3(1,1,1);\r
const vec3 lightColor = vec3(1.0);

#define SKY_COLOR vec3(0.529, 0.808, 0.922)\r
#define GROUND  1.0\r
#define RED     2.0\r
#define GREEN   3.0\r
#define BLUE    4.0

vec2 primitivesScene( vec3 p )\r
{\r
    
    vec2 result = vec2( fPlane( p ), GROUND );

    
    vec3 c = vec3( 0.0, 2.0 + 0.5*sin(time), 0.0 );\r
    vec2 d1 = vec2( fSphere( p-c, 1.0 ), RED );\r
    result = dUnion( result, d1 );

    
    vec2 d3 = vec2( fBox( p-vec3(0,1,0), vec3(1) ), GREEN );\r
    result = dUnion( result, d3 );

    
    vec2 d2 = vec2( fSphere( p-vec3(1,1,0), 1.0 ), BLUE );\r
    result = dSubtract( result, d2 );

    return result;\r
}\r
vec2 spheresScene( vec3 p )\r
{\r
    vec2 result = vec2( fPlane(p), GROUND );

    vec3 q = sRepeat(p, vec3(6,6,6));

    vec2 d2 = vec2( fSphere( q, 1.0 ), GREEN );\r
    result = dUnion( result, d2 );

    return result;\r
}

vec2 sceneMap( vec3 p )\r
{\r
    
    return spheresScene( p );\r
}

vec3 materialColor( float mtlID, vec3 p )\r
{\r
    if( mtlID == GROUND )\r
        return vec3(0.5) * texture( textureMaps[0], p.xz/20.0 ).rgb;\r
    else if( mtlID == RED )\r
        return vec3(1,0,0);\r
    else if( mtlID == GREEN )\r
        return vec3(0,1,0);\r
    else if( mtlID == BLUE )\r
        return vec3(0,0,1);\r
    else\r
        return vec3(0.0);\r
}

vec3 getPhongShading( in vec3 col, in float s, in vec3 ld, in vec3 lc, in vec3 p, in vec3 n, in vec3 rd )

{\r
    float lfactor = 1.0;\r
    vec3 v = -rd;\r
    vec3 h = normalize(ld + v);\r
    float amb = 0.01;\r
    float diff = max(dot(ld,n),0.0);\r
    float spec = pow(max(dot(n,h),0.0), s);

    return col*amb + (col*diff + spec) * lc * lfactor;

    
    
    
    
    
    
    
    
    
}

vec3 getLighting( vec3 p, vec3 n, vec3 ld, vec3 lc, vec3 rd, float mtlID )\r
{\r
    float shadow = sceneShadow(p, ld, 0.1, 10.0);\r
    float ao = sceneAO(p, n);

    float shininess = 32.0;\r
    vec3 color;

    vec3 mtlCol = materialColor( mtlID, p );\r
    if( mtlID == GROUND )\r
    {\r
        color = mtlCol;\r
    }\r
    else\r
    {\r
        color = getPhongShading( mtlCol, shininess, ld, lc, p, n, rd );\r
    }\r
    color *= (shadow * ao);\r
    return color;\r
}

vec3 render( vec3 ro, vec3 rd )\r
{\r
    
    
    

    vec2 t = rayMarching( ro, rd, 0.0, MAX_RAY_DIST );\r
    
    
    float mtlID = t.y;

    if( t.x > MAX_RAY_DIST )\r
    {\r
        return SKY_COLOR; 
    }

    vec3 ld = normalize(lightDir);\r
    vec3 lc = lightColor;

	vec3 p = ro + rd * t.x;\r
    vec3 n = ( mtlID == GROUND ) ? vec3(0,1,0) : sceneNormal( p );\r
    vec3 color = getLighting( p, n, ld, lc, rd, mtlID );

    
    
    

    vec3 r = reflect(rd, n);\r
    t = rayMarching( p, r, 0.1, MAX_RAY_DIST );\r
    if( t.x < MAX_RAY_DIST )\r
    {\r
        mtlID = t.y;\r
        p = p + r * t.x;\r
        n = sceneNormal( p );\r
        color += getLighting( p, n, ld, lc, r, mtlID );\r
    }\r
    else\r
    {\r
        if( mtlID != GROUND ) color += SKY_COLOR;\r
    }

    return color;\r
}

void main()\r
{\r
    vec2 uv = vUv.xy;

    vec3 ro = cameraPosition;\r
    vec3 rd = ( cameraProjectionMatrixInverse * vec4( uv*2.0 - 1.0, 0.0, 1.0 ) ).xyz;\r
    rd = ( cameraWorldMatrix * vec4( rd, 0.0 ) ).xyz;\r
    rd = normalize( rd );

    vec3 color = render( ro, rd );\r
    color = pow( color, vec3(1.0/2.2) ); 

    gl_FragColor = vec4( color, 1.0 );\r
}`,Uo=`#ifndef RAYMARCH_INCLUDE\r
#define RAYMARCH_INCLUDE

#define gl_FragCoord     (gl_FragCoord / devicePixelRatio)

#define PI 3.14159265359\r
#define PI2 6.28318530718\r
#define PI_HALF 1.5707963267949\r
#define RECIPROCAL_PI 0.31830988618\r
#define RECIPROCAL_PI2 0.15915494\r
#define LOG2 1.442695\r
#define EPSILON 1e-6

#define saturate(a) clamp( a, 0.0, 1.0 )\r
#define whiteCompliment(a) ( 1.0 - saturate( a ) )

uniform float devicePixelRatio;\r
uniform float time;\r
uniform vec2 resolution;\r
uniform float cameraNear;\r
uniform float cameraFar;

uniform mat4 cameraWorldMatrix;\r
uniform mat4 cameraProjectionMatrixInverse;\r
uniform sampler2D textureMaps[4];

float getGrey( vec3 p ){ return p.x*0.299 + p.y*0.587 + p.z*0.114; }

vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\r
    return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\r
}

vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\r
    return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\r
}

float getFragDepth( vec3 fragPosW )

{\r
    vec4 fragPosV = viewMatrix * vec4(fragPosW, 1.0);

    
    

    
    float fragDepth = ( fragPosV.z + cameraNear ) / ( cameraNear - cameraFar );

    return fragDepth; 
}

#endif

#ifndef RAYMARCH_DISTANCES\r
#define RAYMARCH_DISTANCES

float fPlane(vec3 p) { return p.y; }\r
float fPlane(vec3 p, vec3 n){ return dot(n, p); }\r
float fSphere(vec3 p, float s) { return length(p)-s; }\r
float fBox(vec3 p, vec3 b) {\r
    vec3 d = abs(p) - b;\r
    return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));\r
}\r
float fEllipsoid(vec3 p, vec3 r) { return (length( p/r ) - 1.0) * min(min(r.x,r.y),r.z); }\r
float uRoundBox(vec3 p, vec3 b, float r) { return length(max(abs(p)-b,0.0))-r; }\r
float fRoundBox(vec3 p, vec3 b, float r) { return length(max(abs(p)-b+vec3(r),0.0))-r; }\r
float fTorus(vec3 p, vec2 t) { return length( vec2(length(p.xz)-t.x,p.y) )-t.y; }\r
float fHexPrism(vec3 p, vec2 h) {\r
    vec3 q = abs(p);\r
#if 0\r
    return max(q.z-h.y,max((q.x*0.866025+q.y*0.5),q.y)-h.x);\r
#else\r
    float d1 = q.z-h.y;\r
    float d2 = max((q.x*0.866025+q.y*0.5),q.y)-h.x;\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
#endif\r
}\r
float fCapsule(vec3 p, vec3 a, vec3 b, float r) {\r
	vec3 pa = p-a, ba = b-a;\r
	float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\r
	return length( pa - ba*h ) - r;\r
}\r
float fEquilateralTriangle(vec2 p) {\r
    const float k = 1.73205;
    p.x = abs(p.x) - 1.0;\r
    p.y = p.y + 1.0/k;\r
    if( p.x + k*p.y > 0.0 ) p = vec2( p.x - k*p.y, -k*p.x - p.y )/2.0;\r
    p.x += 2.0 - 2.0*clamp( (p.x+2.0)/2.0, 0.0, 1.0 );\r
    return -length(p)*sign(p.y);\r
}\r
float fTriPrism(vec3 p, vec2 h) {\r
    vec3 q = abs(p);\r
    float d1 = q.z-h.y;\r
#if 1\r
    
    float d2 = max(q.x*0.866025+p.y*0.5,-p.y)-h.x*0.5;\r
#else\r
    
    h.x *= 0.866025;\r
    float d2 = fEquilateralTriangle(p.xy/h.x)*h.x;\r
#endif\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
}\r
float fCylinder(vec3 p, vec2 h) {\r
  vec2 d = abs(vec2(length(p.xz),p.y)) - h;\r
  return min(max(d.x,d.y),0.0) + length(max(d,0.0));\r
}\r
float fCone(vec3 p, vec3 c) {\r
    vec2 q = vec2( length(p.xz), p.y );\r
    float d1 = -q.y-c.z;\r
    float d2 = max( dot(q,c.xy), q.y);\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
}\r
float fConeSection(vec3 p, float h, float r1, float r2) {\r
    float d1 = -p.y - h;\r
    float q = p.y - h;\r
    float si = 0.5*(r1-r2)/h;\r
    float d2 = max( sqrt( dot(p.xz,p.xz)*(1.0-si*si)) + q*si - r2, q );\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
}\r
float fPryamid4(vec3 p, vec3 h) {\r
    
    
    float box = fBox( p - vec3(0,-2.0*h.z,0), vec3(2.0*h.z) );\r
    float d = 0.0;\r
    d = max( d, abs( dot(p, vec3( -h.x, h.y, 0 )) ));\r
    d = max( d, abs( dot(p, vec3(  h.x, h.y, 0 )) ));\r
    d = max( d, abs( dot(p, vec3(  0, h.y, h.x )) ));\r
    d = max( d, abs( dot(p, vec3(  0, h.y,-h.x )) ));\r
    float octa = d - h.z;\r
    return max(-box,octa); 
}\r
float length2(vec2 p) { return sqrt( p.x*p.x + p.y*p.y ); }\r
float length6(vec2 p) {\r
	p = p*p*p; p = p*p;\r
	return pow( p.x + p.y, 1.0/6.0 );\r
}\r
float length8(vec2 p) {\r
	p = p*p; p = p*p; p = p*p;\r
	return pow( p.x + p.y, 1.0/8.0 );\r
}\r
float fTorus82(vec3 p, vec2 t) {\r
    vec2 q = vec2(length2(p.xz)-t.x,p.y);\r
    return length8(q)-t.y;\r
}\r
float fTorus88(vec3 p, vec2 t) {\r
    vec2 q = vec2(length8(p.xz)-t.x,p.y);\r
    return length8(q)-t.y;\r
}\r
float fCylinder6(vec3 p, vec2 h) { return max( length6(p.xz)-h.x, abs(p.y)-h.y ); }

float fSinusoidalPlasma(vec3 p) { return sin(p.x)*cos(p.y)*sin(p.z) + 0.5*sin(p.x*2.0)*cos(p.y*2.0)*sin(p.z*2.0); }\r
float fsmin(float a, float b, float k) {\r
    
	float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);\r
	return mix(b, a, h) - k*h*(1.0-h);\r
}\r
#if 1\r
float fsmax(float a, float b, float k) {\r
    
	float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);\r
	return mix(a, b, h) + k*h*(1.0-h);\r
}\r
#else\r
float fsmax(float a, float b, float k) {\r
    
	float h = clamp(0.5 + 0.5*(a-b)/k, 0.0, 1.0);\r
	return mix(b, a, h) + k*h*(1.0-h);\r
    
}\r
#endif

float fUnion( const in float f1, const in float f2 )\r
{\r
	return mix(f1, f2, step(f2, f1));\r
}\r
float fIntersect( const in float f1, const in float f2 )\r
{\r
	return mix(f2, f1, step(f2, f1));\r
}\r
float fSubtract( const in float f1, const in float f2 )\r
{\r
	return fIntersect(f1, -f2);\r
}\r
float fDisplace( const in float f1, const in float ds )\r
{\r
	return f1+ds;\r
}\r
float fSmoothPoly( const in float a, const in float b, const in float k ) 
{\r
	float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );\r
	return mix( b, a, h ) - k*h*(1.0-h);\r
}\r
float fSmoothExp( const in float a, const in float b, const in float k ) 
{\r
	float res = exp( -k*a ) + exp( -k*b );\r
	return -log( res )/k;\r
}\r
float fSmoothPow( const in float a, const in float b, const in float k ) 
{\r
	float aa = pow( a, k );\r
	float bb = pow( b, k );\r
	return pow( (aa*bb) / (aa+bb), 1.0/k );\r
}\r
float fNoise( const in vec2 p )\r
{\r
	vec2 s = sin(p * 0.6345) + sin(p * 1.62423);\r
	return dot(s, vec2(0.125)) + 0.5;\r
}

vec2 dUnion(vec2 d1, vec2 d2) { return mix(d1, d2, step(d2.x, d1.x)); }\r
vec2 dIntersect(vec2 d1, vec2 d2) { return mix(d2, d1, step(d2.x, d1.x)); }\r
vec2 dSubtract(vec2 d1, vec2 d2) { return dIntersect(d1, vec2(-d2.x, d2.y)); }

vec2 dDisplace(vec2 d1, float ds) { return vec2(d1.x + ds, d1.y); }\r
vec2 dSmoothUnion(vec2 d1, vec2 d2, float k) {\r
    
	float f = fsmin( d1.x, d2.x, k );\r
	float m = mix( d1.y, d2.y, step(d2.x, d1.x) );\r
	return vec2(f, m);\r
}\r
vec2 dSmoothIntersect(vec2 d1, vec2 d2, float k) {\r
    
	float f = fsmax( d1.x, d2.x, k );\r
	float m = mix( d1.y, d2.y, step(d1.x, d2.x) );\r
	return vec2(f, m);\r
}\r
vec2 dSmoothSubtract(vec2 d1, vec2 d2, float k) { return dSmoothIntersect(d1, vec2(-d2.x, d2.y), k); }

vec4 dUnion( const in vec4 d1, const in vec4 d2 )\r
{\r
	return mix(d1, d2, step(d2.x, d1.x));\r
}\r
vec4 dIntersect( const in vec4 d1, const in vec4 d2 )\r
{\r
	return mix(d2, d1, step(d2.x,d1.x));\r
}\r
vec4 dSubtract( const in vec4 d1, const in vec4 d2 )\r
{\r
	return dIntersect(d1, vec4(-d2.x, d2.yzw));\r
}\r
vec4 dDisplace( const in vec4 d1, const in float ds )

{\r
	return vec4( d1.x+ds, d1.yzw );\r
}\r
vec4 dBlend( const in vec4 d1, const in vec4 d2, const in float k )

{\r
	float fdist = fSmoothPoly( d1.x, d2.x, k );\r
	vec3 vmat = mix( d1.yzw, d2.yzw, step(d2.x, d1.x) );\r
	return vec4( fdist, vmat );\r
}

vec3 sRepeat(vec3 p, vec3 spacing) {\r
    
    
	vec3 q = p - 0.5*spacing;\r
	return mod(q, spacing) - 0.5*spacing;\r
}\r
vec3 sTwist(vec3 p, float angle) {\r
    
	float c = cos( angle*p.y );\r
	float s = sin( angle*p.y );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 twist = m*p.zx;\r
	return vec3( twist.y, p.y, twist.x );\r
}\r
vec3 sTwistY(vec3 p, float angle) {\r
    
	return sTwist( p, angle );\r
}\r
vec3 sTwistZ(vec3 p, float angle) {\r
    
	vec3 q = p.yzx;\r
	q = sTwist( q, angle );\r
	return q.zxy;\r
}\r
vec3 sTwistX(vec3 p, float angle) {\r
    
	vec3 q = p.zxy;\r
	q = sTwist( q, angle );\r
	return q.yzx;\r
}\r
vec3 sTranslate(vec3 p, vec3 t) { return p - t; }\r
vec3 sRotateX(vec3 p, float angle) {\r
	float s = sin(angle);\r
	float c = cos(angle);\r
	return vec3( p.x, c*p.y+s*p.z, -s*p.y+c*p.z );\r
}\r
vec3 sRotateY(vec3 p, float angle) {\r
	
    float s = -sin(angle);\r
	float c = cos(angle);\r
	return vec3( c*p.x+s*p.z, p.y, -s*p.x+c*p.z );\r
}\r
vec3 sRotateZ(vec3 p, float angle) {\r
	float s = sin(angle);\r
	float c = cos(angle);\r
	return vec3( c*p.x+s*p.y, -s*p.x+c*p.y, p.z );\r
}

vec3 sCheapBendY(vec3 p, float angle) {\r
    
	float c = cos( angle*p.x );\r
	float s = sin( angle*p.x );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 b = m*p.zx;\r
	return vec3( b.y, p.y, b.x );\r
}\r
vec3 sCheapBendZ(vec3 p, float angle) {\r
    
	float c = cos( angle*p.y );\r
	float s = sin( angle*p.y );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 b = m*p.xy;\r
	return vec3( b.x, b.y, p.z );\r
}\r
vec3 sCheapBendX(vec3 p, float angle) {\r
    
	float c = cos( angle*p.z );\r
	float s = sin( angle*p.z );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 b = m*p.yz;\r
	return vec3( p.x, b.x, b.y );\r
}

#define EPS             0.001   
#define MAX_RAY_ITER    512     
#define MIN_RAY_DIST    0.02    
#define MAX_RAY_DIST    64.0    
#define MAX_SHADOW_ITER 64      
#define MIN_SHADOW_DIST 0.005   
#define MAX_SHADOW_DIST 10.0    

vec2 sceneMap( in vec3 p );

float sceneShadow( in vec3 ro, in vec3 rd, in float tmin, in float tmax, in float k )

{\r
	float shade = 1.0;\r
    float t = tmin;\r
    for(int i = 0; i < MAX_SHADOW_ITER; i++)\r
    {\r
        float h = sceneMap(ro + rd * t).x;\r
        shade = min( shade, k * h / t );\r
        t += clamp( h, 0.5, 1.0 );\r
        if( h < EPS || t > tmax ) break;\r
    }\r
    return min( max(shade, 0.0) + 0.1, 1.0 ); 
}\r
float sceneShadow( in vec3 ro, in vec3 rd )\r
{\r
    return sceneShadow( ro, rd, MIN_SHADOW_DIST, MAX_RAY_DIST*0.5, 64.0 ); 
}

float sceneShadow( in vec3 ro, in vec3 rd, float tmin, float k )

{\r
    float shade = 1.0;\r
    float t = tmin;\r
    for(int i=0; i<40; i++)\r
    {\r
        float h = sceneMap(ro + rd*t).x;\r
        shade = min( shade, smoothstep(0.0, 1.0, k*h/t) );\r
		t += clamp( h, 0.05, 0.5 );\r
		if( h < 0.0001 ) break;\r
    }\r
    return clamp(shade, 0.0, 1.0);\r
}

float sceneAO( in vec3 p, in vec3 n )\r
{\r
    float ao = 0.0;\r
    float s = 1.0;\r
    for(int i = 0; i < 6; i++)\r
    {\r
        float off = 0.001 + 0.2 * float(i)/5.0;\r
        float t = sceneMap( n * off + p ).x;\r
        ao += ( off - t ) * s;\r
        s *= 0.4;\r
    }\r
    return smoothstep( 0.0, 1.0, clamp(1.0-12.0*ao, 0.0, 1.0) );\r
}

vec3 sceneNormal( in vec3 p )\r
{\r
    vec3 eps = vec3(EPS, 0.0, 0.0);\r
    vec3 n = vec3(\r
            sceneMap(p + eps.xyy).x - sceneMap(p - eps.xyy).x,\r
            sceneMap(p + eps.yxy).x - sceneMap(p - eps.yxy).x,\r
            sceneMap(p + eps.yyx).x - sceneMap(p - eps.yyx).x);\r
    return normalize(n);\r
}

vec3 sceneNormal( in vec3 p, in float t )\r
{\r
    vec2 eps = vec2( 0.005*t, 0.0 );\r
	return normalize( vec3(\r
            sceneMap(p + eps.xyy).x - sceneMap(p - eps.xyy).x,\r
            sceneMap(p + eps.yxy).x - sceneMap(p - eps.yxy).x,\r
            sceneMap(p + eps.yyx).x - sceneMap(p - eps.yyx).x ) );\r
}

float rayTracing( in vec3 ro, in vec3 rd, in float tmin, in float tmax, in float mfac )\r
{\r
    float t = tmin;\r
	for(int i = 0; i < MAX_RAY_ITER; i++)\r
	{\r
		float d = sceneMap( ro + rd*t ).x;\r
		if( d < EPS || t > tmax ) break;\r
        t += mfac * d; 
	}\r
	return t;\r
}

vec2 rayMarching( in vec3 ro, in vec3 rd, float tmin, float tmax )

{\r
    float m = -1.0;\r
    float t = tmin;\r
    for(int i = 0; i < MAX_RAY_ITER; i++)\r
    {\r
        vec2 d = sceneMap( ro + rd*t );\r
        if( d.x < EPS || t > tmax ) break;\r
        t += d.x;\r
        m = d.y;\r
    }\r
    if( t > tmax ) m = -1.0;\r
    return vec2(t, m);\r
}

vec2 rayMarching( in vec3 ro, in vec3 rd )\r
{\r
    return rayMarching( ro, rd, MIN_RAY_DIST, MAX_RAY_DIST );\r
}

float bisectTracing( in vec3 ro, in vec3 rd, in float tmin, in float tmax )\r
{\r
    float t = tmin, told = tmin, mid, dn;\r
    float d = sceneMap(ro + rd*t).x;\r
    float sgn = sign(d);\r
    for(int i=0; i<80; i++)\r
    {\r
        if( sign(d) != sgn || d < EPS || t > tmax ) break;\r
        told = t;\r
        t += step(-1.0, -d)*(log(abs(d) + 1.1)*0.7 - d*0.7) + d*0.7;\r
        d = sceneMap(ro + rd*t).x;\r
    }\r
    if( sign(d) != sgn )\r
    {\r
        dn = sign( sceneMap(ro + rd*told).x );\r
        vec2 iv = vec2(told, t);\r
        for(int ii=0; ii<8; ii++)\r
        {\r
            mid = dot(iv, vec2(0.5));\r
            float d = sceneMap(ro + rd*mid).x;\r
            if( abs(d) < EPS ) break;\r
            iv = mix( vec2(iv.x, mid), vec2(mid, iv.y), step(0.0, d*dn) );\r
        }\r
        t = mid;\r
    }\r
    return t;\r
}

vec2 bisectMarching( in vec3 ro, in vec3 rd, in float tmin, in float tmax )

{\r
    float m = -1.0;\r
    float t = tmin, told = tmin, mid, dn;\r
    vec2 d = sceneMap(ro + rd*t); m = d.y;\r
    float sgn = sign(d.x);\r
    for(int i=0; i<80; i++)\r
    {\r
        if( sign(d.x) != sgn || d.x < EPS || t > tmax ) break;\r
        told = t;\r
        t += step(-1.0, -d.x)*(log(abs(d.x) + 1.1)*0.7 - d.x*0.7) + d.x*0.7;\r
        d = sceneMap(ro + rd*t); m = d.y;\r
    }\r
    if( sign(d.x) != sgn )\r
    {\r
        dn = sign( sceneMap(ro + rd*told).x );\r
        vec2 iv = vec2(told, t);\r
        for(int ii=0; ii<8; ii++)\r
        {\r
            mid = dot(iv, vec2(0.5));\r
            vec2 d = sceneMap(ro + rd*mid); m = d.y;\r
            if( abs(d.x) < EPS ) break;\r
            iv = mix( vec2(iv.x, mid), vec2(mid, iv.y), step(0.0, d.x*dn) );\r
        }\r
        t = mid;\r
    }\r
    return vec2(t, m);\r
}

mat3 cameraMatrix( vec3 ro, vec3 ta )\r
{\r
    vec3 cw = normalize( ta - ro );\r
    vec3 cu = normalize( cross(cw, vec3(0.0, 1.0, 0.0)) );\r
    vec3 cv = normalize( cross(cu, cw) );\r
    return mat3(cu, cv, cw);\r
}

#endif\r

varying vec2 vUv;

vec4 dUnionTransp( const in vec4 d1, const in vec4 d2, const in float transpOption )\r
{\r
	
	
	vec4 vScaled = vec4(d2.x * (transpOption * 2.0 - 1.0), d2.yzw);

	
	return mix(d1, vScaled, step(vScaled.x, d1.x) * step(0.0, transpOption));

	
    
    
    
}

vec4 dUnionAbs( const in vec4 d1, const in vec4 d2 )\r
{\r
	return mix( d2, d1, step( abs(d1.x), abs(d2.x) ) );\r
}

vec4 texSphere( in sampler2D tex, in vec3 n )\r
{\r
	
	vec2 uv = vec2( acos(n.y) / PI, atan(n.z, n.x) / PI * 0.5 + 0.5 );\r
	return texture( tex, uv );\r
}\r

#ifdef LOW_QUALITY\r
	#define MAX_RAY_ITER 128    
#else\r
	#define MAX_RAY_ITER 512    
	#define ENABLE_AMBIENT_OCCLUSION\r
	#define DOUBLE_SIDED_TRANSPARENCY\r
#endif

#ifdef ENABLE_HARD_SHADOWS\r
	#undef ENABLE_SOFT_SHADOWS\r
#else\r
	#define ENABLE_SOFT_SHADOWS\r
#endif

#define ENABLE_SPECULAR\r
#define ENABLE_REFLECTIONS\r
#define ENABLE_TRANSPARENCY\r
#define ENABLE_FOG\r
#define ENABLE_TEXTURE			

#define ENABLE_DIRECTIONAL_LIGHT\r
#define ENABLE_DIRECTIONAL_LIGHT_FLARE\r

const float FOG_DENSITY = 0.05;

const float GROUND 	= 1.0; 
const float GOLD 	= 2.0;\r
const float SILVER 	= 3.0;\r
const float WALL 	= 4.0;\r
const float PIPE 	= 5.0;\r
const float WATER 	= 6.0;\r
const float WATER2 	= 7.0;\r
const float SPHERE  = 8.0;  
const float POOLTILE= 9.0;\r
const float TEXMAP0 = 10.0;	
const float TEXMAP1 = 11.0;	

struct Ray\r
{\r
	vec3 o;    
	vec3 d;    
	float min; 
	float max; 
};\r
struct Hit\r
{\r
	vec3 p;  
	vec3 n;  
	float t; 
	vec3 m;	 
};\r
struct Indirect\r
{\r
	vec3 reflection;   
	vec3 transmission; 
};\r
struct Material\r
{\r
	vec3 albedo;		
	float R0;			
	float smoothness;	
	float transparency; 
	float relIOR;	    

	
	
	
	

	
	
	
	
	

	
	
	

	
	
	
	
	
};\r
struct Shading\r
{\r
	vec3 diffuse;\r
	vec3 specular;\r
};\r
struct PointLight\r
{\r
	vec3 pos;\r
	vec3 col;\r
};\r
struct DirectionalLight\r
{\r
	vec3 dir;\r
	vec3 col;\r
};

vec2 sceneMap( in vec3 p ){ return vec2(0.0); } 

vec4 dCheckerBoard( const in vec3 p )\r
{\r
	return vec4( fPlane( p-vec3(0.0), vec3(0.0, 1.0, 0.0) ), GROUND, p.xy );\r
}

#define EXAMPLE_INF_SPHERES

vec4 simpleScene( const in vec3 p )\r
{\r
	vec3 tex0 = vec3(TEXMAP0, p.z, p.x);\r
	vec3 tex1 = vec3(TEXMAP1, p.x, p.y);\r
	vec3 gold = vec3(GOLD, p.z, p.x);\r
	vec3 silver = vec3(SILVER, p.z, p.x);

#if 1\r
	vec4 res = dCheckerBoard( p );\r
#else\r
	vec4 res = vec4(1000.0, -1.0, p.xy);\r
#endif

#if defined(EXAMPLE_BOX)\r
	res = dUnion( res, vec4( fBox(p-vec3(0.5, 0.5, 0.5), vec3(0.5)), silver ) );

#elif defined(EXAMPLE_BOX_CYL_CONE)\r
	res = dUnion( res, vec4( fBox(p-vec3(0.5, 0.5, 0.5), vec3(0.25)), tex0 ) );\r
	res = dUnion( res, vec4( fCylinder(p-vec3(1, 0.3, 0), vec2(0.2, 0.3)), tex1 ) );\r
	res = dUnion( res, vec4( fCone(p-vec3(0.0, 0.9, 1.0), vec3(0.8, 0.1, 0.6) ), gold ) );

#elif defined(EXAMPLE_INF_SPHERES)\r
	vec3 q = sRepeat( p, vec3(10.0, 10.0, 10.0) );\r
	res = dUnion( res, vec4( fSphere(q, 2.5), tex0 ) );

#elif defined(EXAMPLE_SPHERE)\r
	res = dUnion( res, vec4( fSphere(p-vec3(0, 2.5, 0), 2.5), tex0 ) );

#elif defined(EXAMPLE_CROSS)\r
	float k = 0.1;\r
	vec3 h = sTranslate( p, vec3(0, 2, 0) );\r
	vec4 dcy1 = vec4( fCylinder(h, vec2(1.0, 2.0)), gold );\r
	vec4 dcy2 = vec4( fCylinder(h.yzx, vec2(0.5, 2.0)), silver );\r
	res = dUnion( res, dBlend( dcy1, dcy2, k ) );\r
#endif

	return res;\r
}

vec4 primitiveScene( const in vec3 p )\r
{\r
	vec3 gold = vec3(GOLD, p.xy); 
	\r
	vec4 res = dCheckerBoard( p );\r
	res = dUnion( res, vec4( fSphere(    p-vec3( 0.0,0.25, 0.0), 0.25 ), gold ) );\r
	res = dUnion( res, vec4( fBox(       p-vec3( 1.0,0.25, 0.0), vec3(0.25) ), gold ) );\r
	res = dUnion( res, vec4( fTorus(     p-vec3( 0.0,0.25, 1.0), vec2(0.20,0.05) ), gold ) );\r
	res = dUnion( res, vec4( fCapsule(   p,vec3(-1.3,0.10,-0.1), vec3(-0.8,0.50,0.2), 0.1  ), gold ) );\r
	res = dUnion( res, vec4( fTriPrism(  p-vec3(-1.0,0.25,-1.0), vec2(0.25,0.05) ), gold ) );\r
	res = dUnion( res, vec4( fCylinder(  p-vec3( 1.0,0.30,-1.0), vec2(0.1,0.2) ), gold ) );\r
	res = dUnion( res, vec4( fCone(      p-vec3( 0.0,0.50,-1.0), vec3(0.8,0.6,0.3) ), gold ) );\r
	res = dUnion( res, vec4( fTorus82(   p-vec3( 0.0,0.25, 2.0), vec2(0.20,0.05) ), gold ) );\r
	res = dUnion( res, vec4( fTorus88(   p-vec3(-1.0,0.25, 2.0), vec2(0.20,0.05) ), gold ) );\r
	res = dUnion( res, vec4( fCylinder(  p-vec3( 1.0,0.30, 2.0), vec2(0.1,0.2) ), gold ) );\r
	res = dUnion( res, vec4( fHexPrism(  p-vec3(-1.0,0.20, 1.0), vec2(0.25,0.05) ), gold ) );\r
	res = dUnion( res, vec4( fSubtract(  fBox( p-vec3(-2.0,0.2, 1.0), vec3(0.2)), fSphere( p-vec3(-2.0,0.2, 1.0), 0.25)), gold ) );\r
	res = dUnion( res, vec4( fSubtract( fTorus82(  p-vec3(-2.0,0.2, 0.0), vec2(0.20,0.1)), fCylinder( sRepeat( vec3(atan(p.x+2.0,p.z)/6.2831, p.y, 0.02+0.5*length(p-vec3(-2.0,0.2,0.0)) ), vec3(0.05,1.0,0.05)), vec2(0.02,0.6))), gold ) );\r
	res = dUnion( res, vec4( 0.7*fSphere( p-vec3(-2.0,0.25,-1.0), 0.2 ) + 0.03*sin(50.0*p.x)*sin(50.0*p.y)*sin(50.0*p.z), gold ) );\r
	res = dUnion( res, vec4( 0.5*fTorus( sTwist(p-vec3(-2.0,0.25, 2.0), 20.0), vec2(0.20,0.05)), gold ) );\r
	res = dUnion( res, vec4( fConeSection( p-vec3( 0.0,0.35,-2.0), 0.15, 0.2, 0.1 ), gold ) );\r
	res = dUnion( res, vec4( fEllipsoid( p-vec3( 1.0,0.35,-2.0), vec3(0.15, 0.2, 0.05) ), gold ) );\r
	return res;\r
}

vec4 water( const in vec3 p, const in vec2 ripplePos )\r
{\r
	const float waterElevation = 0.0;
	const float waterNoiseScale = 0.25;
	const float waterSpeed = 20.0;
	const float waterFreq = 10.0;

	

	
	vec2 noiseDomain = p.xz;\r
	noiseDomain.x = length(p.xz - ripplePos);

	
	
	
	

	float noiseScale = 1.0 / (1.0 + noiseDomain.x) * waterNoiseScale;

	noiseDomain *= waterFreq;\r
	noiseDomain.x += (-time) * waterSpeed;

	
	float water = p.y - waterElevation;\r
	water += fNoise(noiseDomain) * noiseScale;\r
	return vec4(water, WATER2, p.xz);\r
}\r
vec4 waterScene( const in vec3 p )\r
{\r
	vec3 submerged = vec3(SPHERE, p.x, p.z); 
	vec3 floating = vec3(SILVER, p.x, p.z);  
	vec3 poolTile = vec3(POOLTILE, p.x*0.125, p.z*0.125);

	vec4 res = dUnionAbs(\r
		vec4( fSphere(p-vec3( 0, 0.1 + 0.1*sin(time*15.0), 0 ), 1.0), floating ),\r
		vec4( fSphere(p-vec3( -1.5, -2.5, 0 ), 1.0 ), submerged )\r
	);\r
	res = dUnionAbs( res, vec4( fPlane(p-vec3(0,-5,0)), poolTile ) );\r
	res = dUnionAbs( res, water(p, vec2(0,0)) );

	return res;\r
}\r

vec4 _sceneMap( const in vec3 p )

{\r
	
	
	return waterScene( p );\r
}

Material getMaterial( const in Hit hit )\r
{\r
#if 0		
mtl.albedo = vec3(0.93, 0.88, 0.38);	
mtl.albedo = vec3(0.26, 0.28, 0.26);	
mtl.albedo = vec3(0.44, 0.435, 0.43);	
mtl.albedo = vec3(0.50, 0.47, 0.36);	
mtl.albedo = vec3(0.93, 0.80, 0.46);	
mtl.albedo = vec3(0.63, 0.62, 0.57);	
mtl.albedo = vec3(0.97, 0.97, 0.96);	
#endif

	Material mtl;\r
	if(hit.m.x == TEXMAP0) 
	{\r
		mtl.albedo = texture( textureMaps[0], hit.m.yz ).rgb;\r
		mtl.R0 = (1.0003-0.27049)/(1.0003+0.27049);\r
		mtl.R0 *= mtl.R0;\r
		mtl.smoothness = 1.0;\r
		mtl.transparency = 0.0;\r
	}\r
	else if(hit.m.x == TEXMAP1) 
	{\r
		mtl.albedo = texture( textureMaps[1], hit.m.yz ).rgb;\r
		
		
		mtl.R0 = (1.0003-0.27049)/(1.0003+0.27049);\r
		mtl.R0 *= mtl.R0;\r
		mtl.smoothness = 1.0;\r
		mtl.transparency = 0.0;\r
	}\r
	else if(hit.m.x == GROUND)\r
	{\r
		float ncell = 2.0;
		float f = mod( floor(ncell * hit.p.z) + floor(ncell * hit.p.x), 2.0 );\r
		mtl.albedo = 0.4 + 0.1*f*vec3(1.0);\r
		mtl.R0 = 4.0;
		mtl.smoothness = 1.0;\r
		mtl.transparency = 0.0;\r
	}\r
	else if(hit.m.x == GOLD)\r
	{\r
		mtl.albedo = vec3(1.0, 0.84, 0.0);\r
		mtl.R0 = (1.0003-0.27049)/(1.0003+0.27049);\r
		mtl.R0 *= mtl.R0;\r
		mtl.smoothness = 1.0;\r
		mtl.transparency = 0.0;\r
	}\r
	else if(hit.m.x == SILVER)\r
	{\r
		mtl.albedo = vec3(0.75, 0.75, 0.75);\r
		mtl.R0 = (1.0003-0.15016)/(1.0003+0.15016);\r
		mtl.R0 *= mtl.R0;\r
		mtl.smoothness = 1.0;\r
		mtl.transparency = 0.0;\r
	}\r
	else if(hit.m.x == WALL)\r
	{\r
		
		mtl.R0 = 0.02;\r
	#ifdef ENABLE_TEXTURE\r
		
		vec3 texCol = texture(textureMaps[0], hit.m.yz * 0.25).rgb;

		mtl.albedo = texCol * texCol;\r
		mtl.smoothness = mtl.albedo.r;\r
		mtl.transparency = 0.0;\r
	#else\r
		
		vec2 tile = step(vec2(0.15), fract(hit.m.yz));\r
		mtl.albedo = vec3(1.0) * (tile.x * tile.y * 0.8 + 0.2);\r
		mtl.smoothness = 1.0;\r
	#endif\r
	}\r
	else if(hit.m.x == PIPE)\r
	{\r
		mtl.R0 = 0.8;\r
		mtl.smoothness = 1.0;\r
		mtl.albedo = vec3(0.5);\r
		mtl.transparency = 0.0;\r
	}\r
	else if(hit.m.x == WATER)\r
	{\r
		mtl.R0 = 0.01;\r
		mtl.smoothness = 1.0;\r
		mtl.transparency = 1.0;\r
		mtl.relIOR = 1.0 / 1.3330;	
		const float extinctionScale = 2.0;\r
		const vec3 extinction = vec3(0.3, 0.7, 0.9);\r
		mtl.albedo = (vec3(1.0) - extinction) * extinctionScale; 
	}\r
	
	
	
	else if(hit.m.x == WATER2)\r
	{\r
		mtl.R0 = 0.1;\r
		mtl.smoothness = 1.0;\r
		mtl.transparency = 0.8;\r
		mtl.relIOR = 1.0 / 1.3330;	
		const float extinctionScale = 0.0;\r
		const vec3 extinction = vec3(0.3, 0.7, 0.9);\r
		mtl.albedo = (vec3(1.0) - extinction) * extinctionScale; 
	}\r
	else if(hit.m.x == SPHERE) 
	{\r
		mtl.albedo = texSphere( textureMaps[0], hit.n ).rgb;\r
		mtl.R0 = (1.0003-0.27049)/(1.0003+0.27049);\r
		mtl.R0 *= mtl.R0;\r
		mtl.smoothness = 1.0;\r
		mtl.transparency = 0.0;\r
	}\r
	else if(hit.m.x == POOLTILE) 
	{\r
		mtl.albedo = texture( textureMaps[1], hit.m.yz ).rgb;\r
		mtl.R0 = (1.0003-0.27049)/(1.0003+0.27049);\r
		mtl.R0 *= mtl.R0;\r
		mtl.smoothness = 1.0;\r
		mtl.transparency = 0.0;\r
	}\r
	
	else\r
	{\r
		
		mtl.albedo = vec3(1,0,0);\r
		mtl.smoothness = 1.0;\r
		mtl.transparency = 0.0;\r
	}\r
	return mtl;\r
}

vec3 getSkyGradient( const in vec3 rd )\r
{\r
	const vec3 skyCol = vec3(0.7, 0.8, 1.0);\r
	const vec3 groundCol = skyCol * 0.5;\r
	float w = clamp(rd.y, 0.0, 1.0); 
	return mix(groundCol, skyCol, w); 
}

PointLight getPointLight()\r
{\r
	
	
    
	
	

	PointLight result;\r
	result.pos = vec3(1.0, 1.0, 0.0);\r
	
	result.col = vec3(32.0, 6.0, 1.0) * 0.0;\r
	return result;\r
}

DirectionalLight getDirectionalLight()\r
{\r
	
	
    
	
	

	DirectionalLight result;\r
	vec3 pos = vec3(1,1,0);\r
	result.dir = normalize(-pos); 
	result.col = vec3(2.0, 1.5, 1.0);\r
	return result;\r
}

vec3 getAmbientLight( const in vec3 n )\r
{\r
	return getSkyGradient( n ); 
}\r

vec3 _sceneNormal( in vec3 p )\r
{\r
	vec3 eps = vec3( EPS, 0.0, 0.0 );\r
	return normalize( vec3(\r
		_sceneMap(p + eps.xyy).x - _sceneMap(p - eps.xyy).x,\r
		_sceneMap(p + eps.yxy).x - _sceneMap(p - eps.yxy).x,\r
		_sceneMap(p + eps.yyx).x - _sceneMap(p - eps.yyx).x\r
	));\r
}

void rayMarch( const in Ray ray, out Hit hit, const int maxIter )\r
{\r
    hit.t = ray.min;\r
    hit.m.x = 0.0;

    for( int i = 0; i <= MAX_RAY_ITER; i++ )\r
    {\r
        hit.p = ray.o + ray.d * hit.t;\r
		vec4 d = _sceneMap( hit.p );\r
		d.x = abs(d.x);\r
        hit.m = d.yzw;

        
        if( (abs(d.x) <= EPS) || (hit.t >= ray.max) || (i > maxIter) ) break;\r
        hit.t = hit.t + d.x;\r
    }

    if( hit.t >= ray.max )\r
    {\r
        hit.t = MAX_RAY_DIST;\r
        hit.p = ray.o + ray.d * hit.t;\r
        hit.m.x = 0.0; 
    }\r
}

float sceneShadow( const in vec3 p, const in vec3 n, const in vec3 ld, const in float ldist )\r
{\r
#if defined(ENABLE_HARD_SHADOWS)		
    Ray shadowRay;\r
    shadowRay.d = ld;\r
    shadowRay.o = p;\r
    const float bias = 0.05;\r
    shadowRay.min = bias / abs(dot(ld, n));\r
    shadowRay.max = ldist - shadowRay.min;\r
    Hit hit;\r
    rayMarch(shadowRay, hit, 32);\r
    float shadow = step(0.0, hit.t) * step(ldist, hit.t );\r
    return shadow;

#elif defined(ENABLE_SOFT_SHADOWS)\r
    const float bias = 0.05;\r
    float t = bias / abs(dot(ld, n));\r
    float tmax = ldist - t;\r
    float result = 1.0;\r
    for( int i=0; i<16; i++ )\r
    {\r
        float d = abs(_sceneMap( p + ld*t ).x);\r
		
        result = min( result, 8.0*d/t );\r
        t += clamp( d, 0.02, 0.10 ); 
        if( d < 0.001 || t > tmax ) break;\r
    }\r
    return clamp( result, 0.0, 1.0 );

#else\r
    return 1.0;

#endif\r
}

float sceneAO(const in Hit hit)\r
{\r
#ifdef ENABLE_AMBIENT_OCCLUSION\r
    float scaleOcc = 0.2; 
    float ao = 1.0;\r
    float t = 0.0;\r
    for(int i = 0; i <= 5; i++)\r
    {\r
        t += 0.1;\r
        float d = abs(_sceneMap( hit.p + hit.n * t ).x);\r
        ao *= 1.0 - max( 0.0, (t - d) * scaleOcc / t );\r
    }\r
    return ao;\r
#else\r
    return 1.0;\r
#endif\r
}

void applyAtmosphere(inout vec3 col, const in Ray ray, const in Hit hit)\r
{\r
#ifdef ENABLE_FOG\r
    float fogAmount = exp(hit.t * -FOG_DENSITY);\r
    vec3 fog = getSkyGradient(ray.d);\r
    #ifdef ENABLE_DIRECTIONAL_LIGHT_FLARE\r
        DirectionalLight directionalLight = getDirectionalLight();\r
        float fDirDot = clamp(dot(-directionalLight.dir, ray.d), 0.0, 1.0);\r
        fog += directionalLight.col * pow(fDirDot, 10.0);\r
    #endif\r
    col = mix(fog, col, fogAmount);\r
#endif

#ifdef ENABLE_POINT_LIGHT_FLARE\r
    PointLight pointLight = getPointLight();\r
    vec3 toLight = pointLight.pos - ray.o;\r
    vec3 closestPoint = ray.o + ray.d * clamp(dot(toLight, ray.d), 0.0, hit.t);\r
    float dist = length(closestPoint - pointLight.pos);\r
    col += pointLight.col * 0.01 / (dist * dist);\r
#endif\r
}

float schlick( const in vec3 H, const in vec3 v, const in float R0, const in float smoothFactor)

{\r
	
	
	return R0 + (1.0 - R0) * pow(clamp((1.0 - dot(H, -v)), 0.0, 1.0), 5.0) * smoothFactor; 
}

vec3 applyFresnel(const in vec3 diffuse, const in vec3 specular, const in vec3 n, const in vec3 v, const in Material mtl)

{\r
	vec3 R = reflect(v, n); 
	vec3 H = normalize(R + -v); 
	float F = schlick(H, v, mtl.R0, mtl.smoothness * 0.9 + 0.1); 
	return mix(diffuse, specular, F); 
}

float getPhongSpecularIntensity(const in vec3 v, const in vec3 ld, const in vec3 n, const in float smoothness)

{          \r
	vec3 H = normalize(ld - v);  
	float specPower = exp2(4.0 + 6.0 * smoothness);  
	float specIntensity = (specPower + 2.0) * 0.125; 
	return pow(max(0.0, dot(H, n)), specPower) * specIntensity;   
}

Shading applyPointLight( const in PointLight light, const in vec3 sfPos, const in vec3 v, const in vec3 n, const in Material mtl )

{\r
	vec3 L = light.pos - sfPos;\r
	vec3 l = normalize(L);\r
	float ldist = length(L);\r
	float atten = 1.0 / (ldist * ldist);\r
	float shadow = sceneShadow( sfPos, n, l, ldist );

	vec3 diffuse = light.col * shadow * atten * max(0.0, dot(l, n));

	Shading shading;\r
	shading.diffuse = diffuse;\r
	shading.specular = diffuse * getPhongSpecularIntensity( v, l, n, mtl.smoothness ); 
	return shading;\r
}

Shading applyDirectionalLight( const in DirectionalLight light, const in vec3 sfPos, const in vec3 v, const in vec3 n, const in Material mtl )

{\r
	const float shadowRayLength = 10.0;\r
	vec3 l = -light.dir;\r
	float shadow = sceneShadow( sfPos, n, l, shadowRayLength );

	vec3 diffuse = light.col * shadow * max(0.0, dot(l, n));

	Shading shading;\r
	shading.diffuse = diffuse;\r
	shading.specular = diffuse * getPhongSpecularIntensity( v, l, n, mtl.smoothness ); 
	return shading;\r
}

vec3 shadeSurface(const in Ray ray, const in Hit hit, const in Indirect indirect, const in Material mtl)\r
{\r
	Shading shading;\r
	shading.diffuse = vec3(0.0);  
	shading.specular = vec3(0.0); 

	float ao = sceneAO(hit);\r
	shading.diffuse  += getAmbientLight(hit.n) * ao;\r
	shading.specular += indirect.reflection;

#ifdef ENABLE_POINT_LIGHT\r
    Shading pointLighting = applyPointLight(getPointLight(), hit.p, ray.d, hit.n, mtl);\r
    shading.diffuse  += pointLighting.diffuse;\r
    shading.specular += pointLighting.specular;\r
#endif

#ifdef ENABLE_DIRECTIONAL_LIGHT\r
    Shading dirLighting = applyDirectionalLight(getDirectionalLight(), hit.p, ray.d, hit.n, mtl);\r
    shading.diffuse  += dirLighting.diffuse;\r
    shading.specular += dirLighting.specular;\r
#endif

	vec3 totalDiffuse = mix(\r
		shading.diffuse * mtl.albedo,\r
		indirect.transmission,\r
		mtl.transparency\r
	);\r
	vec3 totalSpecular = shading.specular;

	vec3 sceneCol;\r
#ifdef ENABLE_SPECULAR\r
	
    sceneCol = applyFresnel( totalDiffuse, totalSpecular, hit.n, ray.d, mtl );\r
#else\r
    sceneCol = totalDiffuse;\r
#endif

	return sceneCol;\r
}

vec3 getSceneColourSecondary( const in Ray ray );

vec3 getReflection( const in Ray ray, const in Hit hit )\r
{\r
#ifdef ENABLE_REFLECTIONS    \r
{\r
	
    const float separation = 0.1;
    Ray reflectRay;\r
    reflectRay.d = reflect(ray.d, hit.n);\r
    reflectRay.o = hit.p;\r
    reflectRay.max = 16.0;
    reflectRay.min = separation / abs(dot(reflectRay.d, hit.n));\r
    return getSceneColourSecondary(reflectRay);\r
}\r
#else\r
    return getSkyGradient(reflect(ray.d, hit.n));\r
#endif\r
}

vec3 getTransmission( const in Ray ray, const in Hit hit, const in Material mtl )\r
{\r
	#ifdef ENABLE_TRANSPARENCY

		const float separation = 0.05;
		Ray transmitRay;\r
		transmitRay.d = refract(ray.d, hit.n, mtl.relIOR);\r
		transmitRay.o = hit.p;\r
		transmitRay.max = 16.0;
		transmitRay.min = separation / abs(dot(transmitRay.d, hit.n));

		#ifdef DOUBLE_SIDED_TRANSPARENCY

			Hit hit2;\r
			rayMarch(transmitRay, hit2, 32);\r
			hit2.n = _sceneNormal(hit2.p);

			Ray transmitRay2;\r
			transmitRay2.d = refract(transmitRay.d, hit2.n, 1.0 / mtl.relIOR);\r
			transmitRay2.o = hit2.p;\r
			transmitRay2.max = 16.0;\r
			transmitRay2.min = 0.0; 
			

			float extinctionDist = hit2.t;\r
			vec3 sceneCol = getSceneColourSecondary(transmitRay2);

		#else

			vec3 sceneCol = getSceneColourSecondary(transmitRay);\r
			float extinctionDist = 0.5;

		#endif

		vec3 mtlExtinction = mtl.albedo;\r
		
		vec3 extinction = (1.0 / (1.0 + (mtlExtinction * extinctionDist)));\r
		return sceneCol * extinction;

	#else

		return getSkyGradient(reflect(ray.d, hit.n));

	#endif\r
}

vec3 getSceneColourSecondary( const in Ray ray )

{\r
	Hit hit;\r
	rayMarch(ray, hit, 32);

	vec3 sceneCol;\r
	if( hit.m.x < 0.5 )\r
	{\r
		sceneCol = getSkyGradient(ray.d);\r
	}\r
	else\r
	{\r
		hit.n = _sceneNormal(hit.p);

		
		Indirect indirect;\r
		indirect.reflection = getSkyGradient(reflect(ray.d, hit.n));

		Material mtl = getMaterial(hit);\r
		mtl.transparency = 0.0;

		
		sceneCol = shadeSurface(ray, hit, indirect, mtl);\r
	}

	applyAtmosphere(sceneCol, ray, hit);\r
	return sceneCol;\r
}

vec3 getSceneColourTestVersion( const in Ray ray )\r
{\r
	vec3 sceneCol;\r
	Hit hit;\r
	rayMarch(ray, hit, 256);\r
	if( hit.m.x < 0.5 )\r
	{\r
		sceneCol = getSkyGradient(ray.d);\r
	}\r
	else\r
    {\r
		float t = hit.t;\r
        vec3 pos = hit.p;\r
		hit.n = _sceneNormal(hit.p);\r
		vec3 nor = hit.n;\r
        vec3 ref = reflect( ray.d, nor );\r
		
		Material material = getMaterial( hit );\r
		vec3 col = material.albedo;\r
		float occ = sceneAO( hit );\r
		
		vec3 lig = normalize( vec3(-0.6, 0.7, -0.5) );\r
		float amb = clamp( 0.5+0.5*nor.y, 0.0, 1.0 );\r
        float dif = clamp( dot( nor, lig ), 0.0, 1.0 );\r
        float bac = clamp( dot( nor, normalize(vec3(-lig.x,0.0,-lig.z))), 0.0, 1.0 )*clamp( 1.0-pos.y,0.0,1.0);\r
        float dom = smoothstep( -0.1, 0.1, ref.y );\r
        float fre = pow( clamp(1.0+dot(nor, ray.d), 0.0,1.0), 2.0 );\r
		float spe = pow(clamp( dot( ref, lig ), 0.0, 1.0 ),16.0);\r
		dif *= sceneShadow( pos, nor, lig, 2.5 );		
		dom *= sceneShadow( pos, nor, ref, 2.5 );\r
		vec3 lin = vec3(0.0);\r
		float scale = 2.0;
        lin += scale*dif*vec3(1.00,0.85,0.55);\r
		lin += scale*spe*vec3(1.00,0.85,0.55)*dif;\r
        lin += 0.20*amb*vec3(0.50,0.70,1.00)*occ;\r
        lin += 0.30*dom*vec3(0.50,0.70,1.00)*occ;\r
        lin += 0.30*bac*vec3(0.25,0.25,0.25)*occ;\r
        lin += 0.40*fre*vec3(1.00,1.00,1.00)*occ;\r
		col = col*lin;\r
    	col = mix( col, vec3(0.8,0.9,1.0), 1.0-exp( -0.0002*t*t ) ); 
		col = clamp(col, 0.0, 1.0);\r
		sceneCol = pow( col, vec3(0.4545) ); 
    }\r
	return sceneCol;\r
}

vec3 getSceneColourPrimary( const in Ray ray )\r
{\r
#ifdef ENABLE_TEST_RENDER

	return getSceneColourTestVersion( ray );

#else

	Hit hit;\r
	rayMarch(ray, hit, 256);

	vec3 sceneCol;\r
	if( hit.m.x < 0.5 )\r
	{\r
		sceneCol = getSkyGradient(ray.d);

		
		gl_FragDepth = 0.99;\r
	}\r
	else\r
	{\r
		
		hit.n = _sceneNormal(hit.p);

		
		Material mtl = getMaterial(hit);

		
		Indirect indirect;\r
		indirect.reflection = getReflection(ray, hit);

		
		if( mtl.transparency > 0.0 )\r
		{\r
			indirect.transmission = getTransmission(ray, hit, mtl);\r
		}

		
		sceneCol = shadeSurface(ray, hit, indirect, mtl);

		
		gl_FragDepth = getFragDepth( hit.p );\r
	}

	applyAtmosphere(sceneCol, ray, hit);\r
	return sceneCol;

#endif\r
}

Ray getCameraRay( vec2 uv )\r
{\r
	vec3 ro = cameraPosition;\r
#if 0\r
    vec3 rd = ( cameraProjectionMatrixInverse * vec4( uv*2.0 - 1.0, 0.0, 1.0 ) ).xyz;\r
    rd = ( cameraWorldMatrix * vec4( rd, 0.0 ) ).xyz;\r
    rd = normalize( rd );\r
#else\r
    vec4 fragPos = cameraWorldMatrix * (cameraProjectionMatrixInverse * vec4( uv*2.0 - 1.0, 0.0, 1.0 ));\r
    vec3 rd = normalize( fragPos.xyz/fragPos.w - ro );\r
#endif

    Ray ray;\r
	ray.o = ro;\r
	ray.d = rd;\r
	ray.min = 0.0;\r
	ray.max = MAX_RAY_DIST;\r
	return ray;\r
}

vec3 Tonemap( const in vec3 col )\r
{\r
	return 1.0 - exp2( -col );\r
}

void main()\r
{\r
    Ray ray = getCameraRay( vUv.xy );

	vec3 sceneCol = getSceneColourPrimary( ray );

	float exposure = 1.5;\r
	gl_FragColor = vec4( Tonemap(sceneCol * exposure), 1.0 );\r
}`,Sp=`#ifndef RAYMARCH_INCLUDE\r
#define RAYMARCH_INCLUDE

#define gl_FragCoord     (gl_FragCoord / devicePixelRatio)

#define PI 3.14159265359\r
#define PI2 6.28318530718\r
#define PI_HALF 1.5707963267949\r
#define RECIPROCAL_PI 0.31830988618\r
#define RECIPROCAL_PI2 0.15915494\r
#define LOG2 1.442695\r
#define EPSILON 1e-6

#define saturate(a) clamp( a, 0.0, 1.0 )\r
#define whiteCompliment(a) ( 1.0 - saturate( a ) )

uniform float devicePixelRatio;\r
uniform float time;\r
uniform vec2 resolution;\r
uniform float cameraNear;\r
uniform float cameraFar;

uniform mat4 cameraWorldMatrix;\r
uniform mat4 cameraProjectionMatrixInverse;\r
uniform sampler2D textureMaps[4];

float getGrey( vec3 p ){ return p.x*0.299 + p.y*0.587 + p.z*0.114; }

vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\r
    return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\r
}

vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\r
    return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\r
}

float getFragDepth( vec3 fragPosW )

{\r
    vec4 fragPosV = viewMatrix * vec4(fragPosW, 1.0);

    
    

    
    float fragDepth = ( fragPosV.z + cameraNear ) / ( cameraNear - cameraFar );

    return fragDepth; 
}

#endif\r
#ifndef RAYMARCH_UTILS\r
#define RAYMARCH_UTILS

#define TONE_MAPPING_EXPOSURE 0.4

vec3 FilmicToneMapping( vec3 color ) {\r
    color *= TONE_MAPPING_EXPOSURE;\r
    return saturate( (color*(2.51*color + 0.03)) / (color*(2.43*color + 0.59) + 0.14) );\r
}

float pow2( const in float x ) { return x*x; }\r
float pow3( const in float x ) { return x*x*x; }\r
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }\r
float pow5( const in float x ) { float x2 = x*x; return x2*x2*x; }

float mapLinear( float x, float x0, float x1, float y0, float y1 ) {\r
    return y0 + (x - x0) * (y1 - y0) / (x1 - x0);\r
}

float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }

vec2 smoothstepd( float a, float b, float x )

{\r
	if( x < a ) return vec2( 0.0, 0.0 );\r
	if( x > b ) return vec2( 1.0, 0.0 );\r
    float ir = 1.0 / (b - a);\r
    x = (x - a)*ir;\r
    return vec2( x*x*(3.0 - 2.0*x), 6.0*x*(1.0 - x)*ir );\r
}

float rand( in float x ) {\r
    return fract(sin(dot(vec2(x+47.49,38.2467/(x+2.3)), vec2(12.9898, 78.233)))*(43758.5453));\r
}

float rand( in vec2 uv ) {\r
	const float a = 12.9898, b = 78.233, c = 43758.5453;\r
	float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\r
	return fract(sin(sn) * c);\r
}

vec3 Dithering( in vec3 color ) {\r
    float grid_position = rand( gl_FragCoord.xy );\r
    vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\r
    dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\r
    return color + dither_shift_RGB;\r
}

vec3 Vignetting( in vec3 color, in float strength ) {\r
    
	vec2 uv = gl_FragCoord.xy / resolution.xy;\r
	vec2 offset = (uv - 0.5) * sqrt(2.0);\r
	float dist = dot(offset, offset);\r
	float shade = mix( 1.0, 1.0 - strength, dist );	\r
	return color * shade;\r
}

float checkerGradBox( in vec2 p )

{\r
    
    vec2 w = fwidth(p) + 0.001;

    
    vec2 i = 2.0*(abs(fract((p-0.5*w)*0.5)-0.5)-abs(fract((p+0.5*w)*0.5)-0.5))/w;

    
    return 0.5 - 0.5*i.x*i.y;\r
}

float gridGradBox( in vec2 p )

{\r
    const float N = 10.0; 

	
    vec2 w = fwidth(p) + 0.001;

	
    vec2 a = p + 0.5*w;                        \r
    vec2 b = p - 0.5*w;           \r
    vec2 i = (floor(a)+min(fract(a)*N,1.0) - floor(b)-min(fract(b)*N,1.0))/(N*w);

    
    return (1.0-i.x)*(1.0-i.y);\r
}

vec3 checkerColor( in vec3 p, in float ntile, in float intensity )

{\r
    float f = checkerGradBox( ntile * p.xz );\r
    return (1.0 - intensity) + f * vec3(intensity);\r
}

vec3 gridColor( in vec3 p, in float ntile, in float intensity )

{\r
    float f = gridGradBox( ntile * p.xz );\r
    return (1.0 - intensity) + f * vec3(intensity);\r
}

float euclideanModulo( float n, float m )\r
{\r
    return mod((mod(n,m) + m), m);\r
}

float hue2rgb( float p, float q, float t )\r
{\r
    if ( t < 0.0 ) t += 1.0;\r
    if ( t > 1.0 ) t -= 1.0;\r
    if ( t < 1.0 / 6.0 ) return p + ( q - p ) * 6.0 * t;\r
    if ( t < 1.0 / 2.0 ) return q;\r
    if ( t < 2.0 / 3.0 ) return p + ( q - p ) * 6.0 * ( 2.0 / 3.0 - t );\r
    return p;\r
}

vec3 hsl2rgb( vec3 hsl )

{\r
    vec3 rgb;\r
    float h = euclideanModulo( hsl.x, 1.0 );\r
    float s = clamp( hsl.y, 0.0, 1.0 );\r
    float l = clamp( hsl.z, 0.0, 1.0 );\r
    if ( s == 0.0 )\r
        rgb = vec3(l);\r
    else {\r
        float p = (l <= 0.5) ? l * ( 1.0 + s ) : l + s - ( l * s );\r
        float q = ( 2.0 * l ) - p;\r
        rgb.r = hue2rgb( q, p, h + 1.0 / 3.0 );\r
        rgb.g = hue2rgb( q, p, h );\r
        rgb.b = hue2rgb( q, p, h - 1.0 / 3.0 );\r
    }\r
    return rgb;\r
}

vec4 texCube( in sampler2D tex, in vec3 p, in vec3 n, in float k )

{\r
    vec3 m = pow( abs(n), vec3(k) );\r
	vec4 tx = texture( tex, p.yz );\r
	vec4 ty = texture( tex, p.zx );\r
	vec4 tz = texture( tex, p.xy );\r
	return (tx*m.x + ty*m.y + tz*m.z) / (m.x + m.y + m.z);\r
}\r
vec4 texCube( in sampler2D tex, in vec3 p, in vec3 n, in float k, in vec3 dpdx, in vec3 dpdy )

{\r
    vec3 m = pow( abs(n), vec3(k) );\r
	vec4 tx = textureGrad( tex, p.yz, dpdx.yz, dpdy.yz );\r
	vec4 ty = textureGrad( tex, p.zx, dpdx.zx, dpdy.zx );\r
	vec4 tz = textureGrad( tex, p.xy, dpdx.xy, dpdy.xy );\r
	return (tx*m.x + ty*m.y + tz*m.z) / (m.x + m.y + m.z);\r
}\r
vec4 texCube( in sampler2D tex, in vec3 p, in vec3 n )\r
{\r
    return texCube( tex, p, n, 4.0 );\r
}

vec4 texSmooth( in sampler2D tex, in vec2 res, in vec2 uv )

{\r
	uv = uv*res + 0.5;\r
	vec2 iuv = floor( uv );\r
	vec2 fuv = fract( uv );\r
	uv = iuv + fuv*fuv*(3.0-2.0*fuv);\r
	uv = (uv - 0.5)/res;\r
	return texture( tex, uv );\r
}\r
vec4 texSmooth( in sampler2D tex, in vec2 res, in vec2 uv, in vec2 duvdx, in vec2 duvdy )

{\r
	uv = uv*res + 0.5;\r
	vec2 iuv = floor( uv );\r
	vec2 fuv = fract( uv );\r
	uv = iuv + fuv*fuv*(3.0-2.0*fuv);\r
	uv = (uv - 0.5)/res;\r
	return textureGrad( tex, uv, duvdx, duvdy );\r
}

vec3 getBumpNormal( in sampler2D tex, in vec3 p, in vec3 n, in float bumpFactor )

{\r
    const float eps = 0.001;\r
    float baseVal = getGrey(texCube(tex, p, n).rgb);\r
    vec3 grad = vec3( getGrey(texCube(tex, vec3(p.x+eps, p.y, p.z), n).rgb) - baseVal,\r
                      getGrey(texCube(tex, vec3(p.x, p.y+eps, p.z), n).rgb) - baseVal,\r
                      getGrey(texCube(tex, vec3(p.x, p.y, p.z+eps), n).rgb) - baseVal )/eps;\r
    grad -= n * dot( n, grad );\r
    
    return normalize( n + grad*bumpFactor );\r
}

#endif\r
#ifndef RAYMARCH_NOISES\r
#define RAYMARCH_NOISES

#if 1\r
    
    #define HASHSCALE1 0.1031\r
    #define HASHSCALE3 vec3(0.1031, 0.1030, 0.0973)\r
    #define HASHSCALE4 vec4(0.1031, 0.1030, 0.0973, 0.1099)\r
#else\r
    
    #define HASHSCALE1 443.8975\r
    #define HASHSCALE3 vec3(443.897, 441.423, 437.195)\r
    #define HASHSCALE4 vec4(443.897, 441.423, 437.195, 444.129)\r
#endif\r
float hash11(float p) {\r
	vec3 p3 = fract(vec3(p) * HASHSCALE1);\r
    p3 += dot(p3, p3.yzx+19.19);\r
    return fract((p3.x+p3.y)*p3.z);\r
}\r
float hash12(vec2 p) {\r
	vec3 p3 = fract(vec3(p.xyx) * HASHSCALE1);\r
    p3 += dot(p3, p3.yzx+19.19);\r
    return fract((p3.x+p3.y)*p3.z);\r
}\r
float hash13(vec3 p3) {\r
	p3 = fract(p3 * HASHSCALE1);\r
    p3 += dot(p3, p3.yzx+19.19);\r
    return fract((p3.x+p3.y)*p3.z);\r
}\r
vec2 hash21(float p) {\r
	vec3 p3 = fract(vec3(p) * HASHSCALE3);\r
	p3 += dot(p3, p3.yzx+19.19);\r
    return fract((p3.xx+p3.yz)*p3.zy);\r
}\r
vec2 hash22(vec2 p) {\r
	vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3);\r
    p3 += dot(p3, p3.yzx+19.19);\r
    return fract((p3.xx+p3.yz)*p3.zy);\r
}\r
vec2 hash23(vec3 p3) {\r
	p3 = fract(p3 * HASHSCALE3);\r
    p3 += dot(p3, p3.yzx+19.19);\r
    return fract((p3.xx+p3.yz)*p3.zy);\r
}\r
vec3 hash31(float p) {\r
   vec3 p3 = fract(vec3(p) * HASHSCALE3);\r
   p3 += dot(p3, p3.yzx+19.19);\r
   return fract((p3.xxy+p3.yzz)*p3.zyx); \r
}\r
vec3 hash32(vec2 p) {\r
	vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3);\r
    p3 += dot(p3, p3.yxz+19.19);\r
    return fract((p3.xxy+p3.yzz)*p3.zyx);\r
}\r
vec3 hash33(vec3 p3) {\r
	p3 = fract(p3 * HASHSCALE3);\r
    p3 += dot(p3, p3.yxz+19.19);\r
    return fract((p3.xxy + p3.yxx)*p3.zyx);\r
}\r
vec4 hash41(float p) {\r
	vec4 p4 = fract(vec4(p) * HASHSCALE4);\r
    p4 += dot(p4, p4.wzxy+19.19);\r
    return fract((p4.xxyz+p4.yzzw)*p4.zywx);\r
}\r
vec4 hash42(vec2 p) {\r
	vec4 p4 = fract(vec4(p.xyxy) * HASHSCALE4);\r
    p4 += dot(p4, p4.wzxy+19.19);\r
    return fract((p4.xxyz+p4.yzzw)*p4.zywx);\r
}\r
vec4 hash43(vec3 p) {\r
	vec4 p4 = fract(vec4(p.xyzx)  * HASHSCALE4);\r
    p4 += dot(p4, p4.wzxy+19.19);\r
    return fract((p4.xxyz+p4.yzzw)*p4.zywx);\r
}\r
vec4 hash44(vec4 p4) {\r
	p4 = fract(p4 * HASHSCALE4);\r
    p4 += dot(p4, p4.wzxy+19.19);\r
    return fract((p4.xxyz+p4.yzzw)*p4.zywx);\r
}

float noise11(float x) {\r
    float p = floor(x);\r
    float f = fract(x);\r
    f = f*f*(3.0-2.0*f);\r
    return mix( hash11(p + 0.0), hash11(p + 1.0), f );\r
}\r
float noise12(vec2 x) {\r
    vec2 i = floor(x);\r
    vec2 f = fract(x);\r
	float a = hash12(i);\r
    float b = hash12(i + vec2(1.0, 0.0));\r
    float c = hash12(i + vec2(0.0, 1.0));\r
    float d = hash12(i + vec2(1.0, 1.0));\r
    vec2 u = f*f*(3.0-2.0*f);\r
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\r
}\r
float noise12(sampler2D tex, vec2 x) {\r
    vec2 p = floor(x);\r
    vec2 f = fract(x);\r
	f = f*f*(3.0-2.0*f);\r
	vec2 uv = p.xy + f.xy;\r
	return textureLod(tex, (uv + 0.5)/256.0, 0.0).x;\r
}\r
float noise13(vec3 x) {\r
    const vec3 step = vec3(110.0, 241.0, 171.0);\r
    vec3 i = floor(x);\r
    vec3 f = fract(x); \r
    float n = dot(i, step);\r
    vec3 u = f*f*(3.0-2.0*f);\r
    return mix(mix(mix( hash11(n + dot(step, vec3(0.0, 0.0, 0.0))), hash11(n + dot(step, vec3(1.0, 0.0, 0.0))), u.x),\r
                   mix( hash11(n + dot(step, vec3(0.0, 1.0, 0.0))), hash11(n + dot(step, vec3(1.0, 1.0, 0.0))), u.x), u.y),\r
               mix(mix( hash11(n + dot(step, vec3(0.0, 0.0, 1.0))), hash11(n + dot(step, vec3(1.0, 0.0, 1.0))), u.x),\r
                   mix( hash11(n + dot(step, vec3(0.0, 1.0, 1.0))), hash11(n + dot(step, vec3(1.0, 1.0, 1.0))), u.x), u.y), u.z);\r
}\r
float noise13(sampler2D tex, vec3 x) {\r
    vec3 p = floor(x);\r
    vec3 f = fract(x);\r
	f = f*f*(3.0-2.0*f);\r
	vec2 uv = (p.xy + vec2(37.0, 17.0)*p.z) + f.xy;\r
	vec2 rg = textureLod(tex, (uv + 0.5)/256.0, 0.0).yx;\r
	return mix( rg.x, rg.y, f.z );\r
}\r
vec2 noise22(vec2 x) {\r
    return vec2( noise12(x), noise12(x+17.0) );
    
}

float Hash11( float p ) {\r
    return fract( p*17.0*fract( p*0.3183099 ) );\r
}\r
float Hash12(vec2 p) {\r
#if 1\r
    float h = dot( p, vec2(127.1,311.7) );\r
    return fract( sin(h) * 43758.5453123 );\r
#else\r
    p = 50.0*fract( p*0.3183099 );\r
    return fract( p.x*p.y*(p.x+p.y) );\r
#endif\r
}\r
float Hash13(vec3 p) {\r
    
    p  = 50.0*fract( p*0.3183099 + vec3(0.71,0.113,0.419));\r
    return fract( p.x*p.y*p.z*(p.x+p.y+p.z) );\r
}\r
vec2 Hash21( float p ) {\r
    return fract( sin(vec2(p, p+1.0)) * vec2(43758.5453123, 22578.1459123) );\r
}\r
vec2 Hash22(vec2 p) {\r
    
    const vec2 k = vec2( 0.3183099, 0.3678794 );\r
    p = p*k + k.yx;\r
    return fract( 16.0 * k*fract( p.x*p.y*(p.x + p.y)) );\r
}\r
vec3 Hash33(vec3 p) {\r
    
	p = vec3( dot(p,vec3(127.1,311.7, 74.7)),\r
			  dot(p,vec3(269.5,183.3,246.1)),\r
			  dot(p,vec3(113.5,271.9,124.6)));\r
    return fract(sin(p)*43758.5453123);\r
}

float noise(vec2 x)

{\r
#if 0\r
    vec2 p = floor(x);\r
    vec2 f = fract(x);\r
	vec2 u = f*f*(3.0-2.0*f);\r
    return mix( mix( Hash12( p + vec2(0.0,0.0) ), \r
                     Hash12( p + vec2(1.0,0.0) ), u.x),\r
                mix( Hash12( p + vec2(0.0,1.0) ), \r
                     Hash12( p + vec2(1.0,1.0) ), u.x), u.y);\r
#else\r
    vec2 p = floor(x);\r
    vec2 w = fract(x);\r
    vec2 u = w*w*w*(w*(w*6.0-15.0)+10.0);\r
    float a = Hash12(p+vec2(0.0,0.0));\r
    float b = Hash12(p+vec2(1.0,0.0));\r
    float c = Hash12(p+vec2(0.0,1.0));\r
    float d = Hash12(p+vec2(1.0,1.0));\r
    return a + (b-a)*u.x + (c-a)*u.y + (a-b-c+d)*u.x*u.y;\r
#endif\r
}\r
float noise(sampler2D tex, vec2 x)

{\r
    
    vec2 p = floor(x);\r
    vec2 f = fract(x);\r
	f = f*f*(3.0-2.0*f);\r
#if 0 
	vec2 uv = (p.xy + vec2(37.0,17.0)) + f.xy;\r
	vec2 rg = textureLod( tex, (uv + 0.5)/256.0, 0.0 ).yx;\r
#else 
	vec2 uv = (p.xy+vec2(37.0,17.0));\r
	vec2 rg1 = textureLod( tex, (uv + vec2(0.5,0.5))/256.0, 0.0 ).yx;\r
	vec2 rg2 = textureLod( tex, (uv + vec2(1.5,0.5))/256.0, 0.0 ).yx;\r
	vec2 rg3 = textureLod( tex, (uv + vec2(0.5,1.5))/256.0, 0.0 ).yx;\r
	vec2 rg4 = textureLod( tex, (uv + vec2(1.5,1.5))/256.0, 0.0 ).yx;\r
	vec2 rg = mix( mix(rg1,rg2,f.x), mix(rg3,rg4,f.x), f.y );\r
#endif\r
	return mix( rg.x, rg.y, f.x );\r
}\r
float noise(vec3 x)

{\r
    vec3 p = floor(x);\r
    vec3 f = fract(x);\r
    f = f*f*(3.0-2.0*f);\r
    return mix(mix(mix( Hash13( p + vec3(0,0,0) ), \r
                        Hash13( p + vec3(1,0,0) ), f.x),\r
                   mix( Hash13( p + vec3(0,1,0) ), \r
                        Hash13( p + vec3(1,1,0) ), f.x), f.y),\r
               mix(mix( Hash13( p + vec3(0,0,1) ), \r
                        Hash13( p + vec3(1,0,1) ), f.x),\r
                   mix( Hash13( p + vec3(0,1,1) ), \r
                        Hash13( p + vec3(1,1,1) ), f.x), f.y), f.z);\r
}\r
float noise(sampler2D tex, vec3 x)

{\r
	
    vec3 p = floor(x);\r
    vec3 f = fract(x);\r
	f = f*f*(3.0-2.0*f);\r
#if 1 
	vec2 uv = (p.xy + vec2(37.0,17.0)*p.z) + f.xy;\r
	vec2 rg = textureLod( tex, (uv + 0.5)/256.0, 0.0 ).yx;\r
#else 
	vec2 uv = (p.xy+vec2(37.0,17.0)*p.z);\r
	vec2 rg1 = textureLod( tex, (uv + vec2(0.5,0.5))/256.0, 0.0 ).yx;\r
	vec2 rg2 = textureLod( tex, (uv + vec2(1.5,0.5))/256.0, 0.0 ).yx;\r
	vec2 rg3 = textureLod( tex, (uv + vec2(0.5,1.5))/256.0, 0.0 ).yx;\r
	vec2 rg4 = textureLod( tex, (uv + vec2(1.5,1.5))/256.0, 0.0 ).yx;\r
	vec2 rg = mix( mix(rg1,rg2,f.x), mix(rg3,rg4,f.x), f.y );\r
#endif\r
	return mix( rg.x, rg.y, f.z );\r
}

float gnoise(vec2 p)

{\r
    vec2 i = floor( p );\r
    vec2 f = fract( p );\r
	vec2 u = f*f*(3.0-2.0*f);\r
    return mix( mix( dot( Hash22( i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ), \r
                     dot( Hash22( i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),\r
                mix( dot( Hash22( i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ), \r
                     dot( Hash22( i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);\r
}\r
float gnoise(vec3 p)

{\r
    vec3 i = floor( p );\r
    vec3 f = fract( p );\r
	vec3 u = f*f*(3.0-2.0*f);\r
    return mix( mix( mix( dot( Hash33( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), \r
                          dot( Hash33( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),\r
                     mix( dot( Hash33( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), \r
                          dot( Hash33( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),\r
                mix( mix( dot( Hash33( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), \r
                          dot( Hash33( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),\r
                     mix( dot( Hash33( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), \r
                          dot( Hash33( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );\r
}

vec3 noised(vec2 x)

{\r
    vec2 p = floor(x);\r
    vec2 f = fract(x);\r
#if 1\r
    
    vec2 u = f*f*f*(f*(f*6.0-15.0)+10.0);\r
    vec2 du = 30.0*f*f*(f*(f-2.0)+1.0);\r
#else\r
    
    vec2 u = f*f*(3.0-2.0*f);\r
    vec2 du = 6.0*f*(1.0-f);\r
#endif\r
    float a = Hash12( p + vec2(0.0,0.0) );\r
    float b = Hash12( p + vec2(1.0,0.0) );\r
    float c = Hash12( p + vec2(0.0,1.0) );\r
    float d = Hash12( p + vec2(1.0,1.0) );\r
    float k0 = a;\r
    float k1 = b - a;\r
    float k2 = c - a;\r
    float k4 = a - b - c + d;\r
    return vec3( k0 + k1*u.x + k2*u.y + k4*u.x*u.y,     
                 du * vec2(k1 + k4*u.y, k2 + k4*u.x) ); 
}\r
vec3 noised(sampler2D tex, vec2 x)

{\r
    
    vec2 f = fract(x);\r
    vec2 p = floor(x);\r
#if 0\r
    
    vec2 u = f*f*f*(f*(f*6.0-15.0)+10.0);\r
    vec2 du = 30.0*f*f*(f*(f-2.0)+1.0);\r
#else\r
    
    vec2 u = f*f*(3.0-2.0*f);\r
    vec2 du = 6.0*f*(1.0-f);\r
#endif\r
	float a = textureLod( tex, (p+vec2(0.5,0.5))/256.0, 0.0 ).x;\r
	float b = textureLod( tex, (p+vec2(1.5,0.5))/256.0, 0.0 ).x;\r
	float c = textureLod( tex, (p+vec2(0.5,1.5))/256.0, 0.0 ).x;\r
	float d = textureLod( tex, (p+vec2(1.5,1.5))/256.0, 0.0 ).x;\r
	return vec3(a+(b-a)*u.x+(c-a)*u.y+(a-b-c+d)*u.x*u.y, du*(vec2(b-a,c-a)+(a-b-c+d)*u.yx));\r
}\r
vec4 noised(vec3 x)

{\r
    vec3 p = floor(x);\r
    vec3 w = fract(x);\r
#if 1\r
    
    vec3 u = w*w*w*(w*(w*6.0-15.0)+10.0);\r
    vec3 du = 30.0*w*w*(w*(w-2.0)+1.0);\r
#else\r
    
    vec3 u = w*w*(3.0-2.0*w);\r
    vec3 du = 6.0*w*(1.0-w);\r
#endif

#if 0\r
    float a = Hash13(p+vec3(0.0,0.0,0.0));\r
    float b = Hash13(p+vec3(1.0,0.0,0.0));\r
    float c = Hash13(p+vec3(0.0,1.0,0.0));\r
    float d = Hash13(p+vec3(1.0,1.0,0.0));\r
    float e = Hash13(p+vec3(0.0,0.0,1.0));\r
	float f = Hash13(p+vec3(1.0,0.0,1.0));\r
    float g = Hash13(p+vec3(0.0,1.0,1.0));\r
    float h = Hash13(p+vec3(1.0,1.0,1.0));\r
#else\r
    float n = p.x + 317.0*p.y + 157.0*p.z;\r
    float a = Hash11(n + 0.0);\r
    float b = Hash11(n + 1.0);\r
    float c = Hash11(n + 317.0);\r
    float d = Hash11(n + 318.0);\r
    float e = Hash11(n + 157.0);\r
	float f = Hash11(n + 158.0);\r
    float g = Hash11(n + 474.0);\r
    float h = Hash11(n + 475.0);\r
#endif

    float k0 =   a;\r
    float k1 =   b - a;\r
    float k2 =   c - a;\r
    float k3 =   e - a;\r
    float k4 =   a - b - c + d;\r
    float k5 =   a - c - e + g;\r
    float k6 =   a - b - e + f;\r
    float k7 = - a + b + c - d + e - f - g + h;\r
    return vec4( k0 + k1*u.x + k2*u.y + k3*u.z + k4*u.x*u.y + k5*u.y*u.z + k6*u.z*u.x + k7*u.x*u.y*u.z, \r
                 du * vec3( k1 + k4*u.y + k6*u.z + k7*u.y*u.z,\r
                            k2 + k5*u.z + k4*u.x + k7*u.z*u.x,\r
                            k3 + k6*u.x + k5*u.y + k7*u.x*u.y ) );\r
}

vec3 gnoised(vec2 p)

{\r
    vec2 i = floor( p );\r
    vec2 f = fract( p );\r
#if 1\r
    
    vec2 u = f*f*f*(f*(f*6.0-15.0)+10.0);\r
    vec2 du = 30.0*f*f*(f*(f-2.0)+1.0);\r
#else\r
    
    vec2 u = f*f*(3.0-2.0*f);\r
    vec2 du = 6.0*f*(1.0-f);\r
#endif\r
    vec2 ga = Hash22( i + vec2(0.0,0.0) );\r
    vec2 gb = Hash22( i + vec2(1.0,0.0) );\r
    vec2 gc = Hash22( i + vec2(0.0,1.0) );\r
    vec2 gd = Hash22( i + vec2(1.0,1.0) );\r
    float va = dot( ga, f - vec2(0.0,0.0) );\r
    float vb = dot( gb, f - vec2(1.0,0.0) );\r
    float vc = dot( gc, f - vec2(0.0,1.0) );\r
    float vd = dot( gd, f - vec2(1.0,1.0) );\r
    return vec3( va + u.x*(vb-va) + u.y*(vc-va) + u.x*u.y*(va-vb-vc+vd),   
                 ga + u.x*(gb-ga) + u.y*(gc-ga) + u.x*u.y*(ga-gb-gc+gd) +  
                 du * (u.yx*(va-vb-vc+vd) + vec2(vb,vc) - va));\r
}\r
vec4 gnoised(vec3 x)

{\r
    
    vec3 p = floor(x);\r
    vec3 w = fract(x);\r
    #if 1\r
    
    vec3 u = w*w*w*(w*(w*6.0-15.0)+10.0);\r
    vec3 du = 30.0*w*w*(w*(w-2.0)+1.0);\r
    #else\r
    
    vec3 u = w*w*(3.0-2.0*w);\r
    vec3 du = 6.0*w*(1.0-w);\r
    #endif\r
    
    vec3 ga = Hash33( p+vec3(0.0,0.0,0.0) );\r
    vec3 gb = Hash33( p+vec3(1.0,0.0,0.0) );\r
    vec3 gc = Hash33( p+vec3(0.0,1.0,0.0) );\r
    vec3 gd = Hash33( p+vec3(1.0,1.0,0.0) );\r
    vec3 ge = Hash33( p+vec3(0.0,0.0,1.0) );\r
	vec3 gf = Hash33( p+vec3(1.0,0.0,1.0) );\r
    vec3 gg = Hash33( p+vec3(0.0,1.0,1.0) );\r
    vec3 gh = Hash33( p+vec3(1.0,1.0,1.0) );\r
    
    float va = dot( ga, w-vec3(0.0,0.0,0.0) );\r
    float vb = dot( gb, w-vec3(1.0,0.0,0.0) );\r
    float vc = dot( gc, w-vec3(0.0,1.0,0.0) );\r
    float vd = dot( gd, w-vec3(1.0,1.0,0.0) );\r
    float ve = dot( ge, w-vec3(0.0,0.0,1.0) );\r
    float vf = dot( gf, w-vec3(1.0,0.0,1.0) );\r
    float vg = dot( gg, w-vec3(0.0,1.0,1.0) );\r
    float vh = dot( gh, w-vec3(1.0,1.0,1.0) );\r
    
    return vec4( va + u.x*(vb-va) + u.y*(vc-va) + u.z*(ve-va) + u.x*u.y*(va-vb-vc+vd) + u.y*u.z*(va-vc-ve+vg) + u.z*u.x*(va-vb-ve+vf) + (-va+vb+vc-vd+ve-vf-vg+vh)*u.x*u.y*u.z,    
                 ga + u.x*(gb-ga) + u.y*(gc-ga) + u.z*(ge-ga) + u.x*u.y*(ga-gb-gc+gd) + u.y*u.z*(ga-gc-ge+gg) + u.z*u.x*(ga-gb-ge+gf) + (-ga+gb+gc-gd+ge-gf-gg+gh)*u.x*u.y*u.z +   
                 du * (vec3(vb,vc,ve) - va + u.yzx*vec3(va-vb-vc+vd,va-vc-ve+vg,va-vb-ve+vf) + u.zxy*vec3(va-vb-ve+vf,va-vb-vc+vd,va-vc-ve+vg) + u.yzx*u.zxy*(-va+vb+vc-vd+ve-vf-vg+vh) ));\r
}

#define NUM_NOISE_OCTAVES   5

float fbm11(float x) {\r
	float v = 0.0;\r
	float a = 0.5;\r
	float shift = float(100.0);\r
	for (int i = 0; i < NUM_NOISE_OCTAVES; i++) {\r
		v += a * noise11(x);\r
		x = x * 2.0 + shift;\r
		a *= 0.5;\r
	}\r
	return v;\r
}\r
float fbm12(vec2 x) {\r
	float v = 0.0;\r
	float a = 0.5;\r
	vec2 shift = vec2(100.0);\r
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));\r
	for (int i = 0; i < NUM_NOISE_OCTAVES; i++) {\r
		v += a * noise12(x);\r
		x = rot * x * 2.0 + shift;\r
		a *= 0.5;\r
	}\r
	return v;\r
}\r
float fbm13(vec3 x) {\r
	float v = 0.0;\r
	float a = 0.5;\r
	vec3 shift = vec3(100.0);\r
	for (int i = 0; i < NUM_NOISE_OCTAVES; i++) {\r
		v += a * noise13(x);\r
		x = x * 2.0 + shift;\r
		a *= 0.5;\r
	}\r
	return v;\r
}

const mat2 rotM2  = mat2(0.80,0.60,-0.60,0.80);\r
const mat2 rotM2i = mat2(0.80,-0.60,0.60,0.80);
const mat3 rotM3  = mat3(0.00,0.80,0.60,-0.80,0.36,-0.48,-0.60,-0.48,0.64);\r
const mat3 rotM3i = mat3(0.00,-0.80,-0.60,0.80,0.36,-0.48,0.60,-0.48,0.64);

float fbm(sampler2D tex, vec2 p) {\r
    
    float f = 0.0;\r
    f += 0.5000 * texture( tex, p/256.0 ).x; p = rotM2*p*2.02;\r
    f += 0.2500 * texture( tex, p/256.0 ).x; p = rotM2*p*2.03;\r
    f += 0.1250 * texture( tex, p/256.0 ).x; p = rotM2*p*2.01;\r
    f += 0.0625 * texture( tex, p/256.0 ).x;\r
    return f/0.9375;\r
}

float fbm_4(vec2 x) {\r
    float f = 1.92;\r
    float a = 0.0;\r
    float b = 0.5;\r
    for(int i=0; i<4; i++)\r
    {\r
        float n = noise(x);\r
        a += b * n;\r
        b *= 0.5;
        x = f * rotM2 * x;\r
    }\r
	return a;\r
}\r
float fbm_4(sampler2D tex, vec2 x) {\r
    float f = 1.92;
    float a = 0.0;\r
    float b = 0.5;\r
    for(int i=0; i<4; i++)\r
    {\r
        
        float n = noise(tex, x);     
        a += b * n;\r
        b *= 0.5;
        x = f * rotM2 * x;\r
    }\r
	return a;\r
}\r
float fbm_9(vec2 x) {\r
    float f = 1.92;
    float a = 0.0;\r
    float b = 0.5;\r
    for(int i=0; i<9; i++)\r
    {\r
        float n = noise(x);\r
        a += b * n;\r
        b *= 0.5;
        x = f * rotM2 * x;\r
    }\r
	return a;\r
}\r
float fbm_9(sampler2D tex, vec2 x) {\r
    float f = 1.92;
    float a = 0.0;\r
    float b = 0.5;\r
    for(int i=0; i<9; i++)\r
    {\r
        
        float n = noise(tex, x);     
        a += b * n;\r
        b *= 0.5;
        x = f * rotM2 * x;\r
    }\r
	return a;\r
}

float fbm_4(vec3 x) {\r
    float f = 1.92;
    float a = 0.0;\r
    float b = 0.5;\r
    for(int i=0; i<4; i++ )\r
    {\r
        float n = noise(x);\r
        a += b * n;\r
        b *= 0.5;\r
        x = f * rotM3 * x;\r
    }\r
	return a;\r
}\r
float fbm_4(sampler2D tex, vec3 x) {\r
    float f = 1.92;
    float a = 0.0;\r
    float b = 0.5;\r
    for(int i=0; i<4; i++ )\r
    {\r
        float n = noise(tex, x);\r
        a += b * n;\r
        b *= 0.5;\r
        x = f * rotM3 * x;\r
    }\r
	return a;\r
}

vec3 fbmd_5(vec2 x) {\r
    float f = 1.92;\r
    float a = 0.0;\r
    float b = 0.5;\r
    vec2  d = vec2(0.0);\r
    mat2  m = mat2(1.0,0.0, 0.0,1.0);\r
    for(int i=0; i<5; i++)\r
    {\r
        vec3 n = noised(x);\r
        a += b * n.x;          
        d += b * m * n.yz;       
        b *= 0.5;\r
        x = f * rotM2 * x;\r
        m = f * rotM2i * m;\r
    }\r
	return vec3( a, d );\r
}\r
vec3 fbmd_9(vec2 x) {\r
    float f = 1.92;\r
    float a = 0.0;\r
    float b = 0.5;\r
    vec2  d = vec2(0.0);\r
    mat2  m = mat2(1.0,0.0, 0.0,1.0);\r
    for(int i=0; i<9; i++)\r
    {\r
        vec3 n = noised(x);\r
        a += b * n.x;          
        d += b * m * n.yz;       
        b *= 0.5;\r
        x = f * rotM2 * x;\r
        m = f * rotM2i * m;\r
    }\r
	return vec3( a, d );\r
}

vec4 fbmd_5(vec3 x) {\r
    
    float f = 1.92;\r
    float a = 0.0;\r
    float b = 0.5;\r
    vec3  d = vec3(0.0);\r
    mat3  m = mat3(1.0,0.0,0.0, 0.0,1.0,0.0, 0.0,0.0,1.0);\r
    for(int i=0; i<5; i++)\r
    {\r
        vec4 n = noised(x);\r
        a += b * n.x;       
        d += b * m * n.yzw; 
        b *= 0.5;\r
        x = f * rotM3 * x;\r
        m = f * rotM3i * m;\r
    }\r
	return vec4( a, d );\r
}\r
vec4 fbmd_7(vec3 x) {\r
    
    float f = 1.92;\r
    float a = 0.0;\r
    float b = 0.5;\r
    vec3  d = vec3(0.0);\r
    mat3  m = mat3(1.0,0.0,0.0, 0.0,1.0,0.0, 0.0,0.0,1.0);\r
    for(int i=0; i<7; i++)\r
    {\r
        vec4 n = noised(x);\r
        a += b * n.x;       
        d += b * m * n.yzw; 
        b *= 0.5;\r
        x = f * rotM3 * x;\r
        m = f * rotM3i * m;\r
    }\r
	return vec4( a, d );\r
}

float triSmooth11(float x){ return 0.25+0.25*cos(PI2*x); }\r
float triSmooth12(vec2 p) { return triSmooth11(p.x+triSmooth11(p.y)) + triSmooth11(p.y+triSmooth11(p.x)); }\r
vec3  triSmooth33(vec3 p) { return vec3(triSmooth11(p.x+triSmooth11(p.y)), triSmooth11(p.y+triSmooth11(p.z)), triSmooth11(p.z+triSmooth11(p.x))); }\r
float triNoiseSmooth13(vec3 p) {\r
    float z = 1.4;\r
	float rz = 0.0;\r
    vec3 bp = p;\r
	for(int i = 0; i <= 3; i++)\r
	{\r
        vec3 dg = triSmooth33( bp );\r
        p += dg;\r
        bp *= 1.8;
		z *= 1.5;\r
		p *= 1.2;\r
        rz += (triSmooth11(p.z + triSmooth11(p.x + triSmooth11(p.y))))/z;\r
        bp += 0.14;\r
	}\r
	return rz;\r
}\r
float tri11(float x) { return abs(fract(x)-0.5); }\r
float tri12(vec2 p)  { return tri11(p.x+tri11(p.y)) + tri11(p.y+tri11(p.x)); }\r
vec3  tri33(vec3 p)  { return vec3(tri11(p.x+tri11(p.y)), tri11(p.y+tri11(p.z)), tri11(p.z+tri11(p.x))); }\r
float triNoise13(vec3 p) {\r
    float z = 1.4;\r
	float rz = 0.0;\r
    vec3 bp = p;\r
	for(int i = 0; i <= 3; i++)\r
	{\r
        vec3 dg = tri33( bp );\r
        p += dg;\r
        bp *= 1.8;
		z *= 1.5;\r
		p *= 1.2;\r
        rz += (tri11(p.z + tri11(p.x + tri11(p.y))))/z;\r
        bp += 0.14;\r
	}\r
	return rz;\r
}

float sinusoidBumps(in vec3 p, in float time) {\r
    
    return sin(p.x*16.+time*0.57)*cos(p.y*16.+time*2.17)*sin(p.z*16.-time*1.31) + 0.5*sin(p.x*32.+time*0.07)*cos(p.y*32.+time*2.11)*sin(p.z*32.-time*1.23);\r
}

#endif\r
#ifndef RAYMARCH_DISTANCES\r
#define RAYMARCH_DISTANCES

float fPlane(vec3 p) { return p.y; }\r
float fPlane(vec3 p, vec3 n){ return dot(n, p); }\r
float fSphere(vec3 p, float s) { return length(p)-s; }\r
float fBox(vec3 p, vec3 b) {\r
    vec3 d = abs(p) - b;\r
    return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));\r
}\r
float fEllipsoid(vec3 p, vec3 r) { return (length( p/r ) - 1.0) * min(min(r.x,r.y),r.z); }\r
float uRoundBox(vec3 p, vec3 b, float r) { return length(max(abs(p)-b,0.0))-r; }\r
float fRoundBox(vec3 p, vec3 b, float r) { return length(max(abs(p)-b+vec3(r),0.0))-r; }\r
float fTorus(vec3 p, vec2 t) { return length( vec2(length(p.xz)-t.x,p.y) )-t.y; }\r
float fHexPrism(vec3 p, vec2 h) {\r
    vec3 q = abs(p);\r
#if 0\r
    return max(q.z-h.y,max((q.x*0.866025+q.y*0.5),q.y)-h.x);\r
#else\r
    float d1 = q.z-h.y;\r
    float d2 = max((q.x*0.866025+q.y*0.5),q.y)-h.x;\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
#endif\r
}\r
float fCapsule(vec3 p, vec3 a, vec3 b, float r) {\r
	vec3 pa = p-a, ba = b-a;\r
	float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\r
	return length( pa - ba*h ) - r;\r
}\r
float fEquilateralTriangle(vec2 p) {\r
    const float k = 1.73205;
    p.x = abs(p.x) - 1.0;\r
    p.y = p.y + 1.0/k;\r
    if( p.x + k*p.y > 0.0 ) p = vec2( p.x - k*p.y, -k*p.x - p.y )/2.0;\r
    p.x += 2.0 - 2.0*clamp( (p.x+2.0)/2.0, 0.0, 1.0 );\r
    return -length(p)*sign(p.y);\r
}\r
float fTriPrism(vec3 p, vec2 h) {\r
    vec3 q = abs(p);\r
    float d1 = q.z-h.y;\r
#if 1\r
    
    float d2 = max(q.x*0.866025+p.y*0.5,-p.y)-h.x*0.5;\r
#else\r
    
    h.x *= 0.866025;\r
    float d2 = fEquilateralTriangle(p.xy/h.x)*h.x;\r
#endif\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
}\r
float fCylinder(vec3 p, vec2 h) {\r
  vec2 d = abs(vec2(length(p.xz),p.y)) - h;\r
  return min(max(d.x,d.y),0.0) + length(max(d,0.0));\r
}\r
float fCone(vec3 p, vec3 c) {\r
    vec2 q = vec2( length(p.xz), p.y );\r
    float d1 = -q.y-c.z;\r
    float d2 = max( dot(q,c.xy), q.y);\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
}\r
float fConeSection(vec3 p, float h, float r1, float r2) {\r
    float d1 = -p.y - h;\r
    float q = p.y - h;\r
    float si = 0.5*(r1-r2)/h;\r
    float d2 = max( sqrt( dot(p.xz,p.xz)*(1.0-si*si)) + q*si - r2, q );\r
    return length(max(vec2(d1,d2),0.0)) + min(max(d1,d2), 0.);\r
}\r
float fPryamid4(vec3 p, vec3 h) {\r
    
    
    float box = fBox( p - vec3(0,-2.0*h.z,0), vec3(2.0*h.z) );\r
    float d = 0.0;\r
    d = max( d, abs( dot(p, vec3( -h.x, h.y, 0 )) ));\r
    d = max( d, abs( dot(p, vec3(  h.x, h.y, 0 )) ));\r
    d = max( d, abs( dot(p, vec3(  0, h.y, h.x )) ));\r
    d = max( d, abs( dot(p, vec3(  0, h.y,-h.x )) ));\r
    float octa = d - h.z;\r
    return max(-box,octa); 
}\r
float length2(vec2 p) { return sqrt( p.x*p.x + p.y*p.y ); }\r
float length6(vec2 p) {\r
	p = p*p*p; p = p*p;\r
	return pow( p.x + p.y, 1.0/6.0 );\r
}\r
float length8(vec2 p) {\r
	p = p*p; p = p*p; p = p*p;\r
	return pow( p.x + p.y, 1.0/8.0 );\r
}\r
float fTorus82(vec3 p, vec2 t) {\r
    vec2 q = vec2(length2(p.xz)-t.x,p.y);\r
    return length8(q)-t.y;\r
}\r
float fTorus88(vec3 p, vec2 t) {\r
    vec2 q = vec2(length8(p.xz)-t.x,p.y);\r
    return length8(q)-t.y;\r
}\r
float fCylinder6(vec3 p, vec2 h) { return max( length6(p.xz)-h.x, abs(p.y)-h.y ); }

float fSinusoidalPlasma(vec3 p) { return sin(p.x)*cos(p.y)*sin(p.z) + 0.5*sin(p.x*2.0)*cos(p.y*2.0)*sin(p.z*2.0); }\r
float fsmin(float a, float b, float k) {\r
    
	float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);\r
	return mix(b, a, h) - k*h*(1.0-h);\r
}\r
#if 1\r
float fsmax(float a, float b, float k) {\r
    
	float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);\r
	return mix(a, b, h) + k*h*(1.0-h);\r
}\r
#else\r
float fsmax(float a, float b, float k) {\r
    
	float h = clamp(0.5 + 0.5*(a-b)/k, 0.0, 1.0);\r
	return mix(b, a, h) + k*h*(1.0-h);\r
    
}\r
#endif

float fUnion( const in float f1, const in float f2 )\r
{\r
	return mix(f1, f2, step(f2, f1));\r
}\r
float fIntersect( const in float f1, const in float f2 )\r
{\r
	return mix(f2, f1, step(f2, f1));\r
}\r
float fSubtract( const in float f1, const in float f2 )\r
{\r
	return fIntersect(f1, -f2);\r
}\r
float fDisplace( const in float f1, const in float ds )\r
{\r
	return f1+ds;\r
}\r
float fSmoothPoly( const in float a, const in float b, const in float k ) 
{\r
	float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );\r
	return mix( b, a, h ) - k*h*(1.0-h);\r
}\r
float fSmoothExp( const in float a, const in float b, const in float k ) 
{\r
	float res = exp( -k*a ) + exp( -k*b );\r
	return -log( res )/k;\r
}\r
float fSmoothPow( const in float a, const in float b, const in float k ) 
{\r
	float aa = pow( a, k );\r
	float bb = pow( b, k );\r
	return pow( (aa*bb) / (aa+bb), 1.0/k );\r
}\r
float fNoise( const in vec2 p )\r
{\r
	vec2 s = sin(p * 0.6345) + sin(p * 1.62423);\r
	return dot(s, vec2(0.125)) + 0.5;\r
}

vec2 dUnion(vec2 d1, vec2 d2) { return mix(d1, d2, step(d2.x, d1.x)); }\r
vec2 dIntersect(vec2 d1, vec2 d2) { return mix(d2, d1, step(d2.x, d1.x)); }\r
vec2 dSubtract(vec2 d1, vec2 d2) { return dIntersect(d1, vec2(-d2.x, d2.y)); }

vec2 dDisplace(vec2 d1, float ds) { return vec2(d1.x + ds, d1.y); }\r
vec2 dSmoothUnion(vec2 d1, vec2 d2, float k) {\r
    
	float f = fsmin( d1.x, d2.x, k );\r
	float m = mix( d1.y, d2.y, step(d2.x, d1.x) );\r
	return vec2(f, m);\r
}\r
vec2 dSmoothIntersect(vec2 d1, vec2 d2, float k) {\r
    
	float f = fsmax( d1.x, d2.x, k );\r
	float m = mix( d1.y, d2.y, step(d1.x, d2.x) );\r
	return vec2(f, m);\r
}\r
vec2 dSmoothSubtract(vec2 d1, vec2 d2, float k) { return dSmoothIntersect(d1, vec2(-d2.x, d2.y), k); }

vec4 dUnion( const in vec4 d1, const in vec4 d2 )\r
{\r
	return mix(d1, d2, step(d2.x, d1.x));\r
}\r
vec4 dIntersect( const in vec4 d1, const in vec4 d2 )\r
{\r
	return mix(d2, d1, step(d2.x,d1.x));\r
}\r
vec4 dSubtract( const in vec4 d1, const in vec4 d2 )\r
{\r
	return dIntersect(d1, vec4(-d2.x, d2.yzw));\r
}\r
vec4 dDisplace( const in vec4 d1, const in float ds )

{\r
	return vec4( d1.x+ds, d1.yzw );\r
}\r
vec4 dBlend( const in vec4 d1, const in vec4 d2, const in float k )

{\r
	float fdist = fSmoothPoly( d1.x, d2.x, k );\r
	vec3 vmat = mix( d1.yzw, d2.yzw, step(d2.x, d1.x) );\r
	return vec4( fdist, vmat );\r
}

vec3 sRepeat(vec3 p, vec3 spacing) {\r
    
    
	vec3 q = p - 0.5*spacing;\r
	return mod(q, spacing) - 0.5*spacing;\r
}\r
vec3 sTwist(vec3 p, float angle) {\r
    
	float c = cos( angle*p.y );\r
	float s = sin( angle*p.y );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 twist = m*p.zx;\r
	return vec3( twist.y, p.y, twist.x );\r
}\r
vec3 sTwistY(vec3 p, float angle) {\r
    
	return sTwist( p, angle );\r
}\r
vec3 sTwistZ(vec3 p, float angle) {\r
    
	vec3 q = p.yzx;\r
	q = sTwist( q, angle );\r
	return q.zxy;\r
}\r
vec3 sTwistX(vec3 p, float angle) {\r
    
	vec3 q = p.zxy;\r
	q = sTwist( q, angle );\r
	return q.yzx;\r
}\r
vec3 sTranslate(vec3 p, vec3 t) { return p - t; }\r
vec3 sRotateX(vec3 p, float angle) {\r
	float s = sin(angle);\r
	float c = cos(angle);\r
	return vec3( p.x, c*p.y+s*p.z, -s*p.y+c*p.z );\r
}\r
vec3 sRotateY(vec3 p, float angle) {\r
	
    float s = -sin(angle);\r
	float c = cos(angle);\r
	return vec3( c*p.x+s*p.z, p.y, -s*p.x+c*p.z );\r
}\r
vec3 sRotateZ(vec3 p, float angle) {\r
	float s = sin(angle);\r
	float c = cos(angle);\r
	return vec3( c*p.x+s*p.y, -s*p.x+c*p.y, p.z );\r
}

vec3 sCheapBendY(vec3 p, float angle) {\r
    
	float c = cos( angle*p.x );\r
	float s = sin( angle*p.x );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 b = m*p.zx;\r
	return vec3( b.y, p.y, b.x );\r
}\r
vec3 sCheapBendZ(vec3 p, float angle) {\r
    
	float c = cos( angle*p.y );\r
	float s = sin( angle*p.y );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 b = m*p.xy;\r
	return vec3( b.x, b.y, p.z );\r
}\r
vec3 sCheapBendX(vec3 p, float angle) {\r
    
	float c = cos( angle*p.z );\r
	float s = sin( angle*p.z );\r
	mat2 m = mat2( c, -s, s, c );\r
	vec2 b = m*p.yz;\r
	return vec3( p.x, b.x, b.y );\r
}

#define EPS             0.001   
#define MAX_RAY_ITER    512     
#define MIN_RAY_DIST    0.02    
#define MAX_RAY_DIST    64.0    
#define MAX_SHADOW_ITER 64      
#define MIN_SHADOW_DIST 0.005   
#define MAX_SHADOW_DIST 10.0    

vec2 sceneMap( in vec3 p );

float sceneShadow( in vec3 ro, in vec3 rd, in float tmin, in float tmax, in float k )

{\r
	float shade = 1.0;\r
    float t = tmin;\r
    for(int i = 0; i < MAX_SHADOW_ITER; i++)\r
    {\r
        float h = sceneMap(ro + rd * t).x;\r
        shade = min( shade, k * h / t );\r
        t += clamp( h, 0.5, 1.0 );\r
        if( h < EPS || t > tmax ) break;\r
    }\r
    return min( max(shade, 0.0) + 0.1, 1.0 ); 
}\r
float sceneShadow( in vec3 ro, in vec3 rd )\r
{\r
    return sceneShadow( ro, rd, MIN_SHADOW_DIST, MAX_RAY_DIST*0.5, 64.0 ); 
}

float sceneShadow( in vec3 ro, in vec3 rd, float tmin, float k )

{\r
    float shade = 1.0;\r
    float t = tmin;\r
    for(int i=0; i<40; i++)\r
    {\r
        float h = sceneMap(ro + rd*t).x;\r
        shade = min( shade, smoothstep(0.0, 1.0, k*h/t) );\r
		t += clamp( h, 0.05, 0.5 );\r
		if( h < 0.0001 ) break;\r
    }\r
    return clamp(shade, 0.0, 1.0);\r
}

float sceneAO( in vec3 p, in vec3 n )\r
{\r
    float ao = 0.0;\r
    float s = 1.0;\r
    for(int i = 0; i < 6; i++)\r
    {\r
        float off = 0.001 + 0.2 * float(i)/5.0;\r
        float t = sceneMap( n * off + p ).x;\r
        ao += ( off - t ) * s;\r
        s *= 0.4;\r
    }\r
    return smoothstep( 0.0, 1.0, clamp(1.0-12.0*ao, 0.0, 1.0) );\r
}

vec3 sceneNormal( in vec3 p )\r
{\r
    vec3 eps = vec3(EPS, 0.0, 0.0);\r
    vec3 n = vec3(\r
            sceneMap(p + eps.xyy).x - sceneMap(p - eps.xyy).x,\r
            sceneMap(p + eps.yxy).x - sceneMap(p - eps.yxy).x,\r
            sceneMap(p + eps.yyx).x - sceneMap(p - eps.yyx).x);\r
    return normalize(n);\r
}

vec3 sceneNormal( in vec3 p, in float t )\r
{\r
    vec2 eps = vec2( 0.005*t, 0.0 );\r
	return normalize( vec3(\r
            sceneMap(p + eps.xyy).x - sceneMap(p - eps.xyy).x,\r
            sceneMap(p + eps.yxy).x - sceneMap(p - eps.yxy).x,\r
            sceneMap(p + eps.yyx).x - sceneMap(p - eps.yyx).x ) );\r
}

float rayTracing( in vec3 ro, in vec3 rd, in float tmin, in float tmax, in float mfac )\r
{\r
    float t = tmin;\r
	for(int i = 0; i < MAX_RAY_ITER; i++)\r
	{\r
		float d = sceneMap( ro + rd*t ).x;\r
		if( d < EPS || t > tmax ) break;\r
        t += mfac * d; 
	}\r
	return t;\r
}

vec2 rayMarching( in vec3 ro, in vec3 rd, float tmin, float tmax )

{\r
    float m = -1.0;\r
    float t = tmin;\r
    for(int i = 0; i < MAX_RAY_ITER; i++)\r
    {\r
        vec2 d = sceneMap( ro + rd*t );\r
        if( d.x < EPS || t > tmax ) break;\r
        t += d.x;\r
        m = d.y;\r
    }\r
    if( t > tmax ) m = -1.0;\r
    return vec2(t, m);\r
}

vec2 rayMarching( in vec3 ro, in vec3 rd )\r
{\r
    return rayMarching( ro, rd, MIN_RAY_DIST, MAX_RAY_DIST );\r
}

float bisectTracing( in vec3 ro, in vec3 rd, in float tmin, in float tmax )\r
{\r
    float t = tmin, told = tmin, mid, dn;\r
    float d = sceneMap(ro + rd*t).x;\r
    float sgn = sign(d);\r
    for(int i=0; i<80; i++)\r
    {\r
        if( sign(d) != sgn || d < EPS || t > tmax ) break;\r
        told = t;\r
        t += step(-1.0, -d)*(log(abs(d) + 1.1)*0.7 - d*0.7) + d*0.7;\r
        d = sceneMap(ro + rd*t).x;\r
    }\r
    if( sign(d) != sgn )\r
    {\r
        dn = sign( sceneMap(ro + rd*told).x );\r
        vec2 iv = vec2(told, t);\r
        for(int ii=0; ii<8; ii++)\r
        {\r
            mid = dot(iv, vec2(0.5));\r
            float d = sceneMap(ro + rd*mid).x;\r
            if( abs(d) < EPS ) break;\r
            iv = mix( vec2(iv.x, mid), vec2(mid, iv.y), step(0.0, d*dn) );\r
        }\r
        t = mid;\r
    }\r
    return t;\r
}

vec2 bisectMarching( in vec3 ro, in vec3 rd, in float tmin, in float tmax )

{\r
    float m = -1.0;\r
    float t = tmin, told = tmin, mid, dn;\r
    vec2 d = sceneMap(ro + rd*t); m = d.y;\r
    float sgn = sign(d.x);\r
    for(int i=0; i<80; i++)\r
    {\r
        if( sign(d.x) != sgn || d.x < EPS || t > tmax ) break;\r
        told = t;\r
        t += step(-1.0, -d.x)*(log(abs(d.x) + 1.1)*0.7 - d.x*0.7) + d.x*0.7;\r
        d = sceneMap(ro + rd*t); m = d.y;\r
    }\r
    if( sign(d.x) != sgn )\r
    {\r
        dn = sign( sceneMap(ro + rd*told).x );\r
        vec2 iv = vec2(told, t);\r
        for(int ii=0; ii<8; ii++)\r
        {\r
            mid = dot(iv, vec2(0.5));\r
            vec2 d = sceneMap(ro + rd*mid); m = d.y;\r
            if( abs(d.x) < EPS ) break;\r
            iv = mix( vec2(iv.x, mid), vec2(mid, iv.y), step(0.0, d.x*dn) );\r
        }\r
        t = mid;\r
    }\r
    return vec2(t, m);\r
}

mat3 cameraMatrix( vec3 ro, vec3 ta )\r
{\r
    vec3 cw = normalize( ta - ro );\r
    vec3 cu = normalize( cross(cw, vec3(0.0, 1.0, 0.0)) );\r
    vec3 cv = normalize( cross(cu, cw) );\r
    return mat3(cu, cv, cw);\r
}

#endif\r
#define USE_CLOUDS_2\r
#define USE_TERRAIN_2\r
#define USE_TREES_1\r
#ifndef RAYMARCH_SCENE\r
#define RAYMARCH_SCENE

#define MATERIAL_SKY        0.0\r
#define MATERIAL_TERRAIN    1.0\r
#define MATERIAL_WATER      2.0\r
#define MATERIAL_TREES      3.0\r
#define MATERIAL_CLOUDS     4.0\r
#define MATERIAL_FISH       10.0\r
#define MATERIAL_TEXTURE0  20.0\r
#define MATERIAL_TEXTURE1  21.0\r
#define MATERIAL_TEXTURE2  22.0\r
#define MATERIAL_TEXTURE3  23.0

struct ShadeMaterial\r
{\r
    vec3 albedo; 
    float gloss; 
    float metalness; 
};

vec4 texCube( in sampler2D tex, in vec3 p, in vec3 n );

ShadeMaterial getMaterial( vec3 p, vec3 n, float m )\r
{\r
    ShadeMaterial mtl;\r
    if( m == MATERIAL_SKY )\r
    {\r
        mtl.albedo = vec3(0.2, 0.5, 0.85);\r
        mtl.gloss = 0.0;\r
    }\r
    else if( m == MATERIAL_WATER )\r
    {\r
        mtl.albedo = vec3(1.0);\r
        vec2 dp = max(abs(dFdx(p.xz)), abs(dFdy(p.xz)));\r
        float gloss = max(dp.x, dp.y);\r
        gloss = exp2( -gloss * 0.3 );\r
        mtl.gloss = gloss;\r
    }\r
    else if( m == MATERIAL_TEXTURE0 )\r
    {\r
        vec3 col = texCube( textureMaps[0], p, n ).xyz;\r
        mtl.albedo = col;\r
        mtl.gloss = 0.0;\r
    }\r
    else if( m == MATERIAL_TEXTURE1 )\r
    {\r
        vec3 col = texCube( textureMaps[1], p, n ).xyz;\r
        mtl.albedo = col;\r
        mtl.gloss = 0.0;\r
    }\r
    else if( m == MATERIAL_TEXTURE2 )\r
    {\r
        vec3 col = texCube( textureMaps[2], p, n ).xyz;\r
        mtl.albedo = col;\r
        mtl.gloss = 0.0;\r
    }\r
    else if( m == MATERIAL_TEXTURE3 )\r
    {\r
        vec3 col = texCube( textureMaps[3], p, n ).xyz;\r
        mtl.albedo = col;\r
        mtl.gloss = 0.0;\r
    }\r
    return mtl;\r
}

vec3 fresnelGloss( vec3 n, vec3 v, vec3 F0, float gloss )\r
{\r
    float dotNV = max(0.0, dot(n, v));\r
    return F0 + (vec3(1.0) - F0) * pow(1.0 - dotNV, 5.0) * pow(gloss, 20.0);\r
}

vec3 getExtinction( float dist, float density, vec3 col )

{\r
    
    return exp( -dist * density * col ); 
}

float cheapCurvature( in vec3 p )

{\r
    const float eps = 0.05, amp = 4.0, ampInit = 0.5;\r
    vec2 e = vec2(-1.0, 1.0)*eps; 
    float t1 = sceneMap(p + e.yxx).x, t2 = sceneMap(p + e.xxy).x;\r
    float t3 = sceneMap(p + e.xyx).x, t4 = sceneMap(p + e.yyy).x;\r
    return saturate((t1 + t2 + t3 + t4 - 4.0*sceneMap(p).x)*amp + ampInit);\r
}

float DistributionGGX(vec3 N, vec3 H, float roughness) {\r
    float a = roughness*roughness;\r
    float a2 = a*a;\r
    float dotNH = max(dot(N, H), 0.0);\r
    float denom = (dotNH*dotNH * (a2 - 1.0) + 1.0);\r
    denom = PI * denom * denom;\r
    return a2 / max(denom, 0.001); 
}\r
float GeometrySchlickGGX(float dotNV, float roughness) {\r
    float r = roughness + 1.0;\r
    float k = (r*r) / 8.0;\r
    return dotNV / (dotNV * (1.0 - k) + k);\r
}\r
float GeometrySmith(vec3 N, vec3 V, vec3 L, float roughness) {\r
    float dotNV = max(dot(N, V), 0.0);\r
    float dotLN = max(dot(N, L), 0.0);\r
    float ggx2 = GeometrySchlickGGX(dotNV, roughness);\r
    float ggx1 = GeometrySchlickGGX(dotLN, roughness);\r
    return ggx1 * ggx2;\r
}\r
vec3 fresnelSchlick(float cosTheta, vec3 F0) {\r
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);\r
}\r
vec3 getCookShading( \r
    in vec3 albedo, float metallic, float roughness, \r
    in vec3 ld, in vec3 lc, \r
    in vec3 n, in vec3 rd )

{\r
    vec3 F0 = vec3(0.04);\r
    F0 = mix(F0, albedo, metallic);\r
    vec3 radiance = lc;\r
    vec3 N = n;\r
    vec3 V = -rd;\r
    vec3 L = ld;\r
    vec3 H = normalize(V + L);\r
    float dotHV = max(dot(H, V), 0.0);\r
    float dotNV = max(dot(N, V), 0.0);\r
    float dotLN = max(dot(N, L), 0.0);\r
    float NDF = DistributionGGX( N, H, roughness );\r
    float G = GeometrySmith( N, V, L, roughness );\r
    vec3 F = fresnelSchlick( dotHV, F0 );\r
    vec3 specular = (NDF * G * F) / max(4.0 * dotNV * dotLN, 0.001);\r
    vec3 kD = (vec3(1.0) - F) * (1.0 - metallic);\r
    return (kD * albedo / PI + specular) * radiance * dotLN;\r
}\r
void getCookShading( \r
    in vec3 albedo, float metallic, float roughness, \r
    in vec3 ld, in vec3 lc, \r
    in vec3 n, in vec3 rd, \r
    out vec3 diffuse, out vec3 specular )

{\r
    vec3 F0 = vec3(0.04);\r
    F0 = mix(F0, albedo, metallic);\r
    vec3 radiance = lc;\r
    vec3 N = n;\r
    vec3 V = -rd;\r
    vec3 L = ld;\r
    vec3 H = normalize(V + L);\r
    float dotHV = max(dot(H, V), 0.0);\r
    float dotNV = max(dot(N, V), 0.0);\r
    float dotLN = max(dot(N, L), 0.0);\r
    float NDF = DistributionGGX( N, H, roughness );\r
    float G = GeometrySmith( N, V, L, roughness );\r
    vec3 F = fresnelSchlick( dotHV, F0 );\r
    vec3 spec = (NDF * G * F) / max(4.0 * dotNV * dotLN, 0.001);\r
    vec3 kD = (vec3(1.0) - F) * (1.0 - metallic);\r
    vec3 diff = kD * albedo / PI;\r
    vec3 lint = radiance * dotLN;\r
    diffuse = diff * lint;\r
    specular = spec * lint;\r
}\r
void getCookShading( vec3 albedo, float gloss, vec3 lc, vec3 ld, vec3 n, vec3 rd, out vec3 diffuse, out vec3 specular )

{\r
    vec3 v = -rd;\r
	vec3 h = normalize( v + ld );\r
	float dotLN = max(dot(ld, n), 0.0);\r
	float dotNV = max(dot(v, n), 0.0);\r
	float dotNH = max(dot(n, h), 0.0);\r
    vec3 lightWt = lc * dotLN;\r
    diffuse = albedo/PI * lightWt;

	float a = 1.0 - gloss;\r
	float a2 = a * a;\r
	float denom = dotNH * dotNH * (a2 - 1.0) + 1.0;\r
	float D = a2 / (PI * denom * denom);\r
	float k = a / 2.0;\r
    float vis1 = 1.0 / ((dotLN + 0.0001) * (1.0 - k) + k);\r
    float vis2 = 1.0 / ((dotNV + 0.0001) * (1.0 - k) + k);\r
    float G = vis1 * vis2;\r
	specular = (D * G) * lightWt;\r
}

vec3 getPhongShading( in vec3 col, in float s, in vec3 ld, in vec3 lc, in vec3 p, in vec3 n, in vec3 rd )

{\r
    #if 0\r
        float shadow = sceneShadow(p, ld);\r
        float ao = sceneAO(p, n);\r
        float atten = 1.0;\r
        float lfactor = atten * shadow * ao;\r
    #else\r
        float lfactor = 1.0;\r
    #endif

    vec3 v = -rd;\r
    vec3 h = normalize(ld + v);\r
    float amb = 0.0;
    float diff = max(dot(ld,n),0.0);\r
    float spec = pow(max(dot(n,h),0.0), s);

    return amb + (col*diff + spec) * lc * (lfactor);

    
    
    
    
    
    
    
    
    
}

float orenNayarDiffuse( in vec3 l, in vec3 n, in vec3 v, float r )

{\r
    float r2 = r*r;\r
    float a = 1.0 - 0.5*(r2/(r2+0.57));\r
    float b = 0.45*(r2/(r2+0.09));

    float nl = dot(n, l);\r
    float nv = dot(n, v);

    float ga = dot(v-n*nv, n-n*nl);

	return max(0.0,nl) * (a + b*max(0.0,ga) * sqrt((1.0-nv*nv)*(1.0-nl*nl)) / max(nl, nv));\r
}

vec3 skyColor( vec3 ld, vec3 rd, float horiz );

vec4 reflectRayColor( in vec3 lc, in vec3 ld, in vec3 rd, in vec3 p, in vec3 n, in float FAR )

{\r
    vec3 rd2 = reflect( rd, n );

    vec2 hit = bisectMarching( p, rd2, 0.01, FAR );

    if( hit.x > FAR ) return vec4( skyColor( ld, rd2, 0.0 ), hit.x );

    
    vec3 p2 = p + rd2 * hit.x;\r
    vec3 n2 = sceneNormal( p2, EPS );\r
    ShadeMaterial mtl = getMaterial( p2, n2, hit.y );

    
    vec3 diffuse, specular;\r
    getCookShading( mtl.albedo, mtl.gloss, lc, ld, n2, rd2, diffuse, specular );\r
    return vec4( diffuse, hit.x ); 
}

vec4 refractRayColor( in vec3 lc, in vec3 ld, in vec3 rd, in vec3 p, in vec3 n, in float eta, in float density, in float FAR )

{\r
    vec3 rd2 = refract( rd, n, eta );

    vec2 hit = bisectMarching( p, rd2, 0.01, FAR );

    if( hit.x > FAR ) return vec4( skyColor( ld, rd2, 0.0 ), hit.x );

    
    vec3 p2 = p + rd2 * hit.x;\r
    vec3 n2 = sceneNormal( p2, EPS );\r
    ShadeMaterial mtl = getMaterial( p2, n2, hit.y );

    
    vec3 diffuse, specular;\r
    getCookShading( mtl.albedo, mtl.gloss, lc, ld, n2, rd2, diffuse, specular );\r
    

    
    float travelDist = hit.x;\r
    float sunAmount = dot(ld, rd);\r
    vec3 inscatter = diffuse * (1.0 - exp( -travelDist * 0.1 )) * (1.0 + sunAmount);\r
    #if 0\r
        vec3 extinction = getExtinction( travelDist, density, diffuse ); 
    #else\r
        vec3 extinction = getExtinction( travelDist, density, 1.0-vec3(0.5,0.4,0.1) );\r
    #endif

    return vec4( (diffuse + inscatter) * extinction, hit.x );\r
}

#ifdef USE_FLASH_1\r
vec3 flashColor( in float cloudy, in float time )\r
{\r
    float lightning = 0.0;\r
    if( cloudy > 0.77 ) {\r
        float f = mod(time + 1.5, 2.5);\r
        if( f < 0.8 ) {\r
            f = smoothstep(0.8, 0.0, f) * 1.5;\r
            lightning = mod(-time*(1.5 - hash11(time*0.3)*0.002), 1.0) * f;\r
        }\r
    }\r
    return saturate(vec3(1.0, 1.0, 1.2) * lightning);\r
}\r
#endif

void applyClouds( inout vec3 col, in vec3 ro, in vec3 rd )\r
{\r
    vec3 cloud = vec3(1.0, 0.95, 1.0);\r
    float amount = 300.0; 
    vec2 p = ro.xz + (rd.xz/rd.y) * (amount - ro.y);\r
    col = mix( col, cloud, 0.5*smoothstep(0.5, 0.8, fbm_4(0.005*p)) );\r
}

void applyClouds( inout vec3 col, in sampler2D tex, in vec3 ro, in vec3 rd )\r
{\r
    vec3 cloud = vec3(1.0, 0.95, 1.0);\r
    float amount = 300.0; 
    vec2 p = ro.xz + (rd.xz/rd.y) * (amount - ro.y);\r
    col = mix( col, cloud, 0.5*smoothstep(0.5, 0.8, fbm_4(tex, 0.005*p)) );\r
}

void applySnow( inout vec3 col, in float hmin, in float hmax, in vec3 p, in vec3 n )\r
{\r
    
    
    
    vec3 snow = 0.28*vec3(0.62, 0.65, 0.7);\r
    
    float amount = smoothstep( hmin, hmax, p.y + (hmax-hmin)*fbm12(0.01*p.xz) );\r
    float dense = smoothstep( 1.0-0.5*amount, 1.0-0.1*amount, n.y );\r
    float strength = amount*dense;\r
    col = mix( col, snow, smoothstep( 0.1, 0.9, strength ) );\r
}\r
void applySnow( inout vec3 col, in sampler2D tex, in float hmin, in float hmax, in vec3 p, in vec3 n )

{\r
    
    
    
    vec3 snow = 0.28*vec3(0.62, 0.65, 0.7);\r
    
    float amount = smoothstep( hmin, hmax, p.y + (hmax-hmin)*fbm(tex, 0.01*p.xz) );\r
    float dense = smoothstep( 1.0-0.5*amount, 1.0-0.1*amount, n.y );\r
    float strength = amount*dense;\r
    col = mix( col, snow, smoothstep( 0.1, 0.9, strength ) );\r
}\r
float snowFlake(vec2 uv, vec2 center, float radius)\r
{\r
    return 1.0 - sqrt(smoothstep(0.0, radius, length(uv - center)));\r
}\r
vec3 snowColor( float flakeSize, float windSpeed )

{\r
	const float NUM_SHEETS = 10.0;\r
	const float NUM_FLAKES = 400.0;

	flakeSize *= 0.002;\r
	windSpeed *= 2.0;\r
	float windTime = windSpeed*time;\r
    vec2 uv = gl_FragCoord.xy / resolution.x;\r
	vec3 col = vec3(0.0);

    for(float i=1.0; i<=NUM_SHEETS; i+=1.0)\r
	{\r
        for(float j=1.0; j<=NUM_FLAKES; j+=1.0)\r
		{\r
            if( j > NUM_FLAKES / i ) break;\r
			float size = flakeSize*i * (1.0 + rand(j)/2.0);\r
            float speed = 0.75*size + rand(i)/1.5;

            vec2 center = vec2(0.0);\r
            center.x = -0.3 + rand(j*i) * 1.4 + 0.1*cos(windTime + sin(j*i));\r
            center.y = fract(sin(j) - speed * windTime) / 1.3;

            col += vec3( (1.0 - i/NUM_SHEETS) * snowFlake(uv, center, size) );\r
        }\r
    }\r
	return col;\r
}

vec3 sunScatter( vec3 ld, vec3 rd )

{\r
    float sunAmount = max( dot(ld, rd), 0.0 );\r
    return 0.3*vec3(1.0,0.7,0.3) * pow( sunAmount, 8.0 );\r
    
}

vec3 skyColor( vec3 rd )

{\r
    rd.y = max( rd.y, 0.0 );\r
    return vec3( pow(1.0-rd.y, 2.0), 1.0-rd.y, 0.6+(1.0-rd.y)*0.4 );\r
}\r
vec3 skyColor( vec3 ld, vec3 rd )

{\r
	float sunAmount = max( dot(ld, rd), 0.0 );\r
#if 0\r
	vec3 hor = mix( 1.2*vec3(0.7,1.0,1.0), vec3(1.5,0.5,0.05), 0.25+0.75*sunAmount );\r
	vec3 col = mix( vec3(0.2,0.6,0.9), hor, exp(-(4.0+2.0*(1.0-sunAmount))*max(0.0,rd.y-0.1)) );\r
#else\r
	
	vec3 hor = 2.5*vec3(0.48, 0.49, 0.53);
	vec3 col = mix( vec3(0.2,0.3,0.9), hor, exp(-(4.0+2.0*(1.0-sunAmount))*(rd.y-0.1)) );\r
#endif\r
    col *= 0.5;\r
	col += 0.35*vec3(1.0,0.8,0.7)*pow(sunAmount,512.0);\r
	col += 0.25*vec3(1.0,0.4,0.6)*pow(sunAmount,32.0);\r
	col += 0.25*vec3(1.0,0.2,0.4)*pow(sunAmount,4.0);\r
	return col;\r
}\r
vec3 skyColor( vec3 lc, vec3 ld, vec3 rd )

{\r
    vec3 sky = skyColor( rd );\r
    float sunAmount = max( dot(rd, ld), 0.0 );\r
    float sunGlare = 0.32; 
    float sunSize = 1.0;   
	sky += lc * pow(sunAmount, 6.5) * sunGlare;\r
    sky += lc * min( pow( sunAmount, 1150.0 ), 0.7 ) * sunSize;\r
	return sky;\r
}\r
vec3 skyColorGradient( vec3 lc, vec3 ld, vec3 rd )

{\r
    
	float v = pow(1.0 - max(rd.y, 0.0), 5.0)*0.5;\r
	vec3 sky = v * lc*vec3(0.4) + vec3(0.18,0.22,0.4);\r
	
    float sunAmount = max(dot(rd, ld), 0.0);\r
	sky += lc * min(pow(sunAmount, 60.5)*0.32, 0.3);\r
	sky += lc * min(pow(sunAmount, 1150.0), 0.3)*0.65;\r
	return sky;\r
}\r
vec3 skyColorGlare( vec3 lc, vec3 ld, vec3 rd )\r
{\r
    float sunAmount = max( dot(rd, ld), 0.0 );\r
	float v = pow(1.0 - max(rd.y,0.0), 6.0);\r
	vec3  sky = mix(vec3(0.1, 0.2, 0.3), vec3(0.32, 0.32, 0.32), v);\r
	sky += lc * sunAmount * sunAmount * 0.25;\r
	sky += lc * min(pow(sunAmount, 800.0)*1.5, 0.3);\r
	return saturate(sky);\r
}\r
vec3 skyColor( vec3 ld, vec3 rd, float horiz )

{\r
    float sunAmount = max( dot(ld, rd), 0.0 );

    
    vec3 skyTop = vec3(0.2, 0.4, 0.85); skyTop = 1.2*skyTop - rd.y*rd.y*0.5;\r
    vec3 skyBottom = vec3(0.6, 0.64, 0.72);\r
    vec3 sky = mix( skyTop, skyBottom, pow(1.0-max(rd.y,0.0), 4.0) );\r
    vec3 sunRedish = vec3(0.4, 0.375, 0.35);\r
    sky = mix( sky, sunRedish, sunAmount*0.75 );

    
    vec3 sun = 0.25*vec3(1.0,0.7,0.4) * pow(sunAmount, 5.0);\r
    sun += 0.25*vec3(1.0,0.8,0.6) * pow(sunAmount, 64.0);\r
    sun += 0.2*vec3(1.0,0.9,0.7) * pow(sunAmount, 512.0);

    
    sky += sun;

    
    if( horiz == 1.0 )\r
    {\r
        vec3 horizCol = 0.68*vec3(0.4, 0.65, 1.0);\r
        sky = mix( sky, horizCol, pow( 1.0-max(rd.y,0.0), 16.0 ) );\r
    }

    return sky;\r
}

vec3 skyCloudsColor( in sampler2D tex, in vec3 lc, in vec3 ld, in vec3 ro, in vec3 rd )

{\r
    
    vec3 col = 0.9*vec3(0.4,0.65,1.0) - rd.y*vec3(0.4,0.36,0.4);

    
    float t = (500.0 - ro.y) / rd.y;\r
    if( t > 0.0 )\r
    {\r
        vec2 uv = (ro + t*rd).xz;\r
        float cl = -1.0 + 2.0*fbm_9( tex, uv*0.002 );\r
        float dl = smoothstep(-0.2,0.6,cl);\r
        col = mix( col, vec3(1.0), 0.4*dl );\r
    }

	
    float sunAmount = max( dot(ld, rd), 0.0 );\r
    col += 0.6*lc*pow( sunAmount, 32.0 ); 

	return col;\r
}

void applyFog( inout vec3 col, in vec3 fog, in float density, in float dist )\r
{\r
    float amount = 1.0 - exp(-pow(dist * density, 1.5));\r
    col = mix( col, fog, amount );\r
}\r
void applyFog( inout vec3 col, float dist )\r
{\r
    float density = 0.0005; 
    vec3 fogCol = 0.65*vec3(0.4, 0.65, 1.0);\r
    applyFog( col, fogCol, density, dist );\r
}\r
void applyFog( inout vec3 col, in vec3 lc, in vec3 ld, in vec3 rd, in float density, in float dist )

{\r
    float fogAmount = 1.0 - exp(-dist * density);\r
    vec3 fogCol = skyColorGradient( lc, ld, rd );\r
    #ifdef USE_LIGHT_FLARE\r
        float dotLV = saturate(dot(ld, -rd));\r
        fogCol += lc * pow(dotLV, 10.0);\r
    #endif\r
    col = mix(col, fogCol, fogAmount);\r
}\r
void applyFog( inout vec3 col, in vec3 lc, in vec3 ld, in vec3 ro, in vec3 rd, in float dist )

{\r
#if 1\r
    float c = 0.05;  
    float b = 0.25;  
#else\r
    float c = 0.15;  
    float b = 0.025; 
#endif

    float fogAmount = c * exp(-ro.y * b) * (1.0 - exp(-dist * rd.y * b)) / rd.y;\r
    vec3 fogCol = skyColorGradient( lc, ld, rd );\r
    #ifdef USE_LIGHT_FLARE\r
        float dotLV = saturate(dot(ld, -rd));\r
        fogCol += lc * pow(dotLV, 10.0);\r
    #endif\r
    col = mix(col, fogCol, fogAmount);\r
}

#ifdef USE_LENSFLARES_1

void applyLensFlares( inout vec3 col, mat3 camMat, vec2 xy, vec3 lc, vec3 ld, float cloudy )

{\r
	vec3 cu = camMat[0];\r
	vec3 cv = camMat[1];\r
	vec3 cw = camMat[2];\r
	float bri = dot(cw, ld) * 2.7 * clamp(-(0.7*cloudy-0.45) + 0.2, 0.0, 0.2);\r
	if( bri > 0.0 )\r
	{\r
		vec2 sunPos = vec2( dot( ld, cu ), dot( ld, cv ) );\r
		vec2 uvT = xy - sunPos;\r
		uvT = uvT * length( uvT );\r
		bri = pow( bri, 6.0 )*0.6;

		float glare1 = max(1.2 - length(uvT + sunPos*2.0)*2.0, 0.0);\r
		float glare2 = max(1.2 - length(uvT + sunPos*0.5)*4.0, 0.0);\r
		uvT = mix (uvT, xy, -2.3);\r
		float glare3 = max(1.2 - length(uvT + sunPos*5.0)*1.2, 0.0);

		col += bri * lc * vec3(1.0, 0.5, 0.2)  * pow(glare1, 10.0)*25.0;\r
		col += bri * vec3(0.8, 0.8, 1.0) * pow(glare2, 8.0)*9.0;\r
		col += bri * lc * pow(glare3, 4.0)*10.0;\r
	}\r
}\r
void applyLensFlares( inout vec3 col, in vec3 camPos, mat4 worldMat, mat4 iprojMat, vec2 xy, vec3 lc, vec3 ld, float cloudy )

{\r
    vec3 camTar = (worldMat * iprojMat * vec4(0.,0.,0.,1.)).xyz;\r
	mat3 camMat = cameraMatrix(camPos, camTar);\r
    applyLensFlares( col, camMat, xy, lc, ld, cloudy );\r
}\r
#endif

#ifdef USE_CLOUDS_1

const float CLOUD_LOWER = 2800.0;\r
const float CLOUD_UPPER = 3800.0;

float cloudsMap( vec3 p, float cloudy )\r
{\r
	float h = -(fbm13(p*0.0005) - (0.7*cloudy-0.45) - 0.6);\r
	return h;\r
}\r
float cloudsMapBounded( vec3 p, float cloudy )\r
{\r
	float h = cloudsMap( p, cloudy );\r
    h *= smoothstep(CLOUD_UPPER + 100.0, CLOUD_UPPER, p.y);\r
	return h;\r
}\r
float cloudsInScattering( vec3 p, vec3 ld, float cloudy )

{\r
	float cloudThick = CLOUD_UPPER - CLOUD_LOWER;\r
	cloudThick *= 0.2;\r
	
    float l = cloudsMapBounded( p, cloudy ) - cloudsMapBounded( p + ld * cloudThick, cloudy );\r
	return clamp( -l*2.0, 0.05, 1.0 );\r
}\r
vec3 cloudsColor( in vec3 lc, in vec3 ld, in vec3 ro, in vec3 rd, in vec4 cloudy, out float density )

{\r
	float tmin = ((CLOUD_LOWER-ro.y) / rd.y);\r
	float tmax = ((CLOUD_UPPER-ro.y) / rd.y);\r
	vec3 p = ro + rd*tmin;\r
	#if 1\r
		tmin += hash12(p.xz*19.19)*350.0;\r
	#endif

	
	const int iter = 20;
	vec3 dp = rd * (tmax-tmin) / float(iter);\r
	vec2 shadeSum = vec2(0.0, 0.0);\r
	for(int i = 0; i < iter; i++)\r
	{\r
		if( shadeSum.y >= 1.0 ) break;\r
        vec2 shade;\r
		shade.x = cloudsInScattering(p, ld, cloudy.x); 
		shade.y = max(cloudsMap(p, cloudy.x), 0.0);    
		
		shadeSum += shade * (1.0 - shadeSum.y);        
		p += dp;\r
	}\r
	vec3 clouds = mix(vec3(pow(shadeSum.x, 0.6)), lc, (1.0-shadeSum.y)*0.4);

	
    clouds += cloudy.yzw * (shadeSum.y + shadeSum.x + 0.2) * 0.5;\r
	density = shadeSum.y;\r
	return clouds;\r
}

vec3 skyCloudsColor( in vec3 lc, in vec3 ld, in vec3 ro, in vec3 rd, in vec4 cloudy )

{\r
	float density;\r
	vec3 sky = skyColor( ld, rd, 1.0 );\r
	vec3 clouds = cloudsColor( lc, ld, ro, rd, cloudy, density );\r
	sky = mix( sky, min(clouds, 1.0), density );\r
	return saturate( sky );\r
}\r
#endif

#ifdef USE_CLOUDS_2

const float CLOUD_LOWER_HEIGHT = 50.0;\r
const float CLOUD_UPPER_HEIGHT = 500.0;\r
const float CLOUD_AMOUNT = 0.0001; 
const vec3 FOG_COLOR = vec3(0.4, 0.6, 1.15);

vec4 cloudsMap( in vec3 pos )

{\r
    vec4 n = fbmd_7( pos*0.003*vec3(0.6,1.0,0.6) - vec3(0.1,1.9,2.8) );\r
    n.x = -1.0 + 2.0*n.x;\r
    n.yzw = 2.0 * n.yzw;\r
    float h0 = CLOUD_LOWER_HEIGHT;\r
    float h1 = CLOUD_UPPER_HEIGHT;\r
    float hm = mix( h0, h1, 0.1 );\r
    vec2 h =  smoothstepd( h0, hm, pos.y ) -  smoothstepd( hm, h1, pos.y );\r
    h.x = 2.0*n.x + h.x + mapLinear( CLOUD_AMOUNT, 0.0, 1.0, -1.5, 0.0 );\r
    return vec4( h.x, 2.0*n.yzw*vec3(0.6,1.0,0.6)*0.003 + vec3(0.0,h.y,0.0) );\r
}\r
vec4 cloudsColor( in vec3 ld, in vec3 ro, in vec3 rd, in float tmin, in float tmax )

{\r
    vec4 sum = vec4(0.0);

    
    float tl = (CLOUD_LOWER_HEIGHT - ro.y) / rd.y;\r
    float th = (CLOUD_UPPER_HEIGHT - ro.y) / rd.y;

    tl = max( tl, 0.0 );\r
    th = max( th, 0.0 );\r
    tmin = max( tmin, min( tl, th ) );\r
    tmax = min( tmax, max( tl, th ) );

    float t = tmin;\r
    float thickness = 0.0;\r
    float delta = (tmax - tmin)/128.0;

    for(int i=0; i<128; i++)\r
    {\r
        vec3  pos = ro + t*rd;\r
        vec4  denGrad = cloudsMap( pos ); \r
        float den = denGrad.x;\r
        float dt = max(delta, 0.011*t);

        if( den > 0.001 )\r
        {\r
        #if 1\r
            float sha = 1.0; 
        #else\r
            float sha = clamp( 1.0 - max(0.0, cloudsMap( pos + ld*5.0 ).x), 0.0, 1.0 );\r
        #endif

            
            vec3 n = -normalize( denGrad.yzw );\r
            float dif = saturate( dot(n, ld) )*sha; \r
            float fre = saturate( 1.0 + dot(n,rd) )*sha;\r
            vec3 lin  = vec3(0.70,0.80,1.00)*0.9*(0.6+0.4*n.y);\r
            lin += vec3(0.20,0.25,0.20)*0.7*(0.5-0.5*n.y);\r
            lin += vec3(1.00,0.70,0.40)*4.5*dif*(1.0-den);        \r
            lin += vec3(0.80,0.70,0.50)*1.3*pow(fre,32.0)*(1.0-den);

            
            vec3 col = vec3(0.8,0.77,0.72) * saturate(1.0-4.0*den);\r
            col *= lin;

            
            applyFog( col, FOG_COLOR, 0.001, t );

            
            float alpha = saturate( den*0.25*min(dt, tmax-t-dt) );\r
            col.rgb *= alpha;\r
            sum = sum + vec4(col, alpha)*(1.0 - sum.a);

            thickness += dt * den;\r
        }\r
        else\r
        {\r
            dt *= 1.0 + 4.0*abs(den);\r
        }\r
        t += dt;\r
        if( sum.a > 0.995 || t > tmax ) break;\r
    }\r
    \r
    if( thickness > 0.0 )\r
    {\r
        float sunAmount = saturate( dot(ld, rd) );\r
		sum.xyz += vec3(1.0,0.6,0.4)*0.2 * pow(sunAmount,32.0) * exp(-0.3*thickness) * saturate(thickness*4.0);\r
    }

    return saturate( sum );\r
}\r
#endif

#ifdef USE_RAIN_1\r
void applyRain( inout vec3 col, in sampler2D tex, in vec2 xy, in vec4 cloudy, in float time )

{\r
    vec2 uv = gl_FragCoord.xy / resolution.xy;\r
	vec2 st = xy * vec2(0.5+(uv.y+1.0)*0.3, 0.02) + vec2(time*0.5+uv.y*0.2, time*0.2);\r
 	float f = texture(tex, st, -100.0).y * texture(tex, st*0.773, -100.0).x * 1.55;\r
	float rain = saturate((0.7*cloudy.x-0.45) - 0.15);\r
	f = clamp( pow(abs(f), 15.0)*5.0*(rain*rain*125.0), 0.0, (uv.y+0.1)*0.6 );\r
	col = mix( col, vec3(0.15) + cloudy.yzw, f );\r
	col = saturate(col);\r
}\r
#endif

#if defined(USE_WATER_1) || defined(USE_WATER_2)\r
const float WATER_HEIGHT = 0.0;\r
const float WATER_SPEED = 0.5;      
const float WATER_CHOPPINESS = 0.5; 
const float WATER_OPACITY = 0.5;    
#endif

#ifdef USE_WATER_1\r
vec4 waterColor( in vec3 lc, in vec3 ld, in vec3 wc, in vec3 ro,in vec3 rd, in vec4 cloudy )

{\r
	
	float t = (WATER_HEIGHT-ro.y)/rd.y;\r
    if( t < 0.0 ) return vec4(0.0,0.0,0.0,t);\r
	vec3 p = ro + rd * t; 

	
	float distort = WATER_SPEED * time;\r
	float tx = cos(p.x*.052)*4.5;\r
	float tz = sin(p.z*.072)*4.5;\r
	vec2 co = noise22( vec2(p.x*4.7 + 1.3 + tz, p.z*4.69 + distort*35.0 - tx) );\r
	co += noise22( vec2(p.z*8.6 + distort*13.0 - tx, p.x*8.712 + tz) )*0.4;\r
	vec3 n = normalize( vec3(co.x, 20.0, co.y) );

	
	vec3 re = reflect(rd, n);\r
    #ifdef USE_CLOUDS_1\r
        vec3 sky = skyCloudsColor(lc, ld, p, re, cloudy);\r
    #else\r
        float density;\r
        vec3 sky = skyColor( ld, re, 1.0 );\r
        applyClouds( sky, ro, rd );\r
        sky = saturate( sky );\r
    #endif

	
	#if 1\r
		float fresnel = max(dot(n, -rd), 0.0);\r
		fresnel = pow(fresnel, 0.3) * 1.1;\r
		vec3 water = mix( wc * max(dot(ld, n), 0.0), sky*0.6, fresnel );\r
	#else\r
		
		float FAR = CLOUD_UPPER;\r
		float atten = smoothstep( FAR, FAR*0.7, t );\r
		float F0 = 0.0204; 
		vec3 V = -rd;\r
		vec3 H = normalize(ld + V);\r
		float F = mix(F0, 1.0, pow(1.0 - max(dot(H, V),0.0), 5.0));
		vec3 water = mix( atten*wc*max(dot(ld, n), 0.0), sky*0.6, F );\r
	#endif

	
	#if 1\r
		float glit = max(dot(re, ld), 0.0);\r
		water += lc * pow(glit, 220.0) * max(-(0.7*cloudy.x-0.45)*100.0, 0.0);\r
	#endif

	
	#if 1\r
		tx = p.y - ro.y;\r
		water += vec3(0.1)*saturate( 1.0 - pow(tx + 0.5, 3.0) * texture(textureMaps[0], p.xz*0.1, -2.0).x );\r
	#endif

	return vec4(water, t);\r
}\r
#endif

#ifndef NEW_RIVER_DEPTH\r
const float RIVER_WAVE_LENGTH = 16.0;\r
const float RIVER_WAVE_HEIGHT = 1.5;\r
float riverCurve( float x ) {\r
    
    float L = RIVER_WAVE_LENGTH;\r
    float H = RIVER_WAVE_HEIGHT;\r
    return H * sin( PI2/L * x );\r
}\r
float riverCurved( float x ) {\r
    
    float L = RIVER_WAVE_LENGTH;\r
    float H = RIVER_WAVE_HEIGHT;\r
    float W = PI2/L;\r
    return H * W * cos(W * x);\r
}\r
float riverBaseDepth( vec3 p ) {\r
    float depth = 0.3 + (0.5 + 0.5*sin(p.x*0.001 + 3.0)) * 0.4;\r
    float width = 2.0 + cos( p.x * 0.1 ) * 1.0;\r
    float amount = smoothstep( width, width * 0.5, abs(p.z - riverCurve(p.x)) );\r
    return amount * depth;\r
}\r
float riverDepth( vec3 p ) {\r
    float depth = 0.0;\r
    depth += riverBaseDepth(p);\r
    depth += 0.45*riverBaseDepth(p*2.0);\r
    return depth;\r
}\r
#endif

#ifdef USE_WATER_2\r
vec3 waterNoise( vec2 waterPos, vec2 flowOffset, float foamScale, float gradAscent )

{\r
    waterPos *= (WATER_CHOPPINESS*2.0);\r
	vec3 f = vec3(0.0);\r
    float tot = 0.0;\r
    float a = 1.0;\r
    for( int i=0; i<4; i++)\r
    {\r
        waterPos += flowOffset * WATER_SPEED;\r
        flowOffset *= -0.75;\r
        vec3 v = noised( waterPos ).yzx; 
        f += v * a;\r
        waterPos += v.xy * gradAscent;\r
        waterPos *= 2.0;\r
        tot += a;\r
        a *= foamScale;\r
    }\r
    return f / tot;\r
}\r
vec3 waterBaseFlow( vec3 p ) {\r
    
    return vec3( 1.0, 0.0, riverCurved(p.x) );\r
}\r
float waterFlowDepth( vec3 p ) {\r
    
    
    return WATER_HEIGHT + sceneMap(p).x - p.y;\r
}\r
vec3 waterFlowGradient( vec3 p ) {\r
    
    vec3 eps = vec3(0.01, 0.0, 0.0);\r
    float dx = waterFlowDepth( p + eps.xyy ) - waterFlowDepth( p - eps.xyy );\r
    float dz = waterFlowDepth( p + eps.yyx ) - waterFlowDepth( p - eps.yyx );\r
    return vec3( dx, 0.0, dz );\r
}\r
vec3 waterFlowRate( vec3 p )\r
{\r
    
    vec3 baseFlow = waterBaseFlow( p );\r
    vec3 flow = baseFlow;

	float depth = waterFlowDepth( p );\r
    vec3 dFlow = waterFlowGradient( p );\r
    \r
    flow += -dFlow * 40.0 / (1.0 + depth * 1.5);\r
    flow *= 1.0 / (1.0 + depth * 0.5);

#if 1\r
    float behindObstacle = 0.5 - dot( normalize(dFlow), -normalize(flow)) * 0.5;\r
    float slowDist = clamp( depth * 5.0, 0.0, 1.0);\r
    slowDist = mix(slowDist * 0.9 + 0.1, 1.0, behindObstacle * 0.9);\r
    slowDist = 0.5 + slowDist * 0.5;\r
    flow *= slowDist;\r
#endif

    
    float foamScale1 = 0.5;
    float foamScale2 = 0.35;\r
    float foamCutoff = 0.4;

    float foam = abs(length( flow.xz )) * foamScale1;\r
	foam += saturate( foam - foamCutoff );\r
    foam = 1.0 - pow( depth, foam * foamScale2 );\r
    
    return vec3( flow.xz * 0.6, foam  );\r
}\r
vec4 waterNormal( vec3 waterPos, vec3 flowOffset, float foam )\r
{\r
    vec2 dWaterPos = max(abs(dFdx(waterPos.xz)), abs(dFdy(waterPos.xz)));\r
  	float flowScale = max(dWaterPos.x, dWaterPos.y);\r
    flowScale = (1.0 / (1.0 + flowScale * flowScale * 2000.0));

    float gradAscent = 0.25 - (foam * 1.5);\r
    vec3 dxy = waterNoise(waterPos.xz * 20.0, flowOffset.xz * 20.0, (0.75 + foam*0.25), gradAscent);\r
    flowScale *= max(0.25, 1.0 - foam * 5.0); 
    vec3 blended = mix( vec3(0.0, 1.0, 0.0), normalize( vec3(dxy.x, flowOffset.y, dxy.y) ), flowScale );\r
    return vec4( normalize( blended ), dxy.z * flowScale );\r
}\r
float waterFoam( vec3 waterPos, vec3 flowOffset, float foam )\r
{\r
    
    float f = waterNoise(waterPos.xz*30.0, flowOffset.xz*50.0, 0.8, -0.5 ).z;\r
    float amount = 0.2;\r
    f = max( 0.0, (f - amount) / amount );\r
    return pow( 0.5, f );\r
}\r
vec4 waterFlowingNormal( vec3 waterPos, vec3 flowRate, float foam, float time, out float flowFoam )\r
{\r
    float fMag = 2.5 / (1.0 + dot( flowRate, flowRate ) * 5.0);\r
    float t0 = fract( time );\r
    float t1 = fract( time + 0.5 );

    float o0 = t0 - 0.5;\r
    float o1 = t1 - 0.5;\r
    float weight = abs( t0 - 0.5 ) * 2.0;

    vec3 flowOffset0 = vec3(flowRate.x*o0, fMag, flowRate.z*o0);\r
    vec3 flowOffset1 = vec3(flowRate.x*o1, fMag, flowRate.z*o1);\r
    vec4 normal0 = waterNormal( waterPos, flowOffset0, foam );\r
    vec4 normal1 = waterNormal( waterPos, flowOffset1, foam );\r
    vec4 normal = mix( normal0, normal1, weight );\r
    normal.xyz = normalize(normal.xyz);

    o0 *= 0.25;\r
    o1 *= 0.25;\r
    flowOffset0 = vec3(flowRate.x*o0, 0.0, flowRate.z*o0);\r
    flowOffset1 = vec3(flowRate.x*o1, 0.0, flowRate.z*o1);\r
    float foam0 = waterFoam( waterPos, flowOffset0, foam );\r
    float foam1 = waterFoam( waterPos, flowOffset1, foam );\r
    flowFoam = mix( foam0, foam1, weight );

    return normal;\r
}\r
vec3 waterEnvColor( vec3 sky, vec3 rd, float gloss )\r
{\r
    
    const vec3 WATER_GLOSS_COLOR = vec3(0.3, 0.2, 0.2);\r
    return mix( WATER_GLOSS_COLOR, sky*4.0, saturate(rd.y * (1.0 - gloss*0.5)*0.5 + 0.5) );\r
}\r
vec4 waterColor( in vec3 lc, in vec3 ld, in vec3 sky, in vec3 ro, in vec3 rd, in float sceneDist, in float FAR )

{\r
    float t = (WATER_HEIGHT-ro.y) / rd.y;\r
    t = (t > 0.0)? t : FAR;

    vec3 p = ro + rd * t; 
    gl_FragDepth = getFragDepth( p );

    
    vec3 flowRateFoam = waterFlowRate( p );\r
    vec3 flowRate = vec3(flowRateFoam.x, 0.0, flowRateFoam.y);\r
    float flowFoam;\r
    float foamScale = 1.5;\r
    float foamOffset = 0.2;\r
    float foam = saturate( (flowRateFoam.z - foamOffset) * foamScale );\r
    foam = foam * foam * 0.5;\r
    vec4 flowNormal = waterFlowingNormal( p, flowRate, foam, time, flowFoam );\r
    \r
    if( rd.y < -0.01 )\r
    {\r
        t -= (0.04 * (1.0 - flowNormal.w) / rd.y);\r
    } 

    
    if( t >= sceneDist ) return vec4(0.0, 0.0, 0.0, t);

    
    vec3 albedo = vec3(1.0);\r
    vec3 specF0 = vec3(0.0204); 
    vec2 dp = max(abs(dFdx(p.xz)), abs(dFdy(p.xz)));\r
    float gloss = max(dp.x, dp.y);\r
    gloss = exp2( -gloss * 0.3 );

    
    vec3 n = normalize( flowNormal.xyz + ld * foam ); 

    vec3 diffuseCol = vec3(0.0);\r
    vec3 specularCol = vec3(0.0);

    
    vec3 waterDiffuse;\r
    vec3 waterSpecular;\r
    getCookShading( albedo, gloss, lc, ld, n, rd, waterDiffuse, waterSpecular );\r
    specularCol += waterSpecular;

    
    vec3 reflectCol = reflectRayColor( lc, ld, rd, p, n, FAR ).xyz;\r
    vec3 reflectRd = reflect( rd, n );\r
    reflectCol = mix( waterEnvColor(sky, reflectRd, gloss), reflectCol, pow(gloss, 40.0) );\r
    specularCol += reflectCol;

    
    vec3 transmitCol = refractRayColor( lc, ld, rd, p, n, 1.0 / 1.3333, WATER_OPACITY*6.0, FAR ).xyz;\r
    float foamBlend = 1.0 - pow(flowFoam, foam*5.0);\r
    diffuseCol = mix(transmitCol, waterDiffuse*0.8, foamBlend );

    
    vec3 fresnel = fresnelGloss( n, -rd, specF0, gloss );\r
    float specScale = saturate(1.0 - foamBlend*4.0);

    
    vec3 result = mix( diffuseCol, specularCol, fresnel*specScale );\r
    return vec4(result, t);\r
}\r
#endif

#ifdef USE_SEA_1

const float SEA_CHOPPY = 4.0;\r
const float SEA_SPEED = 0.8;\r
const float SEA_FREQ = 0.16;\r
const float SEA_HEIGHT = 0.6;\r
const vec3 SEA_BASE_COLOR = vec3(0.1, 0.19, 0.22);\r
const vec3 SEA_WATER_COLOR = vec3(0.8, 0.9, 0.6);\r
const mat2 SEA_ROTM2 = mat2(1.6, 1.2, -1.2, 1.6);

float seaOctave( vec2 uv, float choppy )\r
{\r
    uv += (2.0*noise(uv)-1.0);\r
    vec2 wv = 1.0 - abs( sin(uv) );\r
    vec2 swv = abs( cos(uv) );\r
    wv = mix( wv, swv, wv );\r
    return pow( 1.0 - pow(wv.x * wv.y, 0.65), choppy );\r
}\r
float seaMap( vec3 p )\r
{\r
    float seaTime = time * SEA_SPEED;\r
    float freq = SEA_FREQ;\r
    float amp = SEA_HEIGHT;\r
    float choppy = SEA_CHOPPY;\r
    vec2 uv = p.xz; uv.x *= 0.75;\r
    float d, h = 0.0;\r
    for(int i = 0; i < 3; i++)\r
    {\r
        d = seaOctave(( uv + seaTime)*freq, choppy );\r
        d += seaOctave( (uv - seaTime)*freq, choppy );\r
        h += d * amp;\r
        uv *= SEA_ROTM2;\r
        freq *= 1.9; amp *= 0.22;\r
        choppy = mix( choppy, 1.0, 0.2 );\r
    }\r
    return p.y - h;\r
}\r
float seaMapH( vec3 p )\r
{\r
    float seaTime = time * SEA_SPEED;\r
    float freq = SEA_FREQ;\r
    float amp = SEA_HEIGHT;\r
    float choppy = SEA_CHOPPY;\r
    vec2 uv = p.xz; uv.x *= 0.75;\r
    float d, h = 0.0;\r
    for(int i = 0; i < 5; i++)\r
    {\r
        d = seaOctave( (uv + seaTime)*freq, choppy );\r
        d += seaOctave( (uv - seaTime)*freq, choppy );\r
        h += d * amp;\r
        uv *= SEA_ROTM2;\r
        freq *= 1.9; amp *= 0.22;\r
        choppy = mix( choppy, 1.0, 0.2 );\r
    }\r
    return p.y - h;\r
}\r
vec3 seaNormal( vec3 p, float eps )\r
{\r
    vec3 n;\r
    n.y = seaMapH( p );\r
    n.x = seaMapH( vec3(p.x+eps, p.y, p.z) )     - n.y;\r
    n.z = seaMapH( vec3(p.x,     p.y, p.z+eps) ) - n.y;\r
    n.y = eps;\r
    return normalize(n);\r
}\r
float seaTracing( in vec3 ro, in vec3 rd, in float tmax )\r
{\r
    float tm = 0.0;\r
    float tx = tmax;
    float hx = seaMap(ro + rd * tx);\r
    if( hx > 0.0 ) return tx;\r
    float hm = seaMap(ro + rd * tm);\r
    float tmid = 0.0;\r
    for(int i = 0; i < 8; i++)\r
    {\r
        tmid = mix(tm, tx, hm/(hm-hx));\r
        vec3 p = ro + rd * tmid;\r
    	float hmid = seaMap(p);\r
		if( hmid < 0.0 )\r
        {\r
        	tx = tmid;\r
            hx = hmid;\r
        }\r
        else\r
        {\r
            tm = tmid;\r
            hm = hmid;\r
        }\r
    }\r
    return tmid;\r
}\r
float seaLightDiffuse( vec3 n, vec3 ld, float power ) {\r
    return pow( dot(n, ld)*0.4 + 0.6, power );\r
}\r
float seaLightSpecular( vec3 n, vec3 ld, vec3 rd, float s ) {\r
    float nrm = (s + 8.0) / (PI * 8.0);\r
    return pow( max( dot( reflect(rd, n), ld ), 0.0 ), s ) * nrm;\r
}\r
vec3 seaColor( vec3 p, vec3 n, vec3 ld, vec3 ro, vec3 rd )

{\r
    float fresnel = 1.0 - max(dot(n,-rd), 0.0);\r
    fresnel = pow(fresnel, 3.0) * 0.65;

    vec3 reflected = skyColor( ld, reflect(rd, n), 1.0 );\r
    vec3 refracted = SEA_BASE_COLOR + seaLightDiffuse(n, ld, 80.0) * SEA_WATER_COLOR * 0.12;\r
    vec3 color = mix( refracted, reflected, fresnel );

    vec3 dist = p - ro;\r
    float atten = max( 1.0 - dot(dist, dist) * 0.002, 0.0 );
    color += SEA_WATER_COLOR * (p.y - SEA_HEIGHT) * 0.18 * atten;

    color += vec3( seaLightSpecular( n, ld, rd, 60.0 ) );

    color = pow(color, vec3(1.65)); 
    return color;\r
}\r
vec3 seaColor( vec3 ld, vec3 ro, vec3 rd, float tmax )\r
{\r
    float t = seaTracing( ro, rd, tmax );\r
    vec3 p = ro + rd*t;\r
    vec3 dist = p - ro;\r
    float distpp = dot(dist,dist)*0.1 / resolution.x; 
    vec3 n = seaNormal( p, distpp );\r
    
    gl_FragDepth = getFragDepth( p );\r
    
    return seaColor( p, n, ld, ro, rd );\r
}\r
#endif

#ifdef USE_DUSTWIND_1\r
float dustWindMap( in vec3 p, in float d, float height, float wind )\r
{\r
    p.x += time;\r
    p.z += time*0.5;\r
    return triNoise13( p*wind/(d+1.0) ) * smoothstep( height, 0.0, p.y );\r
}\r
void applyDustWind( inout vec3 col, in vec3 ro, in vec3 rd, in float t, float amount, float height, float wind )

{\r
    vec3 dust = vec3(0.85, 0.65, 0.5);\r
    float d = 0.5;\r
    for(int i = 0; i < 7; i++)\r
    {\r
        vec3 p = ro + rd*d;\r
        float w = dustWindMap(p, d, height, wind); 
        col = mix( col, dust, amount*saturate( w * smoothstep(d, d*1.8, t)) );\r
        d *= 1.8;\r
        if( d > t ) break;\r
    }\r
}\r
#endif

#ifdef USE_TERRAIN_1

const mat2 rotMat2 = mat2(1.6,-1.2,1.2,1.6);\r
const float TERRAIN_SCALE = 0.1;  
const float TERRAIN_FREQ = 0.03;  
const float SEA_LEVEL = -2.0;     

float terrainH( in sampler2D tex, in vec2 x )\r
{\r
    vec2  p = x*TERRAIN_FREQ;\r
    float a = 0.0;\r
    float b = 1.0;\r
	vec2  d = vec2(0.0);\r
    
    for(int i = 0; i < 13; i++)\r
    {\r
        vec3 n = noised(tex, p);\r
        d += n.yz;\r
        a += b*n.x/(1.0+dot(d,d));\r
		b *= 0.5;\r
        p = rotMat2*p;\r
    }\r
    return a/TERRAIN_SCALE + SEA_LEVEL;\r
}\r
float terrainM( in sampler2D tex, in vec2 x )\r
{\r
    vec2  p = x*TERRAIN_FREQ;\r
    float a = 0.0;\r
    float b = 1.0;\r
	vec2  d = vec2(0.0);\r
    for(int i = 0; i < 9; i++)\r
    {\r
        vec3 n = noised(tex, p);\r
        d += n.yz;\r
        a += b*n.x/(1.0+dot(d,d));\r
		b *= 0.5;\r
        p = rotMat2*p;\r
    }\r
    return a/TERRAIN_SCALE + SEA_LEVEL;\r
}\r
float terrainL( in sampler2D tex, in vec2 x )\r
{\r
    vec2  p = x*TERRAIN_FREQ;\r
    float a = 0.0;\r
    float b = 1.0;\r
	vec2  d = vec2(0.0);\r
    for(int i = 0; i < 2; i++)
    {\r
        vec3 n = noised(tex, p);\r
        d += n.yz;\r
        a += b*n.x/(1.0+dot(d,d));\r
		b *= 0.5;\r
        p = rotMat2*p;\r
    }\r
    return a/TERRAIN_SCALE + SEA_LEVEL;\r
}\r
float terrainMap( in sampler2D tex, in vec3 p )\r
{\r
    return p.y - terrainM( tex, p.xz );\r
}\r
vec3 terrainNormal( in sampler2D tex, in vec3 p, in float t )\r
{\r
    
    
    vec2 eps = vec2( 0.002*t, 0.0 );\r
    return normalize( vec3( terrainH(tex, p.xz-eps.xy) - terrainH(tex, p.xz+eps.xy),\r
                            2.0*eps.x,\r
                            terrainH(tex, p.xz-eps.yx) - terrainH(tex, p.xz+eps.yx) ) );\r
}\r
vec3 terrainColor( in sampler2D tex, in vec3 lc, in vec3 ld, in vec3 p, in float t, in float tmax )

{\r
    vec3 n = terrainNormal( tex, p, t );

    float r = texture( tex, (7.0/TERRAIN_SCALE)*p.xz/256.0 ).x;

    
    vec3 soilA = vec3(0.08,0.05,0.03);\r
    vec3 soilB = vec3(0.10,0.09,0.08);\r
    vec3 col = (0.75 + 0.25*r)*mix( soilA, soilB, texture(tex,0.0007*vec2(p.x,p.y*19.19)/TERRAIN_SCALE).x );\r
    
    vec3 rock = 0.2*vec3(0.45, 0.30, 0.15);\r
    col = mix( col, rock*(0.5 + 0.5*r), smoothstep(0.85, 0.9, n.y) );\r
    
    vec3 weed = 0.1*vec3(0.30, 0.30, 0.10);\r
    col = mix( col, weed*(0.5 + 0.5*r), smoothstep(0.9, 0.95, n.y) );\r
    
    vec3 grass = 0.35*vec3(0.16, 0.3, 0.0);\r
    col = mix( col, grass*(0.25 + 0.75*r), smoothstep(0.95, 1.0, n.y) );\r
    
    float hmin = 10.0/TERRAIN_SCALE;\r
    float hmax = 30.0/TERRAIN_SCALE;\r
    applySnow( col, tex, hmin, hmax, p/TERRAIN_SCALE, n );

    
    float amb = saturate( 0.5 + 0.5*n.y );\r
    float dif = saturate( dot( ld, n ) );\r
    float bac = saturate( 0.2 + 0.8*dot(normalize(vec3(-ld.x, 0.0, ld.z)), n) );\r
    float shd = (dif >= 0.001)? sceneShadow(p + ld*0.01/TERRAIN_SCALE, ld, 0.01/TERRAIN_SCALE, tmax/TERRAIN_SCALE, 2.0) : 1.0;\r
    vec3 cshd = pow( vec3(shd), vec3(1.0, 1.2, 1.5) ); 
    vec3 lin = dif*vec3(7.0,5.0,3.0)*1.3*cshd * lc;\r
    lin += amb*vec3(0.4,0.6,1.0)*1.2;\r
    lin += bac*vec3(0.4,0.5,0.6);\r
    col *= lin;

    return col;\r
}\r
#endif

#ifdef USE_TERRAIN_2

float terrainNoise( in sampler2D tex, in vec2 x )\r
{\r
    float f = 1.92;
    float a = 0.0;\r
    float b = 0.5;\r
    for(int i=0; i<6; i++)\r
    {\r
        float n = noise(tex, x);\r
        a += b * n;\r
        b *= 0.55;
        x = f * rotM2 * x;\r
    }\r
	return a;\r
}\r
float terrainH( in sampler2D tex, in vec2 p )\r
{\r
    const float terrain_freq = 0.01;\r
    const float terrain_scale = 70.0;
    p *= terrain_freq;\r
    float e = -1.0 + 2.0*terrainNoise( tex, p + vec2(1.0,-2.0) );\r
    e *= terrain_scale;\r
    return e;\r
}\r
float terrainM( in sampler2D tex, in vec2 p )\r
{\r
    return terrainH( tex, p );\r
}\r
float terrainL( in sampler2D tex, in vec2 p )\r
{\r
    return terrainH( tex, p );\r
}

float terrainMap( in sampler2D tex, in vec3 p )\r
{\r
    return p.y - terrainM( tex, p.xz );\r
}\r
vec3 terrainNormal( in sampler2D tex, in vec3 p, in float t )\r
{\r
    vec2 eps = vec2(0.002*t, 0.0);\r
	return normalize( vec3(terrainH(tex, p.xz-eps.xy) - terrainH(tex, p.xz+eps.xy),\r
                           2.0*eps.x,\r
                           terrainH(tex, p.xz-eps.yx) - terrainH(tex, p.xz+eps.yx) ) );\r
}\r
float terrainShadow( in sampler2D tex, in vec3 ro, in vec3 rd, in float tmin )\r
{\r
    float shade = 1.0;\r
    float t = tmin;\r
    for(int i=0; i<8; i++)
    {\r
        vec3  pos = ro + t*rd;\r
        float h = terrainMap( tex, pos );\r
        shade = min( shade, 32.0*h/t );\r
        if( shade < 0.0001 ) break;\r
        t += clamp( h, 1.0+t*0.1, 50.0 );\r
    }\r
    return saturate( shade );\r
}\r
vec3 terrainColor( in sampler2D tex, in vec3 ld, in vec3 rd, in vec3 p, in float t )

{\r
    vec3 n = terrainNormal( tex, p, t );\r
    
    #if 1\r
        n = normalize( n + 1.28*(1.0-abs(n.y)) * fbmd_7(p*0.3*vec3(1.0,0.2,1.0)).yzw );
    #endif

    vec3 col = vec3(0.18,0.11,0.10)*0.75;\r
    col = mix( col, vec3(0.1,0.1,0.0)*0.3, smoothstep(0.7, 0.9, n.y) );\r
    #if 0\r
        col *= 1.0 + 2.0*fbm_4( iChannel0, p*0.2*vec3(1.0,4.0,1.0) );\r
    #endif\r
    \r
    float sha = 0.0;\r
    float dif = saturate( dot(n, ld) );\r
    if( dif > 0.0001 ) \r
    {\r
        sha = terrainShadow( tex, p+n*0.01, ld, 0.01 );\r
        dif *= sha;\r
    }\r
    vec3  ref = reflect(rd, n);\r
    float bac = saturate( dot(normalize(vec3(-ld.x, 0.0, -ld.z)), n) ) * saturate( (p.y+100.0)/100.0 );\r
    float dom = saturate( 0.5 + 0.5*n.y );\r
    vec3  lin  = 0.2*mix(0.1*vec3(0.1,0.2,0.0), vec3(0.7,0.9,1.0), dom);
    lin += 5.0*vec3(1.0,0.9,0.8)*dif;        \r
    lin += 0.35*vec3(1.0)*bac;\r
    col *= lin;

    #if 1\r
        applyFog( col, FOG_COLOR, 0.0005, t );\r
    #endif

    return col;\r
}\r
#endif

#ifdef USE_TERRAIN_3

float terrainDetails( in sampler2D detailTex, in vec3 p )\r
{\r
#if 0\r
    float f;\r
    f  = 0.5000*noise( detailTex, p ); p = rotM3*p*2.02;\r
    f += 0.2500*noise( detailTex, p ); p = rotM3*p*2.03;\r
    f += 0.1250*noise( detailTex, p ); p = rotM3*p*2.01;\r
    f += 0.0625*noise( detailTex, p );\r
    return f;\r
#else\r
	return fbm_4( detailTex, p );\r
#endif\r
}\r
float terrainH( in sampler2D heightTex0, in sampler2D heightTex1, in vec2 q )

{\r
	
	float shapeNoise = 1.0;
	q *= shapeNoise;

	float th = smoothstep( 0.0, 0.7, textureLod( heightTex0, 0.001*q, 0.0 ).x );    
    float rr = smoothstep( 0.1, 0.5, textureLod( heightTex1, 2.0*0.03*q, 0.0 ).y ); 

	
	float seaLevel = 0.5;\r
	float h = 0.7 - seaLevel;

	h -= -0.15 + (1.0-0.6*rr)*(1.5-1.0*th) * 0.3*(1.0-textureLod( heightTex0, 0.04*q*vec2(1.2,0.5), 0.0 ).x);\r
	

	
	float riseHeight = 7.0;\r
	h += th * riseHeight;

	
	float sinkHeight = 0.3;\r
	h -= rr * sinkHeight;\r
    return h;\r
}\r
float terrainL( in sampler2D heightTex0, in vec2 q )\r
{\r
	float th = smoothstep( 0.0, 0.7, textureLod( heightTex0, 0.001*q, 0.0 ).x );\r
	float h = 0.2;
	h += th * 7.0;
	return h;\r
}\r
float terrainMap( in sampler2D heightTex0, in sampler2D heightTex1, in sampler2D detailTex, in vec3 p )\r
{\r
	
	float h = terrainH( heightTex0, heightTex1, p.xz );

	
	float detailAmount = 0.001;
    float layerAmount = 1.5;
    float displaceAmount = 1.5;

    float d = terrainDetails( detailTex, detailAmount * p * vec3(1.0, layerAmount, 1.0) );\r
    d *= displaceAmount;

	return (p.y - h + d) * 0.25;\r
}\r
vec3 terrainNormal( in sampler2D heightTex0, in sampler2D heightTex1, in vec3 p, in float t )\r
{\r
	vec2 eps = vec2( 0.002*t, 0.0 );\r
    return normalize( vec3( terrainH(heightTex0, heightTex1, p.xz-eps.xy) - terrainH(heightTex0, heightTex1, p.xz+eps.xy),\r
                            2.0*eps.x,\r
                            terrainH(heightTex0, heightTex1, p.xz-eps.yx) - terrainH(heightTex0, heightTex1, p.xz+eps.yx) ) );\r
}\r
float terrainShadow( in sampler2D heightTex0, in sampler2D heightTex1, in sampler2D detailTex, in vec3 ro, in vec3 rd, float tmin )\r
{\r
	float shade = 1.0;\r
    float t = tmin;\r
    for(int i=0; i<32; i++)
    {\r
        float h = terrainMap(heightTex0, heightTex1, detailTex, ro + rd * t);\r
        shade = min( shade, 32.0*h/t );
        t += clamp( h, 0.5, 1.0 );\r
		if( h < 0.001 ) break;\r
    }\r
    return min( max(shade, 0.0) + 0.05, 1.0 ); 
}\r
float terrainAO( in sampler2D heightTex0, in sampler2D heightTex1, in sampler2D detailTex, in vec3 p, in vec3 n )\r
{\r
	float ao = 0.0;\r
    float s = 1.0;\r
    for(int i=0; i<2; i++)
    {\r
        float off = 0.001 + 0.2 * float(i)/5.0;\r
        float t = terrainMap( heightTex0, heightTex1, detailTex, n * off + p );\r
        ao += ( off - t ) * s;\r
        s *= 0.4;\r
    }\r
    return smoothstep( 0.0, 1.0, clamp(1.0-12.0*ao, 0.0, 1.0) );\r
}\r
vec3 terrainColor( in sampler2D heightTex0, in sampler2D heightTex1, in sampler2D detailTex, in vec3 ld, in vec3 rd, in vec3 p, in float t )\r
{\r
	vec3 n = terrainNormal( heightTex0, heightTex1, p, t );

	float gloss = 2.0;
	vec3 uvw = gloss * p;

	
	n = getBumpNormal( heightTex0, uvw, n, 0.075 );

	
	vec3 te = 0.05 + texCube( heightTex0, 0.15*uvw, n ).xyz;\r
	vec4 mate;\r
	mate.xyz = 0.6*te;				
	mate.w = 1.5*(0.5+0.5*te.x);	

	
	float th = smoothstep( 0.1, 0.4, texCube( heightTex0, 0.002*uvw, n ).x );\r
	vec3 dcol = mix( vec3(0.2, 0.3, 0.0), 0.2*vec3(0.65, 0.4, 0.2), 0.2+0.8*th );\r
	mate.xyz = mix( mate.xyz, 2.0*dcol, th*smoothstep(0.0, 1.0, n.y) );

	
	float rr = smoothstep( 0.2, 0.4, texCube( heightTex1, 0.04*uvw, n ).y );\r
	mate.xyz *= mix( vec3(1.0), 2.25*vec3(0.25,0.24,0.22), rr );\r
	mate.xyz *= 1.5*pow(texCube( heightTex1, 8.0*uvw, n ).xyz, vec3(0.5));\r
	mate = mix( mate, vec4(vec3(1.0), 0.0), smoothstep(0.8, 0.9, n.y + n.x*0.6*te.x*te.x) );\r
	mate.xyz *= 1.5;

	
	float sky = 0.0;\r
	sky += 0.2*orenNayarDiffuse( normalize(vec3( 0.0, 1.0, 0.0 )), n, -rd, 1.0 );\r
	sky += 0.2*orenNayarDiffuse( normalize(vec3( 3.0, 1.0, 0.0 )), n, -rd, 1.0 );\r
	sky += 0.2*orenNayarDiffuse( normalize(vec3(-3.0, 1.0, 0.0 )), n, -rd, 1.0 );\r
	sky += 0.2*orenNayarDiffuse( normalize(vec3( 0.0, 1.0, 3.0 )), n, -rd, 1.0 );\r
	sky += 0.2*orenNayarDiffuse( normalize(vec3( 0.0, 1.0,-3.0 )), n, -rd, 1.0 );\r
	float dif = orenNayarDiffuse( ld, n, -rd, 1.0 );\r
	vec3 blig = normalize(vec3(-ld.x, 0.0, -ld.z));\r
	float bac = orenNayarDiffuse( blig, n, -rd, 1.0 );

	float sha = 0.0;\r
	if( dif > 0.001 ) sha = terrainShadow( heightTex0, heightTex1, detailTex, p+0.01*n, ld, 0.005 );\r
	float spe = mate.w * pow(saturate(dot(reflect(rd,n),ld)), 2.0) * saturate(dot(n,ld));\r
	float occ = terrainAO( heightTex0, heightTex1, detailTex, p, n );\r
	vec3 lin = vec3(0.0);\r
	lin += 7.0*dif*vec3(1.20,0.50,0.25)*vec3(sha,sha*0.5+0.5*sha*sha, sha*sha);\r
	lin += 1.0*sky*vec3(0.10,0.50,0.70)*occ;\r
	lin += 2.0*bac*vec3(0.30,0.15,0.15)*occ;\r
	lin += 0.5*vec3(spe)*sha*occ;\r
	vec3 col = mate.xyz * lin;\r
	return col;\r
}\r
#endif

#ifdef USE_TREES_1

const float TREES_HEIGHT = 2.0;

float terrainM( in sampler2D tex, in vec2 p );\r
vec3 terrainNormal( in sampler2D tex, in vec3 p, in float t );

float treesMap( in sampler2D tex, in vec3 p )

{\r
    
    float base = terrainM(tex, p.xz)*0.925;

    float d = 20.0;
    vec2 n = floor( p.xz );\r
    vec2 f = fract( p.xz );\r
    for(int j=-1; j<=1; j++)\r
    for(int i=-1; i<=1; i++)\r
    {\r
        vec2  g = vec2( float(i), float(j) );\r
        vec2  o = hash22( n + g );\r
        vec2  v = hash22( n + g + vec2(13.1,71.7) );\r
        vec2  r = g - f + o;

        float height = TREES_HEIGHT * (0.4 + 0.8*v.x);\r
        float width = 0.9*(0.5 + 0.2*v.x + 0.3*v.y);\r
        vec3  q = vec3(r.x, p.y-base-height*0.5, r.y);\r
        #if 1\r
            float k = fEllipsoid( q, vec2(width,0.5*height).xyx );\r
        #else\r
            vec3 a = vec3(0.0, -height*0.5, 0.0);\r
            vec3 b = vec3(0.0, height*0.5, 0.0);\r
            float k = fCapsule( q, a, b, width );\r
        #endif\r
        d = min( d, k );\r
    }

    
    float rt = 350.0 * rand( p.xz );\r
    
    {\r
        float s = -1.0 + 2.0*fbm_4( tex, p*3.0 );\r
        float att = 1.0-smoothstep(150.0, 350.0, rt);\r
        d += 2.0*s*s*att*att;\r
    }\r
    \r
    return d;\r
}\r
vec3 treesNormal( in sampler2D tex, in vec3 p, in float t )\r
{\r
    vec2 e = vec2(t,-t) * 0.002;\r
    return normalize( e.xyy * treesMap(tex, p + e.xyy) \r
                    + e.yyx * treesMap(tex, p + e.yyx) \r
                    + e.yxy * treesMap(tex, p + e.yxy) \r
                    + e.xxx * treesMap(tex, p + e.xxx) );\r
}\r
float treesShadow( in sampler2D tex, in vec3 ro, in vec3 rd )\r
{\r
    float shade = 1.0;\r
    float t = 0.02;\r
    
    for( int i=0; i<10; i++ )\r
    {\r
        float h = treesMap( tex, ro + rd*t );\r
        shade = min( shade, 32.0*h/t );\r
        t += h;\r
        if( shade < 0.001 || t > 20.0 ) break;\r
    }\r
    return saturate( shade );\r
}\r
vec3 treesColor( in sampler2D tex, in vec3 ld, in vec3 pos, in vec3 rd, float t )

{\r
    vec3 terrainN = terrainNormal( tex, pos, t );

    vec3 treesN = treesNormal( tex, pos, t );\r
    vec3 n = normalize( treesN + 2.5*terrainN );

    
    float sha = 1.0;\r
    vec3  ref = reflect(rd, n);\r
    float occ = 1.0;\r
    float dif = saturate(0.1 + 0.9*dot(n, ld));\r
    if( dif > 0.0001 )\r
    {\r
        sha *= treesShadow( tex, pos+n*0.1, ld ); 
    }\r
    float dom = saturate( 0.5 + 0.5*n.y );\r
    float fre = saturate( 1.0 + dot(n,rd) );\r
    float spe = pow(saturate(dot(ref, ld)), 9.0) * dif*sha * (0.2 + 0.8*pow(fre, 5.0)) * occ;

    
    vec3 lin = 0.5*mix(0.1*vec3(0.1,0.2,0.0),vec3(0.6,1.0,1.0),dom*occ);\r
    lin += 10.0*vec3(1.0,0.9,0.8)*dif*occ*sha;\r
    lin += 0.5*vec3(0.9,1.0,0.8)*pow(fre, 3.0)*occ;\r
    lin += 0.05*vec3(0.15,0.4,0.1)*occ;\r
   \r
    
    float brownAreas = fbm_4( tex, pos.zx*0.03 );\r
    vec3 col = vec3(0.08,0.09,0.02);\r
    col = mix( col, vec3(0.06,0.05,0.01)*1.1, 1.0-smoothstep(0.9,0.91,terrainN.y) );\r
    col = mix( col, vec3(0.25,0.16,0.01)*0.15, 0.7*smoothstep(0.1,0.3,brownAreas)*smoothstep(0.5,0.8,terrainN.y) );\r
    col *= 1.6;

    
    col *= lin;\r
    col += spe*1.2*vec3(1.0,1.1,2.5);

    #if 1\r
        applyFog( col, FOG_COLOR, 0.0005, t );\r
    #endif

    return col;\r
}\r
#endif

#endif

varying vec2 vUv;

#define iChannel0   textureMaps[0]\r

const float FAR = 500.0;
const vec3 SUN_LIGHT = vec3(-0.624695,0.468521,-0.624695);\r
const vec3 SUN_COLOR = vec3(1.0, 0.9, 0.85);\r
const float SKY_HEIGHT = 500.0;

float skyMap( in vec3 p )\r
{\r
    return SKY_HEIGHT - p.y;\r
}

vec2 sceneMap( in vec3 p )\r
{\r
    vec2 res = vec2( skyMap(p), MATERIAL_SKY );\r
    res = dUnion( res, vec2( terrainMap( iChannel0, p ), MATERIAL_TERRAIN ) );\r
    res = dUnion( res, vec2( treesMap( iChannel0, p ), MATERIAL_TREES ) );\r
    
    return res;\r
}

void rayMinMax( in vec3 ro, in vec3 rd, out float tmin, out float tmax )\r
{\r
    tmin = 1.0;\r
    tmax = FAR;\r
    float max_height = SKY_HEIGHT;\r
    float t = (max_height - ro.y) / rd.y;\r
    if( t > 0.0 )\r
    {\r
        if( ro.y > max_height ) tmin = max( tmin, t );\r
        else                    tmax = min( tmax, t );\r
    }\r
    else\r
    {\r
        if( ro.y > max_height ) tmin = tmax = 1.0;\r
    }\r
}

vec3 render( in vec3 ro, in vec3 rd )\r
{\r
    float tmin, tmax;\r
	rayMinMax( ro, rd, tmin, tmax );

    
    vec2 tm = bisectMarching( ro, rd, tmin, tmax );\r
    if( tm.x > tmax ) tm.y = MATERIAL_SKY;

    vec3 col = vec3(0.0);\r
    if( tm.y == MATERIAL_SKY )\r
    {\r
        gl_FragDepth = 0.99;

        
        col = skyCloudsColor( iChannel0, SUN_COLOR, SUN_LIGHT, ro, rd );

        
        vec4 cloudsCol = cloudsColor( SUN_LIGHT, ro, rd, 0.0, FAR );
        #if 0\r
            col = col*(1.0-cloudsCol.w) + cloudsCol.xyz;\r
        #else\r
            col = mix( col, cloudsCol.xyz, cloudsCol.w );\r
        #endif\r
	}

    else if( tm.y == MATERIAL_TERRAIN )\r
    {\r
        vec3 p = ro + rd * tm.x;\r
        gl_FragDepth = getFragDepth( p );\r
        col = terrainColor( iChannel0, SUN_LIGHT, rd, p, tm.x );\r
    }\r
    else if( tm.y == MATERIAL_TREES )\r
    {\r
        vec3 p = ro + rd * tm.x;\r
        gl_FragDepth = getFragDepth( p );\r
        col = treesColor( iChannel0, SUN_LIGHT, p, rd, tm.x );\r
    }

    
    applyFog( col, FOG_COLOR, 0.003, tm.x*0.5 );

    
    col += sunScatter( SUN_LIGHT, rd );

    
#if 0\r
    col = col*0.15 + 0.85*col*col*(3.0-2.0*col); 
    col = pow( col, vec3(1.0,0.92,1.0) );  
    col *= vec3(1.02,0.99,0.99);           
    col.z = (col.z+0.1)/1.1;               
    col = mix( col, col.yyy, 0.15 );       
    col = saturate( col );\r
#endif

    col = FilmicToneMapping( col );\r
    col = LinearToGamma( vec4(col, 1.0), 0.8 ).rgb;

    return col;\r
}

#ifdef ENABLE_AUTO_VIEW\r
mat3 cameraAutoView( in sampler2D tex, out vec3 ro, out vec3 rd )\r
{\r
    float curTime = 10.0*time;\r
    ro = vec3(0.0, 0.0, -80.0-curTime);\r
    vec3 ta = vec3(0.0, 0.0, -90.0-curTime);\r
    ta = mix( ro + vec3(0.0, 1.0, 0.0), ta, smoothstep(1.0, 500.0, curTime) );\r
    ro.y = terrainL( tex, ro.xz ) + 30.0;
    ta.y = ro.y - 2.0;

    float fl = 1.2;
    vec2 xy = (-resolution.xy + 2.0*gl_FragCoord.xy)/resolution.y;\r
    mat3 cam = cameraMatrix( ro, ta ); 
    rd = normalize( xy.x*cam[0] + xy.y*cam[1] + fl*cam[2] );\r
    return cam;\r
}\r
#endif

void getCameraRay( vec2 uv, out vec3 ro, out vec3 rd )\r
{\r
	ro = cameraPosition;\r
#if 0\r
    rd = ( cameraProjectionMatrixInverse * vec4( uv*2.0 - 1.0, 0.0, 1.0 ) ).xyz;\r
    rd = ( cameraWorldMatrix * vec4( rd, 0.0 ) ).xyz;\r
    rd = normalize( rd );\r
#else\r
    vec4 fragPos = cameraWorldMatrix * (cameraProjectionMatrixInverse * vec4( uv*2.0 - 1.0, 0.0, 1.0 ));\r
    rd = normalize( fragPos.xyz/fragPos.w - ro );\r
#endif\r
}

void main()\r
{\r
    vec3 ro, rd;\r
#ifdef ENABLE_AUTO_VIEW\r
    cameraAutoView( iChannel0, ro, rd );\r
#else\r
    
    getCameraRay( vUv.xy, ro, rd );\r
#endif

    vec3 col = render( ro, rd );\r
    col = Vignetting( col, 0.5 );\r
    gl_FragColor = vec4( col, 1.0 );\r
}`;let at,Gt;const Ka=new ml,Ua=Ka.load("images/poolTile.jpg",i=>i.wrapS=i.wrapT=li),No=Ka.load("images/abstract2.jpg",i=>i.wrapS=i.wrapT=li),Mp=Ka.load("images/grayNoise256.png",i=>i.wrapS=i.wrapT=li),Ep=document.querySelector(".select-option");Ep.addEventListener("change",i=>{switch(+i.target.value){case 1:at.position.set(5,5,5),Gt.uniforms.textureMaps.value=[Ua],Gt.fragmentShader=yp;break;case 2:at.position.set(5,5,5),Gt.uniforms.textureMaps.value=[No,Ua],Gt.fragmentShader=Uo;break;case 3:at.position.set(200,100,200),Gt.uniforms.textureMaps.value=[Mp],Gt.fragmentShader=Sp;break}Gt.needsUpdate=!0});function Tp(){const i=new N,e=new sl;at=new Ut(75,window.innerWidth/window.innerHeight,.01,2e3),at.position.set(5,5,5);const t=new ap;t.setSize(window.innerWidth,window.innerHeight),t.setAnimationLoop(d),document.body.appendChild(t.domElement);const n=new op(at,t.domElement);n.enableDamping=!0;const r=new xl(16777215,1);r.position.set(1,1,0),e.add(r);const a=new Ci;Gt=new on({uniforms:{devicePixelRatio:{value:window.devicePixelRatio},time:{value:0},resolution:{value:new Le(t.domElement.width,t.domElement.height)},cameraNear:{value:at.near},cameraFar:{value:at.far},cameraWorldMatrix:{value:at.matrixWorld},cameraProjectionMatrixInverse:{value:at.projectionMatrixInverse},textureMaps:{value:[No,Ua]}},vertexShader:`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
        `,fragmentShader:Uo});const s=new Xt(a,Gt);e.add(s);const o=at.fov*Math.PI/180,c=at.near*Math.tan(o/2)*2,l=c*at.aspect;s.scale.set(l,c,1);function d(h){at.getWorldDirection(i),i.multiplyScalar(at.near);const m=at.position.clone().add(i);s.position.copy(m),s.rotation.copy(at.rotation),Gt.uniforms.time.value=h/1e3,t.render(e,at),n.update()}window.addEventListener("resize",()=>{at.aspect=window.innerWidth/window.innerHeight,at.updateProjectionMatrix();const h=at.fov*Math.PI/180,u=at.near*Math.tan(h/2)*2,m=u*at.aspect;s.scale.set(m,u,1),t&&t.setSize(window.innerWidth,window.innerHeight)})}Tp();
