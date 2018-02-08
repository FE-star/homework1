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
    	var temp = A.tail;
    	while(temp.tail) {
        		temp = temp.tail;
        	}
    	temp.tail = B;
    	return A;
    /** Fill in here **/
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
		var temp=L.toString().split('');
		var res=[];
		var start=parseInt(start)+1;
		var end=parseInt(len)+start+1;
		for(var i=0;i<temp.length;i++){
			if(temp[i] !==" " && temp[i] !=="[" && temp[i] !=="]"){
				res.push(temp[i]);
			}
		}
		return List.list(res.slice(start,end));

	/** Fill in here **/

}
