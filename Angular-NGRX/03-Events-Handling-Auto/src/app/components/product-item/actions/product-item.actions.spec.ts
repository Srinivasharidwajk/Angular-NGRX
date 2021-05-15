import * as fromProductItem from './product-item.actions';

describe('loadProductItems', () => {
  it('should return an action', () => {
    expect(fromProductItem.loadProductItems().type).toBe('[ProductItem] Load ProductItems');
  });
});
