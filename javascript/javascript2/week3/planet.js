const earthLogger = function() {
    console.log("Earth");
}
const saturnLogger = function() {
    console.log("Saturn");
}

function planetLogger(planetLogFunction) {
     planetLogFunction();
}

planetLogger(earthLogger) ;
planetLogger(saturnLogger);
