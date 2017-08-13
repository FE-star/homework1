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
	var sentinel = new List();
	var p;
	var L;

	 p = sentinel;
  for (L = A; L !== null; L = L.tail) {
      p.tail = new List(L.head);
      p=p.tail
      if(L.tail == null){
        p.tail = B;
      }
  }
  A.tail = sentinel.tail;//要求A与原来不相等
  return sentinel.tail;
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
	var sentinel = new List(),
		p, list;
	if(L == null || L== undefined){
		return 'list is empty'
	}
	p=L;
	var temp = null;
	var n=0;
	for(var i=0;i<start;i++){
		if(p.tail!=null){
			temp=p.tail;
			p=p.tail;
			n++
		}
	}
	if(n<start){
		return 'list.length smaller than start position'
	}
	for(var j=0;j<len;j++){
    if(temp !=null){
    	 sentinel.tail = new List(temp.head);
	     temp = temp.tail;
		    if(j<len-1){
		       sentinel = sentinel.tail;
		    }
    }
  }
  return sentinel;
}
