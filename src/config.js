import {promises as fs} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));      // eslint-disable-line no-underscore-dangle

export default async function ({projectRoot}) {
  await fs.copyFile(resolve(__dirname, '..', 'templates', 'nuxt.config.js'), `${projectRoot}/nuxt.config.js`);
}
