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

    context: AudioContext

    public sounds: Sound[] = []

    public X: AxisBehaviour
    public Y: AxisBehaviour
    public Z: AxisBehaviour


    constructor() {

        Theremin.instance = this

        this.context = new AudioContext()

        this.masterVolume = this.context.createGain()

        this.masterVolume.gain.value = .3
        this.masterVolume.connect(this.context.destination)
        this.storedVolume = this.masterVolume.gain.value

        // this.createNote(200)
        // this.createNote(300)
        // this.createNote(475)

        this.X = new FrequencyShift('x')
        this.Y = new VolumeShift('y')
    }

    public addNote(frequency: number) : Sound{

        let sn = new Note(this.context, frequency)

        this.sounds.push(sn)

        return sn
    }

    public deleteNote(note: Note) {

        let i = this.sounds.indexOf(note)

        if(i >= 0) this.sounds.splice(i, 1)

        note.destroy()
    }

    public groupNotesToChord(_ses: Sound[]) {

        let ses: Note[] = []
        let k: number = -1
        _ses.forEach(se => {

            if(se instanceof Note) {

                ses.push(se)

                k = this.sounds.indexOf(se)
            }
            else if(se instanceof Chord) {

                se.notes.forEach(Note => {
                    ses.push(Note)
                })

                k = this.sounds.indexOf(se)

                // chord.destroy()
            }   

            if(k >= 0) this.sounds.splice(k, 1)
        })
        
        let chord = new Chord(this.context, ses)

        this.sounds.push(chord)

        return chord
    }

    public ungroupNotes(_ses: Sound[]) {

        return null
    }

    public removeNoteFromChord(chord: Chord, note: Note) {

        let i = chord.notes.indexOf(note)

        if(i >= 0) chord.notes.splice(i, 1)
        
        this.sounds.push(note)
    }

    public splitChord(chord: Chord) {

        chord.notes.forEach(note => {

            this.sounds.push(note)
        })
    }

    
    public updateSound(se: Sound) {

        this.X.updateSound(se)
        this.Y.updateSound(se)
    }

    public toggleOnOff(isPlaying: boolean) {

        this.sounds.forEach(sound => {

            if(isPlaying) {

                sound.gainNode.gain.setValueAtTime(0, this.context.currentTime)
            }
            else {
                
                sound.gainNode.gain.setValueAtTime(this.storedVolume, this.context.currentTime)
            }
        })
    }
}