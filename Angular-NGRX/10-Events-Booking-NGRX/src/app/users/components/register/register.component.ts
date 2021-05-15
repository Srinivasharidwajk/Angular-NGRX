import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../models/IUser';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../../reducers';
import * as userActions from '../../actions/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };
  public errorMessage:string;
  public message:string;
  constructor(private store:Store<State>) { }

  ngOnInit(): void {
  }

  // submitRegister
  public submitRegister(){
    // dispatch an action to register a user
    this.store.dispatch(userActions.registerUser({user : this.user}));
  }
}
