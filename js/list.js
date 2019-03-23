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
	var sentinel = new List(), // 
		len = array.length,
		p, i;

	p = sentinel;
	for (i = 0; i < len; i++) {
		p.tail = new List(array[i]);
		p = p.tail;
	}
	// console.log(sentinel.tail);
	return sentinel.tail;
}

List.prototype.forEach = function(cb){
		var L,i;
		for (L = this,i=0; L !== null; L = L.tail,i++) {
			cb(L.head,i)
		}
}

List.prototype.push = function(item){
	var L = this;
	while(L.tail)
	{
		L = L.tail
	}
	L.tail = new List(item);
	return this
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

