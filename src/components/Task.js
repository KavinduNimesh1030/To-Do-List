import React from 'react'

export const Task = () => {
   const arr = [2, 'b', 1, 'a', 2, 6, 'a', 3, 'b', 2, 9, 3,2];
    
    mostFrequent(arr)

    function mostFrequent(arr){
         var mCount  =1; 
         var count  =0
         var item = 0

         for (let i = 0; i < arr.length; i++) {
           for (let j =i; j < arr.lengthl; j++) { 
         
            if(arr[i]== arr[j]){
              count++;
            
            }
            if(mCount <count){
              mCount = count;
      
            }
            item =arr[i];
             
           }
          }
          count =0;
        }
      
            
         console.log( 'item '+item);
      }
    
    
  

  return (
    <div>tasl</div>
  )
}
