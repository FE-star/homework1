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

    if(!(A instanceof List) || !A || !(B instanceof List) || !B){
        throw new Error('参数错误')
    }

    var temp = A

    while(temp.tail !== null){
        temp = temp.tail;
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
	if(!L || !(L instanceof List)){
        throw new Error('参数错误')
    }

    var temp = L,res = [],end = start + len;
    var i = 0;//下标
    while( temp !== null && i < end ) {
     if( i >= start ) {
       res.push(temp.head);
     }
     temp = temp.tail;
     i++;
   }

    return List.list(res)

}
