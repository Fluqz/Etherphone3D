import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, MeshBasicMaterial, Color, Object3D } from 'three'
import { Sound } from './sound-entity'
import { Note } from './note'
import { Sound3D } from './sound-entity-3d'
import { DistanceLabel } from '../tools/labels/distance-label'
import { MemoryLabel } from '../tools/labels/memory-label'
import { AxesLabel } from '../tools/labels/axes-label'
import { SceneManager } from '../scene-manager'

export class Note3D extends Sound3D{

    public ctrl: Note
    public obj: Mesh
    public distanceLabel: DistanceLabel
    public memoryLabel: MemoryLabel
    public axesLabel: AxesLabel

    public partOfChord: boolean = false

    constructor(note: Note) {
        super() 

        this.ctrl = note

        let color = new Color();
        color.setHSL( Math.random(), 0.7, Math.random() * 0.2 + 0.05 );

        this.obj = new Mesh(
            new SphereBufferGeometry(.5, 20, 20), 
            new MeshBasicMaterial({
                color: color,
            })
        )
        this.obj.name = 'osc.3D'
        this.obj.userData.id = note.id

        this.obj.position.copy(this.ctrl.position)

        SceneManager.scene.add(this.obj)

        this.distanceLabel = new DistanceLabel(this)
        this.memoryLabel = new MemoryLabel(this)
        this.axesLabel = new AxesLabel(this)
        
        this.distanceLabel.enabled = false
        this.memoryLabel.enabled = false
        this.axesLabel.enabled = true
    }

    public move(moveTo: Vector3, X?: boolean, Y?: boolean, Z?: boolean) {

        // moveTo = SnapToGrid.instance.snapVectorToAxes(moveTo)
        // console.log(X, Y, Z)

        if(X || X == undefined) this.ctrl.position.x = moveTo.x
        if(Y || Y == undefined) this.ctrl.position.y = moveTo.y
        if(Z || Z == undefined) this.ctrl.position.z = moveTo.z

        this.obj.position.copy(this.ctrl.position)

        this.distanceLabel.update()

        this.memoryLabel.update()

        this.axesLabel.update()

        this.ctrl.muted = false
    }

    public select() {

        // this.distanceLabel.enabled = true

        // this.memoryLabel.enabled = true

        // this.axesLabel.enabled = true

        if(this.axesLabel.enabled) this.axesLabel.reset()
    }
    
    public unselect() {

        // this.distanceLabel.enabled = false
     
        // this.memoryLabel.enabled = false

        // this.axesLabel.enabled = false
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

    }

}