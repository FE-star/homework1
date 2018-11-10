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
	var pointer = A;
	while (pointer.tail !== null) {
		pointer = pointer.tail
	}
	pointer.tail = B;
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
	var pointer = L, i = 0;
	var arr = [];

	if (start === 0) {
		arr.push(pointer.head);
	}

	while (pointer.tail !== null) {
		pointer = pointer.tail;
		i++;
		if (i >= start && arr.length < len) {
			arr.push(pointer.head);
		}
	}
	if (arr.length === 0) {
		return new Error("starting index doesn't exist");
	}
	return List.list(arr);
}
