// ===========PIN GENERATE FUNCTION==========
// get onclick handler using function
function getPin(){
    const randNum = Math.random() * 10000;
    const getRandomValue = Math.round(randNum);
    const getRandomText = getRandomValue + '';
    if(getRandomText.length == 4){
        return getRandomValue;
    }
    else{
        // console.log('Duplicate number is = ', getRandomValue);
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    // get display of html element
    const displayGenerate = document.getElementById('generate-pin-input');
    displayGenerate.value = pin;
}

// ============CALCULATER==========================
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;

    // get display and show the result of the number on it
    const displayInput = document.getElementById('calc-input');

    if(isNaN(number)){
        if(number == 'C'){
            displayInput.value = '';
        }
        
    }
    else{
        
        const previousNum = displayInput.value;
        const newNum = previousNum + number;
        displayInput.value = newNum;
    }
    
})

//  ======================MATCHING COMPARESION=========================
function comparesionSubmit(){
    const generatePin = document.getElementById('generate-pin-input').value;
    const calculatePin = document.getElementById('calc-input').value;
    // get pin matched notification element
    const pinMatched = document.getElementById('pin-match');
    // gett pin didn't match notification element
    const pinNotMatch = document.getElementById('pin-not-match');

    // comparesion
    if(generatePin == calculatePin){
        
        pinMatched.style.display = 'block';
        pinNotMatch.style.display = 'none';
    }
    else{
        pinMatched.style.display = 'none';
        pinNotMatch.style.display = 'block';
    }
}