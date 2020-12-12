import { Component, AfterViewInit, OnDestroy } from '@angular/core';

import { Theremin } from './theremin/theremin';
import { SceneManager, CameraType } from './scene-manager';
import { Theremin3D } from './theremin/theremin3D';
import { ObjectControl } from './object-control';
import { DragWindow } from './tools/drag-window';


@Component({
  selector: 'app-root',
  template: `

    <div id="webGL"></div>

    <div id="obj-menu" class="drag-window">

        <div class="drag-bar"></div>

        <theremin *ngIf="theremin && theremin3D" [theremin]="theremin" [theremin3D]="theremin3D"></theremin>

        <selected-menu *ngIf="theremin3D" [theremin3D]="theremin3D"></selected-menu>

        <timeline *ngIf="theremin3D" class="drag-window" [theremin3D]="theremin3D"></timeline>

    </div>


    <!--<mixer *ngIf="theremin3D" class="drag-window" [theremin3D]="theremin3D"></mixer>-->

    <dashboard *ngIf="theremin3D" class="drag-window"></dashboard>

        
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  private container: HTMLElement

  public theremin: Theremin
  public theremin3D: Theremin3D
  public objCtrl: ObjectControl
  public sm: SceneManager

  private mouseDownEvent: any
  private mouseUpEvent: any
  private mouseMovevent: any

  private dragWindow: DragWindow

  constructor() {

    this.dragWindow = new DragWindow()
  }


  ngAfterViewInit() {

    this.container = document.querySelector('#webGL')

    this.sm = new SceneManager(this.container)

    window.setTimeout(()=>{

      this.theremin = new Theremin()

      this.theremin3D = new Theremin3D(this.theremin)

      this.objCtrl = new ObjectControl(this.theremin3D)


      this.theremin.toggleOnOff(false)


      this.loop()
    })

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

    this.sm.update()
  }


  public rotateCamera(e) {

    let axis = e.target.getAttribute('axis')

    if(axis == 'x') axis = 'y'
    else if(axis == 'y') axis = 'z'
    else if(axis == 'z') axis = 'x'

    this.rotateCamera(axis)

    e.target.setAttribute('axis', axis)
  }

  public setCamera(type:string) {

    if(type == 'orthographic') 
      SceneManager.activeCamera = CameraType.ORTHOGRAPHIC
      
    else if(type == 'perspective') 
      SceneManager.activeCamera = CameraType.PERSPECTIVE

    SceneManager.orbitCamera = SceneManager.currentCamera
  }

  public onMouseDown(e) {

    this.dragWindow.onMouseDown(e)
    
  }

  public onMouseMove(e) {
    
    this.dragWindow.onMouseMove(e)
  }
  
  public onMouseUp(e) {
    
    this.dragWindow.onMouseUp(e)
  }
}
