/*
document.createElement(element)
document.removeChild(element)
document.appendChild(element)
document.replaceChild(new, old)
document.body
document.domain
document.forms
document.head
document.images
document.links
document.title
document.URL
document.scripts
document.querySelectorAll("p.into")
--------------------------------------------------
--document.documentElement.innerHTML 
---------------
<form >
First name: <input type="text" name="fname" value="Donald">
<input type="submit" value="Submit">
</form> 
---document.forms.length
-- document.forms.length
function validation (){
let x = document.forms["myForm"]
["fname"].value;
if (x == ""){
alert ("Name must be filled out")
return false;
}
-----------------------------
<h2 onclcik = "this.innerHTML" = 'Opoops!'> Hello </h2>

<h1 onclcik = "changeText(id)"> Click on this text! </h2>

function changeText(id){
id.innerHTML = "Ooops!"
}
------------------------
<button onclick = "displayDate()" > The time is </button>

function displayDate(){
document.getElementById("demo").innerHTML =Date()

<button id= "myBtn"> Try it </button>
<p id= "demo"> </p>

document.getElementById("myBtn").onclick = displayDate;
-------------------------
<input type= "text" id = "fname" oninput="uppercase()">

function upperCase(){
const x = document.getElementById("fname");
x.value = x.value.toUpperCase();  

}

---------------------------------------
<body onload = "checkCookies()">

<p id="demo"> </p>

function checkCookies(){
let text = "";
if (navigator.cookieEnabled == true){

text = "cookies are enabled"
}else {
text = "cookie are not enabled"
}
 
}
-----------------------------------------------------
<div onmouseover = "mOer(this)" onmouseout="mOut(this)"

function mOver(this){
obj.innerHTML = "thank you!"
}
function mOut(this){
obj.innerHTML = "Mouse Over Me"
}
------------------------------------------------------
<div onmousedown= "mDown(this)"  onmouseup="mUp(this)"
function mDown (obj){
obj.style.backgroundColor = "Red";
obj.innerHTML = "Relase Me"
}

function mUp(obj){

obj.style.backgroundColor: "pink";
}
----------------------------------------------------------
let p1 =5;
let p2 =7;
document.getElementById("myBtn").addEventListener("click", function(){
myfunction(p1, p2);
})

fucntion myFunction (a, b){
document.getElentById.innerHTML = a*b;

}
-----------------------------------------------------
navigation of nide---
--parentNode
--childNodes[nodenumber]
--firstChild
--lastChild
--nextSibling
--previousSibling
---------------------------------------------------------
const para = document.createElement("p");
const node = document.createTextNode("This is new");

para.appenChild(node);
const element = document.getElementById("div";
element.appenChild(para);

const parent = document.getElementById("div1");
const child = document.getElementById("p1");

parent.removeChild(child);
-------------------------------------------
document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;

const myCollection = document.getElementById("p");

myCollection.length;
parent.removeChild(child);
-------------------------------------------
const parent = document.getElementByIdJJ("div");
const child = document.getElementById("p1");
const para = document.createElement("p");
const node = document.createTextNode("This is new");

para.appendChildJ(node);
parent.replaceChild(para, child);
------------------------------------------

--myCollection[1].innerHTML ;
-- myCollection.length;
-- function myFunction (){

const myCollection = document.getElementByTagname("p");
for 
for (let i = 0; i < myCollection.length; i++) {

myCollection[i].style.color = "red";
}

--------------------------------------
---myNodelist[1].innerHTML;
--------------------------------
function mufunction (){
const myNodelist = document.qureySelectorAll("p");
for(let i 0; i < myNodelist.length; i++){

myNodelist[i].style.color = "green";
}

}
-----------------------------------------------------------
-window.innerWidth
-window.innerHeight
-window.open()
-window.close()
-window.moveTo()
-window.resizeTo()
--------------------------------------------------------
window.location.href
window.hostname.hostname
window.location.pathname
window.location.protocal
window.location.assign()
----------------------------------------------------------
window.history.back()
window.history.forword()
------------------------------------------------------
navigator.cookieEnabled
navigator.appCodeNames
navigator.platform
------------------------------------------
function myFunction A(){
let text;

let person = prompt ("Please enter your name: ", "Harry Potter:")
if = (person == null || person == ""){
text = "user cancelled the prompt."

}else {
text = "Hello" + person + : "How are you"
}
.innerhtml = text ; 
}
------------------------------------------------------
functiojn myFunction (){
var txt ;
if (confirm("Press a button")){

txt = "You pressed Cancel";


}
document.getElementById("demo").innerHTML = txt;

}
-------------------------------------------------------
function myFunction (){

alert("I am an alert box!")
}
------------------------------------------------------------
<button onclick = "myVar = setTimeout(myFunction, 2000")> try it </button>

<button onclick = "clearTiemout (myVar)"> Stop it </button> 


functon myFunction (){

alert ("Hello");
}
------------------------------------------------------------
display: flex ;
flex-directin: column/ column-reverse/ row/ row-reverse

flex-wrap: wrap/ no-wrap
flex-flow: row wrap
justify-content: 
align=items: center;
align-content: center;
-----------------------------------------------------
order
flex-grow;8
flex-shrink;0
flex-basis;200px
flex: grow/shrink / basis/
align-self; flex-start / flex-end /

------------------------------------------------------
display: grid
column-gap
row-gap
gap

grid-templete-columns repeat(12, 1fr)/ repeat(auto-fit, minmax(200px, 1fr)):  //repeat(auto-fit, minmax(12 , 1fr)) 
grid-templete-rows:
grid-column-start:
grid-column-end:
grid-column-start:
grid-column-end:
grid-column: 1/span3;
grid-rows: 3/ 4;
grid-area: 1/2/4/7;
--------------------------------------------
u;{
list-style-type: none;
margin:0;
padding:0;
overflow: hidden;

}

*/
