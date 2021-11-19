
import { Color, Vector3 } from 'three'
import * as Tone from 'tone'
import { Tools } from '../tools/tools'
import { Note } from './note'
import { ThereminObject, TOType } from './ThereminObject'

export class Chord extends ThereminObject {
  
    public notes: Note[] = []


    constructor(_notes?: Note[]) {
        super()

        this.type = TOType.CHORD

        this.notes = _notes
    }

    addNote(note: Note) {

        if(this.notes.indexOf(note) == -1) this.notes.push(note)
    }

    removeNote(note: Note) {

        if(this.notes.indexOf(note) != -1) this.notes.splice(this.notes.indexOf(note), 1)
    }
    
    public play(length?: number) {

        super.play()

        for(let n of this.notes) {

            n.play(length)
        }
    }

    public stop() {

        super.stop()

        for(let n of this.notes) {

            n.stop()
        }
    }
    
    public mute() {

        for(let n of this.notes) {

            n.mute()
        }
    }

    public unmute() {

        for(let n of this.notes) {

            n.unmute()
        }
    }

    public serializeOut() {

        let notes: {}[] = []
        for(let n of this.notes) notes.push(n.serializeOut())

        return {
            id: this.id,
            notes: notes,
            color: this.color.getHex(),
            position: this.position,
        }
    }

    public serializeIn(o: {}) {

        this.color.setHex(o['color'])
        this.position.set(o['position'].x, o['position'].y, o['position'].z)

        if(o['notes'] && o['notes'].length !== 0) {

            for(let n of o['notes']) {

                const note = new Note()
                note.serializeIn(n)

                this.addNote(note)
            }
        }
    }

    
    public destroy() {

        super.destroy()

        this.notes = null
    }
    
}