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
	const aArr = A.split(' ');
	const bArr = B.split(' ');
	updateArr(aArr);
	updateArr(bArr);
	let str = '';
	aArr.forEach(num => {
		str += `${num} `;
	});
	bArr.forEach(num => {
		str += `${num} `;
	});
	return `[ ${str}]`;
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
	const arr = L.split(' ')
	updateArr(arr);
	let str = '';
	arr.forEach((num, index) => {
		if (index > start - 1 && index < (start + len)) {
			str += `${num} `;
		}
	});
	return `[ ${str}]`;
}
/**
 * @param {*} arr
 */
function updateArr (arr) {
	if (!arr.length) return
	arr.pop();
	arr.splice(0, 1);
	return arr;
}
