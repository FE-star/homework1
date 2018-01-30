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

	// 这块代码没看懂
	p = sentinel;
	// p = new List(); ( p 和 sentinel都是new List()的引用)
	for (i = 0; i < len; i++) {
		/**
		 * i = 0, array[0] = 4;
		 * p.tail = new List(4), 这时sentinel.tail也会变为new List(4)
		 * 此时 堆用的存的是 List{ head: 0, tail: List{head: 4, tail: null} }
		 * p = p.tail, 也就是p.tail的一个引用, 与之前的堆切断了联系
		 * 此时p = new List(4);
		 * sentinel = List{ head: 0, tail: List{head: 4, tail: null} }
		 * p = sentinel.tail
		 */
		/**
		 * i = 1, array[1] = 6;
		 * p.tail = new List(6);
		 * sentinel = List{ head: 0, tail: List{head: 4, tail: { List{head: 6, tail: null}}}}
		 * p = p.tail,p又变成了p.tail的一个引用
		 * 这样以此类推
		 */
		p.tail = new List(array[i]);
		p = p.tail;
	}
	// sentinel = List{ head: 0, tail: List{head:4, tail: {List...}}}
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
