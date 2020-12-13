import * as THREE from 'three'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { GridHelper, Line, AxesHelper, Vector3, PerspectiveCamera, OrthographicCamera } from 'three'
import { ObjectControl } from './object-control'
import { Theremin } from './theremin/theremin'
import { Theremin3D } from './theremin/theremin3D'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Color } from './color'


export enum CameraType {

    PERSPECTIVE,
    ORTHOGRAPHIC
}

export class SceneManager {

    public container: HTMLElement

    public static renderer: THREE.WebGLRenderer
    public static perspective: THREE.PerspectiveCamera
    public static orthographic: THREE.OrthographicCamera
    public static scene: THREE.Scene
    public static orbit: OrbitControls

    public static activeCamera: CameraType

    public composer: EffectComposer
    public renderPass: RenderPass
    public effectFXAA: ShaderPass
    public copyShader: ShaderPass
    public vertexShader: string
    public fragmentShader: string

    public id: number

    public static w:number
    public static h:number

    public static environmentObjs: THREE.Object3D[] = []
    public sphere: THREE.Mesh
    public xyPlane: THREE.Mesh
    public yzPlane: THREE.Mesh
    public xzPlane: THREE.Mesh

    public x: THREE.Line
    public y: THREE.Line
    public z: THREE.Line


    constructor(container: HTMLElement) {

        this.container = container

        SceneManager.w = window.innerWidth
        SceneManager.h = window.innerHeight

        SceneManager.activeCamera = CameraType.PERSPECTIVE

        SceneManager.renderer = new THREE.WebGLRenderer({ antialias: true })
        SceneManager.renderer.setSize(SceneManager.w, SceneManager.h)
        SceneManager.renderer.setClearColor(Color.BG)
        SceneManager.renderer.toneMapping = THREE.Uncharted2ToneMapping
        this.container.append(SceneManager.renderer.domElement)

        SceneManager.perspective = new THREE.PerspectiveCamera(50, SceneManager.w / SceneManager.h, .1, 10000)
        SceneManager.perspective.position.set(90, 90, 90)

        SceneManager.orthographic = new THREE.OrthographicCamera(SceneManager.w / -2, SceneManager.w / 2, SceneManager.h / 2, SceneManager.h / -2, .1, 1000)
        SceneManager.orthographic.position.set(0, 0, 5)
        SceneManager.orthographic.zoom = 50

        SceneManager.scene = new THREE.Scene()
        SceneManager.scene.background = new THREE.Color(Color.BG)
        // this.scene.add(new GridHelper(1000, 100, new THREE.Color(0xAAAAAA)))
        // this.scene.add(new AxesHelper(100))

        SceneManager.orbitCamera = SceneManager.perspective

        this.createAxes()
        // this.createEnvironment()
        this.createLight()
    }

    public static get currentCamera(){

        return this.activeCamera == CameraType.PERSPECTIVE ? SceneManager.perspective : SceneManager.orthographic
    }

    
    public static set orbitCamera(camera: THREE.Camera) { 

        if(SceneManager.orbit) {

            SceneManager.orbit.reset()
            SceneManager.orbit.dispose()
        }
        
        if(camera instanceof PerspectiveCamera){
            SceneManager.orbit = new OrbitControls(camera, SceneManager.renderer.domElement)
            SceneManager.orbit.enableDamping = true
            SceneManager.orbit.dampingFactor = .2
        }
        else if(camera instanceof OrthographicCamera) {
            SceneManager.orbit = new OrbitControls(camera, SceneManager.renderer.domElement)
            SceneManager.orbit.enableDamping = true
            SceneManager.orbit.dampingFactor = .2
            SceneManager.orbit.enableRotate = false
        }
    }

