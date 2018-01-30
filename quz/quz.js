/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A  list {head: 0, tail: List{head: 4, tail: { head: 6, tail: { ...}}}
 * @param {List} B  
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
	if (!A && !B) {
		console.log('两个参数都为空');
		return;
	}
	let List = A;
	// 数组的值都存放在head里, 以tail来不断层级划分, 查找出最后一个tail为null的指针地址
	while (List.tail !== null) {
		List = List.tail;
	}
	List.tail = B;
	return A;	// 思路跟 List.list 一致
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start	截取开始位
 * @param {Number} len		截取长度
 * @returns {List}			返回截取后的List
 */
function sub(L, start, len) {
	/** Fill in here **/
	// 前提,不允许改变原始数据
	// 实际需要的值为head
	// 将原始数据提取出来封装成我们想要的数据
	// 提取指定长度的数据
	
	let listData = L,
		tempArray = [],
		resultArray = [];
	// list {head: 0, tail: List{head: 4, tail: { head: 6, tail: { ...}}} 根据数据结构依据终止循环
	while (listData !== null) {
		tempArray.push(listData.head);
		listData = listData.tail;	// 对数据解衣,一层层去除,知道光溜溜
	}

	// 截取值
	resultArray = tempArray.splice(start, len);

	// 返回一个List
	return List.list(resultArray);
	// 写到sub返回List,我干嘛不直接用 List.prototype.toString() 直接转成我想要的字符串数组然后转换成数组不就好了
}