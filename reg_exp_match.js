
function regexVar() {
    //  It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
    let re = RegExp(/^(Mr|Mrs|Ms|Dr|Er)(\.)([A-z])+$/);
    return re;
// /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/

}

