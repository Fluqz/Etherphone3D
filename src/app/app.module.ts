import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { Selected } from './selected-menu/selected.component'
import { TrackView } from './beatmachine/track.component'
import { Dashboard } from './dashboard/dashboard.component'
import { ThereminView } from './theremin/theremin.component'
import { BeatMachineView } from './beatmachine/beat-machine.component'


@NgModule({
  declarations: [
    AppComponent,
    Selected,
    TrackView,
    Dashboard,
    ThereminView,
    BeatMachineView
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
