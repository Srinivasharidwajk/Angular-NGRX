import { Component, OnInit } from '@angular/core';
import {IEvent} from '../../models/IEvent';
import {Store , select} from '@ngrx/store';
import {State} from '../../../reducers';
import * as eventActions from '../../actions/event.actions';
import * as eventReducer from '../../reducers/event.reducer';

@Component({
  selector: 'app-pro-events',
  templateUrl: './pro-events.component.html',
  styleUrls: ['./pro-events.component.css']
})
export class ProEventsComponent implements OnInit {

  public events:IEvent[];
  public errorMessage:string;
  public loading:boolean;
  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    // dispatch an action to get Free Events from the Server and keep in NGRX Store
    this.store.dispatch(eventActions.getProEvents());

    // get Events data from NGRX and bind to local state variable
    this.store.pipe(select(eventReducer.eventFeatureKey)).subscribe((state) => {
      this.events = state.events;
      this.errorMessage = state.errorMessage;
      this.loading = state.loading;
    });
  }

}
