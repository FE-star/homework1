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
		len = array.length,
		p, i;

	p = sentinel;
	for (i = 0; i < len; i++) {
		if(i==len-1){
			p.tail = new List(array[i]);
			break;
		}
		p.tail = new List(array[i],new List());
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
}
