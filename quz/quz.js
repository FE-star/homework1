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
	// var listA = A.toString();
	// var listB = B.toString();
	// listA = listA.slice(2, listA.length-2).split(' ')
	// listB = listB.slice(2, listB.length-2).split(' ')

	// for(var i=0; i<listB.length; i++) {
	// 	listA.push(listB[i])
	// }
	// A = List.list(listA)
	// return A
	var p = A;
	console.log(p.tail)
	for(p; p!=null; p=p.tail){
		console.log(p)
		if(p.tail == null){
			p.tail = B
			console.log(p)
			return A
		}
	}
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
	// var L = L.toString();
	// L = L.slice(2, L.length-2)
	// console.log(L)
	// if(start>L.length){
	// 	return {}
	// } else {
	// 	return List.list(L.split(' ').splice(3, 2))
	// }

	var res = [], p=L, i=0;
	for(p; p!=null; p=p.tail, i++ ) {
		console.log(p)
		if(i>=start && i<(start+len)) {
			res.push(p.head)
		}
	}
	console.log(res)
	return List.list(res)
}
