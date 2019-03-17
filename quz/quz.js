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
	var res = '[', L
	for (L = A; L !== null; L = L.tail) {
		res = res + ' ' + L.head;
	}
	for (L = B; L !== null; L = L.tail) {
		res = res + ' ' + L.head;
	}
	res += ' ]';
	A.toString = function() {
		var res = '', L;
		res += '[';
		for (L = this; L !== null; L = L.tail) {
			res = res  + L.head + ' ';
		}
		res += ']';
		return res;
	}
	return res
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
	res = []
	for (L ; L !== null; L = L.tail) {
		res.push(L.head);
	}
	return '[ '+res.splice(start,len).toString().replace(/,/g, ' ')+' ]'
}

module.exports = {dcate,sub}