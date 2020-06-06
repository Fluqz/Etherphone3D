import { Sound } from './sound-entity'
import { Note } from './note'
import { AxisBehaviour } from '../AxisBehaviours/axis-behaviour'
import { FrequencyShift } from '../AxisBehaviours/frequency-shfit'
import { VolumeShift } from '../AxisBehaviours/volume-shift'
import { Chord } from './chord'

export class Theremin {

    static instance: Theremin

    masterVolume: GainNode
    storedVolume: number

    public static audioContext: AudioContext

    public sounds: Sound[] = []

    public X: AxisBehaviour
    public Y: AxisBehaviour
    public Z: AxisBehaviour


    constructor() {

        Theremin.instance = this

        Theremin.audioContext = new AudioContext()

        this.masterVolume = Theremin.audioContext.createGain()

        this.masterVolume.gain.value = .3
        this.masterVolume.connect(Theremin.audioContext.destination)
        this.storedVolume = this.masterVolume.gain.value

        // this.createNote(200)
        // this.createNote(300)
        // this.createNote(475)

        this.X = new FrequencyShift('x')
        this.Y = new VolumeShift('y')
    }

    public addNote(frequency: number) : Sound{

        let sn = new Note(frequency)

        this.sounds.push(sn)

        return sn
    }

    public deleteNote(note: Note) {

        let i = this.sounds.indexOf(note)

        if(i >= 0) this.sounds.splice(i, 1)

        note.destroy()
    }

    public groupNotesToChord(_ses: Sound[]) {

        let chord = new Chord(_ses)

        this.sounds.push(chord)

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
    }

    public toggleOnOff(isPlaying: boolean) {

        this.sounds.forEach(sound => {

            if(isPlaying) {

                sound.gainNode.gain.setValueAtTime(0, Theremin.audioContext.currentTime)
            }
            else {
                
                sound.gainNode.gain.setValueAtTime(this.storedVolume, Theremin.audioContext.currentTime)
            }
        })
    }
}