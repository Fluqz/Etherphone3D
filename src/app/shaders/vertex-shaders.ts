


export class VertexShader {

  public static basic: string = `

    void main(){
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);
    }

  `

  public static distortion: string = `

      precision highp float;

      varying vec3 vNormal;
      varying vec2 vUv;

      uniform float time;

      void main() {
        vNormal = position;

        vUv = uv;
        
        vec3 pos = position;
        float noiseFreq = 3.5;
        float noiseAmp = 0.5;
        vec3 noisePos = vec3(pos.x * noiseFreq + time, pos.y, pos.z);

        vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * modelViewPosition; 
      }

  `;


  public static normal: string = `

    uniform float time;

    varying vec3 vNormal;


    void main() {

      vNormal = normal;

      vec4 offset = vec4(position, 1.0);
      float distance = sin(time * 5.0) * 0.5 + 0.5;
      offset.xyz += normal * distance;

      gl_Position = projectionMatrix * modelViewMatrix * offset;
    }

  `


}

