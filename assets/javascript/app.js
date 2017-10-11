// alert(" You have 30 seconds to answer the following questions");

var count = 30;
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        //counter ended
        return;
    }
    //code for showing the number of seconds here
}

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
    document.getElementById("timer").innerHTML = count + " Seconds Remaining"; // watch for spelling

}

