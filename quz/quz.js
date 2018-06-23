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
    /*由于A,B经过List.list()返回的结构大致如下：
   {head:4,
     tail:{head:6,
           tail:{head:7,
                 tail:{head:3,
                       tail:{head:8,
                             tail:null
                             }
                       }
                 }
           }
    }
    需要层层遍历到tail为null为止*/
   let Tail=A ;
   while (Tail.tail){
       Tail=Tail.tail
   }
    Tail.tail=B;
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
    let result = [];
    let index = 0;
    let Tail;
	// Tail 不为null就一直遍历
       for (Tail = L; Tail !== null; index++) {
         // 范围是从 start 到 start + len
            	if (index >= start && index < (start + len)) {
           		result.push(Tail.head)
           	}
           Tail = Tail.tail
          }
   	// 返回由result组成的 List 数据结构
       return List.list(result)
}
