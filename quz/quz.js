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
	/* var A = A.toString().split(' ');
	A = A.slice(1, A.length-1);
	var B = B.toString().split(' ');
	B = B.slice(1, B.length-1);
	return List.list(A.concat(B)); */
	for(var L = A; L != undefined; L = L.tail){
		if(!L.tail){
			L.tail = B;
			break;
		};
	};
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
	L = L.toString().split(' ');
	L = L.slice(1, L.length-1);
	return List.list(L.slice(start, start+len));
}
