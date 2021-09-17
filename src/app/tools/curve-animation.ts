import { CatmullRomCurve3, Vector3, Curve, Mesh, Line, BufferGeometry, LineBasicMaterial } from 'three'

import { Note } from '../theremin/note'


export class CurveAnimation {

    private mousedown: boolean = false

    private static enabled: boolean = false

    public static curve: CatmullRomCurve3
    public static obj: Line

    public geometry: BufferGeometry
    public material: LineBasicMaterial

    public points: Vector3[] = []

    public static currentSound: Note

    constructor() {


        this.geometry = new BufferGeometry()
        this.material = new LineBasicMaterial({ color: 0x000000 })

        CurveAnimation.obj = new Line()

        document.addEventListener('mousdown', this.onMouseDown.bind(this))
        document.addEventListener('mousmove', this.onMouseMove.bind(this))
        document.addEventListener('mousup', this.onMouseUp.bind(this))
    }



    public static start() {

        CurveAnimation.enabled = true
    }

    private onMouseDown(e) {

        this.mousedown = true

        if(CurveAnimation.enabled) {

            this.points.push(CurveAnimation.currentSound.position)
        }
    }
    
    private onMouseMove(e) {

        if(this.mousedown && CurveAnimation.enabled) {

            this.points.push(CurveAnimation.currentSound.position)
        }
    }
    
    private onMouseUp(e) {

        this.mousedown = false
        CurveAnimation.enabled = false
        
        if(this.points.length > 0)
            this.drawCurve(this.getCurvePoints())
    }

    private getCurvePoints() {

        CurveAnimation.curve = new CatmullRomCurve3(this.points)

        return CurveAnimation.curve.getPoints(50)
    }

    private drawCurve(points: Vector3[]) {

        this.geometry.setFromPoints(points)

        CurveAnimation.obj.geometry = this.geometry
        CurveAnimation.obj.material = this.material
        CurveAnimation.obj.updateMatrix()

        return CurveAnimation.obj
    }
}