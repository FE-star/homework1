var List = require("../js/list.js")
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
    //因为A B 此时都是list 
	var temp = A;
	//先用 temp 指向 A list 中最后的 tail
	while(temp.tail){
		 temp = temp.tail;
	} 

	//把 temp.tail 直接指向 B
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
    if(typeof L != 'object'){
       throw new Error("L should  be object")
    } 
    //如果不是数字的话
    if(isNaN(start) || isNaN(len)){
       throw new Error("start or len should  be number")   
    }
    //start len 大于 0
    if(Number(start) < 0){
       throw new Error("start or len should  > 0")  
    } 
    //len 应该大于等于 0
    if(Number(len) <= 0){
      throw new Error("start or len should  >= 0")   
    }
    var tempArr = [];
    var index = 0;
    while(L.tail){
         if(index >= start && tempArr.length <= len){
             tempArr.push(L.head);     
         }
         L = L.tail;
         index++;
    }
    //处理最后一个数
    if(index >= start && tempArr.length <= len){
         tempArr.push(L.head);         
    }
    return List.list(tempArr);
}

module.exports = {
     dcate : dcate,
     sub : sub
}

 
