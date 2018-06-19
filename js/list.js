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
	
	// sentinel.tail 是要返回的实例，把 lastTailOwner 赋给该实例，让 getLastTailOwner 能获得
	sentinel.tail.lastTailOwner = p;

	return sentinel.tail;
}

// Returns the List owns the last tail owner
List.prototype.getLastTailOwner = function () {
	// 实例方法，而非“类”方法，才能拿到实例对象 this
	return this.lastTailOwner;
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
