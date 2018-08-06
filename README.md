# generator-evaengine 

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

A yeoman generator for EvaEngine.js

## Features

- [EvaEngine.js](https://github.com/EvaEngine/EvaEngine.js) based
- EvaQueue.js support (optional)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-evaengine using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-evaengine
```

Then generate your new project:

```bash
yo evaengine
```

## Project Directory Structure

```
├── Dockerfile
├── LICENSE
├── Makefile
├── README.md
├── build
├── config
│   ├── config.default.js
│   ├── config.development.js
│   ├── config.production.js
│   └── config.test.js
├── engine
├── logs
├── nodemon.json
├── package.json
├── public
├── src
│   ├── app.js
│   ├── cli.js
│   ├── commands
│   │   └── hello_world.js
│   ├── crontab.js
│   ├── entities
│   │   └── index.js
│   ├── models
│   │   └── index.js
│   ├── routes
│   │   ├── api
│   │   │   └── hello_world.js
│   │   └── index.js
│   └── swagger.js
├── test
│   ├── bootstrap.js
│   └── routes
│       └── api
│           └── hello_world.js
└── views
    ├── error.pug
    └── index.pug
```

## License

MIT © [EvaEngine]()


[npm-image]: https://badge.fury.io/js/generator-evaengine.svg
[npm-url]: https://npmjs.org/package/generator-evaengine
[travis-image]: https://travis-ci.org/EvaEngine/generator-evaengine.svg?branch=master
[travis-url]: https://travis-ci.org/EvaEngine/generator-evaengine
[daviddm-image]: https://david-dm.org/EvaEngine/generator-evaengine.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/EvaEngine/generator-evaengine
