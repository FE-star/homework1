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
	var temp = A.tail;
	while(temp.tail) {
		temp = temp.tail;
	}
	temp.tail = B;
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
	var str = L.toString();
	// 删掉 [] 组成新数组
	var arr = str.substring(1, str.length - 1).trim().split(' ');
	if(start + len > arr.len) {
		throw Error('items don\'t exist');
	}
	return List.list(arr.splice(start, start + len));
}
