//Returns a formatted date variable (Month-Day-Year)
function formattedDate(){
    var date = new Date();
    //Making year
    var year = date.getFullYear();

    //Making month
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var month = months[date.getMonth()];

    //Making day
    var day = date.getDate();

    //putting is together
    var properDate = month + "-" + day + "-" + year;
    var returnDate = String(properDate);
    return returnDate;
}

//Adds a new chore log for garbage for:
//Rob
function robAddGarb(){

}
//Alex
function aleAddGarb(){

}
//Pascal
function pasAddGarb(){

}
//Paolo
function paoAddGarb(){

}
//Pierre
function pieAddGarb(){

}
