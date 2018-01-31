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
	//遍历A，找到A的最后一个tail
	let p = A;
	while(p.tail){
		p = p.tail;
	}
	p.tail = B;
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
	var	sentinel = new List(),
		i = 0;
		p = L,
		q = sentinel;
	
	while(i<start){
		if(p.tail !== null){
			p = p.tail;
			i++;
		}
	}
		
	while(len>0 && p !== null){
		q.tail = p;
		q = q.tail;

		p = p.tail;
		len--;
	}
	return sentinel.tail;
}

