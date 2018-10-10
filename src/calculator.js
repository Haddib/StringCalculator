function add (numbers){
  if(numbers == ""){
    return 0;
  }
  var numberArray = createArray(numbers);
  if(numberArray.length > 0){
    return sum(numberArray);
  }
}

function sum(numberArray){
  var total = 0;
  for(var i = 0 ; i < numberArray.length ; i++){
    total += parseInt(numberArray[i]);
  }
  return total;
}

function createArray(numbers){
  var separators = [',', '\\n'];
  var numberArray = numbers.split(new RegExp(separators.join('|'), 'g'));
  return numberArray;
}

module.exports = add;
