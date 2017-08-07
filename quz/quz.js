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
	if(!A){
		//return B directly if A does not exist
		return B;
	}
	var lastEleOfA = A;
	while(lastEleOfA.tail){
		lastEleOfA = lastEleOfA.tail;
	}
	lastEleOfA.tail = B;
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
	if(!L){
		return [];
	}
	// calculate length of L
	var iLength = 0;
	var iTemp = L;
	while(iTemp){
		iTemp = iTemp.tail;
		iLength++;
	}
	if(start + len > iLength){
		// this means the array wanted exceed the length of L
		console.log("ERROR: Wanted length larger than we could provide");
		return ;
	}
	var eleBegin = L;
	// get begin index of arr
	while(start !== 0){
		eleBegin = eleBegin.tail;
		start--;
	}
	var resultArr = [eleBegin.head];
	len--;
	while(len--){
		// push len elements in resultArr
		eleBegin = eleBegin.tail;
		resultArr.push(eleBegin.head);
	}
	return List.list(resultArr);
}
