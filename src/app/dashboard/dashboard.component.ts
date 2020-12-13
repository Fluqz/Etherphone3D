import { Component, AfterViewInit, ElementRef, Input } from '@angular/core';
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin/theremin3D';
import { Sound3D } from '../theremin/sound-entity-3d';
import { Chord3D } from '../theremin/chord3D';
import { Note3D } from '../theremin/note3D';
import { Sound } from '../theremin/sound-entity';
import { Note } from '../theremin/note';
import { Theremin } from '../theremin/theremin';



@Component({
  selector: 'dashboard',
  template: `
    
  <div class="drag-bar">DASHBOARD</div>

  <div class="dashboard-cont">

      <div *ngFor="let sound of sounds">

          <div *ngIf="isNote(sound)" [id]="sound.ctrl.id" (click)="selectSound($event, sound)" class="dashboard-item" [class.active]="selectedSound == sound">
              Note
              <div  class="dashboard-item-inner">{{sound.ctrl.id}}</div>
              <div class="btn mute" (click)="toggleMute(sound)">M</div>
              <div class="btn delete" (click)="delete(sound)">X</div>
              
          </div>
          
          <div *ngIf="isChord(sound)" [id]="sound.ctrl.id" (click)="selectSound($event, sound)" class="dashboard-item" [class.active]="selectedSound == sound">
              Chord
              <div  class="dashboard-item-inner">{{sound.ctrl.id}}</div>
                          
          </div>

          <div *ngIf="isChord(sound)">

              <div *ngFor="let chordNote of getSoundAsChord(sound).sounds3D"  (click)="selectSound($event, chordNote)" class="dashboard-item" [class.active]="selectedSound == chordNote">
                  Note
                  <div  class="dashboard-item-inner">{{chordNote.ctrl.id}}</div>

              </div>

          </div>

      </div>
      
  </div>
  
  
  `,
  styles: [
      `
      
    :host {

        position: absolute;
        right: 0px;
        top: 0px;
    
        width: 200px;
        color: #fefefe;
    }
      
    .dashboard-cont {

        width: 100%;
        height: auto;

        max-height: 150px;

        overflow-y: auto;

        padding: 5px;
    }

    .dashboard-item {

      width: 100%;
      height: 30px;
    }

    .dashboard-item.active {
      background-color: #3f3f3f;
    }

      ` 
  ]
})
export class Dashboard implements AfterViewInit{

  @Input('theremin') public theremin: Theremin
  @Input('theremin3D') public theremin3D: Theremin3D

  private host: HTMLElement

  private _selectedSound: Sound3D
  public set selectedSound(val: Sound3D) {

    this._selectedSound = val
    ObjectControl.selectedObj = val.obj
  }
  public get selectedSound() {

    if(ObjectControl.selected != null) return ObjectControl.selected 

    return this._selectedSound = null
  }

  public get sounds() { return this.theremin3D.sounds3D }

  constructor(private hostRef:ElementRef) {

    this.host = this.hostRef.nativeElement
  }

  ngAfterViewInit() {

  }


  public selectSound(e, sound: Sound3D) {

    if(sound instanceof Chord3D) {

      let dashItem = document.querySelectorAll('dashboard-item')

      dashItem.forEach(item => {

        if(item.getAttribute('id') == sound.ctrl.id.toString()) {


        }
      })
    }

    this.selectedSound = sound
  }

  public toggleMute(sound: Sound3D) {

    if(sound.ctrl.muted) sound.ctrl.unmute()
    else sound.ctrl.mute()
  }

  public delete(sound: Sound3D) {

    this.theremin3D.removeSound3D(sound)

    this.theremin.deleteNote(sound.ctrl)
  }

  public isNote(sound: Sound3D) { return sound instanceof Note3D }
  public isChord(sound: Sound3D) { return sound instanceof Chord3D }
  public getSoundAsChord(sound: Sound3D) { return sound as Chord3D }
}  