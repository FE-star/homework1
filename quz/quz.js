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
	let currList = A
	while (currList.tail !== null) {
		currList = currList.tail;
	}
	currList.tail = B;
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
	if (!L || !(/(^[0-9]\d*$)/.test(start)) || !(/(^[0-9]\d*$)/.test(len))) throw new Error('param error');
	let newList = [],
		subLen = 0,
		currList = L,
		currIndex = 0
	do {
		if (currIndex >= start){
			newList.push(currList.head);
			subLen++;
		}
		currList = currList.tail;
		currIndex++;
	} while (len !== subLen && currList !== null);	
	return new List.list(newList);
}
