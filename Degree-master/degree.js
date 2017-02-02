const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);

//Code here
function degree(mtrx,v){
  let sum = 0;
  let degreelist = mtrx(v-1);
  for(let i=0; i<degreelist.length; i++){
    sum += degreelist[i];
  }
  return sum;
}

function degreecentrality(mtrx,v){
  let neighbors = mtrx(v-1).length - 1;
  return degree(mtrx,v)/neighbors;
}

//Challenge
function king(mtrx){
  let temp = 0;
  let biggest = [];
  for(let i = 0; i<mtrx(0).length; i++){
    let temp2 = degreecentrality(mtrx,i+1);
    if(temp2 > temp){
      temp = temp2;
      biggest = [];
      biggest.push(i+1);
    }
    else if(temp2 == temp){
      biggest.push(i+1);
    }
}

return biggest;

}

//Run test code with ctrl+shift+p  then type in "script"
console.log(degree(A,3));
console.log(degreecentrality(A,2));
console.log(king(A));
