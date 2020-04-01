import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, BoxBufferGeometry, Group } from 'three'
import { SceneManager } from './scene-manager'
import { SoundEntity3D } from './sound-entity-3d'
import { Chord } from './chord'
import { SoundEntity } from './sound-entity'
import { Note3D } from './note3D'
import { DistanceLabel } from './tools/distance-label'
import { MemoryLabel } from './tools/memory-label'
import { AxesLabel } from './tools/axes-label'

export class Chord3D extends SoundEntity3D{

    public ctrl: Chord
    public obj: Mesh
    public lines: Group
    public notes3D: Note3D[]

    public distanceLabel: DistanceLabel
    public memoryLabel: MemoryLabel
    public axesLabel: AxesLabel

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
        
        this.distanceLabel = new DistanceLabel(this)
        this.memoryLabel = new MemoryLabel(this)
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


    public select() {

        this.distanceLabel.enabled = true

        this.memoryLabel.enabled = true

        this.notes3D.forEach(note => {

            note.select()
        })
    }
    
    public unselect() {

        this.distanceLabel.enabled = false
     
        this.memoryLabel.enabled = false

        
        this.notes3D.forEach(note => {

            note.unselect()
        })
    }

    public mouseUp() {}


    public addNote(note: Note3D) {

        if(this.notes3D.indexOf(note) != -1) return

        this.notes3D.push(note)

        this.obj.add(note.obj)
    }

    public removeNote(note: Note3D) {

        let i = this.notes3D.indexOf(note)

        if(!i) return

        this.notes3D.splice(i, 1)

        if(this.obj.getObjectById(note.obj.id)) this.obj.remove(note.obj)
    }

    public mute() {


    }

    public unmute() {
        
    }
}