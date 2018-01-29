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
	if(!A){//A为空，返回B
		return B;
	}
	if(!B){//B为空，返回A
		return A;
	}
	var listTail = A.tail,
		listTmp = A;
	while(listTail){
		listTmp = listTail; //指向下一节点
		listTail = listTail.tail;//指向下一节点的tail
	}
	listTmp.tail = B;
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
	if(!L){//边界检查
		throw new Error("list 不能为空")
		return;
	}
	if(start < 0){
		throw new Error("开始位置不能小于0");
		return;
	}
	if(len <= 0){
		throw new Error("子List长度至少为1");
		return;
	}
	var resultList = L;
	for(var i=0; i<start; i++){
		resultList = resultList.tail;
		if(!resultList){
			throw new Error("开始位置越界了");
		}
	}
	var tmpList = resultList,
		tmpTail = resultList.tail,
		resultArray = [];
	var j = 0;
	while(j<len){
		if(!tmpList){
			throw new Error("长度越界");
	 		return;
		}
		resultArray.push(tmpList.head);
		tmpList = tmpList.tail;
		j++;
	}
	return List.list(resultArray);
}


/**
 * 方法二
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub1(L, start, len) {
	if(!L){//边界检查
		throw new Error("list 不能为空")
		return;
	}
	if(start < 0){
		throw new Error("开始位置不能小于0");
		return;
	}
	if(len <= 0){
		throw new Error("子List长度至少为1");
		return;
	}

	var tmpList = L,
		tmpArray = [],
		resultArray = [];
	while(tmpList){
		tmpArray.push(tmpList.head);
		tmpList = tmpList.tail;
	}
	resultArray = tmpArray.splice(start, len);

	return List.list(resultArray);
}