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
	if (!A || !B || A.constructor !== List || B.constructor !== List) {
		return new List();
	}
	//	临时变量
	var tmp = A;
	/**
	 * tmp = A = {
	 * 		head : xx
	 * 		tail : {
	 * 		}
	 * }
	 * 如果存在尾巴，重新赋值tmp。直至最后一条
	 */
	while (tmp.tail) {
		tmp = tmp.tail;
	}
	//	连上B
	tmp.tail = B;
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
	if (L.constructor !== List || !start || !len) {
		return new List();
	}
	var tmp = L;
	var arr = [];
	var i = 0;
	//	长度
	var end = len + start;
	while(tmp.tail){
		i++;
		tmp = tmp.tail;
		//	处于区间，取值
		if(i >= Number(start) && i<= end){
			arr.push(tmp.head)
		}
		//	跳出
		if(i > end){
        	break;
		}
	}
	return List.list(arr);
}