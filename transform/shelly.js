// Translate ison of shelly to ON and OFF
(function(i) {
    var state = JSON.parse(input);
       if( state.ison == "true" || state.ison == true ) return "ON";
    return "OFF";//devices;
})(input)






