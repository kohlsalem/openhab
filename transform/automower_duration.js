(function(i) {
    var ret = "";
    var seconds = JSON.parse(input).status.duration;
    var days = Math.floor(seconds/(24*60*60));
    var restwodays = seconds % (24*60*60);
    var hours = Math.floor(restwodays/(60*60));
    var restwohours = restwodays % (60*60);
    var minutes = Math.floor(restwohours/ 60);
    var seconds = restwohours % 60;
    
    var minutess = "" + minutes;
    if(minutes<=9) minutess = "0"+minutes;
     
    var secondss = "" +  seconds;
    if(seconds<=9) secondss = "0"+seconds;
    
    if ( days  > 0 )   ret = ""  + days    + "T ";
    if ( hours > 0 )   ret = ret + hours   + ":";
    if ( minutes > 0 ) ret = ret + minutess + ":";
    ret = ret + secondss + "";        
    return ret; 
})(input)


