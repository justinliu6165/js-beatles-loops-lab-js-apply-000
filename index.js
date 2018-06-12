function theBeatlesPlay(musicians,instruments){
  var array = [];
  for(var i=0; i < musicians.length; i++){
    array[i] = musicians[i] + " plays " + instruments[i];
  }
  return array;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var beatlesArray = [];
  var i = 0;
  do {
    beatlesArray[i] = "I love the Beatles!";
    i++;
  } while(i <= num && num < 15);
  return beatlesArray;
}





