var List = require('../js/list.js')

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

	//检测A和B是否是自定义链表List类型的实例，任意一个不是的话即抛出错误
	if(!(A instanceof List) || !(B instanceof List)) {
			throw new TypeError('"A"和"B"都应该是List类型实例')
		}
	//检测B是否为空，为空直接返回A
		if(!B){
			return A;
		}
	var temp = A;
	//循环列表，直到找到最后一项
		while(temp.tail !== null) {
			temp = temp.tail
			}
	//找到最后一项后，把它的tail赋为B，建立链接
		temp.tail = B;
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

	if(start < 0 || len < 0) {
			return new Error('start或len设定值超出范围');
		}
	var temp = L,
			index = 0,
			length = 0,
			array = [];
	//循环列表直到最后一项，同时获取新数组array
		while(temp !== null){
			//从设置的start开始，同时防止超过设定len
				if(index >= start && length <= len){
					array.push(temp.head);
					length;
				}
			index++;
			temp = temp.tail;
		}
	return List.list(array);


}


module.exports = {
  dcate,
  sub
}