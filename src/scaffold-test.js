import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as config from './config';
import scaffold from './scaffold';

suite('scaffold', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(config, 'default');
  });

  teardown(() => sandbox.restore());

  test('that nuxt dependencies are defined', async () => {
    const projectRoot = any.string();

    const {dependencies, devDependencies, scripts} = await scaffold({projectRoot});

    assert.calledWith(config.default, {projectRoot});
    assert.deepEqual(dependencies, ['nuxt']);
    assert.deepEqual(devDependencies, ['@vue/test-utils', '@nuxtjs/eslint-module']);
    assert.deepEqual(
      scripts,
      {
        dev: 'nuxt',
        build: 'nuxt build',
        start: 'nuxt start',
        export: 'nuxt export',
        serve: 'nuxt serve'
      }
    );
  });
});
