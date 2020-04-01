
import * as THREE from 'three'
import { SceneManager } from '../scene-manager'

export class Label {

    public side: string

    public obj: THREE.Object3D
    public line: THREE.Object3D
    private lineGeo: THREE.BufferGeometry
    private points: THREE.Vector3[] = []

    public start: THREE.Vector3
    public end: THREE.Vector3

    private raycaster: THREE.Raycaster
    private intersects: THREE.Intersection[] 
    private distance: number

    public color: THREE.Color

    public enabled: boolean 

    public direction: THREE.Vector3

    // public radius: number

    constructor(_side: string, _start: THREE.Vector3, _end?: THREE.Vector3) {

        this.side = _side

        this.start = _start

        this.end = _end
        if(_end == undefined) this.end = new THREE.Vector3()

        this.raycaster = new THREE.Raycaster()
        this.raycaster.near = .001
        this.raycaster.far = 1000

        this.direction = new THREE.Vector3()

        this.create()
    }

    private create() {

        this.enabled = true

        this.obj = new THREE.Object3D()
        this.obj.name = 'label.obj'

        this.lineGeo = new THREE.BufferGeometry()

        this.line = new THREE.Line(this.lineGeo, new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: .4
        }))
        this.line.name = 'line.mesh'

        this.obj.add(this.line)

        this.computeDirection()
    }

    private raycastObjs(callback: Function) {

        this.raycaster.set(this.start, this.direction)

        this.intersects = this.raycaster.intersectObjects(SceneManager.environmentObjs, true)

        if(this.intersects.length > 0) {

            this.distance = this.intersects[0].distance

            this.end.copy(this.intersects[0].point)

            callback()
        }
        else this.intersects = null
    }

    private computeDirection() {

        switch(this.side) {

            case 'back':

                return this.direction.set(0, 0, -1)

            break

            case 'right':

                return this.direction.set(1, 0, 0)

            break

            case 'front': 

                return this.direction.set(0, 0, 1)
            break

            case 'left':

                return this.direction.set(-1, 0, 0)
            break
            
            case 'top': 

                return this.direction.set(0, 1, 0)
            break

            case 'bottom':

                return this.direction.set(0, -1, 0)
            break
        }

        return null
    }

    public hide() {

        this.enabled = false



    }

    public show() {

        this.enabled = true
    }

    public update() { 

        this.raycastObjs(()=> {

            this.updateLine([this.start, this.end])
        })
    }

    public updateLine(points: THREE.Vector3[]) {

        this.points = points

        this.lineGeo.setFromPoints(this.points)
    }
}