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
	let tail = A.tail;
	while(tail.tail){
		tail = tail.tail;
	}
	tail.tail = B;
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
	if(start < 0){
		throw new error('start值不正确');
	}
	if(len < 0 ){
		throw new error('len值不正确');
	}
	/** Fill in here **/
	let C = L;
	let arr = [];
	let i = 0;
	let j = 0;
	while(i != start){
		i++;
		C = C.tail;
	}
	while(j != len){
		j++;
		arr.push(C.head);
		if(C.tail == null){
			if(len == j){
				break;
			}else{
				throw new error('所取值超出范围');
			}
			
		}
		C = C.tail;
	}
	return List.list(arr);
}
