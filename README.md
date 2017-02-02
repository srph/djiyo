# djiyo [![Progress Badge](https://img.shields.io/badge/progress-wip-blue.svg?style=flat-square)](https://img.shields.io/badge/progress-wip-blue.svg?style=flat-square)
A Digital-Ocean-esque CSS starter kit

This is not meant to be extended, rather to be a reference and a starting point. It provides you a bunch of common components with pretty styling (similar to [**Digital Ocean**](https://digitalocean.com)'s design), written in an *opinionated* [**BEM**](http://getbem.com/).

## Installation
**Manual** &mdash; You may simply clone the repository, and copy all the files in the `stylesheets` directory to your project folder.

**Or**, you can use the cli:

```bash
$ npm i -g djiyo
$ djiyo install /path/to/my/project/stylesheets
```

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

## FAQ
> What's the difference with [m](github.com/srph/m)?

- Mainly &mdash; **m** loosely follows [SUITCSS](https://github.com/suitcss/suit); **djiyo** is an **opinionated** [BEM](http://getbem.com/).
- Least &mdash; Styling difference.

> Why not improve [m](github.com/srph/m) instead?

Personally, I think **m** looks just fine on its own. **djiyo** wasn't *forked* from **m**; it was built from scratch in a freelance project, and found it better than **m**.

> Why is this a starter kit instead of a 'framework' or 'microframework'?

Frameworks are great in most cases.

- It saves time and effort. Why do we have to re-do the UI every project anyway?
- And especially when you're not a UI guy.

However, when you have custom designs and designers in your team, these frameworks can get in your way. I'm a fan of [bootstrap-practices](https://github.com/rstacruz/bootstrap-practices). To summarize, it advises people to just take what they need. Moreover, if you need to 'theme' a framework's components, it's a better decision to build it from scratch (or just use a framework's component as a base).
