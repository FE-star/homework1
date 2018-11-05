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
	var flag = true;
	var arr = [];
	while(flag) {
		if (!A.tail) {
			A.tail = B;
            for (A; A !== null; A = A.tail) {
                arr.push(A.head);
            }
			flag = false;
		} else {
            arr.push(A.head);
            A = A.tail;
		}
    }
    return List.list(arr).toString();
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
	var arr = [];
	for (L; L !== null; L = L.tail) {
		arr.push(L.head);
	}
	var index = arr.indexOf(start);
	return List.list(arr.slice(index, index + len)).toString();
}
