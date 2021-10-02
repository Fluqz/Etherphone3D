import { Component, AfterViewInit, Input, ViewChildren, OnDestroy, NgZone } from '@angular/core';
import { Theremin3D } from '../theremin/theremin3D';
import { BeatMachine } from './beat-machine';
import { Sample } from './sample';
import { TrackView } from './track.component';

@Component({
  selector: 'beatmachine', // TIMELINE NEEDS TO HAVE A BEAT MARKING LIKE A TAKT. MAYBE MAKE IT EXPANDABLE BUT BEGIN WITH 4/4 
                        // INSIDE THE TIMELINE ARE ALL THE INSTRUMENTS IN THIS CASE THE SAMPLES WHICH ARE ALL THE NOTES OR CHORDS WITHOUT A PARENT
                        // EACH INSTRUMENT HAS ITS OWN DRAW LINE
  template: `  

      
    <div style="margin: 15px 0px;">

      <div *ngIf="theremin3D" class="btn play" (click)="play()"></div>

      <div *ngIf="theremin3D" class="btn pause" (click)="pause()"></div>

      <input type="number" [value]="bpm" (change)="bpm = $event.target.value" />

      <input type="number" [value]="beats" (change)="beats = $event.target.value" />

      <select name="noteDuration" (change)="noteDuration = $event.target.value">

          <option value="1">1</option>
          <option value="1/2">1/2</option>
          <option value="1/4">1/4</option>
          <option value="1/8">1/8</option>
          <option value="1/16">1/16</option>
          <option value="1/32">1/32</option>
          <option value="1/64">1/64</option>

      </select>

    </div>

    

    <div id="timeline-wrapper">

        <div id="timeline-pointer" [style.left.%]="time"></div>

        <div id="timeline">
            <div *ngFor="let beat of beatsArray" class="beat-marking" [style.left.%]="beat*(100/beats)"></div>
        </div>
        
        <div id="tracks-wrapper">
          <track #tracks *ngFor="let note of notes" [note]="note" [beats]="beats" class="track-timeline" />
        </div>

    </div>


  `,
  styles: [
    `

    :host {
      
      display:block;    
      width: 100%;
      height: auto;
      padding: 20px;
      color: #fefefe;
  
      resize: vertical;
      overflow: auto;
    }


    `
  ],

})
export class BeatMachineView implements AfterViewInit, OnDestroy {

  @Input('theremin3D') theremin3D: Theremin3D
  @ViewChildren('tracks', {read: TrackView}) private tracks: TrackView[]

  public _samples: Sample[] = []

  public time:number

  constructor(private zone: NgZone) {

  }

  ngAfterViewInit() {
    
  }



  private playTO:number
  public play() {

    //Theremin.togglePlay(false)

    this.notes.forEach(note => {

      note.ctrl.stop()
    })
    BeatMachine.stop()

    // this.zone.runOutsideAngular(()=> {

    //   this.playTO = window.setInterval(()=> { this.computeTime() }, 20)
    // })

    BeatMachine.start(this.samples)
  }

  public pause() {

      BeatMachine.stop()

      window.clearInterval(this.playTO)
  }

  // SAMPLE DOESNT KNOW ITS LENGTH OR SCHEDULE TIME ??
  get samples() {

    if(!this.tracks) return

    this._samples = []

    this.tracks.forEach(track => {

        this._samples.push(...track.samples)
    })

    return this._samples
  }

  get notes() {

    return this.theremin3D.notes3D
  }

  public computeTime() {

    this.time = ((BeatMachine.time % (BeatMachine.secondsPerBeat * BeatMachine.beats)) / (BeatMachine.secondsPerBeat * BeatMachine.beats)) * 100
    return this.time
  }

  // public get currentBeat() { return BeatMachine.currentNote }

  public get bpm() { return BeatMachine.bpm }
  public set bpm(bpm: number) {

      BeatMachine.bpm = bpm
  }

  public get beats() { return BeatMachine.beats }
  public set beats(beats: number) { BeatMachine.beats = beats }

  public get beatsArray() { 

      let array:number[] = []

      for(let i = 0; i < BeatMachine.beats; i++) array.push(i)

      return array
  }

  public get noteDuration() { return BeatMachine.noteDuration }
  public set noteDuration(duration:string) {

    switch(duration) {
      case '1':
      case '1/2':
      case '1/4':
      case '1/8':
      case '1/16':
      case '1/32':
      case '1/64':
          BeatMachine.noteDuration = duration
        break
    }
  }

  ngOnDestroy() {

    this.pause()
  }
} 