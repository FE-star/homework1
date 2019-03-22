

function List(head, tail) {
	this.head = head || 0;
	this.tail = tail || null;
}

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

List.prototype.toString = function () {
	var res = '', L;
	res += '[';
	for (L = this; L !== null; L = L.tail) {
		res = res + ' ' + L.head;
	}
	res += ' ]';
	return res;
};