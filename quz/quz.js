function dd(A,arr){
    arr.push(A.head)
    if(A.tail)
        dd(A.tail,arr)
    return arr
}
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
    return List.list(dd(A,[]).concat(dd(B,[])))
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
    return List.list(dd(L,[]).slice(start,start+len))
}
