import { Vector3 } from 'three'

export class SnapToGrid {

    public static instance: SnapToGrid

    XUnit: number
    YUnit: number
    ZUnit: number

    // Töne über farben

    constructor(x: number, y: number, z: number) {

        SnapToGrid.instance = this

        this.XUnit = x
        this.YUnit = y
        this.ZUnit = z
    }

    public snapVectorToAxes(vec3: Vector3) {

        let times: number

        times = vec3.x / this.XUnit
        
        vec3.set(times * this.XUnit, vec3.y, vec3.z)

        times = vec3.y / this.YUnit
            
        vec3.set(vec3.x, times * this.YUnit, vec3.z)

        times = vec3.x / this.XUnit
            
        vec3.set(vec3.x, vec3.y, times * this.ZUnit)

        return vec3
    }
}