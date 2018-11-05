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
  /** 判断参数的原型，含非List参数时，不予计算 **/
  if (A.__proto__ != List.prototype || B.__proto__ != List.prototype) {
    return A.__proto__ != List.prototype ? (
      B.__proto__ != List.prototype ? null : B
    ) : A ;
  } else {
    /** 遍历出A的tail，将B链上去（A可以修改），然后返回A */
    let target = A;
    while(target.tail != null){
      target = target.tail;
    };
    target.tail = B;
    return A;
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
  if(len === 0)
    return "[ ]";

  let target = L,
      begin = start - 1,
      end = start + len - 1,
      index = 0;
      result = new List(),
      pointer = result;

  while(target){
    if(begin <= index && index <= end){
      let temp = new List(target.head);
      pointer.tail = temp;
      /** 复制最新List的引用 */
      pointer = temp;
    }
    index++;
    target = target.tail;
  };
  
  if(result.tail === null)
    throw new RangeError("the desired items don't exist.");

  return result.tail.tail;
}
