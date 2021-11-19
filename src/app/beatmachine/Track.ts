// import { Component, AfterViewInit, OnDestroy, Input, ElementRef, ChangeDetectorRef } from '@angular/core';

// import * as THREE from 'three'
// import { ObjectControl } from '../object-control';
// import { Theremin3D } from '../theremin/theremin3D';
// import { Sample } from './sample';
// import { BeatMachine } from './beat-machine';
// import { Note3D } from '../theremin/note3D';
// import { Tools } from '../tools/tools';

// export class Track {

//   @Input('note') public note: Note3D

//   @Input('beats') public beats: number

//   // public set samples(val: Sample[]) {}
//   // public activeSample: Sample

//   public samples: Sample[] = []

//   private selectedSample: Sample

//   private host: HTMLElement

//   private doubleClickEvent: any
//   private clickEvent: any



//   constructor(private hostRef:ElementRef, cdr: ChangeDetectorRef) {

//     this.host = this.hostRef.nativeElement

//   }

//   get color() {

//     return '#' + this.note.ctrl.color.getHexString()
//   }

//   ngAfterViewInit() {


//     console.log('track note', this.note)

//     this.doubleClickEvent = this.onDoubleClick.bind(this)
//     this.host.addEventListener('dblclick', this.doubleClickEvent, false)

//     this.clickEvent = this.onClick.bind(this)
//     this.host.addEventListener('click', this.clickEvent, false)
//   }


//   public createSample(length: number, scheduleTime: number) {

//     let sample = new Sample(this.note.ctrl)
//     sample.scheduleTime = scheduleTime
//     sample.length = 1

//     console.log('sample', sample)
//     this.samples.push(sample)

//     BeatMachine.add(sample)

//     return sample
//   }
  

//   public removeSample(sample: Sample) {

//     BeatMachine.remove(sample)

//     let i = this.samples.indexOf(sample)
//     return this.samples.splice(i, 1)
//   }

  
//   private onDoubleClick(e) {

//     // Remove Sample on dblclick directly on sample
//     if(e.target.classList.contains('sample')) {

//       let id = e.target.getAttribute('id')

//       this.samples.forEach(sample => {

//         if(id == sample.id) 
//           this.removeSample(sample)

//       })
      
//     }
//     else if(e.target.classList.contains('creation-click-zone')) { // Create sample

//       let rect = e.target.getBoundingClientRect()

//       // Cutting to beat begin
//       let x = e.clientX - rect.left
//       let scheduleTime = (x / e.target.clientWidth) * 100
//       scheduleTime /= 100 / this.beats
//       scheduleTime = Math.trunc(scheduleTime)

//       this.createSample(BeatMachine.nextNoteTime, scheduleTime)
//     }
//   }

//   private onClick(e) {

//     ObjectControl.selectedObj = this.note.obj
//   }


//   private dragStartX:number
//   public sampleMouseDown(e, sample: Sample) {
    
//     let ele: HTMLElement = e.target

//     let sampleEle = ele.closest('.sample')
//   }
  
//   public sampleMouseUp(e, sample: Sample) {
    
//   }
  
//   public sampleMouseMove(e, sample: Sample) {
    
//   }
// } 