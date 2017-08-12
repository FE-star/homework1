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
    var ATail;
    for (var L = A; L != null; L = L.tail) {
        ATail = L;
    }
    ATail.tail = B;
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
    var head = L,
        A;
    for (var i = 0; i < start; i++) {
        head = head.tail;
    }
    A = new List(head.head);
    for (var n = 1, tmp = A; n < len; n++) {
        tmp.tail = new List(head.tail.head);
        tmp = tmp.tail;
        head = head.tail;
    }
    return A;
}