import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishMessageComponent } from './components/wish-message/wish-message.component';

/*
  NGRX
 */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {messageFeatureKey, wishMessageReducer} from './components/wish-message/wish-message.reducer';
import { ProductItemComponent } from './components/product-item/product-item.component';
import * as productReducer from './components/product-item/product-item.reducer';

@NgModule({
  declarations: [
    AppComponent,
    WishMessageComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      [messageFeatureKey] : wishMessageReducer,
      [productReducer.productFeatureKey] : productReducer.reducer
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
