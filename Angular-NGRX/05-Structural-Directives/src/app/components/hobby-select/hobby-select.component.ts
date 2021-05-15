import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../reducers';
import * as hobbyActions from './actions/hobby.actions';
import * as hobbyReducer from './reducers/hobby.reducer';

@Component({
  selector: 'app-hobby-select',
  templateUrl: './hobby-select.component.html',
  styleUrls: ['./hobby-select.component.css']
})
export class HobbySelectComponent implements OnInit {

  public eating:boolean;
  public coding:boolean;
  public sleeping:boolean;

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    this.store.select(hobbyReducer.hobbyFeatureKey).subscribe((state) => {
      this.eating = state.eating;
      this.coding = state.coding;
      this.sleeping = state.sleeping;
    });
  }

  public changeEating(){
    this.store.dispatch(hobbyActions.checkEating());
  }

  public changeCoding(){
    this.store.dispatch(hobbyActions.checkCoding());
  }

  public changeSleeping(){
    this.store.dispatch(hobbyActions.checkSleeping());
  }

}
