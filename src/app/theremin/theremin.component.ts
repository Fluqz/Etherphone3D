import { Component, Input, ElementRef } from '@angular/core'
import { AxesBehaviour } from '../axes-behaviours/axes-behaviour'
import { ObjectControl } from '../object-control'
import { Axis } from './axis'
import { Theremin } from './theremin'
import { Theremin3D } from './theremin3D'


@Component({
    selector: 'theremin',
    template: `

        <div class="btn" (click)="reset()">New</div>

        <div class="btn" (click)="addOsc()">Plus</div>


          
  

        <div id="axes-menu">

            <div class="axes-item">
            
                <label for="x">X</label>
                <select name="x">
                    <option *ngFor="let b of axesBehaviours; let i = index" value="i" (change)="setAxisbehaviour('x', $event.target.value)">{{ b.name }}</option>
                </select>

            </div>
            
            <div class="axes-item">

                <label for="y">Y</label>
                <select name="y">
                    <option *ngFor="let b of axesBehaviours; let i = index" value="i" (change)="setAxisbehaviour('y', $event.target.value)">{{ b.name }}</option>
                </select>
                
            </div>

            <div class="axes-item">

                <label for="z">Z</label>
                <select name="z">
                    <option *ngFor="let b of axesBehaviours; let i = index" value="i" (change)="setAxisbehaviour('z', $event.target.value)">{{ b.name }}</option>
                </select>
            
            </div>

        </div>
        
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

    get axesBehaviours() {

        return Theremin.axesBehaviours
    }

    ngAfterViewInit() {}

    public reset() {

        this.theremin3D.reset()
        this.theremin.reset()
    }
      
    public addOsc(frequency?: number, cb?: Function) {

        let note = this.theremin.addNote(frequency == undefined ? 100 : frequency)
        let note3D = this.theremin3D.addNote3D(note)

        if(cb) cb(note3D)
    }


    public setAxisbehaviour(a: string, b: AxesBehaviour) {

        console.log(b)
        this.theremin.setAxisbehaviour(a, b)
    }
        
    public toggleAxesLabel() {

        this.theremin3D.notes3D.forEach(note => {

            note.axesLabel.enabled = !note.axesLabel.enabled
            note.axesLabel.update()
        })
    }
    
    public toggleMemoryLabel() {

        this.theremin3D.notes3D.forEach(note => {

            note.memoryLabel.enabled = !note.memoryLabel.enabled
            note.memoryLabel.update()
        })
    }
    
    public toggleDistanceLabel() {

        this.theremin3D.notes3D.forEach(note => {

            note.distanceLabel.enabled = !note.distanceLabel.enabled
            note.distanceLabel.update()
        })
    }
  } 