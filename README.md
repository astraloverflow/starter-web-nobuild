# Starter-Web

[![License][license-img]](https://github.com/astraloverflow/starter-web/blob/master/LICENSE)
[![Version][version-img]](https://github.com/astraloverflow/starter-web/releases)
[![Last Commit][last-commit-img]](https://github.com/astraloverflow/starter-web/commits/master)
[![Open Issues][issues-img]](https://github.com/astraloverflow/starter-web/issues)

> A minimal config starter template for web projects

---

## Requirements

- Node.js (LTS or newer).
- Latest NPM (comes included with Node.js) or Yarn.

It can alternatively be used with CodeSandBox.io, though not all functionality will be available.

## Quick Start

```shell
$ cd ~/dev/
$ npx degit astraloverflow/starter-web#2020.5.6 my-new-website
$ cd my-new-website
$ npm install
$ npm run dev
```

---

## NPM Scripts

### `npm run test`

- Runs [stylelint](https://stylelint.io) (see `.stylelintrc`) and [eslint](https://eslint.org) (see `.eslintrc.js`) to check files for syntax and coding style errors.
- Runs `tsc --noEmit` to check typescript types and compliation errors

### `npm run format`

- Runs [Prettier](https://prettier.io) to format all code to the same style. See Prettier website for full list of supported languages. Best used with the Prettier plugin for your chosen editor.

### `npm run prod`

- Runs Parcel in production mode and builds the project.

### `npm run dev`

- Runs Parcel in development mode and runs a development server.

---

## LICENSE

Unless you want to release your project into the public domain via CC0 (which this project does), you should replace the contents of [`LICENSE`](./LICENSE) with a license of your choosing (MIT, BSD, GPL, etc.)

---

## .gitignore

Inside of [`.gitignore`](./.gitignore) you will find the following

```ini
# These files lock down the project's node dependencies
# These are only here for the development of starter-web
# You should remove whichever one you are using in your project
package-lock.json
yarn.lock
```

As the comment in the file says, you should remove one of those two lines if you want to use the "version locking" features of either one, especially if you are developing with other people or on multiple computers/servers or are using a CI.

---

## Package.json

It is highly recommended that you customize `package.json` with the details of your project, mainly the following fields:

```jsonc
{
  // Prevents your project from unintentionally being published to NPM.
  "private": true,
  // SPDX license identifier for your project's license.
  // The list of SPDX license identifiers can be found here: https://spdx.org/licenses/
  "license": "",
  // Your project's version number, as seen by NPM.
  "version": "0.0.0",
  // Your project's name, as seen by NPM. See NPM docs for allowed characters.
  "name": "starter-web",
  // Your project's description, as seen by NPM. Can be left blank.
  "description": "",
  // URL to your project's code repository.
  // If hosted on GitHub you can use the shorthand "user/repo"
  "repository": ""
}
```

[license-img]: https://img.shields.io/github/license/astraloverflow/starter-web.svg
[version-img]: https://img.shields.io/github/release/astraloverflow/starter-web.svg
[last-commit-img]: https://img.shields.io/github/last-commit/astraloverflow/starter-web.svg
[issues-img]: https://img.shields.io/github/issues-raw/astraloverflow/starter-web.svg
