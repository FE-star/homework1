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
	// 返回 （由A的元素组成的List，后面跟着B的元素。可以修改A的每项）这样的 List 结构
	/** Fill in here **/
	let target = A
	// 遍历 A tail不为null就一直找
	while (target.tail) {
		target = target.tail
	}
	// 遍历完A 把tail 接到B 继续遍历
	target.tail = B
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
	let result = []
	let idx = 0
	let target

	// target 不为null就一直深度遍历
	for (target = L; target !== null; idx++) {
		// 范围是从 start 到 start + len
		if (idx >= start && idx < (start + len)) {
			result.push(target.head)
		}
		target = target.tail
	}
	// 返回由result组成的 List 数据结构
	return List.list(result)
}
