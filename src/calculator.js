function add (numbers){
  if(numbers == ""){
    return 0;
  }
  if(numbers.includes("," || "\\n")){
    var numberArray = createArray(numbers);
    return sum(numberArray);
  }
  else{
    return parseInt(numbers);
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
