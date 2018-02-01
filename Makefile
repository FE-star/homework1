test-coveralls:
	@mocha --require blanket --reporter mocha-lcov-reporter | COVERALLS_REPO_TOKEN="1YMpW0X8cMInhR9glhlTEM8lovs1bY9RV" ../node_modules/coveralls/bin/coveralls.js