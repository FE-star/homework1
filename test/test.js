describe('unit test for quz.js', function () {

    var A = List.list([4, 6, 7, 3, 8]),
        B = List.list([3, 2, 5, 9]),
        C = List.list([19, 8, 7, 3, 2]),
        D = List.list([2, 6, 7, 11, 6, 5]);

    describe('#dcate()', function () {
        it('should get a list consisting of elements of A followed by the elements of B', function () {
        	A.toString().should.equal('[ 4 6 7 3 8 ]');
            dcate(A, B).toString().should.equal('[ 4 6 7 3 8 3 2 5 9 ]');
            dcate(B, D).toString().should.equal('[ 3 2 5 9 2 6 7 11 6 5 ]');
            A.toString().should.not.equal('[ 4 6 7 3 8 ]');
        });
    });

    describe('#sub()', function () {
        it('should get the sublist consisting of LEN items from list L', function () {
        	C.toString().should.equal('[ 19 8 7 3 2 ]');
            sub(C, 3, 2).toString().should.equal('[ 3 2 ]');
            sub(C, 8, 3).toString().should.equal('[ 8 7 3 ]');
            C.toString().should.equal('[ 19 8 7 3 2 ]');
        });

        it('should be an error if the desired items do not exist.', function () {
            C.toString().should.equal('[ 19 8 7 3 2 ]');
            should.throws(sub(C, 7, 6), TypeError);
            should.throws(sub(C, 10, 2), TypeError);
        });
    });

});