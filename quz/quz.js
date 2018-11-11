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
    for (var i = A; i; i = i.tail) {
        if (i.tail === null) {
            i.tail = B;
            break;
        }
    }
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
    var newC = new List();
    var result = newC;
    let num = 0;
    /** Fill in here **/
    for (let i = L; i; i = i.tail) {
        //console.log(i, num, (start - 1), len);
        if (i.head === start || num > 1) {
            result.head = i.head;
            num++;
            if (num > len) {
                break;
            }
            result.tail = new List();
            result = result.tail;
            num++;
        }
    }
    return newC;

}
