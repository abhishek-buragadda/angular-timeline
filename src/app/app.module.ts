import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CardComponent } from './card/card.component';
import { TimelineContentComponent } from './timeline/timeline-content/timeline-content.component';
import { TimelineHeaderComponent } from './timeline/timeline-header/timeline-header.component';
import { TimelineEntryComponent } from './timeline/timeline-entry/timeline-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    CardComponent,
    TimelineContentComponent,
    TimelineHeaderComponent,
    TimelineEntryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
