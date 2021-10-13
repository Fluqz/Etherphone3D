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
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory'



import { Color } from './color'
import { Globals } from './globals'


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

    public static controller1: THREE.Group
    public static controller2: THREE.Group
    public static controllerGrip1: THREE.Group
    public static controllerGrip2: THREE.Group

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
        // SceneManager.renderer.toneMapping = THREE.Uncharted2ToneMapping
        this.container.append(SceneManager.renderer.domElement)

        SceneManager.perspective = new THREE.PerspectiveCamera(50, SceneManager.w / SceneManager.h, .1, 10000)
        SceneManager.perspective.position.set(50, 50, 50)

        SceneManager.orthographic = new THREE.OrthographicCamera(SceneManager.w / -2, SceneManager.w / 2, SceneManager.h / 2, SceneManager.h / -2, .1, 1000)
        SceneManager.orthographic.position.set(0, 0, 50)
        SceneManager.orthographic.zoom = 100

        SceneManager.scene = new THREE.Scene()
        SceneManager.scene.background = new THREE.Color(Color.BG)
        // this.scene.add(new GridHelper(1000, 100, new THREE.Color(0xAAAAAA)))
        // this.scene.add(new AxesHelper(100))

        SceneManager.orbitCamera = SceneManager.perspective

        this.createAxes()
        this.createLight()

        this.addCubeMap()
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

    public static createController() {

        const geometry = new THREE.BufferGeometry();
        geometry.setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, - 5 ) ] );

        SceneManager.controller1 = SceneManager.renderer.xr.getController( 0 );
        SceneManager.controller1.add( new THREE.Line( geometry ) );
        SceneManager.scene.add( SceneManager.controller1 );

        SceneManager.controller2 = SceneManager.renderer.xr.getController( 1 );
        SceneManager.controller2.add( new THREE.Line( geometry ) );
        SceneManager.scene.add( SceneManager.controller2 );

        const controllerModelFactory = new XRControllerModelFactory();

        SceneManager.controllerGrip1 = SceneManager.renderer.xr.getControllerGrip( 0 );
        SceneManager.controllerGrip1.add( controllerModelFactory.createControllerModel( SceneManager.controllerGrip1 ) );
        SceneManager.scene.add( SceneManager.controllerGrip1 );

        SceneManager.controllerGrip2 = SceneManager.renderer.xr.getControllerGrip( 1 );
        SceneManager.controllerGrip2.add( controllerModelFactory.createControllerModel( SceneManager.controllerGrip2 ) );
        SceneManager.scene.add( SceneManager.controllerGrip2 );
    }

    public static removeController() {

        SceneManager.scene.remove(SceneManager.controller1)
        SceneManager.scene.remove(SceneManager.controller2)
        SceneManager.scene.remove(SceneManager.controllerGrip1)
        SceneManager.scene.remove(SceneManager.controllerGrip2)
    }

    private createAxes() {

        let points: THREE.Vector3[] = []

        // X
        points.push(new THREE.Vector3(-10000, 0, 0))
        points.push(new THREE.Vector3(10000, 0, 0))
        let geometry = new THREE.BufferGeometry().setFromPoints(points)
        let material = new THREE.LineBasicMaterial( { color: Color.X } )
        this.x = new THREE.Line( geometry, material )
        this.x.matrixAutoUpdate = false
        this.x.position.set(0, 0, 0)
        SceneManager.scene.add(this.x)
        
        // Y
        points = []
        points.push(new THREE.Vector3(0, -10000, 0))
        points.push(new THREE.Vector3(0, 10000, 0))
        geometry = new THREE.BufferGeometry().setFromPoints(points)
        material = new THREE.LineBasicMaterial( { color: Color.Y } )
        this.y = new THREE.Line( geometry, material )
        this.y.matrixAutoUpdate = false
        this.y.position.set(0, 0, 0)
        SceneManager.scene.add(this.y)

        // Z
        points = []
        points.push(new THREE.Vector3(0, 0, -10000))
        points.push(new THREE.Vector3(0, 0, 10000))
        geometry = new THREE.BufferGeometry().setFromPoints(points)
        material = new THREE.LineBasicMaterial( { color: Color.Z } )
        this.z = new THREE.Line( geometry, material )
        this.z.matrixAutoUpdate = false
        this.z.position.set(0, 0, 0)
        SceneManager.scene.add(this.z)
    }
    
        

    private createLight() {

        let hemi = new THREE.HemisphereLight(0xFFFdEF, 0xFFFedF, .8)
        SceneManager.scene.add(hemi)

        let direct = new THREE.DirectionalLight(0xFFFdEF, .4)
        SceneManager.scene.add(direct)
    }

    private addCubeMap() {

        SceneManager.scene.background = new THREE.CubeTextureLoader()
            .setPath( Globals.PATH + '/assets/images/milky-way/' )
            .load( [
                'px.png',
                'nx.png',
                'py.png',
                'ny.png',
                'pz.png',
                'nz.png'
            ] );
    }

    public update() {

        if(SceneManager.orbit) SceneManager.orbit.update()

        this.render()
    }

    public render() {
        
        if(SceneManager.activeCamera == CameraType.PERSPECTIVE) 
            SceneManager.renderer.render(SceneManager.scene, SceneManager.perspective)
        else if(SceneManager.activeCamera == CameraType.ORTHOGRAPHIC)  
            SceneManager.renderer.render(SceneManager.scene, SceneManager.orthographic)
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