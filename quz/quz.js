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
	if( !A )	return { head : 0, tail : null };
	if( !B )	return A;

	var c = A,
		d = A.tail;

	while( d ){
		c = d;
		d = d.tail;
	}

	c.tail = B;

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
	var l = L,
		L_len,
		arr = [],
		start = start < 0 ? 0 : start;

	do{
		arr.push(l.head);
		l = l.tail;
	}while(l)

	if( !len || (start + len > arr.length) )	len = arr.length - start;	//如果 len 参数未传，或者长度超出边界，则只截取从 start 位置到末尾所有的部分

	arr = arr.splice(start, len);

	return L.__proto__.constructor.list(arr);
}
