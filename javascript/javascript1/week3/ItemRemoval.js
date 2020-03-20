const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';


 const namesIndex = names.indexOf(nameToRemove) ;
 //console.log(namesIndex); For reference

 //console.log(names[namesIndex]);

    if (names[namesIndex] === nameToRemove)  {
        names.splice(namesIndex , 1);
    }

console.log(names);     // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']