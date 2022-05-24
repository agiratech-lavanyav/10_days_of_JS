function getDayName(dateString) {
    let dayName;
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let date = new Date(dateString);  
    dayName = days[date.getDay()];
    
    return dayName; //return a string denoting the day of the week corresponding to the date denoted by dateString.
}
