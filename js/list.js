/**
 * List
 * @author donaldyang
 */

function List(head, tail) {
	this.head = head || 0;
	this.tail = tail || null;
}

// Returns a new List containing the array.
List.list = function (array) {	// if array = [1, 2, 3]
	var sentinel = new List(), //List实例化出来的对象 sentinel = { head: 0, tail: null }
		len = array.length, //传入的数组的长度 len = 3
		p, i;

	p = sentinel; //p = { head: 0, tail: null }
	for (i = 0; i < len; i++) {
		p.tail = new List(array[i]); //p = {head: 0, tail: {head: 1, tail: null}}
		p = p.tail; // p = {head: 1, tail: null}
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
