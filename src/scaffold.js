import scaffoldConfig from './config';

export default async function ({projectRoot}) {
  await scaffoldConfig({projectRoot});

  return {
    scripts: {
      dev: 'nuxt',
      build: 'nuxt build',
      start: 'nuxt start',
      export: 'nuxt export',
      serve: 'nuxt serve'
    },
    dependencies: ['nuxt'],
    devDependencies: ['@vue/test-utils', '@nuxtjs/eslint-module']
  };
}
