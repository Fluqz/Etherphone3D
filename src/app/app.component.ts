import { Component, AfterViewInit, OnDestroy } from '@angular/core';

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Theremin } from './theremin/theremin';
import { SceneManager, CameraType } from './scene-manager';
import { Theremin3D } from './theremin/theremin3D';
import { ObjectControl } from './object-control';
import { Sound3D } from './theremin/sound-entity-3d';
import { DragWindow } from './tools/drag-window';

@Component({
  selector: 'app-root',
  template: `

    <div id="webGL"></div>

    <div id="obj-menu" class="drag-window">

        <div class="drag-bar"></div>
        
        <div id="pause-btn" *ngIf="theremin3D" (click)="theremin3D.toggleOnOff()">{{ theremin3D.isPaused ? 'Play' : 'Pause' }}</div>

        <button (click)="setCamera('perspective')">Perspective Camera</button>
        <button (click)="setCamera('orthographic')">Orthographic Camera</button>

        <button (click)="addOsc()">Add Osc</button>

        <button (click)="rotateCamera($event)" axis="z">ROTATE CAM</button>

        <selected-menu *ngIf="objCtrl && theremin3D" [objCtrl]="objCtrl" [theremin3D]="theremin3D"></selected-menu>

    </div>


    <mixer *ngIf="objCtrl && theremin3D" class="drag-window" [objCtrl]="objCtrl" [theremin3D]="theremin3D"></mixer>

    <dashboard *ngIf="objCtrl && theremin3D" class="drag-window" [objCtrl]="objCtrl"></dashboard>

        
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  private container: HTMLElement
  public theremin: Theremin
  public theremin3D: Theremin3D
  public objCtrl: ObjectControl

  private xOffset: number
  private yOffset: number

  private mouseDownEvent: any
  private mouseUpEvent: any
  private mouseMovevent: any

  private mouseDown: boolean = false

  private selected: HTMLElement

  private dragWindow: DragWindow

  constructor() {

    this.dragWindow = new DragWindow()
  }


  ngAfterViewInit() {

    this.container = document.querySelector('#webGL')

    new SceneManager()

    this.container.append(SceneManager.renderer.domElement)

    setTimeout(()=> {

      this.theremin = new Theremin()

      this.theremin3D = new Theremin3D(this.theremin)

      this.objCtrl = new ObjectControl(this.theremin3D)

      this.theremin.toggleOnOff(false)
    })


    this.loop()

    // Channel html element addaevent
    this.mouseDownEvent = this.onMouseDown.bind(this)
    document.addEventListener('mousedown', this.mouseDownEvent, false)

    this.mouseUpEvent = this.onMouseUp.bind(this)
    document.addEventListener('mouseup', this.mouseUpEvent, false)
    
    this.mouseMovevent = this.onMouseMove.bind(this)
    document.addEventListener('mousemove', this.mouseMovevent, false)
  }

  private loop() {

    requestAnimationFrame(this.loop.bind(this))

    SceneManager.update()

  }


  public rotateCamera(e) {

    let axis = e.target.getAttribute('axis')

    if(axis == 'x') axis = 'y'
    else if(axis == 'y') axis = 'z'
    else if(axis == 'z') axis = 'x'

    SceneManager.rotateCamera(axis)

    e.target.setAttribute('axis', axis)
  }

  public setCamera(type:string) {

    if(type == 'orthographic') 
      SceneManager.activeCamera = CameraType.ORTHOGRAPHIC
      
    else if(type == 'perspective') 
      SceneManager.activeCamera = CameraType.PERSPECTIVE

    this.objCtrl.orbitCamera = SceneManager.currentCamera
  }

  public addOsc(frequency?: number) {

    let osc = this.theremin.addNote(frequency == undefined ? 100 : frequency)
    this.theremin3D.addSoungEntity3D(osc)
  }

  public onMouseDown(e) {

    this.mouseDown = true

    this.dragWindow.onMouseDown(e)
    
  }

  public onMouseMove(e) {
    
    this.dragWindow.onMouseMove(e)
  }
  
  public onMouseUp(e) {
    
    this.dragWindow.onMouseUp(e)
  }
}
