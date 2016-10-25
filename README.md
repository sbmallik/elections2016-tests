# Nightwatch

UI automated testing framework powered by [Node.js](http://nodejs.org/). It uses the [Selenium WebDriver API](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol).

[![Build Status](https://travis-ci.org/nightwatchjs/nightwatch.svg?branch=master)](https://travis-ci.org/nightwatchjs/nightwatch) [![NPM version](https://badge.fury.io/js/nightwatch.png)](http://badge.fury.io/js/nightwatch) [![Coverage Status](https://coveralls.io/repos/nightwatchjs/nightwatch/badge.svg?branch=master&service=github)](https://coveralls.io/github/nightwatchjs/nightwatch?branch=master)

***

#### [Homepage](http://nightwatchjs.org) | [Getting Started](http://nightwatchjs.org/getingstarted) | [Developer Guide](http://nightwatchjs.org/guide) | [API Reference](http://nightwatchjs.org/api) | [Changelog](https://github.com/nightwatchjs/nightwatch/releases)

### Elections 2016 Integrations test package
This package contains the set of integrations test that are executed during deployment. The tests use the Nightwatch tool, which is integrated in this repository. This requires the Selenium Standalone server and drivers related to browser. All dependencies are included in this repository.

### Install repository

Install Node.js and then:
```sh
$ git clone git@github.com:sbmallik/elections2016-tests.git
$ cd elections2016-tests
$ npm install
```

### Run tests
The tests for Nightwatch uses selenium standalone server irrespective of the browser used. Here are the commands to run the tests for the specific browsers locally:

To run the integration tests useng Firefox (default), do:

```sh
$ ./bin/nightwatch
```

To run the integration tests using Chrome, do:

```sh
$ ./bin/nightwatch -e chrome
```

To run the integration tests using Safari, do:

```sh
$ ./bin/nightwatch -e safari
```

To run the tests in Sauce Labs, do:

```sh
$ ./bin/nightwatch -e saucelabs
```
In all cases the output is saved in reports directory.

### Discuss
The [Mailing List/Google Group](https://groups.google.com/forum/#!forum/nightwatchjs) is the most appropriate tool for Nightwatch related discussions. In addition, there is a [StackOverflow Nightwatch.js tag](http://stackoverflow.com/questions/tagged/nightwatch.js) at your disposal and [Twitter](https://twitter.com/nightwatchjs).

### Setup Guides
Specific WebDriver setup guides can be found on the [Docs website](http://nightwatchjs.org/getingstarted#browser-drivers-setup). 
Legacy Selenium drivers setup guides along with debugging instructions can be found on the [**Wiki**](https://github.com/nightwatchjs/nightwatch/wiki).