    private createAxes() {

        let points: THREE.Vector3[] = []

        // X
        points.push(new THREE.Vector3(-10000, 0, 0))
        points.push(new THREE.Vector3(10000, 0, 0))
        let geometry = new THREE.BufferGeometry().setFromPoints(points)
        let material = new THREE.LineBasicMaterial( { color: Color.X } )
        this.x = new THREE.Line( geometry, material )
        this.x.position.set(0, 0, 0)
        SceneManager.scene.add(this.x)
        
        // Y
        points = []
        points.push(new THREE.Vector3(0, -10000, 0))
        points.push(new THREE.Vector3(0, 10000, 0))
        geometry = new THREE.BufferGeometry().setFromPoints(points)
        material = new THREE.LineBasicMaterial( { color: Color.Y } )
        this.y = new THREE.Line( geometry, material )
        this.y.position.set(0, 0, 0)
        SceneManager.scene.add(this.y)

        // Z
        points = []
        points.push(new THREE.Vector3(0, 0, -10000))
        points.push(new THREE.Vector3(0, 0, 10000))
        geometry = new THREE.BufferGeometry().setFromPoints(points)
        material = new THREE.LineBasicMaterial( { color: Color.Z } )
        this.z = new THREE.Line( geometry, material )
        this.z.position.set(0, 0, 0)
        SceneManager.scene.add(this.z)
    }
    
    public createEnvironment() {

        // let sGeo = new THREE.SphereBufferGeometry(1000, 1000, 1000)
        // let sMat = new THREE.MeshStandardMaterial({
        //     color: Color.BG,
        //     metalness: .1,
        //     roughness: .1,
        //     side: THREE.DoubleSide
        // })
        // this.sphere = new THREE.Mesh(sGeo, sMat)
        // SceneManager.scene.add(this.sphere)

        
        let geo = new THREE.CircleBufferGeometry(1000, 100)
        geo.rotateX(-Math.PI / 2)
        let mat = new THREE.MeshBasicMaterial({ visible: false })

        this.xzPlane = new THREE.Mesh(geo, mat)
        this.xzPlane.name = 'xz'

        this.yzPlane = this.xzPlane.clone()
        this.yzPlane.name = 'yz'
        this.yzPlane.rotateX(-Math.PI / 2)

        this.xyPlane = this.xzPlane.clone()
        this.xyPlane.name = 'xy'
        this.xyPlane.rotateZ(-Math.PI / 2)


        SceneManager.scene.add(this.xzPlane)
        SceneManager.scene.add(this.yzPlane)
        SceneManager.scene.add(this.xyPlane)

        SceneManager.environmentObjs.push(this.xzPlane)
        SceneManager.environmentObjs.push(this.yzPlane)
        SceneManager.environmentObjs.push(this.xyPlane)
    }
        

    private createLight() {

        let hemi = new THREE.HemisphereLight(0xFFFdEF, 0xFFFedF, .8)
        SceneManager.scene.add(hemi)
    }


    public update() {

        if(SceneManager.orbit) SceneManager.orbit.update()
        
        if(SceneManager.activeCamera == CameraType.PERSPECTIVE) 
            SceneManager.renderer.render(SceneManager.scene, SceneManager.perspective)
        else if(SceneManager.activeCamera == CameraType.ORTHOGRAPHIC)  
            SceneManager.renderer.render(SceneManager.scene, SceneManager.orthographic)

        // console.log(Theremin.instance.sounds, Theremin3D.instance.sounds3D)

    }

    public distanceToCenter(pos: Vector3) {

        return pos.distanceTo(SceneManager.scene.position)
    }

    // ROTATE CAMERA ON KEY 1 2 3 or SHIFT 1 2 3 for negative area to be aligned to a axes
    public rotateCamera(axis: string) {

        if(axis == 'x') {

            SceneManager.perspective.position.set(0, 0, this.distanceToCenter(SceneManager.perspective.position))
        }
        else if(axis == 'y') {

            SceneManager.perspective.position.set(this.distanceToCenter(SceneManager.perspective.position), 0, 0)
        }
        else if(axis == 'z') {

            SceneManager.perspective.position.set(this.distanceToCenter(SceneManager.perspective.position), 0, 0)
        }
    }


    resize() {

        SceneManager.w = this.container.clientWidth
        SceneManager.h = this.container.clientHeight

        SceneManager.perspective.aspect = SceneManager.w / SceneManager.h
        SceneManager.perspective.updateProjectionMatrix()

        SceneManager.renderer.setPixelRatio(SceneManager.w / SceneManager.h)
        SceneManager.renderer.setSize(SceneManager.w, SceneManager.h)
    }
}