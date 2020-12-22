import { Sample } from './sample'
import * as Tone from 'tone'


export class BeatMachine {

    private static _instance: BeatMachine
    public static bpm:number = 200
    public static beats:number = 16
    public static noteDuration:string = '1'

    public static masterNode: GainNode

    public static samplesInQueue: Sample[] = []

    public static isPlaying: boolean = false

    public static lookahead: number = 25 // MS
    public static scheduleAhead: number = .1 // Seconds
    
    public static currentNote = 0 // 1/4 Note
    public static nextNoteTime = 0 // 1/4 Note

    public static secondsPerBeat: number = 0

    public static startTime: number = 0

    constructor() {
        
        // Tone.context = new AudioContext()

        // BeatMachine.masterNode = Tone.context.createGain()

        // BeatMachine.masterNode.gain.value = .3
        // BeatMachine.masterNode.connect(Tone.context.destination)
    }

    public static get instance() {

        if(BeatMachine._instance == null) BeatMachine._instance = new BeatMachine()

        return BeatMachine._instance
    }

    public set setSamplesInQueue(val: Sample[]){

        BeatMachine.samplesInQueue = val
    }

    public static get time() { return Tone.context.currentTime - BeatMachine.startTime }

    public static add(sample: Sample) {

        BeatMachine.samplesInQueue.push(sample)
    }
    
    public static remove(sample: Sample) {

        BeatMachine.samplesInQueue.splice(BeatMachine.samplesInQueue.indexOf(sample), 1)
    }

    public static start(samples?: Sample[]) {

        if(samples != null) BeatMachine.samplesInQueue = samples

        if(BeatMachine.isPlaying) BeatMachine.stop()

        BeatMachine.isPlaying = true

        BeatMachine.startTime = Tone.context.currentTime

        // check if context is in suspended state (autoplay policy)
        if (Tone.context.state === 'suspended') {
            Tone.context.resume();
        }

        BeatMachine.scheduler(); // kick off scheduling
    }

    public static stop() {

        BeatMachine.isPlaying = false

        window.clearTimeout(BeatMachine.TOID)
    }

    private static nextNote() {

        BeatMachine.secondsPerBeat = 60 / BeatMachine.bpm

        BeatMachine.nextNoteTime += BeatMachine.secondsPerBeat

        BeatMachine.currentNote += 1
        if(BeatMachine.currentNote == BeatMachine.beats)
            BeatMachine.currentNote = 0
    }
    
    private static scheduleNote(beatNumber: number, time: number) {

        // console.log(beatNumber, time)

        BeatMachine.samplesInQueue.forEach(sample => {

            if(sample.scheduleTime == beatNumber) {

                // console.log('play', sample.scheduleTime, sample.length * BeatMachine.secondsPerBeat)

                sample.note.play(sample.length * BeatMachine.secondsPerBeat)
                sample.note.ctrl.play(sample.length * BeatMachine.secondsPerBeat)
            }
        })
    }

    static TOID: number
    public static scheduler() {
        
        while(BeatMachine.nextNoteTime < BeatMachine.time + BeatMachine.scheduleAhead) {

            BeatMachine.scheduleNote(BeatMachine.currentNote, BeatMachine.nextNoteTime)
            BeatMachine.nextNote()
            // console.log(BeatMachine.currentNote)
        }

        BeatMachine.TOID = window.setTimeout(BeatMachine.scheduler, BeatMachine.lookahead)
    }
}