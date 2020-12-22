import { Note } from './note'
import { AxesBehaviour } from '../axes-behaviours/axes-behaviour'
import { FrequencyShift } from '../axes-behaviours/frequency-shfit'
import { VolumeShift } from '../axes-behaviours/volume-shift'
import { Octivator } from '../axes-behaviours/octivator'
import { AdditiveSynthesis } from '../axes-behaviours/additive-synthesis'
import { Axis } from './axis'
import { OctahedronBufferGeometry, Vector3 } from 'three'
import * as Tone from 'tone'

export class Theremin {

    static instance: Theremin

    static masterVolume: Tone.Gain
    public storedVolume: number
    public volume: number
    private muted: boolean = false

    public notes: Note[] = []

    public static _x: AxesBehaviour
    public static get x() { return Theremin._x }
    public static set x(behaviour: AxesBehaviour) {

        Theremin._x = behaviour
        Theremin._x.axis = Axis.x
    }

    public static _y: AxesBehaviour
    public static get y() { return Theremin._y }
    public static set y(behaviour: AxesBehaviour) {

        Theremin._y = behaviour
        Theremin._y.axis = Axis.y
    }
    public static _z: AxesBehaviour
    public static get z() { return Theremin._z }
    public static set z(behaviour: AxesBehaviour) {

        Theremin._z = behaviour
        Theremin._z.axis = Axis.z
    }



    public static axesBehaviours: AxesBehaviour[] = []

    public isPlaying: boolean = true


    constructor() {

        Theremin.instance = this

        this.volume = .7

        Theremin.masterVolume = new Tone.Gain(this.volume).toDestination()

        this.storedVolume = Theremin.masterVolume.gain.value

        Theremin.masterVolume.gain.value = this.volume

        Theremin.x = new FrequencyShift()
        Theremin.y = new VolumeShift()
        Theremin.z = new Octivator()
    }


    public update() {

        for(let note of this.notes) {

            Theremin.computePosition(note)
        }
    }


    public setAxisbehaviour(axis: string, behaviour: AxesBehaviour) {

    }

    public reset() {

        let notes: Note[] = []

        this.notes.forEach(note => { notes.push(note)})
        notes.forEach(note => this.deleteNote(note))

        this.notes = []
        Theremin.masterVolume.gain.setValueAtTime(.8, Tone.context.currentTime)

        Theremin.x = new FrequencyShift()
        Theremin.y = new VolumeShift()
        Theremin.z = new Octivator()
    }

    public addNote(frequency?: number) : Note {

        let sn = new Note()

        this.notes.push(sn)

        sn.play()

        return sn
    }

    public deleteNote(note: Note) : boolean {

        if(!note) return false

        let i = this.notes.indexOf(note)

        if(i != -1) {

            note.destroy()
            this.notes.splice(i, 1)
            return true
        }

        return false
    }

    public groupNotesToChord(_ses: Note[]) {

        // let chord = new Chord(_ses)

        // this.notes.push(chord)

        // chord.notes.forEach(se => {

        //     se.parent = chord

        //     // if(se.parent) {
        //     // }
        // })

        // return chord
    }

    public ungroupNotes(_ses: Note[]) {

        return null
    }

    // public removeNoteFromChord(chord: Chord, note: Note) {

    //     let i = chord.notes.indexOf(note)

    //     if(i >= 0) chord.notes.splice(i, 1)
        
    //     this.notes.push(note)
    // }

    // public splitChord(chord: Chord) {

    //     chord.notes.forEach(note => {

    //         this.notes.push(note)
    //     })
    // }

    
    public static computePosition(note: Note) {

        if(Theremin.x) Theremin.x.compute1DPosition(note)
        if(Theremin.y) Theremin.y.compute1DPosition(note)
        if(Theremin.z) Theremin.z.compute1DPosition(note)
    }

    public static computeFromPosition(note: Note, position: Vector3) {

        if(Theremin.x) Theremin.x.processAlongDimension(note, position)
        if(Theremin.y) Theremin.y.processAlongDimension(note, position)
        if(Theremin.z) Theremin.z.processAlongDimension(note, position)
    }

    public mute() {

        this.muted = true

        Theremin.masterVolume.gain.setValueAtTime(0, Tone.context.currentTime)
    }

    public toggleOnOff(play?: boolean) {

        if(play == undefined) play = !this.isPlaying

        this.isPlaying = play

        Theremin.masterVolume.gain.setValueAtTime(

                play ? this.storedVolume : 0, 
                
                Tone.context.currentTime
            )
    }



    public serializeOut() : {} {

        let _notes: {}[] = []
 
        this.notes.forEach(note => {

            _notes.push(note.serializeOut())
        })

        return {
            notes: _notes,
            masterVolume: Theremin.masterVolume.gain.value,
            x: Theremin.x.name,
            y: Theremin.y.name,
            z: Theremin.z.name,
        }
    }

    public serializeIn(obj: {}) {

        if(obj['notes'] && obj['notes'].length > 0) {

            for(let note of obj['notes']) {

                let n = this.addNote()

                n.serializeIn(note)

                Theremin.computePosition(n)
            }
        }

        if(obj['masterVolume']) 
            Theremin.masterVolume.gain.setValueAtTime(obj['masterVolume'], Tone.context.currentTime)

        if(obj['x']) {

        }
        if(obj['y']) {

        }
        if(obj['z']) {

        }
    }
}