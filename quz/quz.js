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
	let N = A
	while (N.tail) {
		N = N.tail
	}
	N.tail = B;
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
function sub(L, start, len) {
	/** Fill in here **/
	let arr = []
 	let idx = 0
 	for(let newL = L; newL!= null; newL = newL.tail){
 		if(idx>=start && idx<(start+len)){
 			arr.push(newL.head)
 		}
 		idx++
 	}
 	return List.list(arr)
}
