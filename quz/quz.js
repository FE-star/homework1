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

    // var X=A;
    // A=null;
    // return X?B
    //         ?X.toString().replace(' ]','')+B.toString().replace('[','')
    //         :X.toString()
    //         :B?B.toString()
    //         :'[]'
    var L;
	for (L = A; L !== null; L = L.tail) {
		if (L.tail === null) {
			L.tail = B;
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
	/** Fill in here **/
    var M,N;
    for(M = L,i=0,j=0;M!=null;M=M.tail,i++,j++){
        if(i==start){
            N=M
        }
        if(j==start+len){
            N.tail=null;
            break
        }
    }
    return N

}
