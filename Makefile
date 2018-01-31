test-coveralls:
	@mocha --require blanket --reporter mocha-lcov-reporter | COVERALLS_REPO_TOKEN="brV6FyuFzLKH5aL5gLVmf8hf1vKaVwtiB" ./node_modules/coveralls/bin/coveralls.js

.PHONY: test test-cov test-coveralls