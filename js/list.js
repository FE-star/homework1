/**
 * List
 * @author donaldyang
 */

function List(head = 0, tail = null) {
	this.head = head;
	this.tail = tail;
}

// Returns a new List containing the array.
List.list = function (array) {
	var sentinel = new List(),
		len = array.length,
		p, i;
	p = sentinel;
	for (i = 0; i < len; i++) {
		p.tail = new List(array[i]);
		p = p.tail;
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
