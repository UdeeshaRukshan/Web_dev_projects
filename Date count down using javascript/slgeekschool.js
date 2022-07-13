//Easy method
//days hours minuites seconds
//01 jan 00:00
let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let daysLeft;
let cYear;


let interval=window.setInterval(function(){
    let cDate= new Date();
    cHour=cDate.getHours();
    cMin=cDate.getMinutes();
    cSec=cDate.getSeconds();
    cDay=cDate.getDate();
    cMonth=cDate.getMonth();
    cYear=cDate.getFullYear();

    if(cYear % 4==0){

        daysPerYear=366;
        daysinFeb=29;

    }
    else{
        daysPerYear=365;
        daysinFeb=28;
    }

    switch(cMonth){
        case 1:
            daysLeft=daysPerYear;
            break;

        case 2:
            daysLeft=daysPerYear-31;
            break;
        
        case 3:
            daysLeft=daysPerYear-(31+daysinFeb);
            break;
        
        case 4:
            daysLeft=daysPerYear-(62+daysinFeb);
            break;
        
        case 5:
            daysLeft=daysPerYear-(92+daysinFeb);
            break;

        case 6:
            daysLeft=daysPerYear-(123+daysinFeb);
            break;
        case 7:
            daysLeft=daysPerYear-(153+daysinFeb);
            break;

        case 8:
            daysLeft=daysPerYear-(184+daysinFeb);
            break;
        
        case 9:
            daysLeft=daysPerYear-(215+daysinFeb);
            break;

        case 10:
            daysLeft=daysPerYear-(245+daysinFeb);
            break;

        case 11:
            daysLeft=daysPerYear-(276+daysinFeb);
            break;

        case 12:
            daysLeft=daysPerYear-(306+daysinFeb);
            break;

                
    }

    document.getElementById('Seconds').innerHTML=60-cSec;
    document.getElementById('Minuites').innerHTML=60-cMin;
    document.getElementById('Hours').innerHTML=24-cHour;
    document.getElementById('days').innerHTML=daysLeft;

},1000);
