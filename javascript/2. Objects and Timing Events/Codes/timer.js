var count = 10;
function timeRange(){
    if(count == 0){
        console.log("Time Out");
        clearInterval(id);
        return;
    }
    console.log(count);
    count--;
}
var id = setInterval(timeRange, 1000);
// Set Count
