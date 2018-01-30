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
  function link(pointer) {
    if (pointer.tail != null) link(pointer.tail);
    else pointer.tail=B;
  }
  link(A);
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
  var counter = 0,
    sublist = [];

  function search(pointer) {
    if (pointer) {
      if (counter >= start && counter < (start + len)) {
        sublist.push(pointer.head);
      }
      counter++;
      if (counter < (start + len))
        search(pointer.tail);
    }
  }
  search(L);
  return List.list(sublist);
}
