import { Component, OnInit } from '@angular/core';
import {IUser} from '../../models/IUser';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../../reducers';
import * as userActions from '../../actions/user.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };
  public errorMessage:string;
  constructor(private store:Store<State>) { }

  ngOnInit(): void {
  }

  // submitLogin
  public submitLogin(){
    // Dispatch an action for Login
    this.store.dispatch(userActions.loginUser({user : this.user}));
  }

}
