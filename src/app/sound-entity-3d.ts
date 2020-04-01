import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3 } from 'three'
import { SoundEntity } from './sound-entity'
import { DistanceLabel } from './tools/distance-label'
import { MemoryLabel } from './tools/memory-label'
import { AxesLabel } from './tools/axes-label'

export abstract class SoundEntity3D {

    public abstract ctrl: SoundEntity
    public abstract obj: Mesh

    public abstract distanceLabel: DistanceLabel
    public abstract memoryLabel: MemoryLabel
    public abstract axesLabel: AxesLabel

    public abstract move(moveTo: Vector3, X?: boolean, Y?: boolean, Z?: boolean)
    public abstract select() 
    public abstract unselect() 
    public abstract mouseUp() 
    public abstract unmute() 
    public abstract mute() 
}