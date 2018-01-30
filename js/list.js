/**
 * List
 * @author donaldyang
 */

function List(head, tail) {
	this.head = head || 0;
	this.tail = tail || null;
}

// Returns a new List containing the array.
// 数组转换称定义得list
List.list = function (array) {
	var sentinel = new List(),
		len = array.length,
		p, i;

	p = sentinel; // 对象赋值,存储得永远是一个内存地址,而实际操作的数据还是在这个地址上做得修改
	for (i = 0; i < len; i++) {
		p.tail = new List(array[i]);
		p = p.tail;
	}
	return sentinel.tail;
}

// Returns a readable String for THIS.
// 将一个list集合 转化成为 array格式的
List.prototype.toString = function () {
	var res = '', L;
	res += '[';
	for (L = this; L !== null; L = L.tail) {
		res = res + ' ' + L.head;
	}
	res += ' ]';
	return res;
};