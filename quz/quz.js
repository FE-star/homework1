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
	// let tail;
	let tail = A.tail,
		//拿到tail属性的引用
		tailRef = tail;
	while(tail){
		//更新tail引用
		tailRef = tail
		tail = tail.tail;
	}

	tailRef.tail = B
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
	let result = [],
		array = L.toString().replace(/\[|\]/g,'').split(' ').filter(function(v){
			return v != ''
		}),
		length = array.length,
		i = 0,
		tail = L;
	while(i <= length - 1) {
		if(i >= start  && i <= start+len - 1) {
			result.push(tail.head)
		}
		tail = tail.tail;
		i += 1;		
	}
	return new L.constructor.list(result)
}


// export {
// 	dcate,
// 	sub
// }
