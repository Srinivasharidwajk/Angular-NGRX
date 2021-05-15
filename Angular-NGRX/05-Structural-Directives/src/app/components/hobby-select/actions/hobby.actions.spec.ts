import * as fromHobby from './hobby.actions';

describe('loadHobbys', () => {
  it('should return an action', () => {
    expect(fromHobby.loadHobbys().type).toBe('[Hobby] Load Hobbys');
  });
});
