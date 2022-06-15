function sockMerchant(n, ar) {
    let pairsCount = 0;
    let pairSerach = new Set();
    for(let sock of ar){
        if(pairSerach.has(sock)){
            pairsCount++;
            pairSerach.delete(sock);
        }else pairSerach.add(sock);
    }
    
    return pairsCount;

}
