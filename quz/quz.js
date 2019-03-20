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
	let list=A;
	while(list.tail!=null){
		list=list.tail
	}
	list.tail=B;
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
	start=start|0;
	len=len|0;
	let listResult=new List(),
		p=listResult;
	while(L&&start>0){
		L=L.tail!=null?L.tail:0;
		start--
	}
	while(L&&len>0){
		p.tail=new List(L.head);
		p=p.tail;
		L=L.tail!=null?L.tail:0;
		len--
	}
	return listResult.tail;
}
