/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */

//var List = require('../js/list');

function dcate(A, B) {
	/** Fill in here **/
	var items;
	//loop through the list until get the null tail and point it to the B list reference
	for (items = A; items !== null; items = items.tail) {
		if(items.tail === null) {
			items.tail = B;
			break;
		}
	}
	return A;
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
	var array = [], i;
	//loop through the list and push the head value to the array
	for(i = L; i !== null; i = i.tail) {
		array.push(i.head);
	}
	//if the start point is lage than the length of the array, throw a error message; other wise return a list
	if(start > (array.length - 1)) {
		throw "The desired items don't exist";
	} else {
		return List.list(array.splice(start, len));
	}
	
}

// module.exports.dcate = dcate;
// module.exports.sub = sub;