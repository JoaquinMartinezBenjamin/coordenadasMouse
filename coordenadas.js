var x;
var y;

function mouse(event) {

x=event.clientX;
y = event.clientY;
console.log(x + " "+ y);
document.getElementById('parrafo').innerHTML = "Cordenadas ; "+x +" ,"+y;
 }

function almacenar(){
localStorage.x=x;
localStorage.y=y;
sessionStorage.x=x;
sessionStorage.y=y;
}
