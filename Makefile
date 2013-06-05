SOURCES = *.js lib/*.js
TESTS = test/*.test.js


# ==============================================================================
# Browser Tests
# ==============================================================================

CHROME = open -a "Google Chrome"
FIREFOX = open -a "Firefox"
SAFARI = open -a "Safari"
PHANTOMJS = phantomjs

MOCHA_PHANTOMJS = ./node_modules/.bin/mocha-phantomjs
WWW_TESTS = test/www/index.html


test: test-phantomjs

test-chrome: test-browser
	$(CHROME) $(WWW_TESTS)

test-firefox: test-browser
	$(FIREFOX) $(WWW_TESTS)

test-safari: test-browser
	$(SAFARI) $(WWW_TESTS)

test-phantomjs: node_modules test-browser
	$(MOCHA_PHANTOMJS) $(WWW_TESTS)

test-browser: test/www/js/lib
test/www/js/lib:
	cd test/www && volo add


# Prior to running tests on Sauce Labs, ensure that a local server is listening
# and Sauce Connect is tunneling requests to it.
#
#     $ java -jar Sauce-Connect.jar $SAUCE_LABS_USERNAME $SAUCE_LABS_ACCESS_KEY
#     $ node test/cloud/server.js
#
test-saucelabs: node_modules test-browser
	clear && node test/cloud/terminal.js


# ==============================================================================
# Node Tests
# ==============================================================================

MOCHA = ./node_modules/.bin/mocha

test-node: node_modules
	@NODE_PATH=.. \
	$(MOCHA) \
		--reporter spec \
		--require test/bootstrap/node $(TESTS)

node_modules:
	npm install


# ==============================================================================
# Static Analysis
# ==============================================================================

JSHINT = jshint

hint: lint
lint:
	$(JSHINT) $(SOURCES)


# ==============================================================================
# Clean
# ==============================================================================

clean:

clobber: clean
	rm -rf node_modules
	rm -rf test/www/js/lib


.PHONY: test test-chrome test-firefox test-safari test-phantomjs test-cloud test-saucelabs test-node hint lint
