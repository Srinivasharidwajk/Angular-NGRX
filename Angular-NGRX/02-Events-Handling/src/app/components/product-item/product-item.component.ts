import { Component, OnInit } from '@angular/core';
import * as productReducer from '../product-item/product-item.reducer';
import {select, Store} from '@ngrx/store';
import {productFeatureKey} from '../product-item/product-item.reducer';
import {decrQty, incrQty} from './product-item.actions';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public productInfo:productReducer.State;

  constructor(private store:Store<{[productReducer.productFeatureKey] : productReducer.State}>) { }

  ngOnInit(): void {
    this.store.pipe(select('productItem')).subscribe((data) => {
      this.productInfo = data;
    });
  }

  public clickIncrQty(){
    this.store.dispatch(incrQty());
  }

  public clickDecrQty(){
    this.store.dispatch(decrQty());
  }

}
