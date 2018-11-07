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
    var L = A
    while (true) {
        L = L.tail
        if (!L.tail) {
            L.tail = B
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
    var p = new List(),
        i = 0,
        arr = []
    p.tail = L
    do {
        p = p.tail
        if (i < start) continue
        if (i === start + len) break
        arr.push(p.head)

    } while (++i && p)

    return new List.list(arr)
}
