//Option 1 : Directly set on the html element

// option 2: add onclick function on the html element
// Important : We will use this
function makeRed(){
    document.body.style.backgroundColor='red';
}

//option 3: 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick=makeBlue;
function makeBlue(){
document.body.style.backgroundColor='blue';
}

//option 3.1 :
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick=function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

//option 4 :
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

//option 4.1:
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

// option4.2 Final 
// IMPORTANT : We will use this sometimes
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})
