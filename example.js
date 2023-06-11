// #### Import
// remark-usage-ignore-next 3
import {promises as fs} from 'node:fs';
import {resolve} from 'node:path';
import stubbedFs from 'mock-fs';
import {scaffold} from './lib/index.js';

// #### Execute

// remark-usage-ignore-next 7
(async () => {
  stubbedFs({
    node_modules: stubbedFs.load('node_modules'),
    templates: {'nuxt.config.js': await fs.readFile(resolve('templates', 'nuxt.config.js'))},
    'nuxt.config.js': await fs.readFile(resolve('templates', 'nuxt.config.js'))
  });

  await scaffold({projectRoot: process.cwd()});
  // remark-usage-ignore-next 2
  stubbedFs.restore();
})();
