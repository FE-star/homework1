var List = require('../js/list.js').List;
var dcate = require('../quz/quz.js').dcate;
var sub = require('../quz/quz.js').sub;
var should = require('should');
describe('unit test for quz.js', function () {

    var A = List.list([4, 6, 7, 3, 8]),
        B = List.list([3, 2, 5, 9]),
        C = List.list([19, 8, 7, 3, 2]);

    describe('#dcate()', function () {
        it('should get a list consisting of elements of A followed by the elements of B', function () {
        	A.toString().should.equal('[ 4 6 7 3 8 ]');
            dcate(A, B).toString().should.equal('[ 4 6 7 3 8 3 2 5 9 ]');
            A.toString().should.not.equal('[ 4 6 7 3 8 ]');
        });
    });

    describe('dcate函数的边界性检查', function(){
        it('当传入非List类型的参数或者非对象类型的参数时，返回空值', function(){
            should.not.exist(dcate(1,B));
            should.equal(dcate(B,1), null);
            should.equal(dcate({"head":1,"tail":{"head":2,"tail":null}},C), null);
        })
    });

    describe('#sub()', function () {
        it('should get the sublist consisting of LEN items from list L', function () {
        	C.toString().should.equal('[ 19 8 7 3 2 ]');
            sub(C, 3, 2).toString().should.equal('[ 3 2 ]');
            C.toString().should.equal('[ 19 8 7 3 2 ]');
        });
    });

    describe('sub函数的边界性检查', function () {
        it('当传入非List类型的参数时返回null', function () {
            should.not.exist(sub(1,2));
            should.equal(sub({},2), null);
        });

        it('当传入的长度非数值或者为负数时返回null', function () {
            should.not.exist(sub(C,1,0));
            should.not.exist(sub(C,1,-1));
            should.equal(sub(C,-1,-1), null);
            sub(C,1,9).toString().should.equal('[ 8 7 3 2 ]');
        });

        it('当传入的起始索引为负数时，默认从0索引开始', function () {
            sub(C,-1,1).toString().should.equal('[ 19 ]');
            sub(C,-1,5).toString().should.equal('[ 19 8 7 3 2 ]');
        });

        it('当传入的长度大于List的长度时，取全部数据', function () {
            sub(C,1,9).toString().should.equal('[ 8 7 3 2 ]');
            sub(C,0,9).toString().should.equal('[ 19 8 7 3 2 ]');
        });
    });


});
