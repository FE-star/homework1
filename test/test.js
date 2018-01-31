describe('List', function () {
    var A = List.list([4, 6, 7, 3, 8])
    describe("#find()", function() {
        it('should return [ 7 3 8 ] when params is 2', function() {
            A.find(2).toString().should.be.equal('[ 7 3 8 ]')
        })
        it('should return [ 8 ] when params is 4', function() {
            A.find(4).toString().should.be.equal('[ 8 ]')
        })
        it('should return [ 4 6 7 3 8 ] when params is 0', function() {
            A.find(0).toString().should.be.equal('[ 4 6 7 3 8 ]')
        })
        it('should return null when param is 5', function() {
            should(A.find(5)).be.exactly(null)
        })
        it('should return null when param less then 0', function() {
            should(A.find(-1)).be.exactly(null)
        })
        it('should return null when typeof param is not a number', function() {
            should(A.find("str")).be.exactly(null)
        })
    })
})

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
            sub(C, 2, 2).toString().should.equal('[ 7 3 ]');
            C.toString().should.equal('[ 19 8 7 3 2 ]');
        });
    });

});