function add (numbers){
  if(numbers == ""){
    return 0;
  }
  var numberArray = createArray(numbers);
  if(numberArray.length > 0){
    checkForNegatives(numberArray);
    return sum(numberArray);
  }
}

function checkForNegatives(numberArray){
  var negativeNumbers = [];
  var negCounter = 0;
  for(var i = 0 ; i < numberArray.length ; i++){
    if(parseInt(numberArray[i]) < 0){
      negativeNumbers[negCounter] = numberArray[i];
      negCounter++;
    }
  }
  if(negativeNumbers.length > 0){
    var err = "Negatives not allowed: " + negativeNumbers[0];
    for(var i = 1 ; i < negativeNumbers.length ; i++){
        err += "," + negativeNumbers[i];
      }
    throw(err);
  }
}

function sum(numberArray){
  var total = 0;
  for(var i = 0 ; i < numberArray.length ; i++){
    if(numberArray[i] <= 1000){
      total += parseInt(numberArray[i]);
    }
  }
  return total;
}

function createArray(numbers){
  var separators = [',', '\\n'];
  var numberArray = numbers.split(new RegExp(separators.join('|'), 'g'));
  return numberArray;
}

module.exports = add;
