import { AxisBehaviour } from './axis-behaviour';
import { Note } from '../note';
import { SceneManager } from '../scene-manager';
import { Chord } from '../chord';

export class VolumeShift extends AxisBehaviour {

    

    constructor() {super()}


    public updateNote(note: Note, currentTime: number) {

        note.volume.gain.value = note.position.y / SceneManager.sF

        // note.osc.frequency.setValueAtTime(note.frequency, currentTime)

        console.log('Volume', note.volume.gain.value)
    }
}