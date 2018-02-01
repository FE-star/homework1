# 作业

[![Build Status](https://travis-ci.org/Wortheme/homework1.svg?branch=master)](https://travis-ci.org/Wortheme/homework1)
[![Coverage Status](https://coveralls.io/repos/github/Wortheme/homework1/badge.svg)](https://coveralls.io/github/Wortheme/homework1)

## 开始

* fork 代码
* 修改代码跑通测试
* 将代码提交回主干仓库，让代码通过CI测试

## 测试覆盖

第一步，安装 [karma-coverage](https://github.com/karma-runner/karma-coverage) 和 [karma-coveralls](https://github.com/caitp/karma-coveralls)，karma-coverage 依赖包含[Istanbul](https://github.com/gotwarlost/istanbul)，但是不用重复安装 Istanbul。karma-coveralls 用于将 karma-coverage 生成的测试覆盖率报告上传到 [coveralls.io](https://coveralls.io/)

```
npm i karma-coverage karma-coveralls --save-dev
```

第二步，修改 `karma.conf.js` 的配置

```js
module.exports = function(config) {
  config.set({
    ...
    // source files, that you wanna generate coverage for
    // do not include tests or libraries
    // (these files will be instrumented by Istanbul)
    preprocessors: {
        'quz/*.js': ['coverage']
    },
    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage', 'coveralls'],

    // optionally, configure the reporter
    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    },
    ...
  })
}
```