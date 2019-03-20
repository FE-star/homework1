/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * 一个A在前，B在后的列表，允许修改A，不能使用new
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	var tempList;
	tempList = A
	while (tempList.tail !== null) {
		tempList = tempList.tail
	}
	tempList.tail = B
	return A
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * 子表是母表的一部分，长度是参数len
 * start参数是开始下标
 * 不允许修改母表
 * 如果长度超出抛出错误
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	let end = start + len
	var paramIndex,
		result,
		resultIndex;
	var i = 0,
		paramIndex = L;
	while (i !== start) {
		i++
		paramIndex = paramIndex.tail//找到当前层级，对应当前下标
	}
	result = new List(paramIndex.head);
	resultIndex = result;
	i++//初始化要返回的list的第一个
	for (paramIndex = paramIndex.tail; i <= end; paramIndex = paramIndex.tail, i++) {
		if (i < end) {
			resultIndex.tail = new List(paramIndex.head);
			resultIndex = resultIndex.tail;
		} else if (i >= end) {
			break;
		}
	}
	return result;
}
