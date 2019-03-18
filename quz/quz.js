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
	let cursor = A;
	console.log(A, B)
	console.log(cursor.tail)
 	while (cursor && cursor.tail) {
 		cursor = cursor.tail;
 	}
 	cursor.tail = B;
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
	let listHead = L;
 	for (let i = 0; i < start && listHead; i++) {
 		listHead = listHead.tail;
 	}
 	// if outbound then throw error
 	if (!listHead) {
 		throw new Error('开始起点');
 	}

  	// define current cursor to find where to end
 	let listTail = listHead;
 	let index = 0;
 	for (; index < len - 1 && listTail; index++) {
 		listTail = listTail.tail;
 	}

  	// if index loop to desired place and current Node is not null, success
 	if (index === len - 1 && listTail) {
 		listTail.tail = null;
 	} else {
 		throw new Error('超长')
 	}
 	return listHead;
}
