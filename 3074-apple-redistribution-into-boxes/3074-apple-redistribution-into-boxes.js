/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
  capacity.sort((a,b)=>b-a)
  let total = apple.reduce((acc,curr)=>acc+curr,0)
  for(let i=0;i<capacity.length;i++){
    total-=capacity[i]
    if(total<=0){
       return i+1
    }
  } 
};