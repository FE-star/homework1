/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
// const List = require('../js/list');
// console.log(List)
var A = List.list([4, 6, 7, 3, 8]),
    B = List.list([3, 2, 5, 9]);

function dcate(A, B) {
	/** Fill in here **/
	let currTail = A.tail
	while (currTail.tail != null) {
		currTail = currTail.tail
	}
	currTail.tail = B
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

	let result = null;
	let arr = L.toString();
	
	arr = arr.replace(/(\[\s|\s\])/g, '').split(' ');
	result = arr.slice(start, start + len)
	return List.list(result)

}





