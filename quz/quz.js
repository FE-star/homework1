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
	// 记录下A的内存地址
	let res = A
	// 一直循环，直到找到tail为null停止
	while(res.tail) {
		// 一层一层地查找tail对象
		res = res.tail
	}
	// 找到的最终tail，地址引向B的地址，连接上list B
	res.tail = B
	// 不能返回res，因为此时res已经改变了，指向的是初始A的tail为null的地址
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
	return List.list(this.goTail(this.goTail(L,start).obj,len,[]).arr)
}
function goTail(obj, num, arr) {
	while(num--) {
		arr ? arr.push(obj.head) : 0
		obj = obj.tail
	}
	return {obj, arr}
}