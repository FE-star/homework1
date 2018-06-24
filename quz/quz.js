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
	// List 的结构
	/* 
		{
			head: '',
			tail: [
				{
					head: '',
					tail: []
				}
			]
		}
	*/
	
	var tail = A;
	while(tail.tail) {
		tail = tail.tail;
	}
	tail.tail = B;
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
	// List 的结构
	/* 
		{
			head: '',
			tail: [
				{
					head: '',
					tail: []
				}
			]
		}
	*/	
	var i = 0, list;
	var newList = new List();
	for (list = L; list !== null; list = list.tail) {
		if (i === start) {
			newList = list;
		} else if (i > start && i <= (start + len)) {
			newList.tail = list;
		}
		i++;
	}
	return newList;
}
