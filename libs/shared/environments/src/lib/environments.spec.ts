import { environment } from './environment';

describe('sharedEnvironment', () => {
  it('should work', () => {
    expect(environment.production).toBeFalsy()
  });
});
