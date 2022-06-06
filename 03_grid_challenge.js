function gridChallenge(grid) {
    // Write your code here
    let charArray = [];
    
    for(let i = 0 ; i< grid.length; i++){
        let characters = grid[i].split('').sort();
        charArray.push(characters);
    }
    console.log(charArray);
    let column = charArray[0].length;
    //let row = charArray.length;
    //console.log(row);  
    for(let j = 0 ; j < charArray.length - 1 ;j++){
        for(let k = 0 ; k < column; k++){
            if(charArray[j][k] > charArray[j+1][k]) return 'NO';
        }
    }
    return 'YES';

}
