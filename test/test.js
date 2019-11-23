describe('unit test for quz.js', function () {

    var A = List.list([4, 6, 7, 3, 8]),
        B = List.list([3, 2, 5, 9]),
        C = List.list([19, 8, 7, 3, 2]);


    describe('#list()', function () {
        it('新建list时无参数,返回null', function () {
            should(List.list([])).be.exactly(null);
        });
    });

    describe('#dcate()', function () {
        it('should get a list consisting of elements of A followed by the elements of B', function () {
            A.toString().should.equal('[ 4 6 7 3 8 ]');
              dcate(A, B).toString().should.equal('[ 4 6 7 3 8 3 2 5 9 ]');
              A.toString().should.not.equal('[ 4 6 7 3 8 ]');
        });
        it('含非List参数，则直接返回参数中的List，若都无则返回空', function () {
            dcate([1, 2, 3], B).toString().should.equal('[ 3 2 5 9 ]');
            dcate(C, [1, 2, 3]).toString().should.equal('[ 19 8 7 3 2 ]');
            should(dcate([1, 2], [3, 4])).be.exactly(null);
        });
    });

    describe('#sub()', function () {
        it('should get the sublist consisting of LEN items from list L', function () {
            C.toString().should.equal('[ 19 8 7 3 2 ]');
              sub(C, 3, 2).toString().should.equal('[ 3 2 ]');
              C.toString().should.equal('[ 19 8 7 3 2 ]');
        });
        it('截取List越界时：(1)begin不越界，end越界，返回有效的长度', function () {
            sub(C, 3, 8).toString().should.equal('[ 3 2 ]');
        });
        it('截取List越界时：(2)begin越界，抛错RangeError', function () {
            should.throws(()=>{sub(C, 8, 2)}, /^RangeError: the desired items don't exist.$/)
        });
    });

});
