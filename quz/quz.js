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
	var p = A;
	for (p; p!== null;){
		p = p.tail;
    if(p.tail === null){
      p.tail = B;
      p = null;
    }
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
	var p = L, tempP, returnP;
	var i = 0,lastIndex = start+len;
	var newList = new List();
	while (p !== null){
		p = p.tail;
    i++;
		if(i < start){//如果i的值小于start
      continue;
		}else if(i === start){//如果i的值等于start
      returnP = new List(p.head);
      tempP = returnP;
		}else if(i > start && i < lastIndex){//如果start < i < lastIndex
			tempP.tail = new List(p.head);
			tempP = tempP.tail;
		}else if(i >=lastIndex){//如果i的值大于lastIndex
      break;
		}
	}
  return returnP;
}
