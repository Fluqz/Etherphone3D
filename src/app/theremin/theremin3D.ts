import { Theremin } from './theremin';
import { Object3D, PlaneBufferGeometry, ShaderMaterial, MeshPhongMaterial, Mesh, CircleBufferGeometry } from 'three';
import { Sound3D } from './sound-entity-3d';
import { Note3D } from './note3D';
import { Note } from './note';
import { Sound } from './sound-entity';
import { SceneManager } from '../scene-manager';
import { Chord3D } from './chord3D';
import { Chord } from './chord';
import { Tools } from '../tools/tools';
import { Grid3D } from '../tools/labels/grid-3d';


export class Theremin3D {

    static instance: Theremin3D
    public theremin: Theremin

    public sounds3D: Sound3D[] = []
    public objs: Object3D[] = []

    public obj: Object3D

    constructor(ctrl: Theremin) {

        Theremin3D.instance = this

        this.theremin = ctrl

        this.obj = new Object3D()
        this.obj.name = 'theremin.3D'


        this.theremin.sounds.forEach(sound => {

            this.addSound3D(sound)
        })
    }


    public update() {

        for(let sound of this.sounds3D) { sound.update()}
    }



    public getNoteByObj(obj: Object3D) : Sound3D {
       
        for(let i = 0; i < this.sounds3D.length; i++) {

            if(this.sounds3D[i].obj === obj) {

                return this.sounds3D[i]
            }
        }

        return null
    }

    public getNoteByID(id: number) : Sound3D {
       
        for(let i = 0; i < this.sounds3D.length; i++) {

            if(this.sounds3D[i].ctrl.id === id) {

                return this.sounds3D[i]
            }
        }

        return null
    }

    public addSound3D(Sound: Sound) : Note3D {

        let note = Sound as Note

        let note3D = new Note3D(note)

        this.sounds3D.push(note3D)

        this.objs.push(note3D.obj)

        SceneManager.scene.add(note3D.obj)

        return note3D
    }

    public removeSound3D(sound: Sound3D) : boolean {

        if(!sound) return false

        let i = this.sounds3D.indexOf(sound)

        if(i != -1) {

            this.sounds3D.splice(i, 1)
            SceneManager.scene.remove(sound.obj)
            sound.destroy()
            return true
        }

        return false
    }

    public groupNotesToChord(chord: Chord, _ses: Sound3D[]) : Chord3D {

        let chord3D = new Chord3D(chord, _ses)

        this.sounds3D.push(chord3D)

        this.objs.push(chord3D.obj)

        return chord3D
    }

    public ungroupNotes(_ses: Sound3D[], chord: Chord3D) {

        _ses.forEach(se => {

            if(se instanceof Note3D) {

                let note = (se as Note3D)

                if((note.ctrl as Note).parent) {

                    chord.removeNote(note)
                }
            }
        })
    }

    public reset() {

        let sounds: Sound3D[] = []
        this.sounds3D.forEach(sound => { sounds.push(sound)})
        sounds.forEach(sound => {
            this.removeSound3D(sound)
        })
    }
}
