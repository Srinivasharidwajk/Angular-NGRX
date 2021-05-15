import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../users/services/user.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../../reducers';
import * as userActions from '../../../users/actions/user.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store:Store<State>,private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
  }

  public isLogin(){
    return this.userService.isLoggedIn();
  }

  public clickLogout(){
    // dispatch an action for Logout
    this.store.dispatch(userActions.logOut());
    this.router.navigate(['/']);
  }

  public getUser(){
   return this.userService.getUserData();
  }

}
