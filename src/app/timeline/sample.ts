import { Sound } from '../theremin/sound-entity'


export class Sample {
 
    id: number

    sound: Sound

    scheduleTime: number

    length: number

    constructor() {

        this.id = Math.random() * 100 + new Date().getTime()
    }

}