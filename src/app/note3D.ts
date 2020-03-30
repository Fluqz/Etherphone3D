import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, MeshBasicMaterial, Color, Object3D } from 'three'
import { SceneManager } from './scene-manager'
import { SoundEntity } from './sound-entity'
import { Note } from './note'
import { SoundEntity3D } from './sound-entity-3d'
import { SnapToGrid } from './snap-to-grid'
import { DistanceLabel } from './tools/distance-label'
import { MemoryLabel } from './tools/memory-label'

export class Note3D extends SoundEntity3D{

    public ctrl: SoundEntity
    public obj: Mesh
    public distanceLabel: DistanceLabel
    public memoryLabel: MemoryLabel

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

    }

    public select() {

        this.distanceLabel.enabled = true

        this.memoryLabel.enabled = true
    }
    
    public unselect() {

        this.distanceLabel.enabled = false
     
        this.memoryLabel.enabled = false
    }
    public mouseUp() {
        
    }
}