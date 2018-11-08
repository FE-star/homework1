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
	let aArr = A.toString().split(' ').slice(1, -1);
	let bArr = B.toString().split(' ').slice(1, -1);
	const temp = List.list(aArr.concat(bArr));

	A.head = temp.head;
	A.tail = temp.tail;

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
	let arr = L.toString().split(' ').slice(start+1, start+1+len);
	return List.list(arr);
}
