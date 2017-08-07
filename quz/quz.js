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

	// 检测 A 和 B 是否是自定义链表 List 类型实例，任意一个不是的话即抛出错误
	if(!(A instanceof List) || !(B instanceof List)) {
		throw new TypeError('"A" 和 "B" 都应该是 List 类型实例');
	}

	// 检测 B 是否为空，为空直接返回 A
	if(!B) {
		return A;
	}

	var temp = A;

	// 循环列表，直到找到最后一项
	while(temp.tail !== null) {
		temp = temp.tail;
	}

	// 找到最后一项后，把它的 tail 赋为 B，建立链接
	temp.tail = B;

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
	if(start < 0 || len < 0) {
		return new Error('start 或者 len 设定值超出范围');
	}

	var temp = L,
		index = 0,
		length = 0,
		array = [];
	
	// 循环列表直到最后一项，同时获取新数组 array
	while(temp !== null) {
		// 从设置的 start 开始，同时防止超过设定 len
		if(index >= start && length <= len) {
			array.push(temp.head);
			length++;
		}
		index++;
		temp = temp.tail;
	}

	return List.list(array);
}
