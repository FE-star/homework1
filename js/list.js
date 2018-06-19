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
// exports.List = List