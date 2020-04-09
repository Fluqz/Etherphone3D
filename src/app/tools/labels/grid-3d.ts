import { Line, Geometry, LineBasicMaterial, Vector3 } from 'three'
import { SceneManager } from '../../scene-manager'


export class GridLine {

    public id: string // x|y|z

    public obj: Line
    public geometry: Geometry
    public material: LineBasicMaterial


    constructor(p1: Vector3, p2: Vector3, _id: string) {
        
        this.id = _id

        this.geometry = new Geometry().setFromPoints([p1, p2])
        this.material = new LineBasicMaterial({ color: 0x000000, transparent: true, opacity: .3 })

        this.obj = new Line(this.geometry, this.material)
        this.obj.name = this.id
    }

    activate() {

        this.material.linewidth = 5
    }

    deactivate() {

        this.material.linewidth = 1
    }
}

export class Grid3D {

    private static _instance: Grid3D

    private xLines: GridLine[] = []
    private yLines: GridLine[] = []
    private zLines: GridLine[] = []

    public maxX:number
    public negX:number
    public stepsX:number
    public maxY:number
    public negY:number
    public stepsY:number
    public maxZ:number
    public negZ:number
    public stepsZ:number

    constructor(maxX?:number, stepsX?:number, maxY?:number, stepsY?:number, maxZ?:number, stepsZ?:number) {

        Grid3D._instance = this

        this.maxX = maxX
        if(maxX == undefined) this.maxX = 200
        this.negX = -this.maxX
        
        this.stepsX = stepsX
        if(stepsX == undefined) this.stepsX = 10
        
        this.maxY = maxY
        if(maxY == undefined) this.maxY = 200
        this.negY = -this.maxY
        
        this.stepsY = stepsY
        if(stepsY == undefined) this.stepsY = 10
        
        this.maxZ = maxZ
        if(maxZ == undefined) this.maxZ = 200
        this.negZ = -this.maxZ
        
        this.stepsZ = stepsZ
        if(stepsZ == undefined) this.stepsZ = 10

        this.create()
    }

    public static instance() {

        if(Grid3D._instance == null) Grid3D._instance = new Grid3D() 

        return Grid3D._instance
    }


    private create() {

        this.createXLines()
        this.createYLines()
        this.createZLines()
    }

    private createZLines() {
        
        let id:string
        let line: GridLine
        let p1: Vector3 = new Vector3()
        let p2: Vector3 = new Vector3()

        for(let x = this.negX; x <= this.maxX; x+=this.stepsX) {

            for(let y = this.negY; y <= this.maxY; y+=this.stepsY) {

                p1.set(x, y, this.negZ)
                p2.set(x, y, this.maxZ)

                id = x + '|' + y + '|z|'

                line = new GridLine(p1, p2, id)

                this.yLines.push(line)

                SceneManager.scene.add(line.obj)
            }
        }
    }

    private createXLines() {
        
        let id:string
        let line: GridLine
        let p1: Vector3 = new Vector3()
        let p2: Vector3 = new Vector3()

        for(let y = this.negY; y <= this.maxY; y+=this.stepsY) {

            for(let z = this.negZ; z <= this.maxZ; z+=this.stepsZ) {

                p1.set(this.negX, y, z)
                p2.set(this.maxX, y, z)

                id = 'x|' + y + '|' + z + '|'

                line = new GridLine(p1, p2, id)

                this.yLines.push(line)

                SceneManager.scene.add(line.obj)
            }
        }
    }

    private createYLines() {
        
        let id:string
        let line: GridLine
        let p1: Vector3 = new Vector3()
        let p2: Vector3 = new Vector3()

        for(let x = this.negX; x <= this.maxX; x+=this.stepsX) {

            for(let z = this.negZ; z <= this.maxZ; z+=this.stepsZ) {

                p1.set(x, this.negY, z)
                p2.set(x, this.maxY, z)

                id = x + '|y|' + z + '|'

                line = new GridLine(p1, p2, id)

                this.yLines.push(line)

                SceneManager.scene.add(line.obj)
            }
        }
    }
}