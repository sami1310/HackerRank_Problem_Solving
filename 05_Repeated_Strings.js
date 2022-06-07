function repeatedString(s, n) {
  let numberOfAs = 0;
  
  if( n >= s.length){
      let occurance = [...s].filter(word => word === 'a').length;
      numberOfAs = Math.floor(n/s.length) * occurance;
  }
  let tailPart = ( n % s.length);
  for(let i = 0 ; i < tailPart; i++){
      if(s[i] === 'a') numberOfAs++;
  }
  return numberOfAs;
  
}
