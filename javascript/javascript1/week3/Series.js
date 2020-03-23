const seriesDurations = [
    
    {
      title: 'Friends',
      days: 3,
      hours: 14,
      minutes: 32,
    },
    
    {  
      title: 'Suits',
      days: 4,
      hours: 2,
      minutes: 0,
         
    },
    {  
        title: 'Castle',
        days: 5,
        hours: 9,
        minutes: 48,
             
    },
    {  
        title: 'Big Little Lies',
        days: 0,
        hours: 11,
        minutes: 40,
                 
    }
];

function calculateSeriesDuration(serDuration) {
    let watchDuration = [];
    let total = 0;

    for (let i = 0 ; i < serDuration.length; i++) {
      let hoursToDay = (serDuration[i].hours / 24 );  //Converting hours to days by dividing by 24
      let day = ((hoursToDay + serDuration[i].days ) / 365 ) / 80 ;  //Calculating percentage of day in a  year divided by 80 (avg lifespan)
      let percentageOfTime = day * 100 ;

      total += percentageOfTime;
      
      console.log( serDuration[i].title + " took " + percentageOfTime.toPrecision(2) + " % of my life");
    }
     console.log( "In total that is " +total.toPrecision(2) + "  % of my life") ;
     return serDuration ;
}

const calculatedTimeSpent = calculateSeriesDuration(seriesDurations) ;