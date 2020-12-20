import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3, Object3D } from 'three'
import { Sound } from './sound-entity'
import { DistanceLabel } from '../tools/labels/distance-label'
import { MemoryLabel } from '../tools/labels/memory-label'
import { AxesLabel } from '../tools/labels/axes-label'

export abstract class Sound3D {

    public abstract ctrl: Sound
    public abstract obj: Object3D

    public abstract distanceLabel: DistanceLabel
    public abstract memoryLabel: MemoryLabel
    public abstract axesLabel: AxesLabel

    public abstract update() 
    public abstract move(moveTo: Vector3, X?: boolean, Y?: boolean, Z?: boolean)
    public abstract select() 
    public abstract unselect() 
    public abstract play(length?: number)
    public abstract mouseUp() 
    public abstract unmute() 
    public abstract mute() 
    public abstract destroy() 
}