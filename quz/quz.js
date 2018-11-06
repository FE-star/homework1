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
  let pointer = A;
  while (pointer) {
    if (pointer.tail === null) {
      // 当遍历到最后一个pointer.tail为null,则将整个B赋值给pointer.tail
      pointer.tail = B;
      // 结束遍历
      break;
    }
    // pointer指向a.tail,继续往深一层查找，此时pointer指向a.tail.tail
    pointer = pointer.tail;
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
  let temp = L;
  for (let i = 0; i < start + len - 1; i++) {
    if (i === start) {
      L = temp;
    }
    temp = temp.tail;
  }
  temp.tail = null;
  return L;
}
