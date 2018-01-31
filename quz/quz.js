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
	var L;
	for(L = A; L != null; L = L.tail) {
		if (L.tail == null) {
			L.tail = B;
			break;
		}
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
	var lString = L.toString();
	var newL = lString.split(' ');
	newL.pop();
	newL.shift();
	if(start > newL.length) {
		throw Error('数组长度不够');
	} else if ((start + len) > newL.length) {
		throw Error(`数组从${start}位置截取不够${len}长度`);
	}else {
		var res = newL.splice(start, len);
		var resString = List.list(res).toString();
		return resString;
	}
}
