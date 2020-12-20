import { Sound } from './sound-entity'
import { Note } from './note'
import { AxesBehaviour } from '../axes-behaviours/axes-behaviour'
import { FrequencyShift } from '../axes-behaviours/frequency-shfit'
import { VolumeShift } from '../axes-behaviours/volume-shift'
import { Octivator } from '../axes-behaviours/octivator'
import { AdditiveSynthesis } from '../axes-behaviours/additive-synthesis'
import { Chord } from './chord'
import { Axis } from './axis'
import { OctahedronBufferGeometry } from 'three'
import { Sound3D } from './sound-entity-3d'

export class Theremin {

    static instance: Theremin

    masterVolume: GainNode
    storedVolume: number

    public static audioContext: AudioContext

    public sounds: Sound[] = []

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

    public isPlaying: boolean = false


    constructor() {

        Theremin.instance = this

        Theremin.audioContext = new AudioContext()

        this.masterVolume = Theremin.audioContext.createGain()

        this.masterVolume.gain.value = .3
        this.masterVolume.connect(Theremin.audioContext.destination)
        this.storedVolume = this.masterVolume.gain.value

        Theremin.x = new FrequencyShift()
        Theremin.y = new VolumeShift()
        Theremin.z = new Octivator()
    }

    public setAxisbehaviour(axis: string, behaviour: AxesBehaviour) {

    }

    public reset() {

        let sounds: Sound[] = []

        this.sounds.forEach(sound => { sounds.push(sound)})
        sounds.forEach(sound => this.deleteNote(sound))

        this.sounds = []
        this.masterVolume.gain.setValueAtTime(.8, Theremin.audioContext.currentTime)

        Theremin.x = new FrequencyShift()
        Theremin.y = new VolumeShift()
        Theremin.z = new Octivator()
    }

    public addNote(frequency?: number) : Note {

        let sn = new Note(Theremin.audioContext)

        this.sounds.push(sn)

        sn.play()

        return sn
    }

    public deleteNote(sound: Sound) : boolean {

        if(!sound) return false

        let i = this.sounds.indexOf(sound)

        if(i != -1) {

            sound.destroy()
            this.sounds.splice(i, 1)
            return true
        }

        return false
    }

    public groupNotesToChord(_ses: Sound[]) {

        let chord = new Chord(_ses, Theremin.audioContext)

        this.sounds.push(chord)

        chord.sounds.forEach(se => {

            se.parent = chord

            // if(se.parent) {
            // }
        })

        return chord
    }

    public ungroupNotes(_ses: Sound[]) {

        return null
    }

    // public removeNoteFromChord(chord: Chord, note: Note) {

    //     let i = chord.notes.indexOf(note)

    //     if(i >= 0) chord.notes.splice(i, 1)
        
    //     this.sounds.push(note)
    // }

    // public splitChord(chord: Chord) {

    //     chord.notes.forEach(note => {

    //         this.sounds.push(note)
    //     })
    // }

    
    public updateSound(sound: Sound) {

        if(Theremin.x) Theremin.x.updateSound(sound)
        if(Theremin.y) Theremin.y.updateSound(sound)
        if(Theremin.z) Theremin.z.updateSound(sound)
    }

    public toggleOnOff(play?: boolean) {

        if(play == undefined) play = !this.isPlaying

        this.isPlaying = play

        this.sounds.forEach(sound => {

            if(play) {

                sound.gainNode.gain.setValueAtTime(0, Theremin.audioContext.currentTime)
            }
            else {
                
                sound.gainNode.gain.setValueAtTime(this.storedVolume, Theremin.audioContext.currentTime)
            }
        })
    }



    public serializeOut() : {} {

        let _sounds: {}[] = []
 
        this.sounds.forEach(sound => {

            _sounds.push(sound.serializeOut())
        })

        return {
            sounds: _sounds,
            masterVolume: this.masterVolume.gain.value,
            x: Theremin.x.name,
            y: Theremin.y.name,
            z: Theremin.z.name,
        }
    }

    public serializeIn(obj: {}) {

        if(obj['sounds'] && obj['sounds'].length > 0) {

            for(let sound of obj['sounds']) {

                let n = this.addNote()

                n.serializeIn(sound)

                this.updateSound(n)
            }
        }

        if(obj['masterVolume']) 
            this.masterVolume.gain.setValueAtTime(obj['masterVolume'], Theremin.audioContext.currentTime)

        if(obj['x']) {

        }
        if(obj['y']) {

        }
        if(obj['z']) {

        }
    }
}