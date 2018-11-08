describe('unit test for quz.js', function () {

    var A = List.list([1]),
        B = List.list([3, 2, 5, 9]),
        C = List.list([19, 8, 7, 3, 2]);

    describe('#dcate()', function () {
        it('should get a list consisting of elements of A followed by the elements of B', function () {
        	A.toString().should.equal('[ 1 ]');
            dcate(A, B).toString().should.equal('[ 1 3 2 5 9 ]');
            A.toString().should.not.equal('[ 1 ]');
        });
    });

    describe('#sub()', function () {
        it('should get the sublist consisting of LEN items from list L', function () {
        	C.toString().should.equal('[ 19 8 7 3 2 ]');
            sub(C, 3, 2).toString().should.equal('[ 3 2 ]');
            C.toString().should.equal('[ 19 8 7 3 2 ]');
        });
    });

});