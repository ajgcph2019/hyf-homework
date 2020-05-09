// Create an array of bad movies

const moviesUrl = `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`;
fetch(moviesUrl) 
    .then(response => response.json())
    .then(badMovies => {
        const rating = badMovies.filter(movies => movies.rating < 3);
         console.log(rating);
        const badMoviesSinceYear2000 = rating.filter(movies => movies.year >= 2000 );
        console.log(badMoviesSinceYear2000);
        const badMoviesList = badMoviesSinceYear2000.map(movies => movies.title);
        console.log(badMoviesList);
    });



     