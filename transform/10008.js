// Wrap everything in a function
(function(i) {
    var devices = JSON.parse(input).devices;
    // $.devices[?(@.did==10006)].position 
    for (var i = 0; i < devices.length; i++) {
       if(devices[i].did=="10008") return devices[i].position;
    }    
    return 42;
})(input)
// input variable contains data passed by openhab

// "WZSL": 10001 "name": "WZ Süd Links",        
// "WZSR": 10002 "name": "WZ Süd Rechts",
// "WZSML: 10004 "name": "WZ Süd Mitte Links",
// "WZSMR: 10005 "name": "WZ Süd Mitte Rechts",
// "WZWR": 10006 "name": "WZ West Rechts",
// "WZWL": 10007 "name": "WZ West Links",
// "SZR": 10008 "name": "SZ Rechts",
// "SZL": 10009 "name": "SZ Links",
// "SZA": 10010 "name": "SZ Alex",






