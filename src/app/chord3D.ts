import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, Object3D, BufferGeometry, LineBasicMaterial, Line } from 'three'
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
    public lines: THREE.Line[] = []
    public notes3D: Note3D[]

    public distanceLabel: DistanceLabel
    public memoryLabel: MemoryLabel
    public axesLabel: AxesLabel


    constructor(chord: Chord, soundEntities: Note3D[]) {
        super() 

        this.ctrl = chord as Chord

        this.notes3D = soundEntities

        this.obj = new Mesh(
            new SphereBufferGeometry(.5, 20, 20), 
            new MeshNormalMaterial()
        )
        this.obj.name = 'chord.3D'
        this.obj.userData.id = chord.id

        this.createLabel()

        this.obj.position.copy(this.ctrl.position)

        SceneManager.scene.add(this.obj)
        
        this.distanceLabel = new DistanceLabel(this)
        this.memoryLabel = new MemoryLabel(this)
        this.axesLabel = new AxesLabel(this)
    }


    
    public move(moveTo: Vector3, X?: boolean, Y?: boolean, Z?: boolean) {

        this.obj.updateMatrix()

        let lastPosition: Vector3 = new Vector3().copy(this.ctrl.position)

        if(X || X == undefined) this.ctrl.position.x = moveTo.x
        if(Y || Y == undefined) this.ctrl.position.y = moveTo.y
        if(Z || Z == undefined) this.ctrl.position.z = moveTo.z

        this.obj.position.copy(this.ctrl.position)

        this.distanceLabel.update()
        this.memoryLabel.update()
        // this.axesLabel.update()
        
        // NOTE MOVING PART 

        let offset = new Vector3()

        offset.copy(lastPosition)
        offset.sub(this.ctrl.position)
        offset.negate()
        // let matrix = new Matrix4().setPosition(offset)

        let notePosition: Vector3 = new Vector3()
        this.notes3D.forEach(note => {

            notePosition.copy(note.ctrl.position)
            // notePosition.applyMatrix4(matrix)
            notePosition.add(offset)
            note.move(notePosition)

            // Update position to world 
            // note.obj.getWorldPosition(note.ctrl.position)

            // note.distanceLabel.update()
            // note.memoryLabel.update()
            // note.axesLabel.update()
        })

        this.updateLabel()
    }


    public select() {

        this.distanceLabel.enabled = true
        this.memoryLabel.enabled = true
        // this.axesLabel.enabled = true

        this.notes3D.forEach(note => {

            note.select()
        })
    }
    
    public unselect() {

        this.distanceLabel.enabled = false
        this.memoryLabel.enabled = false
        // this.axesLabel.enabled = false
        
        this.notes3D.forEach(note => {

            note.unselect()
        })
    }

    public mouseUp() {}


    private createLabel() {

        let geo = new BufferGeometry()
        let mat = new LineBasicMaterial({ color: 0x000000 })
        
        let line: Line

        this.notes3D.forEach(note => {
                
            line = new Line(geo.clone(), mat) 
            line.name = 'group.line'

            SceneManager.scene.add(line)

            this.lines.push(line)
        })

        this.updateLabel()
    }

    
    public updateLabel() {

        this.notes3D.forEach((note, index) => {

            this.lines[index].geometry.setFromPoints([note.ctrl.position, this.ctrl.position])
        })
    }


    public fixUpdate() {

        // When moving a note, lines arent updated
        this.updateLabel()
    }

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

    public destroy() {

        SceneManager.scene.remove(this.obj)
    }
}