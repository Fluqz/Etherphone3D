import { AxisBehaviour } from './axis-behaviour';
import { Note } from '../note';
import { SceneManager } from '../scene-manager';
import { Chord } from '../chord';
import { SoundEntity } from '../sound-entity';

export class VolumeShift extends AxisBehaviour {

    

    constructor() {super()}


    public updateNote(entity: SoundEntity, currentTime: number) {

        if(entity instanceof Note) {

            entity.volume.gain.value = entity.position.y / SceneManager.sF
        }
        else if(entity instanceof Chord) {

            entity.volume.gain.value = entity.position.y / SceneManager.sF
        }

        console.log('Volume', entity.volume.gain.value)
    }
}