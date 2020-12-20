import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, MeshBasicMaterial, Color, Object3D, MeshStandardMaterial } from 'three'
import { Sound } from './sound-entity'
import { Note } from './note'
import { Sound3D } from './sound-entity-3d'
import { DistanceLabel } from '../tools/labels/distance-label'
import { MemoryLabel } from '../tools/labels/memory-label'
import { AxesLabel } from '../tools/labels/axes-label'
import { SceneManager } from '../scene-manager'
import { Tools } from '../tools/tools'

export class Note3D extends Sound3D{

    public ctrl: Note
    public obj: Mesh
    public distanceLabel: DistanceLabel
    public memoryLabel: MemoryLabel
    public axesLabel: AxesLabel

    constructor(note: Note) {
        super() 

        this.ctrl = note

        this.obj = new Mesh(
            new SphereBufferGeometry(2, 20, 20), 
            new MeshStandardMaterial({
                color: this.ctrl.color,
            })
        )
        this.obj.name = 'osc.3D'
        this.obj.userData.id = note.id

        this.obj.position.copy(this.ctrl.position)

        this.distanceLabel = new DistanceLabel(this)
        this.memoryLabel = new MemoryLabel(this)
        this.axesLabel = new AxesLabel(this)
        
        this.distanceLabel.enabled = false
        this.memoryLabel.enabled = false
        this.axesLabel.enabled = true
    }

    public move(moveTo: Vector3, X?: boolean, Y?: boolean, Z?: boolean) {

        if(X || X == undefined) this.ctrl.position.x = (moveTo.x)
        if(Y || Y == undefined) this.ctrl.position.y = (moveTo.y)
        if(Z || Z == undefined) this.ctrl.position.z = (moveTo.z)

        this.obj.position.copy(this.ctrl.position)

        this.obj.getWorldPosition(this.ctrl.position)

        this.distanceLabel.update()

        this.memoryLabel.update()

        this.axesLabel.update()

        this.ctrl.muted = false
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