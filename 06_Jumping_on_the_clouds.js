function jumpingOnClouds(c) {
    let count = 0;
    let i = 0;
    
    while(i <c.length-1){
       i = c[i + 2] == 0 ? i + 2 : i + 1;
       count++
     }
    return count;

}
