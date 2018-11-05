/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
/**
 * @parmas: 
 * @Description: 拼接两个List
 */
function dcate(A, B) {
	/** Fill in here **/
	//查找A的尾部
	let node=A.tail
	while(node.tail){
		node=node.tail
	}
	node.tail=B //A尾部直接指向B，即完成连表拼接
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
/**
 * @parmas: 
 * @Description: 截取链表
 */
function sub(L, start, len) {
	/** Fill in here **/
	let index=0
	let node=L
	while(index!=start&&node.tail){
		node=node.tail
		index++
	}
	if (start>index) {
		return new List()
	}
	let res=[]
	while(len--){
		res.push(node.head);
		node=node.tail
		if (!node) break
	}
	return List.list(res)
}
