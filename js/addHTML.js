function addHTML() {

    if(window.location.protocol == 'file:') {
var filename = document.getElementById("addhtml")
filename += ".html"
document.getElementById("addhtml").href=filename;
console.log(filename);
return false;
    }
}