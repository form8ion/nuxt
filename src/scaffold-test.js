import {assert} from 'chai';
import scaffold from './scaffold';

suite('scaffold', () => {
  test('that nuxt dependencies are defined', async () => {
    assert.deepEqual(await scaffold().dependencies, ['nuxt']);
  });
});
