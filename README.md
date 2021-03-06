[![npm version](https://img.shields.io/npm/v/shuo.svg)](https://www.npmjs.org/package/shuo)
[![Build Status](https://travis-ci.org/Shuo-IRC/Shuo.svg?branch=master)](https://travis-ci.org/Shuo-IRC/Shuo)
[![Dependency Status](https://david-dm.org/Shuo-IRC/Shuo.svg)](https://david-dm.org/Shuo-IRC/Shuo)
[![devDependency Status](https://david-dm.org/Shuo-IRC/Shuo/dev-status.svg)](https://david-dm.org/Shuo-IRC/Shuo#info=devDependencies)
![Downloads](https://img.shields.io/npm/dt/shuo.svg)

# Shuo

![](https://i.imgur.com/Cy3zOow.png)

(Chinese for "to speak")

__What is it?__
Shuo is a web IRC client that you host on your own server. This is PonyChat's
fork of [Shout](https://github.com/erming/shout), forked due to Shout appearing
to be stagnant.

__What features does it have?__
- Multiple user support
- Stays connected even when you close the browser
- Connect from multiple devices at once
- Responsive layout — works well on your smartphone
- Theme support
- Unread message marker
- _.. and more!_

## Install

```
sudo npm install -g shuo
```

### Quick setup

Needs [docker-compose](https://docs.docker.com/compose/).

```console
$ docker-compose up
ircd_1 |   notice: now running in foreground mode from /home/ircd/run as pid 16 ...
shuo_1 | Shuo is now running on http://0.0.0.0:9000/
shuo_1 | Press ctrl-c to stop
```

This will spawn an ephemeral instance of [Elemental-IRCd](http://elemental-ircd.com) and Shuo.

## Usage

When the install is complete, go ahead and run this in your terminal:

```
shuo --help
```

For more information, read the [documentation](https://github.com/Shuo-IRC/Shuo/wiki).

## Development setup

To run the app from source, just clone the code and run this in your terminal:

```
npm install
grunt
./index.js --port 8080
```

And if you don't have [grunt](http://gruntjs.com/getting-started) installed
already, just run `npm install -g grunt-cli`.

## License

Available under [the MIT license](http://mths.be/mit).
