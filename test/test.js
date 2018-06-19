/**
 * List
 * @author donaldyang
 */

function List(head, tail) {
	this.head = head || 0;
	this.tail = tail || null;
}

// Returns a new List containing the array.
List.list = function (array) {
	var sentinel = new List(),
		// sentinel = {
		// 	 head: 0,
		//   tail: null
		// }
		len = array.length,
		p, i;

	p = sentinel;
	// p === sentinel

	for (i = 0; i < len; i++) {
		p.tail = new List(array[i]);
		// sentinel = p = {
		//   head : 0,
		//   tail : {
		// 	   head : array[i],
		//     tail : null
		//   }
		// }
		p = p.tail;
		// sentinel =/= p = {
		// 	 head : array[i],
		//   tail : null
		// }
		//
		// ==============>
		//
		// sentinel = {
		//   head : 0,
		//   tail : p
		// }
	}
	return sentinel.tail;
}

// Returns a readable String for THIS.
List.prototype.toString = function () {
	var res = '', L;
	res += '[';
	for (L = this; L !== null; L = L.tail) {
		res = res + ' ' + L.head;
	}
	res += ' ]';
	return res;
};
/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
// v0.0.5
function dcate(A, B) {
	/** Fill in here **/
	A.tail !== null ? dcate(A.tail, B) : A.tail = B
	return A
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	var res = new List(), _L, i;
	var _res = res
	if(typeof len === 'undefined' || len > 0) {
		let end
		if(len > 0) {
				end = start + len-1
		} else {
				end = start + NaN
		}
		for (_L = L, i = 0 ; ; i++, _L = _L.tail) {
			console.log(i, _L.toString(), start, end)
			if(i >= start) {

				if(Number.isNaN(end)) {
					_res.head = _L.head
					_res.tail = _L.tail
					break;
				}
				if(i > end) {
					break
				} else if(i === end) {
					_res.head = _L.head
					_res.tail = null
					break;
				} else if(i < end){
					_res.head = _L.head
					_res.tail = new List()
					console.log('=========',i,_res.toString() ,res.toString(), start, end)
					_res = _res.tail
				}

				console.log('=========',i,_res.toString() ,res.toString(), start, end)
			}
		}
	} else if(len < 0) {
		throw new Error('expect third param is bigger than 0, but found ', len)
	} else if (len === 0 ) {
		return res
	}
	return res;
}

describe('unit test for quz.js', function () {
    // var List = require('../js/list.js')
    // var {dcate, sub} = require('../quz/quz.js')
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
    });

});