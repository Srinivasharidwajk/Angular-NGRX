import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { FreeEventsComponent } from './components/free-events/free-events.component';
import { ProEventsComponent } from './components/pro-events/pro-events.component';
import { UploadEventsComponent } from './components/upload-events/upload-events.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { EventEffects } from './effects/event.effects';

@NgModule({
  declarations: [EventsComponent, FreeEventsComponent, ProEventsComponent, UploadEventsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    EventsRoutingModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers }),
    EffectsModule.forFeature([EventEffects])
  ]
})
export class EventsModule { }
