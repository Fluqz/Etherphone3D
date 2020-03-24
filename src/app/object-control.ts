import { Raycaster, Vector3, Object3D, Plane, Ray, Intersection, MOUSE } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { SceneManager } from './scene-manager'
import { Theremin } from './theremin'
import { Theremin3D } from './theremin3D'
import { SoundEntity3D } from './sound-entity-3d'
import { Note } from './note'

export class ObjectControl {

    private mouseDown: boolean
    private mouse: Vector3

    private orbit: OrbitControls

    private raycaster: Raycaster

    private XKey: boolean
    private YKey: boolean
    private ZKey: boolean

    private plane: Plane

    public selectedObjs: Object3D[] = []
    public selected: SoundEntity3D

    private ip: Vector3
    private offset: Vector3
    private moveTo: Vector3

    private theremin3D: Theremin3D
    
    constructor(_theremin3D: Theremin3D) {

        this.theremin3D = _theremin3D

        this.mouseDown = false
        this.mouse = new Vector3()
        this.ip = new Vector3()
        this.offset = new Vector3()
        this.moveTo = new Vector3()
        this.raycaster = new Raycaster()
        
        this.plane = new Plane(new Vector3(0, 1, 0), 0)

        this.orbit = new OrbitControls(SceneManager.camera, SceneManager.renderer.domElement)


        SceneManager.renderer.domElement.addEventListener('mousedown', this.onMouseDown.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('mouseup', this.onMouseUp.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this), false)
        
        SceneManager.renderer.domElement.addEventListener('keyup', this.onKeyUp.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('keydown', this.onKeyDown.bind(this), false)
    }



    // EVENTS
    public onMouseDown(event) {
        // console.log(event)
        this.mouseDown = true

        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        
        let vector = new Vector3(this.mouse.x, this.mouse.y, .5)
        vector.unproject(SceneManager.camera)

        this.raycaster.setFromCamera(this.mouse, SceneManager.camera)

        let intersects = this.raycaster.intersectObjects(this.theremin3D.objs, true)

        if(intersects.length > 0) {

            this.orbit.enabled = false

            if(intersects[0].object && (intersects[0].object.name == 'osc.3D' || intersects[0].object.name == 'chord.3D' )) {

                if(!event.shiftKey) {

                    this.selectedObjs = []
                    this.selectedObjs.push(intersects[0].object)
                    console.log(intersects[0].object,this.theremin3D.getNoteByObj(intersects[0].object))
                    this.selected = this.theremin3D.getNoteByObj(intersects[0].object)

                    // console.log('no shift', this.selected)
                    if(this.selected) {
                        this.plane.setFromNormalAndCoplanarPoint(SceneManager.camera.getWorldDirection(this.plane.normal) , intersects[0].object.position)

                        this.raycaster.ray.intersectPlane(this.plane, this.ip)

                        this.offset.copy(this.ip.sub(intersects[0].object.position))
                        // init move so its not at (0, 0, 0)
                        this.moveTo.copy(intersects[0].object.position)
                    }
                    else {
                        this.selected = null
                        this.selectedObjs = []
                    }
                
                }
                else if(!this.selectedObjs.includes(intersects[0].object)) {
                    this.selectedObjs.push(intersects[0].object)

                    this.selected = this.theremin3D.getNoteByObj(intersects[0].object)
                    // console.log('shift', this.selectedObjs, this.selected)

                }
            }
            else {
                this.selectedObjs = []
                this.selected = null
            }
        }
        else {
            this.selectedObjs = []
            this.selected = null
        }

        // SceneSetup.instance.onMouseDown(event)
        console.log('CURRENTLY SELECTED: ', this.selectedObjs, '  Main: ', this.selected)
    }

    public onMouseUp(event) {
        
        this.mouseDown = false

        this.orbit.enabled = true

        if(!event.shiftKey) {

            // this.selected = null
            // this.selectedObjs = []
        }

        // SceneSetup.instance.onMouseUp(event)
        
    }

    public onMouseMove(event) {
        // event.preventDefault()

        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

        this.raycaster.setFromCamera(this.mouse, SceneManager.camera)

        if(this.mouseDown) {
            
            // When selected calc position
            if (this.selectedObjs.length == 1 && this.selected) {

                this.raycaster.ray.intersectPlane(this.plane, this.ip)

                this.moveTo.copy(this.ip.sub(this.offset))

                // Move SELECTED
                this.selected.move(this.moveTo, !this.XKey, !this.YKey, !this.ZKey)
                // this.selectedObjs.position.copy(this.moveTo)
                this.theremin3D.theremin.updateNote(this.selected.ctrl)

            }
        }
        else {
            // HOVER OBJ
            let intersects = this.raycaster.intersectObjects(this.theremin3D.objs, true)
    
            if(intersects.length > 0) {

            }
        }
    }


    public onKeyDown(e) {

        console.log(e)

        const key = e.key.toLowerCase()
        
        if(key == 'x') {

            this.XKey = true
        }
        else if(key == 'y') {
            
            this.YKey = true
        }
        else if(key == 'z') {

            this.ZKey = true
        }

    }

    public onKeyUp(e) {



    }
}