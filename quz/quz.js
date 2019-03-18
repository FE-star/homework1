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
	let q = A
	while(q.tail){
		q = q.tail
	}
	q.tail = {...B}
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
	let q = L,
		i = 0;
	while(i<start) {
		q = q.tail
		i ++
	}
	let a = []
	let count = 0;
	while(count < len && q) {
		a.push(q.head)
		q = q.tail
		count ++ 
	}
	return List.list(a)
}
