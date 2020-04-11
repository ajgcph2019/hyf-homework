//Check if we have double clicked on the page. 
//A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"


window.addEventListener('dblclick', event => {

  console.log('dblclick')
})

//jokecreator


    
    const funnyJokes = [
        " How do you comfort a JavaScript bug?  You console it",
        "When a JavaScript date has gone bad, Don't call me, I'll callback you. I promise!",
        "Two JavaScript developers walked into the variable bar. Ouch!",
        "Why was the JavaScript developer sad?  Because he didn't Node how to Express himself"
    ];
      const badJokes = [
        "What did the fish say when he swam into a wall? Dam.",
        "What do you call a can opener that doesn’t work? A can’t opener!",
        "I sold my vacuum the other day.All it was doing was collecting dust",
        "What do prisoners use to call each other? Cell phones!"
      ];
      
      const funnyJoke = document.getElementById("funnyjoke");
      const badJoke = document.getElementById("badjoke");
      const pFunny = document.getElementById("pfunny");
      const pBad = document.getElementById("pbad");
      
      function randomNumber(array) {
        const random = Math.floor(Math.random() * (array.length));
        return array[random];
      
        
      }
      
      function logFunnyJoke() {
            return randomNumber(funnyJokes);
      }
      
      function logBadJoke() {
               return randomNumber(badJokes);
      }
      
      function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
        if (shouldTellFunnyJoke) {
            pFunny.textContent = logFunnyJoke();
        }
        else {
            pBad.textContent = logBadJoke();
         }
        };
      funnyJoke.addEventListener("click", () =>
        jokeCreator(true, logFunnyJoke, logBadJoke)
      );
      
      badJoke.addEventListener("click", () =>
        jokeCreator(false, logFunnyJoke, logBadJoke)
      );

