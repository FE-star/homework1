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
	let temp = A
		while (temp.tail!==null) {
			temp=temp.tail
		}
		temp.tail = B
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
	let temp = JSON.parse(JSON.stringify(L))
		while (temp.head!==start) {
			temp=temp.tail
		}
		let arr = []
		let dart = temp
		for (let i = 0; i < len; i++) {
			arr.push(dart.head)
			dart = dart.tail
		}
		var sentinelObj = new List(),
		p, i;
	
		p = sentinelObj;
		for (i = 0; i < len; i++) {
			p.tail = new List(arr[i]);
			p = p.tail;
		}
		return sentinelObj.tail;
}
