function rand(num){
    var randomDecimalNumber = Math.random() * num;

    var roundedDecimalNumber = Math.round(randomDecimalNumber);

    return roundedDecimalNumber;
}

console.log(rand(5));