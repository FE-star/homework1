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
	A.tail.tail.tail.tail.tail = B;
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
	let arr = [],
		newArr = [],
		l, index;

	for (l = L; l !== null; l = l.tail) {
		arr.push(l.head);
	}
	
	index = arr.indexOf(start);
	
	if (index + len <= arr.length && index !== -1)
		newArr = arr.splice(index, len);
	
	return List.list(newArr);
}
