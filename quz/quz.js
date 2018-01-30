/*/**
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	if (!A || !B || !(A.constructor == List) || !(A.constructor == List)) {
		throw new Error("arguments must List")
	}
	var tailA = A;
	while (tailA.tail !== null) {
		tailA = tailA.tail
	}
	tailA.tail = B;
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
	if(!L || !(L.constructor == List) || typeof start !== "number" ||  typeof len !== "number"){
		throw new Error("arguments is not ok")
	}
	var temp = L,
		tempArr = [];
	while (temp !== null) {
		tempArr.push(temp.head)
		temp = temp.tail
	}
	return List.list(tempArr.splice(start, len))
}

