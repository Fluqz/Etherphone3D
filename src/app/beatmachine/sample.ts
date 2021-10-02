import { Note } from "./../theremin/note";
import { Tools } from "../tools/tools";

export class Sample {
 
    id: number

    note: Note

    scheduleTime: number

    length: number

    constructor(note?: Note) {

        this.id = Tools.getUniqueID()

        this.note = note

    }


    serializeIn(o: {}) {

        if(o['note']) {
            this.note = new Note()
            this.note.serializeIn(o['note'])
        }
        
        if(o['scheduleTime']) this.scheduleTime = o['scheduleTime']
        if(o['length']) this.length = o['length']
    }

    serializeOut() {

        return {
            note: this.note.serializeOut(),
            scheduleTime: this.scheduleTime,
            length: this.length
        }
    }
}