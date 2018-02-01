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

List.prototype.concat = function (array) {

	var currentListElement = this;
	while (currentListElement.tail != null) {
		currentListElement = currentListElement.tail;
	}
	currentListElement.tail = array;

	return this;
}

List.prototype.slice = function (start, length) {
	var startElement = this;
	var returnElement;
	for (var i = 0; i < start; i++) {
		startElement = startElement.tail;
	}
	returnElement = new List(startElement.head);
	var tempElement = startElement.tail;
	var p = returnElement;
	for (var j = 1; j < length; j++) {
		var temp = new List(tempElement.head);
		tempElement = tempElement.tail;

		p.tail = temp;
		p = p.tail;

	}
	return returnElement;
}
