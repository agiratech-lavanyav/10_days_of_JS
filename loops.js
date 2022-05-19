'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function vowelsAndConsonants(s) {
    var a = ['a','e','i','o','u'];
    var b = "";

    for(var i=0;i<s.length;i++){
        if(a.includes(s[i])){
            console.log(s[i]);
        }
        else {
            b += s[i] + '\n';  
        } 
           
        }
        console.log(b);
    }

        
    
    


