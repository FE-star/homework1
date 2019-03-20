/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */

function dcate(A, B) {
	/** Fill in here **/
	const oldA = A;
	// 1. 找出A的最后一个元素
	while (A.tail !== null) {
		A = A.tail;
	}
	// 2. 把A的最后一个元素指向B
	A.tail = B;
	// 3. 返回A
	return oldA;
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	if (len <= 0 || start < 0) {
		return null;
	}
	// 1. 遍历链表，用计数器匹配start
	let num = 0;
	while (L !== null) {
		if (num === start) {
			break;
		}
		L = L.tail;
		num ++;
	}
	let num2 = 0;
	const oldL = L;
	while (L !== null) {
		num2++;
		if (num2 === len) {
			L.tail = null;
			break;
		}
		L = L.tail;
	}
	return oldL;
	// 2. 截取len个节点，节点数不够，返回能给的个数
}
