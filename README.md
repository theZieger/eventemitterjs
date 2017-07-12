# EventEmitter 0.1.0

> A basic JavaScript event handler

## Getting started

There is more than one way to use EventEmitter.js inside your project. I prefer using npm for dependency management.

If you haven't used [npm](http://npmjs.com/) (Node Package manager) before, be sure to check out the [Getting Started](https://docs.npmjs.com/getting-started/what-is-npm) guide, as it explains how to install and use npm. Once you're familiar with that process, you may install the EventEmitter.js module with this command inside your project:

```
npm install eventemitterjs --save-dev
```

Once the module has been installed, you may integrate that file into your build process (e.g concatenating and uglifying your JS with Grunt or whatever) since the `--save-dev` option is meant for development only.

## Available functions inside EventEmitter.js

### EventEmitter.prototype.on(sEventName, handler)

Registers the `handler` function under the given `sEventName`.

### EventEmitter.prototype.emit(sEventName, gData)

Run all event handlers registered to the given `sEventName`.
When `gData` is not of a falsy value it will be handed as the first and only argument to all of the registered event handlers.
