import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, BoxBufferGeometry, Group } from 'three'
import { SceneManager } from './scene-manager'
import { SoundEntity3D } from './sound-entity-3d'
import { Chord } from './chord'
import { SoundEntity } from './sound-entity'
import { Note3D } from './note3D'

export class Chord3D extends SoundEntity3D{

    public ctrl: SoundEntity
    public obj3D: Mesh
    public lines: Group
    public notes3D: Note3D[]

    constructor(chord: Chord, soundEntities: Note3D[]) {
        super() 

        this.ctrl = chord as Chord

        this.notes3D = soundEntities

        this.obj3D = new Mesh(new BoxBufferGeometry(1, 1, 1), new MeshNormalMaterial())
        this.obj3D.name = 'chord.3D'
        this.obj3D.userData.id = chord.id

        this.notes3D.forEach(note3D => {

            this.obj3D.add(note3D.obj3D)

            note3D.ctrl.position.y -= this.ctrl.position.y
            note3D.obj3D.position.copy(note3D.ctrl.position)
        })

        this.obj3D.position.copy(this.ctrl.position)

        SceneManager.scene.add(this.obj3D)
    }

    public move(moveTo: Vector3, X?: boolean, Y?: boolean, Z?: boolean) {

        // Set pivot of group
        this.obj3D.position.copy(moveTo)

        this.ctrl.position.x = moveTo.x
        this.ctrl.position.y = moveTo.y
        this.ctrl.position.z = moveTo.z

        // Set world position for each note
        this.notes3D.forEach(note => {

            note.obj3D.getWorldPosition(note.ctrl.position)
        })
    }
}