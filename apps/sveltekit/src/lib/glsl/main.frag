precision highp float;
uniform float time;
uniform vec2 resolution;
uniform float fill;    

vec3 firePalette(float i) {
    float T = 1400. + 1300.*i; 
    vec3 L = vec3(7.4, 5.2, 4.4); 
    L = pow(L,vec3(5.4)) * (exp(1.43876719683e5/(T*L))-1.0);
    return 1.0-exp(-5e8/L); 
}    
    
vec3 hash33(vec3 p) { 
    float n = sin(dot(p, vec3(7, 157, 113)));    
    return fract(vec3(2097152, 262144, 32768)*n); 
}

float voronoi(vec3 p) {
	vec3 b, r, g = floor(p);
	p = fract(p); 
	float d = 1.; 
	for(int j = -1; j <= 1; j++) {
	    for(int i = -1; i <= 1; i++) {
		    b = vec3(i, j, -1);
		    r = b - p + hash33(g+b);
		    d = min(d, dot(r,r));
		    b.z = 0.0;
		    r = b - p + hash33(g+b);
		    d = min(d, dot(r,r));
		    b.z = 1.;
		    r = b - p + hash33(g+b);
		    d = min(d, dot(r,r));	
	    }
	}
	return d;
}

float noiseLayers(in vec3 p) {
    vec3 t = vec3(0., 0., p.z+time*1.5);
    const int iter = 5; 
    float tot = 0., sum = 0., amp = 1.; 
    for (int i = 0; i < iter; i++) {
        tot += voronoi(p + t) * amp; 
        p *= 2.0; 
        t *= 1.5; 
        sum += amp; 
        amp *= 0.5; 
    }
    return tot/sum; 
}
    
float sdPie( in vec2 p, in vec2 c, in float r ) {
    p.x = abs(p.x);
    float l = length(p) - r;
	float m = length(p - c*clamp(dot(p,c),0.0,r) );
    return max(l,m*sign(c.y*p.x-c.x*p.y));
}
    
void main(void) {
    float f = (1.-fill)*3.1415;
    vec2 uv = gl_FragCoord.xy - resolution.xy*0.5;
    uv /= resolution.y;   
    	float cs = cos(f-time*0.3), si = sin(f-time*0.3);
	uv.xy *= mat2(cs, -si, si, cs); 
    vec3 rd = normalize(vec3(uv.x, uv.y, 3.1415/8.));
    float c = noiseLayers(rd*8.);   
    float d = dot(uv, uv);

    float ts = 0.101 + sin(time)*0.001*fill;
    float ring = 1. - min(smoothstep(d, 0.11, ts), smoothstep(d, ts, 0.11));
    vec3 col = sqrt(clamp(firePalette(c*ring)-0.02, 0., 1.));
    if (fill<1.)
    col *= sdPie(uv,vec2(sin(f+0.001),cos(f+0.001)), 0.5)*3.1415;
    gl_FragColor = vec4(col,ring);  
}