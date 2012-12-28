# SASL

This module is a JavaScript framework for SASL authentication and data security.
Mechanisms are pluggable, allowing a server and client to negotiate supported
mechanisms when performing authentication in connection-oriented protocols.

## Install

##### npm

    $ npm install saslmechanisms

##### volo

    $ volo add jaredhanson/js-sasl sasl

For more information on using volo to manage JavaScript modules, visit [http://volojs.org/](http://volojs.org/).

## Usage

Create a SASL mechanism factory.

```javascript
var factory = new sasl.Factory();
```

Register supported SASL mechanisms.

```
factory.use(require('sasl-plain'));
```

## Compatibility

##### Browser

This module is [AMD](https://github.com/amdjs/amdjs-api)-compliant, and can be
loaded by module loaders such as [RequireJS](http://requirejs.org/).

This module is optimized for use with [Anchor](https://github.com/anchorjs/anchor).

##### Node

This module is compatible with [Node](http://nodejs.org/).

## Mechanisms

|Mechanism                                              |Developer                                       |
|-------------------------------------------------------|------------------------------------------------|
|[PLAIN](https://github.com/jaredhanson/js-sasl-plain)  |[Jared Hanson](https://github.com/jaredhanson)  |

## Tests

##### Browser

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari

##### PhantomJS

To run headless tests from a terminal using [PhantomJS](http://phantomjs.org/):

    $ make test-phantomjs

##### Node

To run tests in Node:

    $ make test-node
    
##### Status

[![Travis CI](https://secure.travis-ci.org/jaredhanson/js-sasl.png)](http://travis-ci.org/jaredhanson/js-sasl)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
