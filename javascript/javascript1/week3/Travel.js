const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function getTravelInformation (travelInfo) {

       let time = travelInfo.destinationDistance / travelInfo.speed ;  
       let roundedHours = Math.floor(time);
       let minutes = (time- roundedHours) * 60;
        minutes = Math.round(minutes);
       
        return "Time taken is " + roundedHours + " hours " + minutes + " minutes" ;
   }
    
   const travelTime = getTravelInformation(travelInformation);
   console.log(travelTime);