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

    describe('#sub()', function () {
        it('should get the sublist consisting of LEN items from list L', function () {
        	C.toString().should.equal('[ 19 8 7 3 2 ]');
            sub(C, 3, 2).toString().should.equal('[ 3 2 ]');
            C.toString().should.equal('[ 19 8 7 3 2 ]');
        });

        it('should get an error: invalid start', function () {
            (function () { sub(C, 5, 1); }).should.throw('invalid start parameter');
        });

        it('should get an error: invalid length', function () {
            (function () { sub(C, 3, 3); }).should.throw('invalid length parameter');
        });
    });

});