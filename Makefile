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

test-chrome:
	$(CHROME) $(WWW_TESTS)

test-firefox:
	$(FIREFOX) $(WWW_TESTS)

test-safari:
	$(SAFARI) $(WWW_TESTS)

test-phantomjs:
	$(MOCHA_PHANTOMJS) $(WWW_TESTS)

# Prior to running tests on Sauce Labs, ensure that a local server is listening
# and Sauce Connect is tunneling requests to it.
#
#     $ java -jar Sauce-Connect.jar $SAUCE_LABS_USERNAME $SAUCE_LABS_ACCESS_KEY
#     $ node test/cloud/server.js
#
test-cloud: test-saucelabs
test-saucelabs:
	clear && node test/cloud/terminal.js


# ==============================================================================
# Node Tests
# ==============================================================================

MOCHA = ./node_modules/.bin/mocha

test-node:
	@NODE_PATH=.. \
	$(MOCHA) \
		--reporter spec \
		--require test/bootstrap/node $(TESTS)


# ==============================================================================
# Static Analysis
# ==============================================================================

JSHINT = jshint

hint: lint
lint:
	$(JSHINT) $(SOURCES)


.PHONY: test test-chrome test-firefox test-safari test-phantomjs test-cloud test-saucelabs test-node hint lint
