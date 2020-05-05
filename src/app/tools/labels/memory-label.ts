import *  as THREE from 'three'

import { Sound3D } from '../../theremin/sound-entity-3d'
import { Label } from './label'
import { SceneManager } from '../../scene-manager'


export class MemoryLabel {

    private SE: Sound3D

    private storedStart: THREE.Vector3

    private start: THREE.Vector3
    private end: THREE.Vector3

    public obj: THREE.Object3D


    public line: THREE.Line
    private lineGeo: THREE.BufferGeometry
    public sphere: THREE.Mesh

    private _enabled: boolean = false


    constructor(_SE: Sound3D) {

        this.SE = _SE

        this.storedStart = new THREE.Vector3()
        this.start = new THREE.Vector3()
        this.end = new THREE.Vector3()

        this.createLabel()
    }



    public get enabled() { return this._enabled }
    public set enabled(val: boolean) {

        this._enabled = val

        this.obj.visible = val

        this.start.copy(this.SE.ctrl.position)
        this.storedStart.copy(this.SE.ctrl.position)

        this.update()
    }



    public update() {

        if(!this._enabled) return

        this.sphere.position.copy(this.storedStart)

        this.end.copy(this.SE.ctrl.position)

        this.lineGeo.setFromPoints([this.storedStart, this.end])
    }

    public showHideLabel(side: string, show: boolean) {

    }

    private createLabel() {

        this.obj = new THREE.Object3D()
        this.obj.name = 'memorylabel.obj'
        this.obj.visible = this._enabled

        this.lineGeo = new THREE.BufferGeometry()
        this.line = new THREE.Line(this.lineGeo, new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: .2 })) 
        this.line.name = 'line.obj'

        this.obj.add(this.line)

        this.sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(.1), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: .2 }))
        this.sphere.name = 'sphere.obj'
        this.sphere.position.copy(this.start)
        
        this.obj.add(this.sphere)

        SceneManager.scene.add(this.obj)

        console.log(SceneManager.scene)
    }




    private onMouseDown(e) {
        
        
    }

    private onMouseUp(e) {

    }
    
    private onMouseMove(e) {
        
    }
}