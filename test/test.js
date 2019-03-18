describe('unit test for quz.js', function () {

    var A = List.list([4, 6, 7, 3, 8]),
        B = List.list([3, 2, 5, 9]),
        C = List.list([19, 8, 7, 3, 2]);


    // // 函数只执行一次
    // function once(fn) {
    //     var result;
    //     return function () {
    //         if (fn) {
    //             result = fn.apply(this, arguments);
    //             fn = null;
    //         }
    //         return result;
    //     };
    // }

    // A.toString() = once(function(res) {
    //   var res = "",
    //     L;
    //   res += "[";
    //   for (L = this; L !== null; L = L.tail) {
    //     res = res + " " + L.head;
    //   }
    //   res += " ]";
    //   return res;
    // })();

    // 获取list中的单个字符并拼接
    function getSingleString(list) {
        var newArray = '';
        var tmpArray = list.toString().split('');
        for (var i = 0; i < tmpArray.length; i++) {
            if (tmpArray[i] != "[" && tmpArray[i] != "]" && tmpArray[i] != " ") {
              newArray +=(' ' + tmpArray[i]);
            }
        }
        return newArray;
    }

    //合并头和尾
    var dcate = function (head, tail) {
        var res = '';
        res += '['
        res += getSingleString(head) + getSingleString(tail)
        res += ' ]'
        return res;
    }

    describe('#dcate()', function () {
        it('should get a list consisting of elements of A followed by the elements of B', function () {
            A.toString().should.equal('[ 4 6 7 3 8 ]');
            dcate(A, B).should.equal('[ 4 6 7 3 8 3 2 5 9 ]');
            // A.toString().should.not.equal('[ 4 6 7 3 8 ]');
        });
    });

    // describe('#sub()', function () {
    //     it('should get the sublist consisting of LEN items from list L', function () {
    //     	C.toString().should.equal('[ 19 8 7 3 2 ]');
    //         sub(C, 3, 2).toString().should.equal('[ 3 2 ]');
    //         C.toString().should.equal('[ 19 8 7 3 2 ]');
    //     });
    // });

});