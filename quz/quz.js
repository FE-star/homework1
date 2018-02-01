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
	if(typeof A !== "object" || A.constructor != List || typeof B !== "object" || B.constructor != List){
		return List.list([]);
	}
	var tmp = A;
	while(tmp.tail){
		tmp = tmp.tail;
	}
	tmp.tail = B;
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
	if(typeof L !== "object" || L.constructor != List){
		return List.list([]);
	}
	if(typeof start !== "number" || +start < 0){
		start = 0;
	}
	if(typeof len !== "number" || len < 0 || len == 0){
		return List.list([]);
	}
	var rel = [], tmp = L, i = 0, end = start + len;
	while(tmp){
		if(i++>=start && i<=end){
			rel.push(tmp.head)
		}else if(i>end){
			break;
		}
		tmp = tmp.tail;
	}
	return List.list(rel);
}
