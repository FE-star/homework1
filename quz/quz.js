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

    var AA = A
    while (AA.tail !== null) {
        AA = AA.tail
    }
    AA.tail = B
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
    var res = []
    // {head: 19 ,tail: {head:8 ,tail: {head: 7, tail: {head: 3, tail: {heade: 2, tail: null}}}}}
    for (; L !== null; L = L.tail) {
        res.push(L.head);
    }

    return List.list(res.splice(start, len))
}
