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
	if((A instanceof List) && (B instanceof List)) {

		if(!isEmptyArray(A)) {

			if(!isEmptyArray(B)) {
				var temp = A
				while (temp.tail !== null) {
					temp = temp.tail
				}
				temp.tail = B
			}
			return A

		} else {
			if(!isEmptyArray(B)) {
				return B
			}
		}
	}
	return null
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
	if (!(start < 0) && !(len < 0)) {

		if((L instanceof List) && !isEmptyArray(L)) {

			var temp = L,
				subIdx = 0,
				subLen = 0,
				subArray = []

			while (!isEmptyArray(temp)) {
				if ((subIdx >= start) && (subLen < len)) {
					subArray.push(temp.head)
					subLen++
				}
				subIdx++
				temp = temp.tail

			}
			return List.list(subArray)
		}
	}
	return null
}


/**
 * isEmptyArray
 */
function isEmptyArray(value) {
	if (value === null) {
		return true
	}
	if (Array.isArray(value)) {
		return !value.length
	}
}