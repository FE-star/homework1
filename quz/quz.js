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
    
    //让 A 的末端指针指向 B列表
    let temp = A;
    while(temp.tail){
        temp = temp.tail
    }
    //然后指向 B
    temp.tail = B;
    //最后遍历的时候还是从A 开始
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
	
    //执行一个截取的操作
    let arr = [];
    let index = 0; 
    let temp = L; 
    
    while(temp){

        //确保 start 开始位置 + 长度 要 大于 index
        //避免越界
        if(index >= start && start + len >= index){
            arr.push(temp.head)     
        }

        temp = temp.tail
        index++; 
    }

    return List.list(arr) 
}

module.exports = {
     dcate : dcate,
     sub : sub
}

 
