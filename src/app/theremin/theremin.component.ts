import { Component, Input, ElementRef } from '@angular/core'
import { ObjectControl } from '../object-control'
import { Theremin } from './theremin'
import { Theremin3D } from './theremin3D'


@Component({
    selector: 'theremin',
    template: `
    
    Theremin

        <button (click)="addOsc()">Add Osc</button>

        <label for="x">X</label>
        <select name="x">
            <option value=""></option>
        </select>
        
        <label for="y">Y</label>
        <select name="y">
            <option value=""></option>
        </select>
        
        <label for="z">Z</label>
        <select name="z">
            <option value=""></option>
        </select>
        
        <button (click)="toggleMemoryLabel()">Memory Label</button>
        <button (click)="toggleDistanceLabel()">Distance Label</button>
        <button (click)="toggleAxesLabel()">Axes Label</button>

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
  
      ngAfterViewInit() {
  
      }


      
    public addOsc(frequency?: number, cb?: Function) {

        let note = this.theremin.addNote(frequency == undefined ? 100 : frequency)
        let note3D = this.theremin3D.addSoundEntity3D(note)

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