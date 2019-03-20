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
	var temp = A;
	while(temp.tail != null) {
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
	var arr = [],
		temp = L,
		i,
		msg = "The desired items don't exist";

	// 判断L是否为List实例
	if (!(L instanceof List)) {
		throw new Error(msg);
	}

	// 判断start和len是否为负数
	if(start < 0 || len < 0) {
		throw new Error(msg);
	}

	for (i = 0; i < start; i++) {
		temp = temp.tail;
		if (temp == null) { throw new Error(msg) }
	}

	arr.push(temp.head);
	for (i = 0; i < len - 1; i++) {
		temp = temp.tail;
		if (temp == null) { throw new Error(msg) }
		arr.push(temp.head);
	}

	return List.list(arr);

}
