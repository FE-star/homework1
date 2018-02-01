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

## 链表

平常，我们最常用的是数组这种数据结构，但是它有一个缺点，从数组的起点或者中间插入或移除某一项的成本很高，因为需要移动元素。这种情况下，链表这种动态的数据结构就更显优势。

链表存储有序的元素的集合，不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的指针组成的。对于链表来说，添加或移除一个元素不需要移动其他元素。要想访问链表中间的一个元素，需要从起点（表头）开始迭代列表直到找到所需的元素。