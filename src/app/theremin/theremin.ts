import { Sound } from './sound-entity'
import { Note } from './note'
import { AxisBehaviour } from '../AxisBehaviours/axis-behaviour'
import { FrequencyShift } from '../AxisBehaviours/frequency-shfit'
import { VolumeShift } from '../AxisBehaviours/volume-shift'
import { AdditiveSynthesis } from '../AxisBehaviours/additive-synthesis'
import { Chord } from './chord'
import { Theremin3D } from './theremin3D'

export class Theremin {

    static instance: Theremin

    masterVolume: GainNode
    storedVolume: number

    public static audioContext: AudioContext

    public sounds: Sound[] = []

    public X: AxisBehaviour
    public Y: AxisBehaviour
    public Z: AxisBehaviour

    public axisBehaviors: AxisBehaviour[] = []

    public isPlaying: boolean = false


    constructor() {

        Theremin.instance = this

        Theremin.audioContext = new AudioContext()

        this.masterVolume = Theremin.audioContext.createGain()

        this.masterVolume.gain.value = .3
        this.masterVolume.connect(Theremin.audioContext.destination)
        this.storedVolume = this.masterVolume.gain.value

        this.X = new FrequencyShift('x')
        this.Y = new VolumeShift('y')
        // this.Z = new AdditiveSynthesis('z')
    }

    public addNote(frequency: number) : Sound {

        let sn = new Note(frequency, Theremin.audioContext)

        this.sounds.push(sn)

        sn.play()

        return sn
    }

    public deleteNote(note: Note) {

        let i = this.sounds.indexOf(note)

        if(i >= 0) this.sounds.splice(i, 1)

        note.destroy()
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

    
    public updateSound(se: Sound) {

        this.X.updateSound(se)
        this.Y.updateSound(se)
        // this.Z.updateSound(se)
    }

    public toggleOnOff(play: boolean) {

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
}