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
    var tail;
    var temp = A;
    while (temp != null) {
        tail = temp;
        temp = temp.tail;
    }
    tail.tail = B;
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
    var subList = [];
    
    var index = 0;
    var length = 0;
    var temp =  L;
    while (temp != null) {
        if (index >= start && length <= len) {
            subList.push(temp.head);
            length++;
        }
        index++;
        temp = temp.tail;
    }
    
    return List.list(subList);
}
