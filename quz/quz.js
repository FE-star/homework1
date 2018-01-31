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

	var list = dcateFunction2( A , B );


	return list;
}
//把b合并到A
function dcateFunction2 ( A , B ) {
	var L;
	for (L = A; 1; ) {
		if( null !== L.tail ){
			L = L.tail
		}
		if( null == L.tail ) {
			L.tail = B;
			break;
		}
	}
	return A;
}
//合并两个值，不改变原始值
function dcateFunction1 ( A , B ) {
	var arr = A.toString() + B.toString();

		arr = arr.replace(/\s\]\[\s/g,' ').replace(/(^\[\s|\s\]$)/g,'');
		arr = arr.split(" ");

		return List.list(arr);
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

	var M,i = 0,addLen = 1,newoj = [];
	for (M = L; M != null;M = M.tail,i++ ) {
		if ( start <= i ) {
			if ( addLen > len ) {

				break;
			}
			newoj.push(M.head);
			addLen++;
		}
	}

	return List.list(newoj);
}
