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
	let tailOfA = A;
	while (tailOfA.tail) { //找到A的最后一项的tail
		tailOfA = tailOfA.tail;
	}
	tailOfA.tail = B;
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
	let header = L;
	for(let i = 0; i < start; i++) {
		header = header.tail;
	}
	let temp = res = new List();
	for (let i = 0; i < len; i++) {
		temp.tail = new List(header.head);
		header = header.tail;
		temp = temp.tail;
	}
	return res.tail;
}
