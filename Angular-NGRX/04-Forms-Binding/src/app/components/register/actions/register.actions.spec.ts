import * as fromRegister from './register.actions';

describe('loadRegisters', () => {
  it('should return an action', () => {
    expect(fromRegister.loadRegisters().type).toBe('[Register] Load Registers');
  });
});
