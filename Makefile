test-coveralls:
	@mocha --require blanket --reporter mocha-lcov-reporter | COVERALLS_REPO_TOKEN="G3C6tZMK3Sc21SwZmKOY7SyMvivp9WUwV" ./node_modules/coveralls/bin/coveralls.js