var readlinesync = require('readline-sync');

console.log("\n              Game Of Shapes");
console.log("1.*\n  * * \n  * * * ");
console.log("-------------------------------------");
console.log("2.* * *\n  * * \n  * ");
console.log("-------------------------------------");
console.log("3.    *\n    * * \n  * * * ");
console.log("-------------------------------------");
console.log("4.* * *\n    * *\n      *");
console.log("-------------------------------------");

var formatnumber = readlinesync.question("which format do u want?\n\n:");

if(formatnumber==1){
  var num = readlinesync.question("Please give number of lines\n\n:");
  let string = "";
  for (let i = 1; i <= num; i++) {
  for (let j = 0; j < i; j++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
}


if(formatnumber==2){
  var num = readlinesync.question("Please give number of lines\n\n:");
  let string = "";
  for (let i = 0; i <= num; i++) {
  for (let j = 0;j < (num-i); j++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
}


if(formatnumber==3){
  var num = readlinesync.question("Please give number of lines\n\n:");
  let string = "";
  for (let i = 1; i <= num; i++) {
    for(let j=0;j<num-i;j++){
      string +="  ";
    }
  for (let k = 0; k < i; k++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
}


if(formatnumber==4){
  var num = readlinesync.question("Please give number of lines\n\n:");
  let string = "";
  for (let i = 0; i <= num; i++) {
    for(let k=0 ;k<i;k++){
      string +="  ";
    }
    for (let j = 0; j <num-i; j++) {
    string += "* ";
    }
  string += "\n";
}
console.log(string);
}
