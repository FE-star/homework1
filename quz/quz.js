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
  // runs after all tests in this block

  function loop(a) {
    if (!a.tail) {
      a.tail = B;
      return A;
    }
    return loop(a.tail);
  }
  return loop(A);

  // while
  // var temp = A;
  // while (temp.tail) temp = temp.tail;
  // temp.tail = B;
  // return A;


  // for
  // var temp;
  // for (temp = A; temp.tail !== null; temp = temp.tail) {}
  // temp.tail = B;
  // return A;

  // 其他
  // var a = A.toString().split(' ').slice(1, -1);
  // var b = B.toString().split(' ').slice(1, -1);
  // A.tail = null;
  // return List.list(a.concat(b));
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
  function loop(l, index, arr) {
    if (!l) return List.list(arr);
    if (index >= start && index <= (start + len -1)) arr.push(l.head);
    return loop(l.tail, ++index, arr);
  }
  return loop(L, 0, []);

  // while
  // var arr = [], 
  //     temp = L,
  //     index = 0;
  // while (temp) {
  //   if (index >= start && index < start + len) arr.push(temp.head);
  //   temp = temp.tail;
  //   index++;
  // }
  // return List.list(arr);

  // for
  // var arr = [];
  // for (var index = 0, temp = L; temp !== null; index++) {
  //   if (index >= start && index < start + len) arr.push(temp.head);
  //   temp = temp.tail;
  // }
  // return List.list(arr);

  // 其他
  // return List.list(L.toString().split(' ').slice(1, -1).slice(start, start + len));
}
