# <%- project %>

[![Build Status](https://travis-ci.org/<%- github %>.svg?branch=master)](https://travis-ci.org/<%- github %>)
[![Dependencies Status](https://david-dm.org/<%- github %>.svg)](https://david-dm.org/<%- github %>)
[![License](https://img.shields.io/npm/l/<%- npm %>.svg?maxAge=2592000?style=plastic)](https://github.com/<%- github %>/blob/master/LICENSE)

A Skeleton project based on [EvaEngine.js](https://github.com/EvaEngine/EvaEngine.js)

## Get start

First, install [Yeoman](http://yeoman.io) and generator-evaengine using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-evaengine
```

Then generate your new project:

```bash
yo evaengine
```

## Install and Start develop:

Requirements:

- NodeJS >= v8


*1*. Install global dependencies

```
make pre-build
```

*2*. Install project dependencies

```
make build
```

*3*. Start project (development mode)

```
npm run dev
```

Visit http://localhost:3000/ to see HelloWorld web page demo

*4*. Generate API documents

```
npm run swagger-dev
```

Visit http://localhost:15638/ to see Swagger document demo


*5*. CLI command (development mode)

```
babel-node src/cli.js hello:world
```

*6*. Run unit test

```
npm test
```

## Deploy to production server

*1*. Install global dependencies

```
make pre-build
```

*2*. Install project dependencies

```
make build
```

*3*. Compile & Start project

```
npm run build
npm start
```

