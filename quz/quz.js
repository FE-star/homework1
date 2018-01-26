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
  let p = A;
  while (p.tail !== null) {
    p = p.tail;
  }
  p.tail = B; //
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
  if (start < 0 || len < 0) { // 参数个数类型.未检测
    throw new Error('illegal param');
    return null;
  }
  if (len === 0) {
    return null;
  }

  let p = L,
    newP = null,
    index = 0;
    
  while (p != null) {
    if (index == start) {
      newP = p;
      break;
    }
    p = p.tail;
    index++;
  }
  if (newP === null) {
    throw new Error('start overflow');
    return null;
  }
  p = newP;
  while (--len) {
    p = p.tail;
    if (p == null) {
      throw new Error('len overflow');
      return null;
    }
  }
  p.tail = null;
  return newP;
}
