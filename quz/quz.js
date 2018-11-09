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
    if(A.constructor!=List||B.constructor!=List){
        throw new Error("isn't List");
    }

	let temp = A;
	let last;
	// 取出最后一个值
    while(temp){
        last = temp;
        temp = temp.tail;
    }
    last.tail = B;

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
    if(L.constructor!=List){
        throw new Error("isn't List");
    }
    start = parseInt(start);
    len = parseInt(len);
    if( typeof start != 'number'||typeof len != 'number'){
        throw new Error("isn't number");
    }
    let result;
    let index = 0;
    let temp = L;
    while (temp){
        if(start<=index&&index<=start+len){
            if(!result){
                result = new List(temp.head);
            }
            result.tail = temp;
        }
        temp = temp.tail;
        index++;
	}
	return result;
}
