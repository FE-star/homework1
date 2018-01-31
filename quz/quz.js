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
  let i = A;
  while (i.tail !== null) {
    i = i.tail;
  }
  i.tail = B;
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
  let item = L,
    counter = 0;
  while (counter < start) {
    item = item.tail;
    counter++;
  }

  var R = new List();
  var p = R;
  for (i = 0; i < len; i++) {
    p.tail = new List(item.head);
    p = p.tail;
    item = item.tail;
  }
  return R.tail;
}
