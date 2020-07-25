import {assert} from 'chai';
import scaffold from './scaffold';

suite('scaffold', () => {
  test('that nuxt dependencies are defined', async () => {
    const {dependencies, devDependencies} = await scaffold();

    assert.deepEqual(dependencies, ['nuxt']);
    assert.deepEqual(devDependencies, ['@vue/test-utils']);
  });
});
