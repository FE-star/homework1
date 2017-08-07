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
	if (!(A instanceof List)) {
		throw new TypeError('"A" should be instance of "List"');
	}
	if(!B) {
		return A;
	}
	if(!(B instanceof List)) {
		throw new TypeError('"B" should be instance of "List"');
	}

	var temp = A
	// when List of A looped end, the last item's tail is null
	while(temp.tail) {
		temp = temp.tail;
	}
	temp.tail = B;
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
	if (!L || !(L instanceof List)) {
		throw new Error('the param of "L" should be a instanceof "List"');
	}
	
	start = +start;
	len = +len;

	if (start < 0) {
		throw new Error('the param of "start" should be a positive integer or "zero"');
	}
	if (len <= 0) {
		throw new Error('the param of "start" should be a positive integer');
	}
	// for array who's items are all number
	/*
	var sourceArray = L.toString().slice(2, -2).split(' ');
	var L_len = sourceArray.length;
	if (L_len <= start) {
		throw new Error('the param of "start" should be a positive integer,AND less than the items count of "L"');
	}
	console.log(sourceArray)
	return List.list(sourceArray.slice(start, Math.min(L_len, start + len)));
	*/

	// for array who's items can be any type
	var idxInList = 0;
	var newListCount = 0;
	var tempList = L;
	while(tempList && (idxInList < start)) {
		tempList = tempList.tail;
		idxInList++;
	}
	if (idxInList < start) {
		throw new Error('the param of "start" should be a positive integer,AND less than the items count of "L"');
	}
	if (idxInList === start) {
		var subArray = [];
		while(tempList && newListCount <= len) {
			subArray.push(tempList.head);
			tempList = tempList.tail;
			newListCount++;
		}
		return List.list(subArray);
	}
}
