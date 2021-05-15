import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State} from '../../reducers';
import * as productReducer from './reducers/product-item.reducer';
import * as productActions from './actions/product-item.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product:any;
  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    this.store.pipe(select(productReducer.productItemFeatureKey)).subscribe((state) => {
      this.product = state;
    });
  }

  public clickDecrQty(){
    this.store.dispatch(productActions.decrQty());
  }

  public clickIncrQty(){
    this.store.dispatch(productActions.incrQty());
  }

}
