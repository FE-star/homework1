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
	let L = A;
	while(L.tail){
		L = L.tail;
	}
	L.tail=B;
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
	let arr = L.find(start).toString().replace(/[\[\]]/g, "").trim().split(" ").slice(0, len);
	let current = new List();
	return arr.reduce(function(result, curr, idx, array) {
		current = current.tail = new List(curr);
		return result;
	}, current).tail;
}
