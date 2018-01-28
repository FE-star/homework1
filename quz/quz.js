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
	var p = A;
	while(p.tail) {
		p = p.tail;
	}
	p.tail = B;
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
	var p = L, isExist, i = 0, subList = [];

	while(p && i < len) {
		if (p.head === start) {
      isExist = true;
		}
		if (isExist) {
			i++;
			subList.push(p.head);
		}
 		p = p.tail;
	}
	if (!isExist) {
		throw new Error( start + " don't exist in " + L);
	}
  return List.list(subList);
}
