import { Sample } from './sample'


export class BeatMachine {

    private static _instance: BeatMachine
    public static bpm:number = 120

    public static context: AudioContext
    public static masterNode: GainNode

    public static samplesInQueue: Sample[]

    public static isPlaying: boolean = false

    public predictIntervalTime: number = 25 // MS
    public scheduleAhead: number = .1 // Seconds




    constructor() {
        
        BeatMachine.context = new AudioContext()

        BeatMachine.masterNode = BeatMachine.context.createGain()

        BeatMachine.masterNode.gain.value = .3
        BeatMachine.masterNode.connect(BeatMachine.context.destination)

        this.loop(this.update)
    }

    public static get instance() {

        if(BeatMachine._instance == null) BeatMachine._instance = new BeatMachine()

        return BeatMachine._instance
    }

    public static set setSamplesInQueue(val: Sample[]) {

        BeatMachine.samplesInQueue = val
    }

    public static start() {

        BeatMachine.isPlaying = true
    }

    public static stop() {

        BeatMachine.isPlaying = false
    }

    private update() { // RUN EACH CHANNELS CURRENT TRACK INSTEAD OF SAMPLES -> PLAY TRACK -> THEN RUN EACH NOTE OF SAMPLE

        if(!BeatMachine.isPlaying) return

        if(BeatMachine.samplesInQueue.length > 0 ) {

            let currentSample = BeatMachine.samplesInQueue[0]

            while(BeatMachine.samplesInQueue[0].scheduleTime < BeatMachine.context.currentTime ) {
                
                currentSample = BeatMachine.samplesInQueue[0]
                
                BeatMachine.samplesInQueue.shift()
            }
        }
    }

    public static scheduler() {
    }


    public loop = (callback)=> {

        requestAnimationFrame(this.loop.bind(this))

        callback()
    }
}