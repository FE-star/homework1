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
    var arr = [], temp = L
    while(temp != null) {
        if (temp.head == start || temp.head == len) {
            arr.push(temp.head)
        }
        temp = temp.tail
    }

    return List.list(arr)
}
