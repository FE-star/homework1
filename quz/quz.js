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
	for (let i = A; i; i = i.tail ) {
		if (i.tail === null) {
			i.tail = B;
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
	/** Fill in here **/
	let myList = new List();
	let res = myList;
	let num = 1;
	for (let i = L; i; i = i.tail) {
		if (i.head === start || num > 1) {
			res.head = i.head;
			num++;
			if (num > len) {
				break;
			}
			res.tail = new List();
			res = res.tail;	
			num++;
		}
	}
	return myList;
}
