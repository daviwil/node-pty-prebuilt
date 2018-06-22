# node-pty-prebuilt

[![Travis CI build status](https://travis-ci.org/daviwil/node-pty-prebuilt.svg?branch=prebuild)](https://travis-ci.org/daviwil/node-pty-prebuilt)
[![Appveyor build status](https://ci.appveyor.com/api/projects/status/9auevc5p115y7x6i/branch/prebuild?svg=true)](https://ci.appveyor.com/project/daviwil/node-pty-prebuilt/branch/prebuild)

This project is a parallel fork of [`node-pty`](https://github.com/Microsoft/node-pty)
providing prebuilt packages for certain Node.js and Electron versions.

## Usage

Thanks to the excellent [`prebuild`](https://github.com/prebuild/prebuild) and
[`prebuild-install`](https://github.com/prebuild/prebuild) modules, using this module
is extremely easy.  You merely have to change your `node-pty` dependency to
`node-pty-prebuilt` and then change any `require` statements in your code from
`require('node-pty')` to `require('node-pty-prebuilt')`.

> **NOTE**: We started shipping prebuilds as of node-pty version 0.7.3, no prior versions
> are provided!  If you were using an earlier version of `node-pty` you will need
> to update your code to account for any API changes that may have occurred.

## How It Works

We maintain a parallel fork of the `node-pty` codebase that will be updated as new
releases are shipped.  When we merge new updates to the code into the `prebuild`
branch, new prebuilt packages for our supported Node.js and Electron versions
are updated to the corresponding [GitHub release](https://github.com/daviwil/node-pty-prebuilt/releases).

When `node-pty-prebuilt` is installed as a package dependency, the
[`install` script](https://github.com/daviwil/node-pty-prebuilt/blob/prebuild/package.json#L37)
checks to see if there's a prebuilt package on this repo for the OS, ABI version,
and architecture of the current process and then downloads it, extracting it into
the module path.  If a corresponding prebuilt package is not found, `node-gyp`
is invoked to build the package for the current platform.

## Prebuilt Versions

We currently build packages for all versions of Node.js and Electron that are
supported by the `prebuild` module.  You can see the full list of versions by checking
out the [`supportedTargets`](https://github.com/lgeiger/node-abi/blob/master/index.js#L51)
list in [`node-abi`](https://github.com/lgeiger/node-abi/blob/master/index.js#L51).

## License

Copyright (c) 2012-2015, Christopher Jeffrey (MIT License).
Copyright (c) 2016, Daniel Imms (MIT License).
Copyright (c) 2018, David Wilson (MIT License).
