'use strict';




function sides(literals, ...expressions) {
    let [a , p] = expressions;
     let answer = Math.sqrt((p * p - (16 * a)));
        return [((p - answer)/4), ((p + answer)/4)];
}


// function main() {
//     let s1 = 10;
//     let s2 = 2;
    
//     [s1, s2] = [s1, s2].sort();
//     console.log([s1,s2]);
//     const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
//     // console.log(s1);
//     // console.log(s2);
//     // console.log(x);
//     // console.log(y);
    
//     console.log((s1 === x) ? s1 : -1);
//     console.log((s2 === y) ? s2 : -1);
// }