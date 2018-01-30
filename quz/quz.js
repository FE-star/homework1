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
  var L;
  for (L = A; L !== null; L = L.tail) {
    if (L.tail === null) {
      L.tail = B;
      break;
    }
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
  // 拿到L之后将其改造为原数组
  var A = L.toString();
  var arr = A.split(' ');
  arr.pop();
  arr.shift();
  if (start > arr.length) {
    throw Error('start不能大于原数组的长度');
  } else if ((start + len) > arr.length) {
    throw Error('start后面没有'+ len +'个长度的数据');
  } else {
    // 截取数组指定的片段
    var res = arr.splice(start, len);
    // 再转换为字符串输出
    var R = List.list(res).toString();
    return R;
  }
}
