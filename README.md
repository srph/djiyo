# djiyo [![Progress Badge](https://img.shields.io/badge/progress-wip-blue.svg?style=flat-square)](https://img.shields.io/badge/progress-wip-blue.svg?style=flat-square)
A Digital-Ocean-esque CSS starter kit

This is not a framework and not meant to be extended. Rather, it's intended to be a reference or a starting point. It provides you a bunch of common components with pretty styling (similar to [**Digital Ocean**](https://digitalocean.com)'s design), written in an *opinionated* [**BEM**](http://getbem.com/).

## Installation
```bash
$ npm i -g djiyo
$ djiyo install /path/to/my/project/stylesheets
```

**Manual** &mdash; If you prefer, you may simply clone the repository, and copy all the files in the `stylesheets` directory to your project folder.

## Convention
It follows the [`.block__element--modifier` convention](http://getbem.com/) in [*kebab-case*](http://stackoverflow.com/questions/11273282/whats-the-name-for-snake-case-with-dashes/12273101#12273101). This project also loosely follows [code-guide](https://github.com/mdo/code-guide).
```css
// Block
.component {}
.my-component {}
.footer-nav {}

// Element
.component__another-component-inside-it {}
.my-component__another-component-inside-it {}
.footer-nav__section {}

// Modifier
.component--narrow {}
.my-component--large {}
.footer--dark {}

// Utilities
.u-whatever {}
.u-spacer {}
.u-pull-right {}
```
