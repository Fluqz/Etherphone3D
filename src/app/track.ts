import { Sample } from './timeline/sample';


export class Track {

    samples: Sample[]

    scheduleTime: number

    length: number



    play() {

        // SETINTERVAL AS LONG AS THE TRACK IS 


        window.setTimeout(()=> {

            this.stop()
            
        }, this.length)
    }

    stop() {


    }

    scheduleSounds() {

        this.samples.forEach((sound)=> {

            // sound.scheduleTime = ...
        })
    }

}