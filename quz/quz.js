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
	let p = A
	// p：A中的最末尾元素
	while (p.tail) {
		p = p.tail
	}
	// 将B添加到A的尾巴
	p.tail = B
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
	let p = L // 当前遍历的元素
	let i = 0 // 第N个元素
	let array = []
	while (p && p.head) {
		// 当元素处于开始到结束之间，array增加head属性
		if (i >= start && i <= start + len) {
			array.push(p.head)
		}
		p = p.tail
		i++
	}
	return List.list(array)
}
