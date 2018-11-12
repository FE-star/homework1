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
	let temp = A.tail; // 获取A链表的尾部
	while (temp) {
		if (!temp.tail) { // A链表的最后一个节点是null
			temp.tail = B; // 将指针指向B链表
			break;
		}
		temp = temp.tail;
	}
 	return A;
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
	let temp = L;
	const length = start + len - 1;
	for (var i = 0; i < length; i++) {
		if (i === start) L = temp;
		temp = temp.tail;
	}
	temp.tail = null;
 	return L;
}

