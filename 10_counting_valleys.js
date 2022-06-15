function countingValleys(steps, path) {
   let level = 0;
   let valley = 0;
   for(let step of path){
       let prev = level;
       level = step === 'U' ? level + 1 : level - 1;
       
       if(prev == -1 && level == 0) valley++;
   }
   return valley;
}
