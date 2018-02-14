/**
 * List
 * @author donaldyang
 */

 /**
  * List {
  * 	head:1,
  * 	tail:{
  * 		head:2,
  * 		tail:{
  * 			head:3,
  * 			tail:null
  * 		}
  * 	}
  * }
  */
 function List(head, tail) {
	this.head = head || 0;
	this.tail = tail || null;
}

// Returns a new List containing the array.
List.list = function (array) {
	/** 
	 * father，一个新的List对象
	 * father = {
	 * 		head:0,
	 * 		tail:null
	 * }
	 */
	var father = new List();
	//	参数长度
	var	len = array.length;
	/**
	 * 中间变量p，储存的指针和father相同
	 */
	var	p;

	p = father;
	/**
	 * 第一次循环开始之前，p和father是同样的对象
	 * 也就是{
	 * 		head:0,
	 * 		tail:null
	 * }
	 * 第一次循环开始，将p.tail属性赋为新的List对象
	 * 那么说father的tail属性也同等与p.tail的新对象
	 * father = {
	 * 		head:0,
	 * 		tail:{
	 * 			head:1,
	 * 			tail:null
	 * 		}
	 * }
	 * 然后将p指向p.tail,也就是father.tail
	 * 第二次循环开始前，father已经多了一个儿子了
	 * father = {
	 * 		head:0,
	 * 		tail:{
	 * 			head:1,
	 * 			tail:null
	 * 		}
	 * }
	 * p的值已经改变了，等于father.tail了
	 * p = {
	 * 		head:1,
	 * 		tail:null
	 * }
	 */
	for (var i = 0; i < len; i++) {
		p.tail = new List(array[i]);
		p = p.tail;
	}
	/**
	 * 返回数链
	 */
	return father.tail;
}

// Returns a readable String for THIS.
//[ 1 2 3 4 5 ]
List.prototype.toString = function () {
	var res = '', L;
	res += '[';
	for (L = this; L !== null; L = L.tail) {
		res = res + ' ' + L.head;
	}
	res += ' ]';
	return res;
};
