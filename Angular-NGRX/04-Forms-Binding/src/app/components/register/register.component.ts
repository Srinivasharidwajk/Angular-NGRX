import { Component, OnInit } from '@angular/core';
import {User} from './User';
import {Store} from '@ngrx/store';
import {State} from '../../reducers';
import * as registerActions from './actions/register.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:User = {
    name : '',
    email : '',
    password : ''
  };
  constructor(private store:Store<State>) { }

  ngOnInit(): void {
  }

  public submitUser(){
    this.store.dispatch(registerActions.registerUser({user : this.user}));
  }

}
