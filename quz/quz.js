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
	let _list = A.tail;
	while (_list) {
		if (!_list.tail) {
			_list.tail = B
			break;
		}
		_list = _list.tail;
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
	if (start < 0) {
		throw new Error(`start 不能少于0`);
	}
	if (len <= 0) {
		throw new Error(`len 不能少于等于0`);
	}

	let _list = new List();
	let _len = 0;
	let _arr = [];
	for (let i = 0; L.tail !== null; i++) {
		if (i !== 0) {
			L = L.tail;
		}
		if (i === start) {
			_list = L;
			while (_list) {
				if (_len < len) {
					_arr.push(_list.head);
				}
				_list = _list.tail;
				_len++;
			}
			break;
		}
	}
	if (_arr.length === 0) {
		throw new Error(`找不到起始值`);
	}
	if (_arr.length < len) {
		throw new Error(`新组成的list长度不足`);
	}

	return List.list(_arr);
}
