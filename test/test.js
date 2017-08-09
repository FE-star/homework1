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

        it('参数不能为空测试',function(){
            dcate.bind(null,null,B).should.throw('参数1不能为空');

            dcate.bind(null,A,null).should.throw('参数2不能为空');
        });
    });

    describe('#sub()', function () {
        it('should get the sublist consisting of LEN items from list L', function () {
        	C.toString().should.equal('[ 19 8 7 3 2 ]');
            sub(C, 3, 2).toString().should.equal('[ 3 2 ]');
            C.toString().should.equal('[ 19 8 7 3 2 ]');
        });

        it('参数不能为空测试',function(){
            sub.bind(null,null).should.throw('要截取的List不能为空');
        });

        it('参数默认值测试',function(){
            sub(B).toString().should.equal('[ 3 2 5 9 ]');
        });
    });

});