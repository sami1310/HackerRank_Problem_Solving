function marsExploration(s) {
    let totalSoSCount = s.length / 3;
    let sosShouldBe = "SOS".repeat(totalSoSCount);
    let errorCount = 0;
    
    for(let i = 0; i < s.length; i++){
    if(s[i] != sosShouldBe[i]) errorCount++;
  }
  
  return errorCount;

}
