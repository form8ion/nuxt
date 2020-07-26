import {promises as fs} from 'fs';
import {resolve} from 'path';
import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import scaffoldConfig from './config';

suite('config', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(fs, 'copyFile');
  });

  teardown(() => sandbox.restore());

  test('that the config file is created', async () => {
    const projectRoot = any.string();

    await scaffoldConfig({projectRoot});

    assert.calledWith(
      fs.copyFile,
      resolve(__dirname, '..', 'templates', 'nuxt.config.js'),
      `${projectRoot}/nuxt.config.js`
    );
  });
});
