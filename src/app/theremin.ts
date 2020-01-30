import { SoundEntity } from './sound-entity'
import { Note } from './note'
import { AxisBehaviour } from './AxisBehaviours/axis-behaviour'
import { FrequencyShift } from './AxisBehaviours/frequency-shfit'
import { VolumeShift } from './AxisBehaviours/volume-shift'
import { Chord } from './chord'

export class Theremin {

    static instance: Theremin

    masterVolume: GainNode
    storedVolume: number

    context: AudioContext

    public sounds: SoundEntity[] = []

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

        this.X = new FrequencyShift()
        this.Y = new VolumeShift()

        // this.update()

    }

    public addNote(frequency: number) : SoundEntity{

        let sn = new Note(this.context, frequency)

        this.sounds.push(sn)

        return sn
    }

    public deleteNote(note: Note) {

        let i = this.sounds.indexOf(note)

        if(i >= 0) this.sounds.splice(i, 1)

        note.destroy()
    }

    public groupNotesToChord(_ses: SoundEntity[]) {

        let ses: Note[] = []
        _ses.forEach(se => {

            if(se instanceof Note) {

                ses.push(se as Note)
            }
            else if(se instanceof Chord) {

                se.notes.forEach(Note => {
                    ses.push(Note)
                })
            }

            let i = this.sounds.indexOf(se)

            if(i >= 0) this.sounds.splice(i, 1)
        })
        
        let chord = new Chord(this.context, ses)

        this.sounds.push(chord)

        return chord
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

    
    public updateNote(se: SoundEntity) {

        // this.sounds.forEach(sound => {
            
        //     this.X.updateNote(sound, this.context.currentTime)
        //     this.Y.updateNote(sound, this.context.currentTime)
        // })

        this.X.updateNote(se, this.context.currentTime)
        this.Y.updateNote(se, this.context.currentTime)
    }

    public toggleOnOff(isPaused: boolean) {

        this.sounds.forEach(sound => {

            if(isPaused) {

                sound.gainNode.gain.setValueAtTime(0, this.context.currentTime)
            }
            else {
                
                sound.gainNode.gain.setValueAtTime(this.storedVolume, this.context.currentTime)
            }
        })

    }
}