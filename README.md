# SASL

This module is a JavaScript framework for SASL authentication and data security.
Mechanisms are pluggable, allowing a server and client to negotiate supported
mechanisms when performing authentication in connection-oriented protocols.

## Install

##### npm

    $ npm install saslmechanisms

##### volo

    $ volo add jaredhanson/js-sasl sasl

## Usage

Create a SASL mechanism factory.

```javascript
var factory = new sasl.Factory();
```

Register supported SASL mechanisms.

```
factory.use(require('sasl-plain'));
```

## Mechanisms

|Mechanism                                                                          |Developer                                       |
|-----------------------------------------------------------------------------------|------------------------------------------------|
|[ANONYMOUS](https://github.com/jaredhanson/js-sasl-anonymous)                      |[Jared Hanson](https://github.com/jaredhanson)  |
|[DIGEST-MD5](https://github.com/jaredhanson/js-sasl-digest-md5)                    |[Jared Hanson](https://github.com/jaredhanson)  |
|[EXTERNAL](https://github.com/jaredhanson/js-sasl-external)                        |[Jared Hanson](https://github.com/jaredhanson)  |
|[PLAIN](https://github.com/jaredhanson/js-sasl-plain)                              |[Jared Hanson](https://github.com/jaredhanson)  |
|[XOAUTH2](https://github.com/jaredhanson/js-sasl-xoauth2)                          |[Jared Hanson](https://github.com/jaredhanson)  |
|[X-FACEBOOK-PLATFORM](https://github.com/jaredhanson/js-sasl-x-facebook-platform)  |[Jared Hanson](https://github.com/jaredhanson)  |
|[X-OAUTH2](https://github.com/jaredhanson/js-sasl-x-oauth2)                        |[Jared Hanson](https://github.com/jaredhanson)  |

## Compatibility

##### Browser

[![browser support](https://ci.testling.com/jaredhanson/js-sasl.png)](http://ci.testling.com/jaredhanson/js-sasl)

This module is [AMD](https://github.com/amdjs/amdjs-api)-compliant, and can be
loaded by module loaders such as [RequireJS](http://requirejs.org/).

This module is optimized for use with [Anchor](https://github.com/anchorjs/anchor).

##### Node

This module is compatible with [Node](http://nodejs.org/).

## Tests

##### Browser

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-firefox
    $ make test-chrome
    $ make test-safari
    $ make test-phantomjs

##### Node

To run tests in Node:

    $ make test-node
    
##### Status

[![Travis CI](https://secure.travis-ci.org/jaredhanson/js-sasl.png)](http://travis-ci.org/jaredhanson/js-sasl) [![David DM](https://david-dm.org/jaredhanson/js-sasl.png)](http://david-dm.org/jaredhanson/js-sasl)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
