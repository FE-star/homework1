/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function getobj(obj,obj2){
    //判断说明是数据类型
    if(typeof obj != "object"){//判断说明不是对象
        return
    }
    for(var k in obj){//遍历对象和数组
        if(typeof obj[k] == "object"){//判断说明如果是对象则递归
        	if( obj[k] !== null ){
                getobj(obj[k],obj2)
			}else{
                obj[k] = obj2
			}
        }
    }
}
function dcate(A, B) {
    let newList = A;//浅拷贝
    getobj(newList,B)
    return newList;
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
function deepCopy(newList,source){
    for(let y in newList){
        if(newList[y] === 0 || newList[y] === null){
            for(let index in source){
                if(typeof source[index] === 'object'){
                    newList[index] = new List();
                    if(source[index]) {
                        deepCopy(newList[index], source[index])
                    }
                }else{
                    newList[index] = source[index];
                }
            }
        }
    }
}

let num = -1;
let list = null;
function candleList(obj, start, len) {
    if(typeof obj == "object"){//判断说明不是对象
		for(let k in obj){//遍历对象和数组
            if(typeof obj[k] == "object"){//判断说明如果是对象则递归
                num++;
                if(num === start){
                    candleList(obj[k], start, len);
                    list = obj;
                }else if(num === start+len-1){
                    obj.tail = null;
                }else{
                    candleList(obj[k], start, len);
                }
            }
        }
    };
}
function sub(L, start, len) {
	let newList = new List();//深拷贝
    deepCopy(newList,L);
    candleList(newList,start, len);
    return list;
}
