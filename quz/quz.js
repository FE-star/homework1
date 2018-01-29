/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
// find a middle variable to keep B and then change them
function dcate(A, B) {
	/** Fill in here **/
	A = A.concat(B)
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
	if (len === 0) return null
	var startIndex = L.indexOf(start)
	if (startIndex === 0) return L
	return L.slice(startIndex, len)
}
