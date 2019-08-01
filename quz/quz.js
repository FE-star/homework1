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
	/**
	 * 思路：
	 * 1. 循环找到A.tail的末尾（null）
	 * 2. 在末尾.tail加上B
	 */

	let leaf = A;

	while (leaf.tail) {
		leaf = leaf.tail;
	}

	leaf.tail = B;

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
	/**
	 * 	
	 */
	let result = new List(L.head, L.tail);
	let index = 0;

	let temp;

	while (index <= start + len - 1) {
		if(index < start) {
			result = result.tail;
			temp = result;
		} else if (index === start + len - 1) {
			temp.tail = null;
		} else {
			temp = temp.tail;
		}

		index += 1;
	};

	return result;
	
}
