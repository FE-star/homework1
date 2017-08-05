//var List=require("../js/list")
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
	var p = A
	while (p.tail!==null) {
		p=p.tail
	}
	p.tail=B
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
	var p = L
	while (start>0) {
		if (p.tail == null) throw new Error('No start item found!')
		p=p.tail
		start--
	}
	var res = []
	for (;len>0;len--){
		res.push(p.head)
		p=p.tail
		if (p==null && len > 1) throw new Error('There are not enough items!')
	}
	var resList = List.list(res)
	return resList
}

