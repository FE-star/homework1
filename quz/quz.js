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
	let p = null; // 指针
	// 参考了一下list.js,感觉这么写for还是比较骚的
	for(let a = A; a.tail; p = a = a.tail) {}
	p.tail = B;
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
	L = Object.assign({}, L);
	let sublist = null;
	for (let i = 0, p = L; i <= start + len; i++) {
		if (i === start) {
			sublist = p;
		}
		if (i === start + len - 1) {
			p.tail = null;
			break;
		} else if (!p.tail) {
			throw ('the desired items don\'t exist');
		}
		p = p.tail;
	}

	return sublist;
}
