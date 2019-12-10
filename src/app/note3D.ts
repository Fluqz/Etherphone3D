import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, MeshBasicMaterial, Color, Object3D } from 'three'
import { SceneManager } from './scene-manager'
import { SoundEntity } from './sound-entity'
import { Note } from './note'
import { SoundEntity3D } from './soundEntity3D'

export class Note3D extends SoundEntity3D{

    ctrl: SoundEntity
    obj3D: Mesh

    constructor(note: Note) {
        super() 

        this.ctrl = note 

        let color = new Color();
        color.setHSL( Math.random(), 0.7, Math.random() * 0.2 + 0.05 );

        this.obj3D = new Mesh(new SphereBufferGeometry(.2, 20, 20), new MeshBasicMaterial({color: color}))
        this.obj3D.name = 'osc.3D'
        this.obj3D.userData.id = note.id

        this.obj3D.position.copy(this.ctrl.position)

        SceneManager.scene.add(this.obj3D)
    }

    public move(moveTo: Vector3) {

        this.obj3D.position.copy(moveTo)

        this.ctrl.position.x = moveTo.x
        this.ctrl.position.y = moveTo.y
        this.ctrl.position.z = moveTo.z
    }
}