import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, Object3D, BufferGeometry, LineBasicMaterial, Line, TetrahedronBufferGeometry, Box3, Color } from 'three'
import { Sound3D } from './sound-entity-3d'
import { Chord } from './chord'
import { Sound } from './sound-entity'
import { Note3D } from './note3D'
import { DistanceLabel } from '../tools/labels/distance-label'
import { MemoryLabel } from '../tools/labels/memory-label'
import { AxesLabel } from '../tools/labels/axes-label'
import { SceneManager } from '../scene-manager'

export class Chord3D extends Sound3D{

    public ctrl: Chord
    public obj: Mesh
    public lines: THREE.Line[] = []
    public sounds3D: Sound3D[]

    public distanceLabel: DistanceLabel
    public memoryLabel: MemoryLabel
    public axesLabel: AxesLabel


    constructor(chord: Chord, _soundEntities: Sound3D[]) {
        super() 

        this.ctrl = chord as Chord

        this.sounds3D = _soundEntities

        this.obj = new Mesh(
            new TetrahedronBufferGeometry(1), 
            new MeshNormalMaterial()
        )
        this.obj.name = 'chord.3D'
        this.obj.userData.id = chord.id
        this.obj.position.copy(this.ctrl.position)
        // this.setInitPosition()

        _soundEntities.forEach(sound => {

            sound.move(new Vector3(sound.ctrl.position.x, sound.ctrl.position.y - this.obj.position.y, sound.ctrl.position.z))
            
            this.obj.add(sound.obj) // CHORD VOLUME IS INITIALLY ON 1, WHEN SOUNDS ARE ADDED THEY ARE MOVED UP BY (1*SF)
            // SUBTRACT CHORD Y WITH SOUND Y BUT WHERE?
            
        })

        // this.createLabel()

        SceneManager.scene.add(this.obj)
        
        let color = new Color()
        color.setHSL( Math.random(), 0.7, Math.random() * 0.2 + 0.05 )

        this.ctrl.color = color
        
        this.distanceLabel = new DistanceLabel(this)
        this.memoryLabel = new MemoryLabel(this)
        this.axesLabel = new AxesLabel(this)
        
        this.distanceLabel.enabled = false
        this.memoryLabel.enabled = false
        this.axesLabel.enabled = true
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
        this.axesLabel.update()
        
        // NOTE MOVING PART 

        // let offset = new Vector3()
        // offset.copy(lastPosition)
        // offset.sub(this.ctrl.position)
        // offset.negate()

        // let soundPosition: Vector3 = new Vector3()
        this.sounds3D.forEach(sound => {

            // soundPosition.copy(sound.ctrl.position)
            // soundPosition.add(offset)
            // sound.move(soundPosition)

            // Update position to world 
            sound.obj.getWorldPosition(sound.ctrl.position)

            // console.log('Chord notes pos ', sound.ctrl.position)

            sound.distanceLabel.update()
            sound.memoryLabel.update()
            sound.axesLabel.update()
        })

        this.updateLabel()
    }


    public select() {

        if(this.axesLabel.enabled) this.axesLabel.reset()

        this.sounds3D.forEach(note => {

            note.select()
        })
    }
    
    public unselect() {

        this.sounds3D.forEach(note => {

            note.unselect()
        })
    }

    public mouseUp() {}


    private setInitPosition() {
     
        let bbox = new Box3()
        let center = new Vector3()
        let position = new Vector3()

        this.sounds3D.forEach(se => {

            bbox.expandByObject(se.obj)
        })

        bbox.getCenter(center)

        position.set(center.x, this.ctrl.volume, center.z)

        let allGoodCount: number = 0
        let i = 0
        let errorPrevention: number = 0
        while(this.sounds3D.length != allGoodCount || errorPrevention < 50) {

            if(this.sounds3D[i].obj.position.distanceTo(position) > 2) allGoodCount += 1
            else position.z += 1

            i += 1

            if(i == this.sounds3D.length) { 
                i = 0 
                allGoodCount = 0
            }

            errorPrevention += 1
        }

        this.ctrl.position.copy(position)
    }

    private createLabel() {

        let geo = new BufferGeometry()
        let mat = new LineBasicMaterial({ color: 0x000000 })
        
        let line: Line

        this.sounds3D.forEach(note => {
                
            line = new Line(geo.clone(), mat) 
            line.name = 'group.line'

            SceneManager.scene.add(line)

            this.lines.push(line)
        })

        this.updateLabel()
    }

    
    public updateLabel() {

        // this.sounds3D.forEach((sound, index) => {

        //     this.lines[index].geometry.setFromPoints([sound.ctrl.position, this.ctrl.position])
        // })
    }


    public fixUpdate() {

        // When moving a note, lines arent updated
        this.updateLabel()
    }

    public addNote(note: Note3D) {

        if(this.sounds3D.indexOf(note) != -1) return

        this.sounds3D.push(note)

        this.obj.add(note.obj)
    }

    public removeNote(note: Note3D) {

        let i = this.sounds3D.indexOf(note)

        if(!i) return

        this.sounds3D.splice(i, 1)

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