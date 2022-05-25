

function regexVar() {
   
    //   match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
    
    var re = RegExp(/^a.*a$|^e.*e$|^i.*i$|^o.*o$|^u.*u$/);
    return re;
}

