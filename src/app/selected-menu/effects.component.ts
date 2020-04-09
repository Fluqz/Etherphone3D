import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';

import * as THREE from 'three'
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin/theremin3D';


@Component({
  selector: 'effects-menu',
  template: `
  
  
  
  
  `,
  styles: [

  ]
})
export class Effects implements AfterViewInit {

    @Input('objCtrl') objCtrl: ObjectControl
    @Input('theremin3D') theremin3D: Theremin3D

    ngAfterViewInit() {


    }

}