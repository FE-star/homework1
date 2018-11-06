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
	/** Point the last tail of A to B. **/
	let subList = A.tail;

	while( subList.tail ){
		subList = subList.tail;
	}
	subList.tail = B;

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
function sub(L, start, length) {

	let arr = [];
	let list = L;

	while( list ){
		arr.push(list.head);
		list = list.tail;
	}

	arr = arr.splice( start, start + length );

	if( arr.length !== length ) {
		throw new Error('Bad arguments.')
	}

	return List.list(arr);
}