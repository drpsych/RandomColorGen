const colors = ["green", "red", "purple", "blue", "cyan", "yellow", "gray", "pink", "black", "white", "indigo", "orange", "brown", "darkgreen", "lightgreen", "beige", "lightgray"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
// add an event listener for when the button is clicked. 
btn.addEventListener('click', function(){
    // get random number between 0 and colors.length.
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
    // selects the background color option in the document
    // sets it to the random number in the color Array.
    document.body.style.backgroundColor = colors[randomNumber];
    //changes the text in the color span tag.
    color.textContent = colors[randomNumber]; 
});

function getRandomNumber() {
    //returns numbers between 0 and colors length.
    // return Math.random()*colors.length;
    
    // will round down to whole numbers. 
    return Math.floor(Math.random()*colors.length);
}
