var set = 1 ;
// Making the Function 
function printHello(){
    console.log("Hello", set);
    set++;
    if(set >= 7){
        clearInterval(id);
    }
}
setTimeout(printHello, 5000); // 5000 in milliscond
// This will Print after 5 Sce
var id = setInterval(printHello, 5000);