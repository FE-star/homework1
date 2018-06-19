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
	let l = A;
	for (; l.tail !== null; l = l.tail) ;
	l.tail = B;
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
	let iStart = 0, iEnd = start + len, newList, tmp;
	if(!L) throw new Error( 'List 不能为空' );
	for(let l = L; l && iStart < iEnd; l = l.tail){
		if(iStart === start){
			newList = new List(l.head)
			tmp = newList;
		}else if(iStart > start){
			tmp.tail = new List(l.head);
			tmp = tmp.tail;
		}
		iStart++;
	}
	tmp.tail = null;
	return newList;
}
