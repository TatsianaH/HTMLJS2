function sayHello(){
console.log("Say Hello!!!");
document.body.style.backgroundColor = 'orange';
document.getElementById('h1').style.backgroundColor = 'green';
document.getElementById('h1').style.fontSize = '50px';
document.getElementById('display').value = 'Hello Display';
}
function mouseEnter(){
console.log("Hi!!!");
}
function read(){
return document.getElementById('display').value;
}

function addToList(){
let para = document.createElement("li");
let node = document.createTextNode(read());
para.appendChild(node);

let element = document.getElementById("list");
element.appendChild(para);
}
