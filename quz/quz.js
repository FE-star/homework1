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

	let result;
	let heads = [];
	let currTail = L;
	let headsLen = 0

	while (currTail) {
		heads.push(currTail.head)
		currTail = currTail.tail
	}

	result = heads.slice(start, start + len)

	if (result.length !== len) {
		throw new Error(`不存在长度为${len}的子链表`)
	}

	return List.list(result)

}





