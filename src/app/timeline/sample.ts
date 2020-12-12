import { Sound } from '../theremin/sound-entity'


export class Sample {
 
    private static UID: number = 0

    id: number

    sound: Sound

    scheduleTime: number

    length: number

    constructor() {

        this.id = Sample.UID += 1
    }

}