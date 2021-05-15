import { createAction, props } from '@ngrx/store';

export const incrQty = createAction(
  '[ProductItem] Increment Qty'
);

export const decrQty = createAction(
  '[ProductItem] Decrement Qty'
);

