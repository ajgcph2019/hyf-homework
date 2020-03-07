function selectClothes(givenTemperature){
    
    if (givenTemperature <= 0 ) {
      return "thermals and woollen wear";
    }

    else if ( givenTemperature <= 10) {
        return " wear pants, long-sleeve shirts, jackets, boots and coats"
    }

    else if ( givenTemperature <= 20) {
        return " shorts and a t-shirt";
    }
    else {
        return " wear light coloured cotton clothes"
    }
}

const clothesToWear = selectClothes(9);
console.log(clothesToWear); 