import { Theremin } from './theremin';
import { Object3D, PlaneBufferGeometry, ShaderMaterial, MeshPhongMaterial, Mesh, CircleBufferGeometry } from 'three';
import { SoundEntity3D } from './soundEntity3D';
import { Note3D } from './note3D';
import { Note } from './note';
import { SoundEntity } from './sound-entity';
import { SceneManager } from './scene-manager';
import { Chord3D } from './chord3D';
import { Chord } from './chord';


export class Theremin3D {

    static instance: Theremin3D
    public theremin: Theremin

    public sounds3D: SoundEntity3D[] = []
    public objs: Object3D[] = []

    public obj: Object3D

    public isPaused: boolean = false

    constructor(ctrl: Theremin) {

        Theremin3D.instance = this

        this.theremin = ctrl

        this.obj = new Object3D()
        this.obj.name = 'theremin.3D'

        // let geo = new CircleBufferGeometry(1000, 100)
        // let mat = new MeshPhongMaterial({
        //     color: 0xa3d1c2,
        //     reflectivity: 0
        // })
        // let mesh = new Mesh(geo, mat)
        // mesh.rotateX(-Math.PI / 2)

        // SceneManager.scene.add(mesh)

        ctrl.sounds.forEach((sound, i) => {

            if(sound instanceof Note) {

                let note = sound as Note

                this.sounds3D.push(new Note3D(note))

                this.objs.push(this.sounds3D[i].obj3D)
            }
        })
    }


    public getNoteByObj(obj: Object3D) : SoundEntity3D {
       
        for(let i = 0; i < this.sounds3D.length; i++) {

            if(this.sounds3D[i].obj3D === obj) {

                return this.sounds3D[i]
            }
        }

        return null
    }

    public addSoungEntity3D(soundEntity: SoundEntity) {

        let note = soundEntity as Note

        let note3D = new Note3D(note)

        this.sounds3D.push(note3D)

        this.objs.push(note3D.obj3D)

        return note3D
    }

    public groupNotesToChord(chord: Chord, ses: SoundEntity3D[]) : Chord3D {

        let soundEntity3D: Note3D[] = []
        ses.forEach(se => {

            // let i = this.sounds3D.indexOf(se)

            // if(i >= 0) this.sounds3D.splice(i, 1)
            if(se instanceof Note3D) {

                (se as Note3D).partOfChord = true

                soundEntity3D.push(se)
            }
        })

        let chord3D = new Chord3D(chord, soundEntity3D)

        this.sounds3D.push(chord3D)

        this.objs.push(chord3D.obj3D)

        return chord3D
    }

    public toggleOnOff() {

        this.isPaused = !this.isPaused

        this.theremin.toggleOnOff(this.isPaused)
    }
}