import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, BoxBufferGeometry, Group } from 'three'
import { SceneManager } from './scene-manager'
import { SoundEntity3D } from './sound-entity-3d'
import { Chord } from './chord'
import { SoundEntity } from './sound-entity'
import { Note3D } from './note3D'
import { DistanceLabel } from './tools/distance-label'
import { MemoryLabel } from './tools/memory-label'

export class Chord3D extends SoundEntity3D{

    public ctrl: SoundEntity
    public obj: Mesh
    public lines: Group
    public notes3D: Note3D[]

    public distanceLabel: DistanceLabel
    public memoryLabel: MemoryLabel

    constructor(chord: Chord, soundEntities: Note3D[]) {
        super() 

        this.ctrl = chord as Chord

        this.notes3D = soundEntities

        this.obj = new Mesh(new BoxBufferGeometry(1, 1, 1), new MeshNormalMaterial())
        this.obj.name = 'chord.3D'
        this.obj.userData.id = chord.id

        this.notes3D.forEach(note3D => {

            this.obj.add(note3D.obj)

            note3D.ctrl.position.y -= this.ctrl.position.y
            note3D.obj.position.copy(note3D.ctrl.position)
        })

        this.obj.position.copy(this.ctrl.position)

        SceneManager.scene.add(this.obj)
    }

    public move(moveTo: Vector3, X?: boolean, Y?: boolean, Z?: boolean) {

        // Set pivot of group
        this.obj.position.copy(moveTo)

        this.ctrl.position.x = moveTo.x
        this.ctrl.position.y = moveTo.y
        this.ctrl.position.z = moveTo.z

        // Set world position for each note
        this.notes3D.forEach(note => {

            note.obj.getWorldPosition(note.ctrl.position)
        })
    }

    public select() {}
    public unselect() {}
    public mouseUp() {}
}