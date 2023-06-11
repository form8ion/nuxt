import {promises as fs} from 'node:fs';
import {resolve} from 'node:path';

import {afterEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import scaffoldConfig from './config';

vi.mock('node:fs');

describe('config', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create the config file', async () => {
    const projectRoot = any.string();

    await scaffoldConfig({projectRoot});

    expect(fs.copyFile)
      .toHaveBeenCalledWith(resolve(__dirname, '..', 'templates', 'nuxt.config.js'), `${projectRoot}/nuxt.config.js`);
  });
});
