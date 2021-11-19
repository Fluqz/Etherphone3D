import *  as THREE from 'three'

import { SceneManager } from '../../scene-manager'
import { Chord3D } from '../../theremin/chord3D'


export class GroupLabel {

    private chord: Chord3D

    public obj: THREE.Object3D
    public sphere: THREE.Mesh
    public lines: THREE.Line[] = []

    private _enabled: boolean = false


    constructor(_chord: Chord3D) {

        this.chord = _chord


        this.createLabel()
    }



    public get enabled() { return this._enabled }
    public set enabled(val: boolean) {

        this._enabled = val

        this.obj.visible = val

        this.update()
    }



    public update() {

        if(!this._enabled) return

        this.updateSphere()

        this.updateLines()
    }

    private updateSphere() {

        this.sphere.position.copy(this.chord.ctrl.position)
    }

    private updateLines() {

        this.chord.sounds3D.forEach((note, index) => {

            this.lines[index].geometry.setFromPoints([note.ctrl.position, this.chord.ctrl.position])
        })
    }

    private createLabel() {

        this.obj = new THREE.Object3D()
        this.obj.name = 'memorylabel.obj'
        this.obj.visible = this._enabled
        this.obj.matrixAutoUpdate = false

        this.sphere = new THREE.Mesh(
            new THREE.SphereBufferGeometry(.5, 20, 20), 
            new THREE.MeshBasicMaterial({ color : 0xFFFFFF })
        )
        this.sphere.matrixAutoUpdate = false
        this.obj.add(this.sphere)

        let geo = new THREE.BufferGeometry()
        let mat = new THREE.LineBasicMaterial()
        
        let line: THREE.Line

        this.chord.sounds3D.forEach(note => {
                
            line = new THREE.Line(geo.clone(), mat) 
            line.matrixAutoUpdate = false
            line.name = 'group.line'

            this.obj.add(line)

            this.lines.push(line)
        })

        SceneManager.scene.add(this.obj)
    }
}