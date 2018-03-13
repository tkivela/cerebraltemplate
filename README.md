# React template with Cerebral state management

Small React app template with everything you need.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

**What's inside?**

* `react` (A JavaScript library for building user interfaces)
* `cerebral` (Declarative state and side effects management)
* `emotion` (The Next Generation of CSS-in-JS)

and for development time
* `parcel-bundler` (Blazing fast, zero configuration web application bundler)
* `jest` (Delightful JavaScript Testing)
* `cypress` (Fast, easy and reliable testing for anything that runs in a browser)
* `standard` (JavaScript Standard Style)
* `prettier-standard` (Code formatter)

Bundling is handled with parcel bundler (https://parceljs.org/) which provides fast bundles.

## Getting started

Clone and install deps

```
git clone https://github.com/tkivela/cerebraltemplate.git
cd cerebraltemplate
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
you can deploy wherever as a webpage. `dist` folder also includes `hyperapp-redux-devtools.js`, you can delete that file if you don't run the code in development environment.

## Testing

```
yarn test
```

Running formats and lints code (Prettier & Standard) and then runs unit tests (Jest) and end to end tests (Cypress). If there are any errors in the end to end tests the script will leave a screenshot of the browser window which reproduces the error to `cypress/screenshot` folder. Screenshot folder is automatically deleted with each test run. If you want to create a video of the e2e testing run automatically to `cypress/videos` folder, just change `videoRecording=false` to `videoRecording=true` from package.json.

In Linux environments test will end with `error Command failed with signal "SIGTERM"` even though all tests passed. This is a known error which is caused by terminating the webserver process after tests.


If you want to test steps in the Cypress UI first start the dev server (yarn start) and then run
```
yarn cy:open
```

## Debugging

By using Cerebral debugger (https://github.com/cerebral/cerebral-debugger/releases) you can debug state changes & signals by attaching it to port 8585 (port can be changed from controller.js if needed). Otherwise normal debugging (with sourcemaps) can be done from browser's devtools.
