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
    let L;
    	for (L = A; L !== null; L = L.tail) {
		console.log(L.tail);
		if (L.tail == null) {
			L.tail = B;
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
    let Arr = L;
    for (let i = 0; i<start; i++) {
        Arr = Arr.tail;
	}
    let a = [];
    for (let j=0; j<len; j++) {
        a.push(Arr.head);
        Arr = Arr.tail;
        }
    return List.list(a);
}
