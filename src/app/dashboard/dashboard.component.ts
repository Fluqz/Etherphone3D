import { Component, AfterViewInit, ElementRef, Input } from '@angular/core';
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin/theremin3D';
import { Note3D } from '../theremin/note3D';
import { Note } from '../theremin/note';
import { Theremin } from '../theremin/theremin';



@Component({
  selector: 'dashboard',
  template: `
    
  <div class="drag-bar">DASHBOARD</div>

  <div class="dashboard-cont">

      <div *ngFor="let note of notes">

          <div *ngIf="isNote(note)" [id]="note.ctrl.id" (click)="selectNote($event, note)" class="dashboard-item" [class.active]="selectedNote == note">
              Note
              <div  class="dashboard-item-inner">{{note.ctrl.id}}</div>
              <div class="btn mute" (click)="toggleMute(note)">M</div>
              <div class="btn delete" (click)="delete(note)">X</div>
              
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

  private _selectedNote: Note3D
  public set selectedNote(val: Note3D) {

    this._selectedNote = val
    ObjectControl.selectedObj = val.obj
  }
  public get selectedNote() {

    if(ObjectControl.selected != null) return ObjectControl.selected 

    return this._selectedNote = null
  }

  public get notes() { return this.theremin3D.notes3D }

  constructor(private hostRef:ElementRef) {

    this.host = this.hostRef.nativeElement
  }

  ngAfterViewInit() {

  }


  public selectNote(e, note: Note3D) {

    this.selectedNote = note
  }

  public toggleMute(note: Note3D) {

    if(note.ctrl.muted) note.ctrl.unmute()
    else note.ctrl.mute()
  }

  public delete(note: Note3D) {

    this.theremin3D.removeNote3D(note)

    this.theremin.deleteNote(note.ctrl)
  }

  public isNote(note: Note3D) { return note instanceof Note3D }
}  