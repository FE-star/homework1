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
		if (items.tail === null) {
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
	var array = [],
		reg = /^(0|([1-9]\d*))$/,
		i;
	//Detect the parameters type
	if (L instanceof List && reg.test(start) && reg.test(len) ) {
		//loop through the list and push the head value to the array
		for (i = L; i !== null; i = i.tail) {
			array.push(i.head);
		}
	} else {
		throw "The parameter format is incorrect!";
	}

	
	var newArray = array.slice();
	//if the item is not exist, throw an error
	if (newArray.splice(start, len) == []) {
		throw "The desired items don't exist!";
	} else {
		return List.list(array.splice(start, len));
	}
}

// module.exports.dcate = dcate;
// module.exports.sub = sub;