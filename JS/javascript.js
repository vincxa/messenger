function openchat(){
    document.getElementById('chatcontainer').style.height = '400px'
    document.getElementById('chatcontainer').style.width = '300px'
}
function closechat(){
    document.getElementById('chatcontainer').style.height = '0px'
    document.getElementById('chatcontainer').style.width = '200px'
}
document.getElementById("demo").innerHTML =
"Available Screen Width: " + screen.availWidth;
// console.log(document.getElementById("demo").innerHTML =
// "Available Screen Width: " + screen.availWidth;)
