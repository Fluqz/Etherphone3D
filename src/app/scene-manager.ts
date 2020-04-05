import * as THREE from 'three'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { GridHelper, Line, AxesHelper } from 'three'

export enum CameraType {

    PERSPECTIVE,
    ORTHOGRAPHIC
}

export class SceneManager {

    static renderer: THREE.WebGLRenderer
    static perspective: THREE.PerspectiveCamera
    static orthographic: THREE.OrthographicCamera
    static scene: THREE.Scene

    static activeCamera: CameraType

    static composer: EffectComposer
    static renderPass: RenderPass
    static effectFXAA: ShaderPass
    static copyShader: ShaderPass
    static vertexShader: string
    static fragmentShader: string

    static id: number

    ground: THREE.Mesh
    wall: THREE.Mesh
    wall2: THREE.Mesh

    w:number
    h:number

    static environmentObjs: THREE.Object3D[] = []


    constructor() {

        this.w = window.innerWidth
        this.h = window.innerHeight

        SceneManager.activeCamera = CameraType.PERSPECTIVE

        SceneManager.renderer = new THREE.WebGLRenderer({ antialias: true })
        SceneManager.renderer.setSize(this.w, this.h)
        SceneManager.renderer.setClearColor(0xFFFFFF)
        // SceneManager.renderer.gammaOutput
        SceneManager.renderer.toneMapping = THREE.Uncharted2ToneMapping
        SceneManager.perspective = new THREE.PerspectiveCamera(40, this.w / this.h, .1, 1000)
        SceneManager.perspective.position.set(90, 90, 90)
        SceneManager.orthographic = new THREE.OrthographicCamera(this.w / -2, this.w / 2, this.h / 2, this.h / -2, .1, 1000)
        SceneManager.orthographic.position.set(5, 5, 5)
        SceneManager.orthographic.zoom = 20
        SceneManager.scene = new THREE.Scene()
        SceneManager.scene.background = new THREE.Color(0xFFFFFF)
        // SceneManager.scene.add(new GridHelper(1000, 100, new THREE.Color(0xAAAAAA)))
        // SceneManager.scene.add(new AxesHelper(100))

        // SceneManager.vertexShader = `
        //     varying vec2 vUv
		// 	void main() {
		// 		vUv = uv
		// 		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 )
		// 	}
        // `
        
        // SceneManager.fragmentShader = `
        //     uniform sampler2D baseTexture
        //     uniform sampler2D bloomTexture
        //     varying vec2 vUv
        //     vec4 getTexture( sampler2D texelToLinearTexture ) {
        //         return mapTexelToLinear( texture2D( texelToLinearTexture , vUv ) )
        //     }
        //     void main() {
        //         gl_FragColor = ( getTexture( baseTexture ) + vec4( 1.0 ) * getTexture( bloomTexture ) )
        //     }
        // `

        // SceneManager.renderPass = new RenderPass(SceneManager.scene, SceneManager.camera)

        // let effectFXAA = new ShaderPass(FXAAShader)
        // effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight )
        
        // let copyShader = new ShaderPass(CopyShader)
        // // copyShader.renderToScreen = true
        
        
        // let bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), .25, 1, 1)
        // bloomPass.threshold = 0 
        // bloomPass.strength = 5
        // bloomPass.radius = 0
        
        // SceneManager.composer = new EffectComposer(SceneManager.renderer)
        // SceneManager.composer.setSize(window.innerWidth, window.innerHeight)
        // SceneManager.composer.addPass(SceneManager.renderPass)
        // SceneManager.composer.addPass(effectFXAA)
        // SceneManager.composer.addPass(bloomPass)
        // SceneManager.composer.addPass(copyShader)
        
        // let finalPass = new ShaderPass(
        //     new THREE.ShaderMaterial( {
        //         uniforms: {
        //             baseTexture: { value: null },
        //             bloomTexture: { value: SceneManager.composer.renderTarget2.texture }
        //         },
        //         vertexShader: SceneManager.vertexShader,
        //         fragmentShader: SceneManager.fragmentShader,
        //         defines: {}
        //     } ), "baseTexture"
        // )
        // finalPass.needsSwap = true

        // SceneManager.composer.addPass(finalPass)


        let geo = new THREE.CircleBufferGeometry(1000, 100)
        geo.rotateX(-Math.PI / 2)
        let mat = new THREE.MeshPhongMaterial({
            color: 0xBF0040,
            shininess: 0,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: .2
        })

        this.ground = new THREE.Mesh(geo, mat)
        this.ground.name = 'Ground'

        this.wall = this.ground.clone()
        this.wall.name = 'wall'
        this.wall.rotateX(-Math.PI / 2)
        this.wall.material = mat.clone()
        this.wall.material['color'] = new THREE.Color(0xFFFF00)

        this.wall2 = this.ground.clone()
        this.wall2.name = 'wall2'
        this.wall2.material = mat.clone()
        this.wall2.material['color'] = new THREE.Color(0x00FFFF)
        this.wall2.rotateZ(-Math.PI / 2)


        SceneManager.scene.add(this.ground)
        SceneManager.scene.add(this.wall)
        SceneManager.scene.add(this.wall2)

        SceneManager.environmentObjs.push(this.wall)
        SceneManager.environmentObjs.push(this.wall2)
        SceneManager.environmentObjs.push(this.ground)

        this.addLight()
    }

        
    public static get currentCamera(){

        return SceneManager.activeCamera == CameraType.PERSPECTIVE ? SceneManager.perspective : SceneManager.orthographic
    }

    private addLines() {

        // X
        let geometry = new THREE.BufferGeometry()
        let vertices = new Float32Array( [ 0, 1, 2 ] )
        // itemSize = 3 because there are 3 values (components) per vertex
        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) )
        let material = new THREE.LineBasicMaterial( { color: 0x000000 } )
        let x = new THREE.Line( geometry, material )
        x.position.set(1, 1, 1)
        SceneManager.scene.add(x)
        
        // Y
        geometry = new THREE.BufferGeometry()
        vertices = new Float32Array( [ 0, 200 ] )
        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) )
        let y = new THREE.Line( geometry, material )
        SceneManager.scene.add(y)

        // Z
        geometry = new THREE.BufferGeometry()
        vertices = new Float32Array( [ 0, 200 ] )
        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) )
        let z = new THREE.Line( geometry, material )
        SceneManager.scene.add(z)
    }

    private addLight() {

        let hemi = new THREE.HemisphereLight(0xFFFdEF, 0xFFFedF, .8)
        SceneManager.scene.add(hemi)

        // let spotLight = new SpotLight(0xffffff, 1)
        // spotLight.position.set(0, 2, 0)
        // spotLight.lookAt(new Vector3(0, 0, 0))
        // // spotLight.power = 6000
        // // spotLight.angle = 0.1
        // // spotLight.decay = 2
        // // spotLight.penumbra = 0.1
        // // spotLight.distance = 200
        // SceneManager.scene.add(spotLight)
    }


    public static update() {

        if(this.activeCamera == CameraType.PERSPECTIVE) 
            this.renderer.render(this.scene, this.perspective)
        else if(this.activeCamera == CameraType.ORTHOGRAPHIC)  
            this.renderer.render(this.scene, this.orthographic)
    }


    // ROTATE CAMERA ON KEY 1 2 3 or SHIFT 1 2 3 for negative area to be aligned to a axes
    public rotateCamera() {

    }
}