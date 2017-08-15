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
    if (!A instanceof List || !B instanceof List) {
        throw new Error('The params of dcate is invalid');
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
    if (!L instanceof List) {
        throw new Error('The params of sub  is invalid');
    }

    var arr = L.toString().match(/\d+/g),
        res = [],
        arrLength = arr.length;

    if (start >= arrLength) {
        throw new Error('The params start of sub is error ');
    }
    if (start + len > arrLength) {
        throw new Error('The params end of sub is error ');
    }
    if (!len) {
        len = arrLength - start;
    }
    for (var n = start; n < start + len; n++) {
        res.push(arr[n]);
    }

    return L.__proto__.constructor.list(res);

}