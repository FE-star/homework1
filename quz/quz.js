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
  let temp = A
  while (true) {
    if (!temp.tail) {
      temp.tail = B
      break
    }
    temp = temp.tail
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

  // var arr = [], temp = L
  // while (true) {
  //   arr.push(temp.head)
  //   if (!temp.tail) {
  //     break
  //   }
  //   temp = temp.tail
  // }
  // if (arr.length < (start + len)) throw Error('sublist doesn\'t exist')
  // arr = arr.splice(start, len)
  // return List.list(arr)

  var tar = L, D = new List(), p = D
  while (start--) {
    tar = tar.tail
  }
  while (len--) {
    if (tar === null) throw Error('sublist doesn\'t exist')
    p.tail = new List(tar.head)
    p = p.tail;
    tar = tar.tail
  }
  return D.tail
}
