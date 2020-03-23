const notes = [];
function addNote( id , content) {
            
    if (id === null || isNaN(id)) {
        return 'Error in ID format' ;
     }
     else {
        notes.push({id,content});
     }
       

}


function getNoteFromId(id) {
    
    console.log(id); //For output reference 

    for (let i = 0; i < notes.length ; i++) {
        if ( notes[i].id === id) {
            return notes[i];
         
        }
    }
             return "not found" ;
           
}
//Get all notes
function getAllNotes()  {
    for (let i = 0; i < notes.length ; i++) {
        return notes[i];
    }

 }

 //
 function logOutNotesFormatted () {
     for ( let i = 0; i < notes.length ; i++) {
        console.log( "The note with ID " + notes[i].id + " has the following text: " + notes[i].content ) ;
     }
     
 }

 addNote(1, 'HTML stands for Hypertext Markup Language' );
 addNote(2,'Flexbox in HTML');
 addNote(3,' CSS stands for Cascading style sheets');
 
const note = getAllNotes();
console.log("The notes are " ,note);

const result1 =addNote('a');  //Adding a note with wrong ID format
console.log(result1);

const result2 = getNoteFromId(4);  //Calling a note which is not pushed
console.log("The requested note is " ,result2);

const result3 = getNoteFromId(1);  
console.log("The requested note is " ,result3);

const result4 = getNoteFromId(2);  
console.log("The requested note is " ,result4);

logOutNotesFormatted();
