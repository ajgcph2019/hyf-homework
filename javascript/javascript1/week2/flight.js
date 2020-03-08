function getFullname (firstname, surname , useFormalName){
    if (useFormalName == true){
        return "Lord " + firstname + " " + surname ;
    }
    else if (firstname === undefined || surname === undefined){
        return "input fields cannot be left blank";
    }
     else {
         return firstname + " " + surname ;
    }
}