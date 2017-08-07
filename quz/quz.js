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
    // var oA = A,
    if (A instanceof List || B instanceof List) {
        throw new Error('The params of dcate function is invalidated');
    }

    var tailNull = null;

    function rec(obj) {
        if (obj.tail == null) return obj;
        return arguments.callee(obj.tail);
    }
    var tailNull = rec(A);
    tailNull.tail = B;
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
    var str = L.toString(),
        tmp = str.replace(/[\[\s\]]/g, '').split(''),
        arr = [];

    for (let n = start + 1; n <= start + len; n++) {
        arr.push(tmp[n]);
    }

    return L.__proto__.constructor.list(arr);
}