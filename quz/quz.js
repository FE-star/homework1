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
	var l = A;
	for(;l.tail!==null;l = l.tail);
	l.tail = B;
	// console.log(l,A);
	return A 
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
	/** Fill in here **/
	var tempL = L,subL;
	for(var i=0;tempL!== null;i++){
		console.log(i,start);
		if(i == start){
			subL= tempL;
			break;
		}
		tempL = tempL.tail;
	}
	console.log(subL);
	var l = subL,j=0;
	for(;l.tail!==null;l=l.tail){
		if(j == len){
			l.tail = null;
			break;
		}
		j++	
	}

	console.log(subL,l);
	return subL;
}
