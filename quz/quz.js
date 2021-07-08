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
	if (!A || !B) {
		throw new Error(`dcate param should be List`);
	}

	let p = A, q = B;

	// 遍历A,找到A尾节点
	while(p.tail !== null) {
		p = p.tail;
	}

	// 遍历B，添加到A上
	while(q.tail !== null) {
		// 赋值
		p.tail = q;

		// 移位
		p = p.tail;
		q = q.tail;
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
		throw new Error(`start should bigger than 0`);
	}

	let i = 0, p = L;

	// 找到start对应节点
	while(i < start) {
		if (p.tail === null) {
			throw new Error(`start should not bigger than List length`)
		}
		p = p.tail;
		i++;
	}

	const reuslt = new List();
	let q = reuslt,
		num = 0;

	while(num < len) {
		q.tail = new List(p.head);
		if (p.tail === null) {
			break;
		}
		p = p.tail;
		q = q.tail;
		num++;
	}

	return reuslt.tail;
}
