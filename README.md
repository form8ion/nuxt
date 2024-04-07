# nuxt

opinionated scaffolder for [Nuxt.js](https://nuxtjs.org/)

<!--status-badges start -->

[![Codecov][coverage-badge]][coverage-link]
[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
![SLSA Level 2][slsa-badge]

<!--status-badges end -->

## Table of Contents

* [Usage](#usage)
  * [Installation](#installation)
  * [Example](#example)
    * [Import](#import)
    * [Execute](#execute)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Usage

<!--consumer-badges start -->

[![MIT license][license-badge]][license-link]
[![npm][npm-badge]][npm-link]
[![Try @form8ion/nuxt on RunKit][runkit-badge]][runkit-link]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/nuxt --save-prod
```

### Example

#### Import

```javascript
import {scaffold} from '@form8ion/nuxt';
```

#### Execute

```javascript
  await scaffold({projectRoot: process.cwd()});
```

## Contributing

<!--contribution-badges start -->

[![PRs Welcome][PRs-badge]][PRs-link]
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![Renovate][renovate-badge]][renovate-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[coverage-link]: https://codecov.io/github/form8ion/nuxt

[coverage-badge]: https://img.shields.io/codecov/c/github/form8ion/nuxt.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/nuxt.svg

[npm-link]: https://www.npmjs.com/package/@form8ion/nuxt

[npm-badge]: https://img.shields.io/npm/v/@form8ion/nuxt.svg

[runkit-link]: https://npm.runkit.com/@form8ion/nuxt

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/nuxt.svg

[github-actions-ci-link]: https://github.com/form8ion/nuxt/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://github.com/form8ion/nuxt/workflows/Node.js%20CI/badge.svg

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg
