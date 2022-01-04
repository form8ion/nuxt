// #### Import
// remark-usage-ignore-next 3
import {promises as fs} from 'fs';
import {resolve} from 'path';
import stubbedFs from 'mock-fs';
import {scaffold} from './lib/index.cjs';

// #### Execute

// remark-usage-ignore-next 7
(async () => {
  stubbedFs({
    node_modules: stubbedFs.load(resolve(__dirname, 'node_modules')),
    templates: {'nuxt.config.js': await fs.readFile(resolve(__dirname, 'templates', 'nuxt.config.js'))},
    'nuxt.config.js': await fs.readFile(resolve(__dirname, 'templates', 'nuxt.config.js'))
  });

  await scaffold({projectRoot: process.cwd()});
  // remark-usage-ignore-next 2
  stubbedFs.restore();
})();
