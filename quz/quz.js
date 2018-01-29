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
	var L = A;
	while(L.tail){
		L = L.tail;
	}
	L.tail = B;
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
	var res = [],
		A = L,
		i = 0,
		end = start + len;
	if(start<0||len<1||end>L.toString().split(' ').length-2) throw new Error('not a valid input')
	while(A&&i<end){
		if (i>=start) {
			res.push(A.head);
		}
		A = A.tail;
		i++;
	}
	if(res.length===0) throw new Error('desired items do not exist')
	return List.list(res);

}