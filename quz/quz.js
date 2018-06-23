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
  (function connect(A, B) {
    if (A && !A.tail) {
      A.tail = B;
      return;
    } else {
      connect(A.tail, B);
    }
  })(A, B);
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
  let result=[];
  (function convert(L) {
    if (L && L.hasOwnProperty("head")) {
      result.push(L.head);
      if (typeof L.tail !== "object") {
        return result;
      } else {
        convert(L.tail);
      }
    }
  })(L);
  return List.list(result.splice(start, start + len));
}
