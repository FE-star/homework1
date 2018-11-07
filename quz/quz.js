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
    if (A.head) {
        regoup(A, B);
    }
    return A;

    /** recursion **/
    function regoup(A, B) {
        if (A.tail) {
            regoup(A.tail, B);
        } else {
            A.tail = B;
        }
    }
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
    var res = new List();
    regroup(L, start);
    regroup(L, len);
    return res;

    /** recursion **/
    function regroup(L, num) {
        if (L && L.head === num) {
            add(num);
        } else if (L && L.tail) {
            regroup(L.tail, num);
        }
    }

    /** add to res **/
    function add(num) {
        if (res.head) {
            res.tail = new List(num);
        } else {
            res.head = num;
        }
    }
}
