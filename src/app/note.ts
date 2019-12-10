import { SoundEntity } from './sound-entity'
import { Vector3 } from 'three'
import { SceneManager } from './scene-manager'

export class Note extends SoundEntity{
    
    public id: number
    public type: string

    public frequency: number

    public attack: number
    public release: number
    public sustain: number

    public volume: GainNode

    public audioContext: AudioContext

    public position: Vector3

    public osc: OscillatorNode

    constructor(_audioContext: AudioContext, _frequency: number) {
        super()

        this.audioContext = _audioContext
        this.frequency = _frequency

        this.type = 'Note'

        this.position = new Vector3(_frequency / SceneManager.sF, 10, 0)
        
        this.volume = this.audioContext.createGain()

        this.osc = this.audioContext.createOscillator()      
        this.osc.type = 'sine'
        this.osc.connect(this.volume)        
        this.volume.connect(this.audioContext.destination)

        this.osc.frequency.value = _frequency
        this.volume.gain.value = 10 / SceneManager.sF
        this.osc.start(this.audioContext.currentTime)
        
    }

    public destroy() {

        this.osc.disconnect()

        this.volume.disconnect()
    }
}