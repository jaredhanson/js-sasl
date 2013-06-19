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

##### Modules

  - [AMD](https://github.com/amdjs/amdjs-api)
  - [CommonJS](http://www.commonjs.org/)
  - [Node](http://nodejs.org/)

## Tests

[![Travis CI](https://secure.travis-ci.org/jaredhanson/js-sasl.png)](http://travis-ci.org/jaredhanson/js-sasl) [![David DM](https://david-dm.org/jaredhanson/js-sasl.png)](http://david-dm.org/jaredhanson/js-sasl)

##### Browser

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari
    
Headless tests can be executed directly from a terminal:
    
    $ make test-phantomjs

##### Node

To run tests in Node:

    $ make test-node

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
