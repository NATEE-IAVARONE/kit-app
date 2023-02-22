<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import fragment from '$lib/glsl/main.frag';

	const dispatch = createEventDispatcher();

  let canvasRef: HTMLCanvasElement;
  let bgRef: HTMLCanvasElement;

	onMount(() => {
    let gl = canvasRef.getContext('webgl');

    if (!gl) return;

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,3,-1,-1,3,-1]), gl.STATIC_DRAW);
  
    let pid = gl.createProgram();
    if (!pid) return;

    shader(`attribute vec2 v;void main(void){gl_Position=vec4(v,0.,1.);}`,gl.VERTEX_SHADER);
    shader(fragment,gl.FRAGMENT_SHADER);
    gl.linkProgram(pid);
    gl.useProgram(pid);
  
    let v = gl.getAttribLocation(pid, "v");
    gl.vertexAttribPointer(v, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(v);
  
    let resolution = gl.getUniformLocation(pid, 'resolution');
    let time = gl.getUniformLocation(pid, 'time');
    let fill = gl.getUniformLocation(pid, 'fill');
    requestAnimationFrame(draw);
    canvasRef.style.opacity = '1';

    let perc = 0;
  
    function draw(t: number) {
      if (!gl) return;

      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.clearColor(0, 0, 0, 0);
      gl.uniform1f(time, t/1000);
      gl.uniform1f(fill, perc);
      gl.uniform2f(resolution, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      perc = perc < 2 ? perc + 0.005 : 2;
      if (perc === 2) {
        canvasRef.style.transform = 'translate(-50%, -50%) scale(10)';
        canvasRef.style.opacity = bgRef.style.opacity = '0';
        dispatch('loaded');
      } else {
        requestAnimationFrame(draw);
      }
    }
  
    function shader(src: string, type: number) {
      if (!gl) return;

      let sid = gl.createShader(type);
      if (!sid || !pid) return;
      gl.shaderSource(sid, src);
      gl.compileShader(sid);
      var message = gl.getShaderInfoLog(sid) ?? '';
      gl.attachShader(pid, sid);
      if (message.length > 0) {
        console.log(src.split('\n').map((str, i) => (''+(1+i)).padStart(4, '0')+': '+str).join('\n'));
        throw message;
      }
    }
  });
  
</script>

<div id="background" bind:this={bgRef}></div>
<canvas width="240px" height="240px" bind:this={canvasRef}></canvas>

<style lang="scss">
canvas, #background {
  position: absolute;
  pointer-events: none;
  transition: opacity 2s;
}
canvas {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
#background {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--background);
}
</style>