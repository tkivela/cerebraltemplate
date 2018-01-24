# React template with Cerebral state management

Small React app template with everything you need.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

**What's inside?**

* `react`
* `cerebral`
* `emotion`

and code styles with
* `standard`
* `prettier-standard`

Bundling is handled with parcel bundler (https://parceljs.org/) which provides fast bundles.

## Getting started

Clone and install deps

```
git clone git@github.com:tkivela/parceltemplate.git
cd parceltemplate
yarn
yarn start
```

Then open `http://localhost:1234` and edit `./src/` -files and press save. You must manually refresh browser window after editing sources.

## Directory structure

Majority of code lives in src directory:

```
src/
├── components
├── index.js
└── modules
    └── app
        ├── actions
        ├── computes
        ├── index.js
        └── signals
```

* components: React components
* index.js: Root container component
* modules: Cerebral modules, one example module called app included
* modules/app/index.js: App initial state & signals 
* modules/app/actions: Cerebral actions
* modules/app/computes: Cerebral computes which calculate derived state entries
* modules/app/signals: Cerebral signals

## Building for Production

```
yarn build
```

This will compile your JS and copy your assets to the `dist` folder which
you can deploy wherever as a webpage.

## Testing

```
yarn test
```

Running tests runs Javascript Standard Style (https://standardjs.com/) linting rules before running unit tests with Jest.
I've included example tests for Cerebral signals and computes.

## Linting
Check for linting errors with
```
yarn lint
```

Fix linting errors (& format code with prettier-standard) with
```
yarn lint-fix
```

## Debugging

By using Cerebral debugger (https://github.com/cerebral/cerebral-debugger/releases) you can debug state changes & signals by attaching it to port 8585 (port can be changed from controller.js if needed). Otherwise normal debugging (with sourcemaps) can be done from browser's devtools.
