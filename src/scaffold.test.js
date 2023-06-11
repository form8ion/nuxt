import {afterEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import * as config from './config.js';
import scaffold from './scaffold.js';

vi.mock('./config');

describe('scaffold', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should define the nuxt dependencies', async () => {
    const projectRoot = any.string();

    const {dependencies, devDependencies, scripts, vcsIgnore, buildDirectory} = await scaffold({projectRoot});

    expect(config.default).toHaveBeenCalledWith({projectRoot});
    expect(dependencies).toEqual(['nuxt']);
    expect(devDependencies).toEqual(['@vue/test-utils', '@nuxtjs/eslint-module']);
    expect(buildDirectory).toEqual('dist/');
    expect(vcsIgnore.directories).toEqual(['.nuxt/']);
    expect(scripts).toEqual({
      dev: 'nuxt',
      build: 'nuxt build',
      start: 'nuxt start',
      export: 'nuxt export',
      serve: 'nuxt serve'
    });
  });
});
