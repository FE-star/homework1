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
	let len = A.toString().match(/\d/g).length,
		p = A,
		i;
	for(i = 0; i < len; i++) {
		if(p.tail !== null) {
			p = p.tail;
		} else {
			p.tail = B;
		}
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
	let length = L.toString().match(/\d/g).length,
	p = l,
	R = {
		head: null,
		tail: null
	},
	s = R,
	i = 0;
	while(i < length && i <= start + len - 1) {
		if(i === start) {
			R.head = p.head;
		} else if(i > start) {
			s.tail = {
				head: p.head,
				tail: null
			}
			s = s.tail;
		}
		p.tail && (p = p.tail);
		i++;
	}
	R.toString = L.toString;
	return R;
}
