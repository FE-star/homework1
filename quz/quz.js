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
	var temp = A;

	while(A.tail !== null) {
		A = A.tail;
	}

	A.tail = B;

	return temp;
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
	var temp = L;
	var i = 0;

	if (len < 0 || start < 0) {
		throw('Start or length should\'t less then 0');
	}

	while (i < start) {
		if (L === null) {
			throw('start is larger than L\'s length');
		}

		L = L.tail;
		i++;
	};

	temp = L;

	if (len === 0) {
		return {};
	}

	var j = 1;
	while(L !== null) {
		if (j === len) {
			L.tail = null;
			break;
		}

		L = L.tail;
		j++;
	}

	return temp;
}
