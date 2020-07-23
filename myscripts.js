function passChecker(){
var finished = false;
var user;
var pass= "snake"
var i = -1;


while(finished==false){
  i++;
  if(user!=pass){
    if(i==1){
      alert("Hint: think about a reptile with no limbs");
    }
    user=prompt("Enter password");
    user= user.toLowerCase();
    finished=false;
  }
  else if (user==pass){
    alert("Access granted!");
    finished=true;
  }


}
}

function letterCounter(){
var i = -1;
var letterCode;
var sum = 0;
var user = prompt("Enter a sentence and the number of letters will be counted");
var user = user.toLowerCase();
while(i<user.length){
i++;
letterCode = user.charCodeAt(i);

if(letterCode>=97 && letterCode<=122) {
  sum = sum+1
}
else{
  sum=sum+0;
}
}
alert("There are "+sum+ " words in your sentence");
}


function hackerSpeak(){
var sentence = prompt("Enter a sentence");
var sentenceLength = sentence.length
var output;
var i = -1;
var character;
var wordsum = " ";

while(i < sentenceLength) {
  i++
  character = sentence.charAt(i);
  if (character != "e" && character != "E" && character != "a" && character != "A" && character != "l" && character != "L" && character != "o" && character != "O") {
    wordsum = wordsum + character
  }
  else if (character == "e" || character == "E" ) {
    wordsum = wordsum + "3"
  }
  else if (character == "a" || character == "A" ) {
    wordsum = wordsum + "4"
  }
  else if (character == "l" || character == "L" ) {
    wordsum = wordsum + "1"
  }
  else if (character == "o" || character == "O" ) {
    wordsum = wordsum + "0"
  }


}
alert(wordsum);
}


//PIG LATIN
function pigWord(word){
  var fL = word.charAt(0)
  if ((fL == String.fromCharCode(97)) || (fL == String.fromCharCode(65)) || (fL == String.fromCharCode(101)) || (fL == String.fromCharCode(69)) || (fL == String.fromCharCode(105)) || (fL == String.fromCharCode(73)) || (fL == String.fromCharCode(111)) || (fL == String.fromCharCode(79)) || (fL == String.fromCharCode(117)) || (fL == String.fromCharCode(85))) {
    word = " " + word + "ay";
}
  else {
    word = " " + word.substring(1) + fL + "ay";
  }
  return word;
  }
function pigLatin() {
  var s3 = prompt("Enter a sentance to be translated into Pig Latin!")+ " ";
  var pigSentence ="";
  var where1, where2, word
  where1 = 0;
  where2 = 0;
  word = 0;
  do {
    where1 = (s3.indexOf(" ") );
    word = s3.substring(0, where1);
    s3 = s3.substring(where1 + 1);
    pigSentence += pigWord(word);

  }

   while (s3.length > 0 );

  alert(pigSentence);
}
