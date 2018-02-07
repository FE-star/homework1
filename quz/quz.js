/**
 * 两个List合并
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
	var L = A
	for (L; L !== null; L = L.tail) {
		// console.log('L:', L)
		if (!L.tail) {
			// console.log('!L.tail:', !L.tail)
			L.tail = B
			return A
		}
	}
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
  /**
   * 方法二
   */
  // 一、转换成数组
  const array = L.toString().split(' ')
  array.pop()
  array.shift()

  console.log('array:', array)

  // 二、截取和相应的报错
  if (start > array.length - 2) {
    throw Error('开始的位置不大于数组的长度！')
    return
  }

  var newArray = []
  newArray.push(array[start])

  // 正常情况下
  for (var i = 1; i < len; i++) {
    newArray.push(array[start + i])
  }

  console.log('newArray:', newArray)

  // 三、数组转成List
  var NewList = List.list(newArray)

  return NewList

	/**
	 * 方法一
	 * 修改了原数组，pass
	 * 没有提示错误，pass
	 */
  // var L = JSON.parse(JSON.stringify(List));
  /*
	var L = List;
  var NewHead;
  var i = 0;
  for (L; L !== null; L = L.tail) {
    // 截取start
    if (start === i) {
      NewHead = L;
    }
    i += 1;
  }

  console.log("NewHead1:", NewHead);

  // var j = len
  var New = NewHead;
  // 截取len
  // 思路： 循环len次，然后把tail置为null
  for (; NewHead !== null; NewHead = NewHead.tail) {
    if (len === 1) {
      NewHead.tail = null;
    }
    len -= 1;
  }

  console.log("NewHead2:", NewHead);
  console.log("New:", New);
  console.log("List:", List);
  return New;
  */
}
