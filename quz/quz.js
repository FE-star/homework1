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
	let temp = A;
	while(temp){
		if(temp.tail === null) {
			temp.tail = B;
			break;
		}
		temp = temp.tail;
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
	if(start < 0 || len > start || len > L.length) return;
	let originArrStr = L.toString();
	let originArr = originArrStr.split(' ');
	originArr.splice(0, 1);
	originArr.splice(originArr.length -1, 1);
	let p = originArr.splice(start, len);
	
	return List.list(p);
}
