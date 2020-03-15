'use strict';
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  }
];


function addSongToDatabase(song) {
    const myPlaylist = [];
    
    songDatabase.push(song);
    console.log(songDatabase);
}

function getSongByTitle(title) {
  
       const index = songDatabase.findIndex( function (songDatabase) {
        return title === songDatabase.title ;
     })

    return songDatabase[index];
}

function addSongToMyPlaylist(title) {
    
    const addedSongDetails = getSongByTitle(title) ;
    return addedSongDetails ;
}
   
   


const objSong1 = {songId: 4, title :'Happy',artist :'Pharrell William'};
const objSong2 = {songId : 5, title :'Oceans' ,artist :'Hillsongs'} ;

addSongToDatabase(objSong1) ;
addSongToDatabase(objSong2) ;

const searchedSong1 =getSongByTitle('When is enough too little?');
console.log(searchedSong1); // returns { songId: 4, title: 'When is enough too little', artist: 'The spies girls'}

const searchedSong2 = getSongByTitle('When is enough too');
console.log(searchedSong2); // returns undefined
    
const myPlaylist1 = addSongToMyPlaylist('3 nails in wood');
console.log("My PlayList1 "  ,myPlaylist1); // [{ songId: 2, title: '3 nails in wood', artist: 'The carpenters' }]

const myPlayList2 = addSongToMyPlaylist('Happy');
console.log("My PlayList2 " ,myPlayList2);