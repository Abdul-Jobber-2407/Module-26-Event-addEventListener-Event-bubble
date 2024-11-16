/**
 ***What is dom?
  Ans: Dom hossa html document er jonno 1ta programming interface;
  The Document Object Model (DOM) is a programming interface that allows scripts and programming languages to interact with web pages.
 
 ***BN: jokhon webpage browser a lode hoi tokon html document ta DOM Tree ta converted hoi. 
 
  
 *** DOM kano lage? 
     Ans: DOM er darai JavaScript khub easily html elements gulo k manipulate korte para.

***HTML k Java Script kivabe manipulate kora or DOM used kora JavaScript ki ki korta para ??

1) HTML elements gulo k change korta para .
2) HTML elements gulor CSS style change korta para .
3) New html element create korta para.
4) HTML elements gulo k remove korta para .
5) HTML attributes gulo k change korta para .
6) New HTML events create korta para .

*** DOM er full meaning ?
    *Document ( file)
    *Object (elements)
    *Model(layout structure)

*** Node ki ?
Ans :Nodes deya DOM tree banano hoi .

BN: Node hossa object . DOM Tree ta Document, doctype, elements, text gulo k nodes bole. 

*** ParentNode and ChildNode ?
Ans: Roote node chara potiti noder 1ta parent node thake. 1ta parent node er akadhik child node thakte para. Same parent er child node gulo k neighbours ba sibling node bola hoi .

***DOM METHODS ??
Ans : DOM methode dara amra JavaScript deya html element gulo k manipulate (add, delete, create, remove, modify,etc)korta pari .

***-------Let's see some DOM methods------------*
1)---------getElementById---------------------
<body>
     // index.html
    <h1 id ="headingOne"> I am the heading tag </h1>
    <script src="./demo.js"></script>
    
</body>
 // demo.js
 const headingOne = document.getElementById("headingOne");
 headingOne.style.color='red';

 2)---------getElementsByClassName---------------------
 <body>
     // index.html
   <div class="paragraph">
    <p>This is the paragraph one</p>
   </div>

   <div class="paragraph">
    <p> This is the paragraph Two </p>
   </div>

    <script src="./demo.js"></script>
    
</body>
 // demo.js
 const collections = document.getElementByClassName("paragraph");

 Output: This is paragraph one.
         This is paragraph Two

3)------------createElement and appendChild---------------
<body>
     // index.html
<ul id="my-ul">
    <li>I am one</li>
    <li>I am Two</li>
</ul>
    <script src="./demo.js"></script>
    
</body>
 // demo.js
 const myUl = document.getElementById("my-ul");
 const myNewList= document.createElement('li');
 myNewList.innertText = 'I am three';
 myUl.appendChild(myNewList);

 Output: I am  one.
         I am  one.
         I am  three.

 */
