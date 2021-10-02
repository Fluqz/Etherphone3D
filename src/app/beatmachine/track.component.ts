import { Component, AfterViewInit, OnDestroy, Input, ElementRef, ChangeDetectorRef } from '@angular/core';

import * as THREE from 'three'
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin/theremin3D';
import { Sample } from './sample';
import { BeatMachine } from './beat-machine';
import { Note3D } from '../theremin/note3D';
import { Tools } from '../tools/tools';

@Component({
  selector: 'track',
  template: `
  
    <div class="note-title" [style.backgroundColor]="color">{{ note.ctrl.type }}</div>

    <div class="creation-click-zone">

        <div *ngFor="let sample of samples" 
          class="sample" 
          data-id="{{sample.id}}" 
          [style.background-color]="color" 
          [style.left.%]="sample.scheduleTime * (100/beats)" 
          [style.width.%]="100 / beats">

            <div class="sample-start" (mousedown)="sampleMouseDown($event, sample)" (mousemove)="sampleMouseMove($event, sample)" (mouseup)="sampleMouseUp($event, sample)"></div>
            <div class="sample-end" (mousedown)="sampleMouseDown($event, sample)" (mousemove)="sampleMouseMove($event, sample)" (mouseup)="sampleMouseUp($event, sample)"></div>

        </div>

    </div>


  `,
  styles: [

      `
      
    :host {

      display:block;
      width: 100%;
      height: 20px;
      line-height: 20px;
      background-color: #ddd;
      color: #000;
      border-bottom: 1px solid #FFaa00;
      padding: 0px;
      margin: 0px;
    }
    :host:last-child() {
        border-bottom: none;
    }

    .note-title {
        display: inline-block;
        width: 50px;
        height: 100%;
        line-height: inherit;
        padding: 0px 3px;
        border-right: 1px solid #3f3f3f;
        vertical-align: top;
    }

    .creation-click-zone {
      position: relative;
      display: inline-block;

      width: calc(100% - 50px);
      height: 100%;
      vertical-align: top;

    }

    .sample {
      position: absolute;
      top: 10%;
      left: 0px;

      width: 10px;
      height: 80%;
      background-color: #00DDAA;
      
    }

    .sample-start,
    .sample-end {
      position:absolute;
      top:0px;
      width: 4px;
      height:100%;
      display: inline-block;
      cursor: col-resize;
    }
    .sample-start{
      left: 0px;
    }
    .sample-end {
      right: 0px;
    }
    .sample-start:hover,
    .sample-end:hover {
      background-color:#458459;
    }
      `
  ]
  
})
export class TrackView implements AfterViewInit{

  // @Input('objCtrl') objCtrl: ObjectControl 
  // @Input('theremin3D') theremin3D: Theremin3D
  @Input('note') public note: Note3D

  @Input('beats') public beats: number

  // public set samples(val: Sample[]) {}
  // public activeSample: Sample

  public samples: Sample[] = []

  private selectedSample: Sample

  private host: HTMLElement

  private doubleClickEvent: any
  private clickEvent: any



  constructor(private hostRef:ElementRef, cdr: ChangeDetectorRef) {

    this.host = this.hostRef.nativeElement

  }

  get color() {

    return '#' + this.note.ctrl.color.getHexString()
  }

  ngAfterViewInit() {


    console.log('track note', this.note)

    this.doubleClickEvent = this.onDoubleClick.bind(this)
    this.host.addEventListener('dblclick', this.doubleClickEvent, false)

    this.clickEvent = this.onClick.bind(this)
    this.host.addEventListener('click', this.clickEvent, false)
  }


  public createSample(length: number, scheduleTime: number) {

    let sample = new Sample(this.note.ctrl)
    sample.scheduleTime = scheduleTime
    sample.length = 1

    console.log('sample', sample)
    this.samples.push(sample)

    BeatMachine.add(sample)

    return sample
  }
  

  public removeSample(sample: Sample) {

    BeatMachine.remove(sample)

    let i = this.samples.indexOf(sample)
    return this.samples.splice(i, 1)
  }

  
  private onDoubleClick(e) {

    // Remove Sample on dblclick directly on sample
    if(e.target.classList.contains('sample')) {

      let id = e.target.getAttribute('id')

      this.samples.forEach(sample => {

        if(id == sample.id) 
          this.removeSample(sample)

      })
      
    }
    else if(e.target.classList.contains('creation-click-zone')) { // Create sample

      let rect = e.target.getBoundingClientRect()

      // Cutting to beat begin
      let x = e.clientX - rect.left
      let scheduleTime = (x / e.target.clientWidth) * 100
      scheduleTime /= 100 / this.beats
      scheduleTime = Math.trunc(scheduleTime)

      this.createSample(BeatMachine.nextNoteTime, scheduleTime)
    }
  }

  private onClick(e) {

    ObjectControl.selectedObj = this.note.obj
  }


  private dragStartX:number
  public sampleMouseDown(e, sample: Sample) {
    
    let ele: HTMLElement = e.target

    let sampleEle = ele.closest('.sample')
  }
  
  public sampleMouseUp(e, sample: Sample) {
    
  }
  
  public sampleMouseMove(e, sample: Sample) {
    
  }
} 