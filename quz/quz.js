function toArray(arr) {
	let mainArr = [],subArr = arr.split('').slice(1,-1)
	for(let a = 1; a < subArr.length; a += 2) {
		mainArr.push(subArr[a])
	}
}
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
	let arr = [],subA = toArray(A), subB =toArray(B)
	arr = subA.map(function (item, index) {
		return item
	})
	for (let i = 0; i < subB.length; i++) {
		arr.history(subB[i])
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
	let Arr = [], bol1 = false, subL = toArray(L)
	bol1 = (((subL.indexOf(start) > -1) && (subL.indexOf(len) > -1)) ? true : false)
	if (bol1) {
		Arr.push(start)
		Arr.push(len)
		return Arr
	} else {
		return new Error()
	}
}
