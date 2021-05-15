import { Component, OnInit } from '@angular/core';
import {IEvent} from '../../models/IEvent';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';
import {UserService} from '../../../users/services/user.service';
import {Store , select} from '@ngrx/store';
import {State} from '../../../reducers';
import * as eventActions from '../../actions/event.actions';

@Component({
  selector: 'app-upload-events',
  templateUrl: './upload-events.component.html',
  styleUrls: ['./upload-events.component.css']
})
export class UploadEventsComponent implements OnInit {

  public event:IEvent = {
    name : '',
    image : '',
    date : '',
    type : '',
    price : null,
    info : ''
  };
  public message:string;
  public freeEvent:boolean;

  constructor(
    private store:Store<State>,
    private eventService:EventService,
              private router:Router,
              private userService:UserService) { }

  public selectFreeEvent(event){
    this.freeEvent = event.target.value === 'FREE';
  }

  ngOnInit(): void {
  }

  public submitUpload(){
    this.store.dispatch(eventActions.uploadEvent({event : this.event}));
  }

  public isAdmin(){
    return this.userService.isAdminUser();
  }

}
