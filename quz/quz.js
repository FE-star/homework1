/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A,B){
	/** Fill in here **/
	var tmp = A
	while(tmp.tail){
		tmp = tmp.tail
	}
	tmp.tail = B
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
	var arr = []
	var end = start + len
	var maxLength = 0
	for(var tmp = L;tmp !== null; tmp= tmp.tail){
		maxLength++
	}
	if(start > maxLength - 1 || start < 0 || maxLength === 0){
		return L
	}
	if(start <= maxLength - 1){
		for(var tmp = L,i=0; tmp !==null; tmp = tmp.tail){
			if(i >= start && i < end){
				arr.push(tmp.head)
			}
			i++
		}
		return List.list(arr)
	}
}
