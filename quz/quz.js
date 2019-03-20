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
	let temp = A;
	for( ; temp.tail!==null; ){
		temp = temp.tail
	}
	temp.tail = B
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
	var temp = L || {};
	var arr = [];
	for(let i=0;i<start;i++){
		if(temp.tail===null){
			temp = null;
			break
		};
		temp = temp.tail;
	}
	if(temp!==null){
		for(let i=0;i<len;i++){
			arr.push(temp.head);
			if(temp.tail !==null){
				temp = temp.tail
			}else {
				break;
			}
		}
	}else {
		throw new Error('截取出错，请检查下标是否超出！');
	}
	return List.list(arr);
}
//CI 测试