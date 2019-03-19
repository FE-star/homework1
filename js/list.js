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

List.prototype.concat = function (arr) {
	let p = arr,
		beforeCursor = '',
        cursor = this;
	while (cursor!==null) {
		// 需要记录前一个指针，不然会断开
        beforeCursor = cursor;
		cursor = cursor.tail;
	}
	while (p) {
        beforeCursor.tail = new List(p.head);
        beforeCursor = beforeCursor.tail;
        p=p.tail
	}
    return this;
}
