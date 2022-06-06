function timeConversion(s) {
    let amPm = s.charAt(8);
    let milHour = "";
    
    if (amPm == "A"){
        if (s.substring(0,2) == '12'){
            milHour = '00';
        }else milHour = s.substring(0,2);
    }else{
        if (s.substring(0,2) == '12'){
            milHour = s.substring(0,2)
        }else milHour = parseInt(s.substring(0,2),10) + 12;
    }
    return milHour + s.substring(2,8);
}
