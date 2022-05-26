// rotates the numbers towards left using array 

function rotateLeft(d, arr) {
for(let i=0; i<d; i++){
let val = arr.shift();
arr.push(val);
}

return arr;
}

