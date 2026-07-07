(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,96689,(e,t,o)=>{"use strict";var r=e.r(25361).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;o.c=function(e){return r.H.useMemoCache(e)}},67448,(e,t,o)=>{"use strict";t.exports=e.r(96689)},87525,e=>{"use strict";var t=e.i(28341),o=e.i(67448),r=e.i(91786),a=e.i(40832),i=e.i(23707),n=e.i(25361),s=e.i(74267);let l=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,c=`
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`,u=(0,n.forwardRef)(function(e,r){let s,u,v,f,m,d,x=(0,o.c)(12),{uniforms:y}=e,{viewport:p}=(0,i.useThree)();return x[0]!==r||x[1]!==p?(s=()=>{r.current&&r.current.scale.set(p.width,p.height,1)},u=[r,p],x[0]=r,x[1]=p,x[2]=s,x[3]=u):(s=x[2],u=x[3]),(0,n.useLayoutEffect)(s,u),x[4]!==r?(v=(e,t)=>{r.current.material.uniforms.uTime.value=r.current.material.uniforms.uTime.value+.1*t},x[4]=r,x[5]=v):v=x[5],(0,a.useFrame)(v),x[6]===Symbol.for("react.memo_cache_sentinel")?(f=(0,t.jsx)("planeGeometry",{args:[1,1,1,1]}),x[6]=f):f=x[6],x[7]!==y?(m=(0,t.jsx)("shaderMaterial",{uniforms:y,vertexShader:l,fragmentShader:c}),x[7]=y,x[8]=m):m=x[8],x[9]!==r||x[10]!==m?(d=(0,t.jsxs)("mesh",{ref:r,children:[f,m]}),x[9]=r,x[10]=m,x[11]=d):d=x[11],d});u.displayName="SilkPlane",e.s(["default",0,e=>{let a,i,l,c,v,f,m,d,x,y,p,_=(0,o.c)(26),{speed:S,scale:g,color:h,noiseIntensity:C,rotation:T,canvasClassName:N,silkPaneClassName:R}=e,U=void 0===S?5:S,O=void 0===g?1:g,I=void 0===h?"#7B7481":h,P=void 0===C?1.5:C,j=void 0===T?0:T,E=(0,n.useRef)();if(_[0]!==U?(a={value:U},_[0]=U,_[1]=a):a=_[1],_[2]!==O?(i={value:O},_[2]=O,_[3]=i):i=_[3],_[4]!==P?(l={value:P},_[4]=P,_[5]=l):l=_[5],_[6]!==I){var b;c=new s.Color(...[parseInt((b=(b=I).replace("#","")).slice(0,2),16)/255,parseInt(b.slice(2,4),16)/255,parseInt(b.slice(4,6),16)/255]),_[6]=I,_[7]=c}else c=_[7];_[8]!==c?(v={value:c},_[8]=c,_[9]=v):v=_[9],_[10]!==j?(f={value:j},_[10]=j,_[11]=f):f=_[11],_[12]===Symbol.for("react.memo_cache_sentinel")?(m={value:0},_[12]=m):m=_[12],_[13]!==v||_[14]!==f||_[15]!==a||_[16]!==i||_[17]!==l?(d={uSpeed:a,uScale:i,uNoiseIntensity:l,uColor:v,uRotation:f,uTime:m},_[13]=v,_[14]=f,_[15]=a,_[16]=i,_[17]=l,_[18]=d):d=_[18];let A=d;return _[19]===Symbol.for("react.memo_cache_sentinel")?(x=[1,2],_[19]=x):x=_[19],_[20]!==R||_[21]!==A?(y=(0,t.jsx)(u,{ref:E,uniforms:A,className:R}),_[20]=R,_[21]=A,_[22]=y):y=_[22],_[23]!==N||_[24]!==y?(p=(0,t.jsx)(r.Canvas,{dpr:x,frameloop:"always",className:N,children:y}),_[23]=N,_[24]=y,_[25]=p):p=_[25],p}])}]);