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
    // let list;
    // for (list = A; list !== null; list = list.tail) {
    //     if (list.tail === null) {
    //         list.tail = B;
    //         break;
    //     }
    // }
    // return A;
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
    let arr = [], l,
        i, t = 0;

    for (i = L; i !== null; i = i.tail) {
        if (t >= start && t <= (start + len)) {
            arr.push(i.head);
        }
        ++t;
    }
    if ((start + len) > t) {
        throw "the desired items don't exist"
    }
    l = List.list(arr);
    return l;
}
