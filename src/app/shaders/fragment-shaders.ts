



export class FragmentShader {


    public static meshbasicmaterial: string = `

        uniform vec3 uColor;

        void main(){
            gl_FragColor = vec4(uColor, 1.0);
        }   

    `

    public static normal: string = `

        varying vec3 vNormal;

        void main(){

            gl_FragColor = vec4(vNormal, 1.0);
        }   

    `
    

    public static distortion: string = `

        varying vec3 vNormal;

        void main(){

            gl_FragColor = vec4(vNormal, 1.0);
        }   

    `

}

