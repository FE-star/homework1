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
	var a = A;
	while (a.tail) {
		a = a.tail;
	}
	a.tail = B;
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
	if((L.constructor === List) && start && len ) {
		var tempArr = []
		var tem = L
		var end = start + len
		for (let i = 0; tem !== null; tem = tem.tail, i++) {
			if (i > start - 1 && i < end) {
				tempArr.push(tem.head)
			}
		}
		return List.list(tempArr)
	} else {
		throw new Error('传入的参数有误');
	}
    
}