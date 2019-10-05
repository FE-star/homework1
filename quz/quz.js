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
    for (var temp = A; temp !== null; temp = temp.tail) {
        if (temp.tail === null) {
            temp.tail = B;
            break
        }
    }
    return A
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
    var res = '', tmpA;
    res += '[';
    for (tmpA = L; tmpA !== null; tmpA = tmpA.tail) {
    	if (tmpA.head == start) {
            res = res + ' ' + tmpA.head;
    		for (var i = 1; i < len; i++) {
    			if (tmpA.tail !== null) {
                    tmpA = tmpA.tail;
                    res = res + ' ' + tmpA.head;
				}
			}
		}
    }
    L = res + ' ]';
    return L
}
