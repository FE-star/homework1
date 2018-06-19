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
	// 解题思路:
	// 1. 通过test.js和list.js可以看出，这里的操作目标是需要将A和B变成一个List。
	// 2. 循环遍历A找到最内层tail为null的值(这里存储在L中), 把B作为L的tail的值。然后返回A即可。
	var L = A;
	for (; L !== null; L = L.tail)
		L.tail = B;
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
	// 从start索引值开始创建一个新的List,
	// 到start + len截止循环结束设置最内层的tail为null
	let index = 0,
		resList,
		tmp;
	if (!L) throw new Error('List 不能为空');
	for (let l = L; l && index < start + len; l = l.tail) {
		if (index === start) {
			resList = new List(l.head)
			tmp = resList;
		} else if (index > start) {
			tmp.tail = new List(l.head);
			tmp = tmp.tail;
		}
		index++;
	}
	tmp.tail = null;
	return resList;
}