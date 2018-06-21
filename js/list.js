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

List.prototype.count = function () {
	var flag = 0,
		L = this;
	while (L) {
		flag++;
		L = L.tail;
	}
	return flag;
}

List.prototype.get = function (index) {
	if (index < 0 || index > this.count()) return null;
	if (index === 0) return this;
	var flag = 0
	L = this;
	while (L.tail) {
		L = L.tail;
		flag++;
		if (index === flag) return L;
	}
}

List.prototype.push = function (tail) {
	var len = this.count,
		L = this;
	while (L.tail) {
		L = L.tail;
	}
	L.tail = new List(tail);
	return this;
}