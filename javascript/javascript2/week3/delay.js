function runAfterDelay(delay,callback) 
{
    setTimeout(() => { 
        callback() ;
        
      }, delay * 1000);
}
runAfterDelay(4, function() {
    console.log("Should be logged after 4 seconds");
  });
  runAfterDelay(7, function() {
    console.log("Should be logged after 7 seconds");
  });
    