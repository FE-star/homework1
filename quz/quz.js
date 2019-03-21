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
  let p
  for(p = A; p != null; p = p.tail){
    if(p.tail === null){
      p.tail = B
      break
    }
  }
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
  let K, P, J
  let i = 0,
    end = start + len,
    res = []
  for(P = L; i <= end; P = P.tail, i++){
    // if(i === start || i > start && i < end){
    //   res.push(P.head)
    // } else if (i >= end) {
    //   break
    // }
    if(i < start){
      continue
    }else if(i === start){
      K = new List(P.head)
      J = K
    }else if(i > start && i < end){
      J.tail = new List(P.head);
      J = J.tail
    }else if(i >= end){
      break
    }
  }
  // K = List.list(res);
  return K;


}

// 参考 https://www.cnblogs.com/justany/archive/2012/11/04/2753096.html