import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, MeshBasicMaterial, Color, Object3D } from 'three'
import { SceneManager } from './scene-manager'
import { SoundEntity } from './sound-entity'
import { Note } from './note'
import { SoundEntity3D } from './sound-entity-3d'
import { SnapToGrid } from './snap-to-grid'

export class Note3D extends SoundEntity3D{

    ctrl: SoundEntity
    obj3D: Mesh

    public partOfChord: boolean = false

    constructor(note: Note) {
        super() 

        this.ctrl = note 

        let color = new Color();
        color.setHSL( Math.random(), 0.7, Math.random() * 0.2 + 0.05 );

        this.obj3D = new Mesh(
            new SphereBufferGeometry(.5, 20, 20), 
            new MeshBasicMaterial({
                color: color,
            })
        )
        this.obj3D.name = 'osc.3D'
        this.obj3D.userData.id = note.id

        this.obj3D.position.copy(this.ctrl.position)

        SceneManager.scene.add(this.obj3D)
    }

    public move(moveTo: Vector3, X?: boolean, Y?: boolean, Z?: boolean) {

        // moveTo = SnapToGrid.instance.snapVectorToAxes(moveTo)
        console.log(X, Y, Z)

        if(X || X == undefined) this.ctrl.position.x = moveTo.x
        if(Y || Y == undefined) this.ctrl.position.y = moveTo.y
        if(Z || Z == undefined) this.ctrl.position.z = moveTo.z

        this.obj3D.position.copy(this.ctrl.position)
    }
}