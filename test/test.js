
describe('unit test for quz.js', function () {
    var A = List.list([4, 6, 7, 3, 8]),
        B = List.list([3, 2, 5, 9]),
        C = List.list([19, 8, 7, 3, 2]);
				D = List.list([]);
// console.log("DDDDDDD", D.toString())
    describe('#dcate()', function () {
        it('should get a list consisting of elements of A followed by the elements of B', function () {
        		A.toString().should.equal('[ 4 6 7 3 8 ]');
        	  dcate(A, B).toString().should.equal('[ 4 6 7 3 8 3 2 5 9 ]');
        	  A.toString().should.not.equal('[ 4 6 7 3 8 ]');

        	  A.toString().should.equal('[ 4 6 7 3 8 3 2 5 9 ]');
						D.toString().should.equal('[ ]');
        	  // console.log(dcate(A, B).toString(),dcate(A, D).toString())
						dcate(A, D).toString().should.equal('[ 4 6 7 3 8 3 2 5 9 ]')
						// dcate(A, B).toString().should.equal(dcate(A, D).toString()); 这样为什么死循环？
        });
    });

    describe('#sub()', function () {
        it('should get the sublist consisting of LEN items from list L', function () {
        	  C.toString().should.equal('[ 19 8 7 3 2 ]');
            sub(C, 3, 2).toString().should.equal('[ 3 2 ]');
            C.toString().should.equal('[ 19 8 7 3 2 ]');
            should.throws(() => {sub(C, 3, 5)}, function(res) {return /超出异常/.test(res)} , "不期待的错误")
						sub(C, 2).toString().should.equal('[ 7 3 2 ]')
						sub(C, -4).toString().should.equal('[ 8 7 3 2 ]')
        });
    });

});