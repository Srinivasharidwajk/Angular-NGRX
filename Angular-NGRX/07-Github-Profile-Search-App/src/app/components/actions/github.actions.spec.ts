import * as fromGithub from './github.actions';

describe('loadGithubs', () => {
  it('should return an action', () => {
    expect(fromGithub.loadGithubs().type).toBe('[Github] Load Githubs');
  });
});
