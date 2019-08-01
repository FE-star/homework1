// const List = require('../js/list')
// const dcate = require('../quz/quz').dcate
// const sub = require('../quz/quz').sub
// const should = require('should')

// describe('unit test for quz.js', function () {

//     var A = List.list([4, 6, 7, 3, 8]),
//         B = List.list([3, 2, 5, 9]),
//         C = List.list([19, 8, 7, 3, 2]);

//     describe('#dcate()', function () {
//         it('should get a list consisting of elements of A followed by the elements of B', function () {
//             A.toString().should.equal('[ 4 6 7 3 8 ]');
//             dcate(A, B).toString().should.equal('[ 4 6 7 3 8 3 2 5 9 ]');
//             A.toString().should.not.equal('[ 4 6 7 3 8 ]');
//         });
//     });

//     describe('#sub()', function () {
//         it('should get the sublist consisting of LEN items from list L', function () {
//             C.toString().should.equal('[ 19 8 7 3 2 ]');
//             sub(C, 6, 2).toString().should.equal('[ 3 2 ]');
//             C.toString().should.equal('[ 19 8 7 3 2 ]');
//         });
//     });

// });

define(['List','quz'],function(List,quz){
    
    var dcate = quz.dcate
    var sub = quz.sub
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
            sub(C, 6, 2).toString().should.equal('[ 3 2 ]');
            C.toString().should.equal('[ 19 8 7 3 2 ]');
        });
    });
})