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
	var a = A;
	while(a){
		if(a.tail === null){
			a.tail = B;
			break;
		}
		a = a.tail;
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
	var arr = [], a = L;
	while(a){
		arr.push(a.head);
		if(a.tail === null){
			break;
		}
		a = a.tail;
	}
	arr = arr.splice(start,len);

	return List.list(arr);

}
