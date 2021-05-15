import { Component, OnInit } from '@angular/core';
import {IEvent} from '../../models/IEvent';
import {Store, select} from '@ngrx/store';
import {State} from '../../../reducers';
import * as eventActions from '../../actions/event.actions';
import * as eventReducer from '../../reducers/event.reducer';

@Component({
  selector: 'app-free-events',
  templateUrl: './free-events.component.html',
  styleUrls: ['./free-events.component.css']
})
export class FreeEventsComponent implements OnInit {

  public events:IEvent[] = [];
  public errorMessage:string;
  public loading:boolean;
  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    // dispatch an action to get Free Events from the Server and keep in NGRX Store
    this.store.dispatch(eventActions.getFreeEvents());

    // get Events data from NGRX and bind to local state variable
    this.store.pipe(select(eventReducer.eventFeatureKey)).subscribe((state) => {
      this.events = state.events;
      this.errorMessage = state.errorMessage;
      this.loading = state.loading;
    });
  }

}
