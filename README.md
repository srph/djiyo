# djiyo
A Digital-Ocean-esque CSS starter kit

This is not meant to be extended, rather to be a reference and a starting point. It provides you a bunch of common components with pretty styling (similar to [**Digital Ocean**](https://digitalocean.com)'s design), written in an *opinionated* **BEM**.

## Installation
**Manual** &mdash; You may simply clone the repository, and copy all the files in the `stylesheets` directory to your project folder.

**Or**, you can use **[yeoman](http://yeoman.io/)** to bootstrap all the stylesheets for you. Here's the simplified instructions for your convenience:

```bash
# Don't forget to `cd` to your project's
# stylesheet directory!
cd /path/to/my/project/stylseheets

# Install yeoman
npm i -g yo

# Bootstraps djiyo for you!
yo djiyo
```

## Convention
It follows the convention `.block__element--modifier` in [*kebab-case*](http://stackoverflow.com/questions/11273282/whats-the-name-for-snake-case-with-dashes/12273101#12273101). This project also loosely follows [code-guide](https://github.com/mdo/code-guide).
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
