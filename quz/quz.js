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
    var tailA = A;
    while (tailA.tail !== null) {
        tailA = tailA.tail;
    }
    tailA.tail = B;
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
    var p = L;
	if (start < 0 || len <= 0) {
        throw new Error();
    }
    while (start > 0 && p.tail !== null) {
        p = p.tail;
        start--;
    }
    if (start > 0) {
        throw new Error();
    }

    var sentinel = new List();
    var q = sentinel;
    var i = 0;
    for (;i < len && p !== null;i++, p = p.tail) {
        q.tail = new List(p.head);
        q = q.tail;
    }

    return sentinel.tail;
}
