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
  let curA = A;
  while(curA.tail) {
    curA = curA.tail
  }
  curA.tail = B
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
  let startList = L;
  for(let i = 0; i < start; i++) {
    if(!startList) {
      break;
    }
    startList = startList.tail
  }
  let midList = startList.tail,
      midHead = [],
      i = 0;
  while(startList && i<len) {
    midHead.push(startList.head);
    startList = startList.tail;
    i++;
  }
  return new List.list(midHead)
}
