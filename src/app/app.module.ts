import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { Selected } from './selected-menu/selected.component'
import { ChannelMenu } from './channel-menu/channel.component'


@NgModule({
  declarations: [
    AppComponent,
    Selected,
    ChannelMenu
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
