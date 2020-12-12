import { AxesBehaviour } from './axes-behaviour'
import { Note } from '../theremin/note'
import { Chord } from '../theremin/chord'
import { Sound } from '../theremin/sound-entity'
import { NoteData, NoteDataClass } from "../data/frequency-of-notes"
import { Theremin } from '../theremin/theremin'
import { Axis } from '../theremin/axis'

export class AdditiveSynthesis extends AxesBehaviour {

    private oscs: OscillatorNode[] = []

    constructor(axis?: Axis) { 
        
        super(axis)
        
        this.name = 'Additive Synthesis'

        this.sF = 10
        
        this.min = 0
        this.max = 2000

        this.muted = false
    }

    public updateSound(entity: Sound) {

        if(this.axis == null) return
        if(this.muted) return

        this.oscs.forEach(osc => {

            osc.disconnect()
            osc.stop()
        })

        let osc1: OscillatorNode
        let osc2: OscillatorNode
        let osc3: OscillatorNode
        let osc4: OscillatorNode
        let osc5: OscillatorNode

        if(entity instanceof Note) {
            
            let note = entity as Note

            osc1 = Theremin.audioContext.createOscillator()
            osc2 = Theremin.audioContext.createOscillator()
            osc3 = Theremin.audioContext.createOscillator()
            osc4 = Theremin.audioContext.createOscillator()
            osc5 = Theremin.audioContext.createOscillator()

            osc1.frequency.value = note.frequency * 2
            osc2.frequency.value = note.frequency * 3
            osc3.frequency.value = note.frequency * 4
            osc4.frequency.value = note.frequency * 5
            osc5.frequency.value = note.frequency * 6

            osc1.connect(note.gainNode)
            osc2.connect(note.gainNode)
            osc3.connect(note.gainNode)
            osc4.connect(note.gainNode)
            osc5.connect(note.gainNode)
            
            this.oscs.push(osc1)
            this.oscs.push(osc2)
            this.oscs.push(osc3)
            this.oscs.push(osc4)
            this.oscs.push(osc5)
            
            osc1.start()
            osc2.start()
            osc3.start()
            osc4.start()
            osc5.start()
        }
        else if(entity instanceof Chord) {

            let chord = entity as Chord

            let frequency

            chord.sounds.forEach(sound => {

                let note = sound as Note

                osc1 = Theremin.audioContext.createOscillator()
                osc2 = Theremin.audioContext.createOscillator()
                osc3 = Theremin.audioContext.createOscillator()
                osc4 = Theremin.audioContext.createOscillator()
                osc5 = Theremin.audioContext.createOscillator()
    
                osc1.frequency.value = note.frequency * 2
                osc2.frequency.value = note.frequency * 3
                osc3.frequency.value = note.frequency * 4
                osc4.frequency.value = note.frequency * 5
                osc5.frequency.value = note.frequency * 6
    
                osc1.connect(note.gainNode)
                osc2.connect(note.gainNode)
                osc3.connect(note.gainNode)
                osc4.connect(note.gainNode)
                osc5.connect(note.gainNode)

                this.oscs.push(osc1)
                this.oscs.push(osc2)
                this.oscs.push(osc3)
                this.oscs.push(osc4)
                this.oscs.push(osc5)
                
                osc1.start()
                osc2.start()
                osc3.start()
                osc4.start()
                osc5.start()
            })
        }
    }
}