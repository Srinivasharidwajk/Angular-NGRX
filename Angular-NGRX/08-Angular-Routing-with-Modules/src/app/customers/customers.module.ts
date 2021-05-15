import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './effects/customer.effects';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers }),
    EffectsModule.forFeature([CustomerEffects])
  ]
})
export class CustomersModule { }
