/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
/**
 * let L = A，L和Ａ指向同一个地址
 */
function dcate(A, B) {
	for (let L = A; L !== null; L = L.tail) {
		if (L.tail === null) {
			L.tail = B;
			break;
		}
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
	start = Number(start)
	len = Number(len)
	let end = start + len - 1
	let P = []
	for (let A = L, i = 0; A !== null; A = A.tail, i++) {
		if (i < start) continue
		if (i > end) break
		if (i >= start && i <= end) {
			P.push(A.head)
		}
	}
	return List.list(P)
}
