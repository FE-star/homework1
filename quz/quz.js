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
    let L = A;
    while (L !== null) {
        L = A.tail;
    }
    L.tail = B;
    return L;
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
    let newList = [];
    let maxLen = start + len;
    for (let i = 0; i < maxLen; i++) {
    	if (L !== null) {
    		if (i >= start && i < maxLen) {
    			newList.push(L.head);
    		}
    		L = L.tail;
    	} else {
    		break;
    	}
    };
    return List.list(newList);
}
