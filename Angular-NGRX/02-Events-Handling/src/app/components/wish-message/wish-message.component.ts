import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {sayGoodAfternoon, sayGoodEvening, sayGoodMorning} from './wish-message.actions';
import {messageFeatureKey, State} from './wish-message.reducer';

@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrls: ['./wish-message.component.css']
})
export class WishMessageComponent implements OnInit {

  public message:string;
  constructor(private store:Store<{wishMessage: State}>) { }

  ngOnInit(): void {
    this.store.pipe(select(messageFeatureKey)).subscribe((state) => {
       this.message = state.message;
    });
  }

  public clickGoodMorning(){
    this.store.dispatch(sayGoodMorning());
  }

  public clickGoodAfternoon(){
    this.store.dispatch(sayGoodAfternoon());
  }

  public clickGoodEvening(){
    this.store.dispatch(sayGoodEvening());
  }

}
