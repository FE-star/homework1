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
	var P = A;
	console.log(P.tail)
	for(P; P!=null; P=P.tail){
		console.log(P)
		if(P.tail == null){
			P.tail = B
			console.log(P)
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
	var L = L.toString();
	L = L.slice(2, L.length-2)
	console.log(L)
	if(start>L.length){
		return {}
	} else {
		return List.list(L.split(' ').splice(3, 2))
	}
}
