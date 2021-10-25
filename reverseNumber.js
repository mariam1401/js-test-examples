

// let arr = [];
// function  reverseNumber(num) {
//     let tostring = num.toString();
//     for (let i = tostring.length-1; i >=0; i--) {
//        arr.push(tostring[i]);
//     }
//     return arr.join('');
// }


//console.log(reverseNumber(386));

// function countLetter (str,letter){
//     let counted = 0;
//    for (let i = 0; i<str.length;i++){
//         if(str.charAt(i) === letter){
//             counted = counted + 1;
//         }
//     }
//    return counted;
//  }
// console.log(countLetter("hello","l"));
//



// const  reversenumber= (num)=> num.toString().split("").reverse().join("");
//
// console.log(reversenumber(675));
// const findGreater = (arr, num) => {
//     let  array = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < num){
//             continue;
//         }
//         array.push(arr[i]);
//     }
//     return array;
// }
// console.log(findGreater([4,5,6,7,8], 7));

//4.Write a JavaScript function that returns a passed string with letters in alphabetical order.

const alphabeticalOrder = (str) => str.split('').sort().join('');

console.log(alphabeticalOrder("hello"));

/*5.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
 string in upper case.*/

function toUpperCase (str){
    let string = str.split(' ');
    let newArray = [];
    for (let i =0;i<string.length;i++){
        newArray.push(string[i].charAt(0).toUpperCase()+string[i].slice(1));
    }
return newArray.join(' ');
}
console.log(toUpperCase("hello Mariam, how are you"));

//6.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function longestWord (str){
    let string = str.split(' ');
    let longestword = "";
    for (let i = 0;i < string.length;i++){
        if(string[i].length > longestword.length){
            longestword = string[i];
        }
    }
return longestword;
}
console.log(longestWord("i don't have time to communicate with you"));


//Write a JavaScript function to find the first not repeated character
debugger;
function firstNotRepeatingCharacters(str) {
    for (let i = 0; i < str.length; i++) {
        if(str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))) {
            return str.charAt(i)
        }
    }
        return false
}
console.log(firstNotRepeatingCharacters("hello"));

