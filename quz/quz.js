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
    // runs after all tests in this block
    var a = A.toString().split(' ').slice(1, -1);
    var b = B.toString().split(' ').slice(1, -1);
    A.tail = null;
    return List.list(a.concat(b));
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
    return List.list(L.toString().split(' ').slice(1, -1).slice(start, start + len));
}
