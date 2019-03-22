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
    var lastNodeA = findListLastNode(A);
    lastNodeA.tail = B;
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
    var length = 0,
        subList = null,
        temp = L;

    for (temp; temp !== null; temp = temp.tail) {
        if (temp.head === start) {
            length++;
            subList = temp;
            if (length >= len) {
                subList.tail = null;
            }
        }
    }
    return subList;
}

/**
 * find List last node
 * @param {List} L
 * @return {List}
 */
function findListLastNode(L) {
    var temp = L, lastNode = null;
    for (temp; temp !== null; temp = temp.tail) {
        lastNode = temp;
    }
    return lastNode;
}

// findListTail({head: 0, tail: {head: 1, tail: null}});
// sub()
