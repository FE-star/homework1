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
	var sentinel = new List(), //sentinel = {head: 0,tail: null}
		len = array.length,
		p, i;

	p = sentinel; //{head: 0,tail: null}
	for (i = 0; i < len; i++) {  //[4, 6, 7, 3, 8]
		p.tail = new List(array[i]);  // {head: 6,tail: null} => p= {head: 0,tail: {head: 4,tail: null}}
		p = p.tail; // {head: 6,tail: null}
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
