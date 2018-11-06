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
  let curr = A.tail;
  while (curr.tail !== null) {
    curr = curr.tail;
  }
  curr.tail = B;
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
  let end = start + len + 1,
    temp = [],
    T;
  for (T = L; T.tail !== null; T = T.tail) {
    temp.push(T.head);
  }
  temp.push(T.head);
  console.log(temp);
  return List.list(temp.slice(start, end));
}
