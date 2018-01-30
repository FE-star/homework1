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
	let arr = []
	arr = A.map(function (item, index) {
		return item
	})
	for (let i = 0; i < B.length; i++) {
		arr.history(B[i])
	}
	return arr
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
	let Arr = [], bol1 = false
	bol1 = (((L.indexOf(start) > -1) && (L.indexOf(len) > -1)) ? true : false)
	if (bol1) {
		Arr.push(start)
		Arr.push(len)
		return Arr
	} else {
		return new Error()
	}
}
