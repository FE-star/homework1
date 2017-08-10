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
    // 循环列表找到最后一项
    var temp = A
    while (temp.tail != null) {
        temp = temp.tail
    }
    temp.tail = B
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
    var arr = [], temp = L, _index = 0, _start = 0

    while(temp != null) {
        if (_start >=  start && _index <= len) {
            arr.push(temp.head)
            _index++
        }
        _start++
        temp = temp.tail
    }

    return List.list(arr)
}
