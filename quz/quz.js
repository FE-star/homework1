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

    var ACleanStr = A.toString().replace(/^[\[|\s]*/, '').replace(/[\]|\s]*$/, '')
    var BCleanStr = B.toString().replace(/^[\[|\s]*/, '').replace(/[\]|\s]*$/, '')

    var A2Arry = ACleanStr.split(' ')
    var B2Arry = BCleanStr.split(' ')

    // var merge = function() {
    //     return Array.prototype.concat.apply([], arguments)
    // }

    var temp =  List.list(A2Arry.concat(B2Arry)) ;
    A.head = temp.head;
    A.tail = temp.tail;
 	return  A;

    // A.tail = B ;
 	// return A;

    // var p = A
    // while (p.tail!==null) {
    //     p=p.tail
    // }
    // 	p.tail=B
    //    	return A

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

    var sublinArry = [];
    var index = 0;
    var off = 0
    while (L.tail){
        ++ index;
        // console.log('outter'+L.head)
        L = L.tail;
        if (index >= start ){
            if ( off < len){
                sublinArry.push(L.head)
                ++ off;
            }
            // console.log('inner'+L.head)
        }
    }

    return  List.list(sublinArry);

}
