import { Component, AfterViewInit, OnDestroy, Input, ElementRef } from '@angular/core';

import * as THREE from 'three'
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin/theremin3D';
import { Sample } from './sample';


@Component({
  selector: 'channel',
  template: `
  

  `,
})
export class SampleView implements AfterViewInit{

    // @Input('objCtrl') objCtrl: ObjectControl 
    // @Input('theremin3D') theremin3D: Theremin3D
    @Input('sample') public sample: Sample
  
    private host: HTMLElement

    private onclickEvent: any

    // sample: Sample

    constructor(private hostRef:ElementRef) {

      this.host = this.hostRef.nativeElement
    }

    ngAfterViewInit() {

    }


    public addSample() {

    }

    public removeSample(sample: Sample) {

    }

    
} 