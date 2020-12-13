import { Component, Input, ElementRef } from '@angular/core'
import { ObjectControl } from '../object-control'
import { Axis } from './axis'
import { Theremin } from './theremin'
import { Theremin3D } from './theremin3D'


@Component({
    selector: 'theremin',
    template: `

        <div class="btn" (click)="reset()">New</div>

        <div class="btn" (click)="addOsc()">Plus</div>

        <!--<label for="x">X</label>
        <select name="x">
            <option *ngFor="let b of behaviours; let i = index" value="i">{{ b.name }}</option>
        </select>
        
        <label for="y">Y</label>
        <select name="y">
            <option *ngFor="let b of behaviours; let i = index" value="i">{{ b.name }}</option>
        </select>
        
        <label for="z">Z</label>
        <select name="z">
            <option *ngFor="let b of behaviours; let i = index" value="i">{{ b.name }}</option>
        </select>-->
        
        <div class="btn b gap-r" (click)="toggleMemoryLabel()">Memory Label</div>
        <div class="btn b gap-r" (click)="toggleDistanceLabel()">Distance Label</div>
        <div class="btn b gap-r" (click)="toggleAxesLabel()">Axes Label</div>

    `,
    styles: [
  
        `
        `
    ]
    
  })
  export class ThereminView {

    @Input('theremin') public theremin: Theremin
    @Input('theremin3D') public theremin3D: Theremin3D

    private host: HTMLElement


    constructor(private hostRef:ElementRef) {

    this.host = this.hostRef.nativeElement

    }

    get behaviours() { return Theremin.axesBehaviours }

    getBehaviourByAxis(axis: Axis) {

    for(let b of Theremin.axesBehaviours) {

        if(b.axis == axis) return b
    }
    }



    ngAfterViewInit() {

    }

    public reset() {

        this.theremin3D.reset()
        this.theremin.reset()
    }
      
    public addOsc(frequency?: number, cb?: Function) {

        let note = this.theremin.addNote(frequency == undefined ? 100 : frequency)
        let note3D = this.theremin3D.addSound3D(note)

        if(cb) cb(note3D)
    }


        
    public toggleAxesLabel() {

        this.theremin3D.sounds3D.forEach(sound => {

            sound.axesLabel.enabled = !sound.axesLabel.enabled
            sound.axesLabel.update()
        })
    }
    
    public toggleMemoryLabel() {

        this.theremin3D.sounds3D.forEach(sound => {

            sound.memoryLabel.enabled = !sound.memoryLabel.enabled
            sound.memoryLabel.update()
        })
    }
    
    public toggleDistanceLabel() {

        this.theremin3D.sounds3D.forEach(sound => {

            sound.distanceLabel.enabled = !sound.distanceLabel.enabled
            sound.distanceLabel.update()
        })
    }
  } 