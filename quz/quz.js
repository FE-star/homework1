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
       var tmp = A;
       while(tmp.tail != null){
         
          tmp = tmp.tail;
          
    }
      tmp.tail = B;
   
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
       var tmp = L , end  = start+len, res= [];
       var i = 0;
      while(tmp!=null && i< end){
           if(i>=start){
              res.push(tmp.head);
         }
         tmp = tmp.tail;
	i++;
   } 
     return List.list(res);
}
