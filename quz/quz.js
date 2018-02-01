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
	let N = A;
	for(let L = A; L !== null; L = L.tail){
		N = L;
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
	let N = reArr(L);
	let R = N.splice(start,len);
	function reArr(ob){
		let A = [];
		for(let S = ob; S !== null; S = S.tail){
			A.push(S.head)
		}
		return A;
	}
	return List.list(R);
}






