
// function oddNumbers(){

//     const numbers = [1,2,3,4,5,6,7,8,9,10, 22, 23,24,27];
//     const newNumber = numbers.filter(number => number%2 === 0)
//             alert("Even numbers" + newNumber)
// }
// oddNumbers();



const input = document.querySelector("#check");
const par = document.querySelector("#par");

input.addEventListener("click", result);

function result(){
    if (input.checked === true){
        par.style.display = "block"
    }
    else{
        par.style.display = "none"
    }
}


const str = "In West Philadephia, born and raised.";
const words = str.split("");

function getVowelCount() {
    return words.filter(word => word.match(/[aeiou]/gi)).length;
}

console.log(getVowelCount());


