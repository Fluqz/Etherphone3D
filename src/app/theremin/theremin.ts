import { Note } from './note'
import { Chord } from './chord'
import { Modulation } from './axes-behaviours/modulation'
import { FrequencyShift } from './axes-behaviours/frequency-shfit'
import { VolumeShift } from './axes-behaviours/volume-shift'
import { Octivator } from './axes-behaviours/octivator'
import { AdditiveSynthesis } from './axes-behaviours/additive-synthesis'
import { Axis } from './axis'
import { OctahedronBufferGeometry, Vector3 } from 'three'
import * as Tone from 'tone'
import { ThereminObject, TOType } from './ThereminObject'

export class Theremin {

    static masterVolume: Tone.Gain
    public storedVolume: number
    public volume: number
    private muted: boolean = false

    public notes: Note[] = []
    public chords: Chord[] = []

    public static _x: Modulation
    public static get x() { return Theremin._x }
    public static set x(behaviour: Modulation) {

        Theremin._x = behaviour
        Theremin._x.axis = Axis.x
    }

    public static _y: Modulation
    public static get y() { return Theremin._y }
    public static set y(behaviour: Modulation) {

        Theremin._y = behaviour
        Theremin._y.axis = Axis.y
    }
    public static _z: Modulation
    public static get z() { return Theremin._z }
    public static set z(behaviour: Modulation) {

        Theremin._z = behaviour
        Theremin._z.axis = Axis.z
    }



    public static Modulations: Modulation[] = []

    public isPlaying: boolean = true


    constructor() {

        this.volume = .7

        Theremin.masterVolume = new Tone.Gain(this.volume).toDestination()

        this.storedVolume = Theremin.masterVolume.gain.value

        Theremin.masterVolume.gain.value = this.volume

        Theremin.Modulations.push(new FrequencyShift())
        Theremin.Modulations.push(new VolumeShift())
        Theremin.Modulations.push(new Octivator())

        Theremin.setAxisbehaviour(Axis.x, Theremin.Modulations[0])
        Theremin.setAxisbehaviour(Axis.y, Theremin.Modulations[1])
        Theremin.setAxisbehaviour(Axis.z, Theremin.Modulations[2])
    }


    public update() {

        for(let note of this.notes) {

            Theremin.computePosition(note)
        }
    }

    public static setAxisbehaviour(axis: string, behaviour: Modulation) {
        
        behaviour.axis = Axis[axis]
        Theremin[axis] = behaviour
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

        let n = new Note()

        this.notes.push(n)

        n.play()

        return n
    }

    public deleteNote(note: Note) : boolean {

        let i = this.notes.indexOf(note)

        if(i != -1) {

            note.destroy()
            this.notes.splice(i, 1)
            return true
        }

        return false
    }

    public groupNotesToChord(notes: Note[]) {

        let chord = new Chord(notes)

        this.chords.push(chord)

        return chord
    }

    public ungroupNotes(_ses: Note[]) {

        return null
    }

    // public removeNoteFromChord(chord: Chord, note: Note) {

    //     let i = chord.notes.indexOf(note)

    //     if(i >= 0) chord.notes.splice(i, 1)
        
    //     this.notes.push(note)
    // }

    
    public static computePosition(to: ThereminObject) {

        if(to instanceof Note) compute(to)
        else if(to instanceof Chord) {

            for(let n of to.notes) compute(n)
        }

        function compute(to: Note) {
            if(Theremin.x) Theremin.x.compute1DPosition(to)
            if(Theremin.y) Theremin.y.compute1DPosition(to)
            if(Theremin.z) Theremin.z.compute1DPosition(to)
        }
    }

    public static computeFromPosition(to: ThereminObject, position: Vector3) {

        if(to instanceof Note) compute(to)
        else if(to instanceof Chord) {

            for(let n of to.notes) compute(n)
        }

        function compute(to: Note) {
            if(Theremin.x) Theremin.x.processAlongDimension(to, position)
            if(Theremin.y) Theremin.y.processAlongDimension(to, position)
            if(Theremin.z) Theremin.z.processAlongDimension(to, position)
        }
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