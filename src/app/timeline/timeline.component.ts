import { Component, Input, ElementRef } from '@angular/core'



@Component({
    selector: 'timeline',
    template: `


    `,
    styles: [
  
        `
            
    #timeline-wrapper {

        position: relative;
        width: 80%;
        height: 100%;
        color: #000;
    }

    #timeline-pointer {
        position:absolute;
        top: 0px;
        margin-left: 50px;

        width: 1px;
        height: 100%;
        background-color: #000;
    }

    #timeline {
        position: absolute;
        top: -10px;
        width: calc(100% - 50px);
        height: 10px;
        margin-left: 50px;
        background-color: #FFaa00;
    }


    .beat-marking {
        position: absolute;
        top: 0px;
        width: 1px;
        height: 100%;
        background-color: #000;
    }

    #tracks-wrapper {

        overflow-x: hidden;
        overflow-y: auto;
        max-height: 150px;
        height: 100%;
        width: 100%
    }


        `
    ]
    
  })
  export class TimelineView {

  }