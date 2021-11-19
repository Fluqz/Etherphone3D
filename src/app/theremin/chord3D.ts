import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, MeshBasicMaterial, Color, Object3D, MeshStandardMaterial, ShaderMaterial, Clock } from 'three'
import { Note } from './note'
import { DistanceLabel } from '../tools/labels/distance-label'
import { MemoryLabel } from '../tools/labels/memory-label'
import { AxesLabel } from '../tools/labels/axes-label'
import { Tools } from '../tools/tools'
import { LoadingManager } from '../tools/loading-manager'

import { FragmentShader } from '../shaders/fragment-shaders'
import { VertexShader } from '../shaders/vertex-shaders'
import * as Tone from 'tone'


export class Chord3D{

    sounds3D
    public ctrl: Note
    public obj: Mesh

    public distanceLabel: DistanceLabel
    public memoryLabel: MemoryLabel
    public axesLabel: AxesLabel

    public get position() { return this.obj.position }
    public set position(val:Vector3) { 

        if(val == null) return

        this.obj.position.copy(val)
    }



    constructor(note: Note) {

        this.ctrl = note

        this.obj = new Mesh(
            new SphereBufferGeometry(2, 20, 20), 
            new MeshStandardMaterial({
                color: this.ctrl.color,
            })
        )
        this.obj.name = 'osc.3D'
        this.obj.userData.id = note.id
        this.obj.matrixAutoUpdate = false

        this.position = new Vector3()

        this.distanceLabel = new DistanceLabel(this)
        this.memoryLabel = new MemoryLabel(this)
        this.axesLabel = new AxesLabel(this)
        
        this.distanceLabel.enabled = false
        this.memoryLabel.enabled = false
        this.axesLabel.enabled = true

        
        // LoadingManager.loadGLTF('/assets/models/shape.glb', (gltf)=> {
            
        //     const uniform = {
        //         uColor : {
        //             value: new Color(1, 1, 0)
        //         },
        //         time: {
        //             type: 'f',
        //             value: Tone.context.currentTime
        //         }
        //     }

        //     this.obj.geometry = gltf.children[0].geometry
        //     this.obj.material = new ShaderMaterial({
        //         // wireframe: true,
        //         uniforms: uniform,
        //         vertexShader: VertexShader.distortion,
        //         fragmentShader: FragmentShader.meshbasicmaterial
        //     })
        // })


        this.move(this.ctrl.position)
    }

    public update() {

        this.distanceLabel.update()

        this.memoryLabel.update()

        this.axesLabel.update()

        if(this.obj && this.obj.material['uniforms'])
            this.obj.material['uniforms'].time.value = Tone.context.currentTime
    }

    public move(moveTo: Vector3) {

        this.position = moveTo

        this.update()
    }

    public select() {

        if(this.axesLabel.enabled) this.axesLabel.reset()
    }
    
    public unselect() {

    }

    public play(length?: number) {

        console.log('length', length * 1000)
        this.obj.scale.set(2, 2, 2)

        window.setTimeout(()=> {

            this.obj.scale.set(1, 1, 1)

        }, length * 1000)
    }




    public mouseUp() {
        
    }

    public mute() {

        this.ctrl.mute()
    }

    public unmute() {

        this.ctrl.unmute()
    }

    
    public destroy() {

        if(this.distanceLabel) {
            this.distanceLabel.enabled = false
            this.distanceLabel = null
        }
        if(this.memoryLabel) {
            this.memoryLabel.enabled = false
            this.memoryLabel = null
        }
        if(this.axesLabel) {
            this.axesLabel.enabled = false
            this.axesLabel = null
        }

        Tools.dispose(this.obj)
    }

}