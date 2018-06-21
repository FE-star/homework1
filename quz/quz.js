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
 	let l = A
 	while (l.tail) {
 		l = l.tail
 	}
 	l.tail = B
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

 	// 如果对应的items  不存在  则丢错处理 
	 if (!L) throw ('items is not right')
	/**************way:1*************/
 	let idx = 0
 	let newL = L
 	let sublist, nodelist
 
 	sublist = new List()
 	nodelist = sublist
 	// 找到第i个开始的元素
 	for (; newL != null; newL = newL.tail) {
 		if (idx >= start && idx < (start + len)) {
 			nodelist.tail = new List(newL.head)
 			nodelist = nodelist.tail
		 }
		 idx++
	 }
 	return sublist.tail
 	/**************way:2*************/
 	// let arr = []
 	// let idx = 0
 	// for(let newL = L; newL!= null; newL = newL.tail){
 	// 	if(idx>=start && idx<(start+len)){
 	// 		arr.push(newL.head)
 	// 	}
 	// 	idx++
 	// }
 	// return List.list(arr)
 }