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
    var p
    for(p = A;p!=null;p = p.tail){
    	if(p.tail == null){
    		p.tail = B
    		break;
    	}
    }
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
	var p;
	var count = 0;
	var resArray = [];
	for(p=L ; p!=null ; p=p.tail){
		count++;
		if(count > start && count-start <= len){
			resArray.push(p.head);
		}
	}
	return List.list(resArray);
}
