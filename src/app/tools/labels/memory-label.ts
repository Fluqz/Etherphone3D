import *  as THREE from 'three'

import { SceneManager } from '../../scene-manager'
import { Color } from 'src/app/color'
import { Note3D } from 'src/app/theremin/note3D'


export class MemoryLabel {

    private note: Note3D

    private storedStart: THREE.Vector3

    private start: THREE.Vector3
    private end: THREE.Vector3

    private obj: THREE.Object3D


    private line: THREE.Line
    private lineGeo: THREE.BufferGeometry
    private sphere: THREE.Mesh

    private _enabled: boolean = false


    constructor(note: Note3D) {

        this.note = note

        this.storedStart = new THREE.Vector3()
        this.start = new THREE.Vector3()
        this.end = new THREE.Vector3()

        this.createLabel()
    }

    

    public get enabled() { return this._enabled }
    public set enabled(val: boolean) {

        this._enabled = val

        this.obj.visible = val

        if(val) {

            this.start.copy(this.note.ctrl.position)
            this.storedStart.copy(this.note.ctrl.position)
        }

        this.update()
    }



    public update() {

        if(!this._enabled) return

        this.sphere.position.copy(this.storedStart)
        this.sphere.updateMatrix()

        this.end.copy(this.note.ctrl.position)

        this.lineGeo.setFromPoints([this.storedStart, this.end])
        this.line.updateMatrix()
    }

    public showHideLabel(side: string, show: boolean) {

    }

    private createLabel() {

        this.obj = new THREE.Object3D()
        this.obj.name = 'memorylabel.obj'
        this.obj.visible = this._enabled
        this.obj.matrixAutoUpdate = false

        this.lineGeo = new THREE.BufferGeometry()
        this.line = new THREE.Line(this.lineGeo, new THREE.LineBasicMaterial({ color: Color.X, transparent: true, opacity: .2 })) 
        this.line.matrixAutoUpdate = false
        this.line.name = 'line.obj'

        this.obj.add(this.line)

        this.sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(.1), new THREE.MeshBasicMaterial({ color: Color.X, transparent: true, opacity: .2 }))
        this.sphere.name = 'sphere.obj'
        this.sphere.matrixAutoUpdate = false
        this.sphere.position.copy(this.start)
        
        this.obj.add(this.sphere)

        SceneManager.scene.add(this.obj)
    }

    public reset() {

        this.start.copy(this.note.ctrl.position)
        this.storedStart.copy(this.note.ctrl.position)
    }
}