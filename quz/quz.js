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
    function recursion(A, B) {
        if (A.tail !== null) {
            recursion(A.tail, B)
        } else {
            A.tail = B
        }
        return A 
    }

    return recursion(A, B)
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
	var i = 0, temp, result;
    while(L = L.tail){
    	i++;
    	if(i=== start){
    		temp = L
    	}
    }
    function recursion(L, len) {
        if (L.tail !== null && len > 0) {
        	len--;
            recursion(L.tail);
        } else {
            L.tail = null;
        }
        return L;
    }

    return recursion(temp, len)
}
