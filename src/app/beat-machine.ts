import { Sample } from './timeline/sample'
import { Theremin } from './theremin/theremin'


export class BeatMachine {

    private static _instance: BeatMachine
    public static bpm:number = 200
    public static beats:number = 8

    public static masterNode: GainNode

    public static samplesInQueue: Sample[] = []

    public static isPlaying: boolean = false

    public static lookahead: number = 25 // MS
    public static scheduleAhead: number = .1 // Seconds

    public static currentNote = 0 // 1/4 Note
    public static nextNoteTime = 0 // 1/4 Note


    constructor() {
        
        Theremin.audioContext = new AudioContext()

        BeatMachine.masterNode = Theremin.audioContext.createGain()

        BeatMachine.masterNode.gain.value = .3
        BeatMachine.masterNode.connect(Theremin.audioContext.destination)
    }

    public static get instance() {

        if(BeatMachine._instance == null) BeatMachine._instance = new BeatMachine()

        return BeatMachine._instance
    }

    public set setSamplesInQueue(val: Sample[]){

        BeatMachine.samplesInQueue = val
    }

    public static add(sample: Sample) {

        BeatMachine.samplesInQueue.push(sample)
    }
    
    public static remove(sample: Sample) {

        BeatMachine.samplesInQueue.splice(BeatMachine.samplesInQueue.indexOf(sample), 1)
    }

    public static start(samples?: Sample[]) {

        if(samples != null) BeatMachine.samplesInQueue = samples

        BeatMachine.isPlaying = true

        // check if context is in suspended state (autoplay policy)
        if (Theremin.audioContext.state === 'suspended') {
            Theremin.audioContext.resume();
        }

        BeatMachine.scheduler(); // kick off scheduling
    }

    public static stop() {

        BeatMachine.isPlaying = false

        window.clearTimeout(BeatMachine.TOID)
    }

    private static nextNote() {

        let secondsPerBeat = 60 / BeatMachine.bpm

        BeatMachine.nextNoteTime += secondsPerBeat

        BeatMachine.currentNote += 1
        if(BeatMachine.currentNote == BeatMachine.beats)
            BeatMachine.currentNote = 0
    }
    
    private static scheduleNote(beatNumber: number, time: number) {

        BeatMachine.samplesInQueue.forEach(sample => {
            if(sample.scheduleTime == beatNumber)
                sample.sound.playFrequent(time)
        })
    }

    static TOID: number
    public static scheduler() {
        
        while(BeatMachine.nextNoteTime < Theremin.audioContext.currentTime + BeatMachine.scheduleAhead) {
            BeatMachine.scheduleNote(BeatMachine.currentNote, BeatMachine.nextNoteTime)
            BeatMachine.nextNote()
            console.log(BeatMachine.currentNote)
        }

        BeatMachine.TOID = window.setTimeout(BeatMachine.scheduler, BeatMachine.lookahead)
    }

    // private update() { // RUN EACH CHANNELS CURRENT TRACK INSTEAD OF SAMPLES -> PLAY TRACK -> THEN RUN EACH NOTE OF SAMPLE

    //     if(!BeatMachine.isPlaying) return

    //     if(BeatMachine.samplesInQueue.length > 0 ) {

    //         let currentSample = BeatMachine.samplesInQueue[0]

    //         while(BeatMachine.samplesInQueue[0].scheduleTime < Theremin.audioContext.currentTime ) {
                
    //             currentSample = BeatMachine.samplesInQueue[0]
                
    //             BeatMachine.samplesInQueue.shift()
    //         }
    //     }
    // }
}