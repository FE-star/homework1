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
	let AB
	for (AB = A; A.tail !== null; A = A.tail) {
		AB = A.tail
	} 
	if (A.tail === null) {
		for (AB.tail =B; B.tail !== null; B = B.tail) {
			AB = B.tail
		}
	}
	return AB
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
	let DL
	for (L; L.tail !== null; L = L.tail) {
		if (L.head === start) {
			Dl = new List(start)
		}
		if (L.head === len) {
			if (!Dl.head) {
				Dl = new List(len)
			} else{
				Dl.tail = new List(len)
			}
		}
	}
	
}
