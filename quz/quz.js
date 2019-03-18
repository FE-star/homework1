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
	let nextTail = A.tail

	while (nextTail) {
		if (!nextTail.tail) break
		nextTail = nextTail.tail
	}

	nextTail.tail = B
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
	const newArr = L.toString().split(' ').slice(start + 1).slice(0,  len)
	return new List.list(newArr)
}

function sub(L, start, len) {
	const newArr = []
	let left = L, leftLen = len, count = start
	while (count) {
		left = left.tail
		count -= 1
	}
	while (leftLen) {
		newArr.push(left.head)
		left = left.tail
		leftLen -= 1
	}

	return new List.list(newArr)
}

function sub(L, start, len) {
	const result = new List()
	let left = L, leftLen = len, count = start, p = result
	while (count) {
		left = left.tail
		count -= 1
	}
	while (leftLen) {
		p.tail = new List(left.head)
		leftLen -= 1
		left = left.tail
		p = p.tail
	}

	return result.tail
}

