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
	let flag = A.tail
	while (flag !== null && flag.tail !== null) {
		flag = flag.tail
	}
	flag.tail = B
	return A
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
	if (!L || !start) {
		throw `desired items don't exist.`
	}
	let result = null
	let flag = L
	let i = 0
	let arr = []

	while (flag !== null) {
		if (i === start) {
			// 获取起始点
			result = new List(flag.head, flag.tail)
			break;
		} else if (i < start) {
			flag = flag.tail
		}
		i++
	}
	// 根据len的值来生成数组
	for (let i=0;i<len;i++) {
		if (!result) {
			throw `desired items don't exist.`
		}
		arr.push(result.head)
		result = result.tail
	}
	return List.list(arr)
}
