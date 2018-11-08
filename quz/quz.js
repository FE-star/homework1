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
	var T;

	if(!A) return B;

	for(T = A; T.tail !== null; T = T.tail){}
	T.tail = B;
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
	var T, i, temA, temStr, 
	subL = null;
	if(!L) return null;
	
	temStr = L.toString();
	temA = temStr.substring(temStr.indexOf(' ') + 1, temStr.lastIndexOf(' ')).split(' ');
	T = List.list(temA);
	
	if(start < 0) start += temA.length;

	for(i = 0; i < start + len; i++){
		if(i === start) subL = T;
		if(i === start + len - 1)  T.tail = null;

		if(T.tail === null) break;
		
		T = T.tail;
	}
	return subL;
}
