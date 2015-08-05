# Shuo [![](https://badge.fury.io/js/shuo.png)](https://www.npmjs.org/package/shuo) [![Build Status](https://travis-ci.org/PonyChat/Shuo.svg?branch=master)](https://travis-ci.org/PonyChat/Shuo)

__What is it?__
Shuo is a web IRC client that you host on your own server. This is PonyChat's 
fork of [Shout](https://github.com/erming/shout), forked due to Shout appearing 
to be stagnant.

__What features does it have?__
- Multiple user support
- Stays connected even when you close the browser
- Connect from multiple devices at once
- Responsive layout — works well on your smartphone
- _.. and more!_

## Install

```
sudo npm install -g shuo
```

## Usage

When the install is complete, go ahead and run this in your terminal:

```
shuo --help
```

For more information, read the [documentation](http://shuo-irc.com/docs/).

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
