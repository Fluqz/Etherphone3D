import { Sound3D } from '../theremin/sound-entity-3d';
import { Track } from '../track';
import { Sample } from '../sample/sample';

export class Channel {
    
    public samples: Sample[] = []

    public currentSample: Sample

    public active: boolean = false

    public enabled: boolean = false

    constructor() {}


    play() {

        // play current sample
    }

    stop() {

    }

    

    addSample() {

        this.samples.push(new Sample())
    }

    removeSample(sample: Sample) {

        let i = this.samples.indexOf(sample)
        this.samples.splice(i, 1)
    }
    

}