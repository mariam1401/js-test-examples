

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
const findGreater = (arr, num) => {
    let  array = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < num){
            continue;
        }
        array.push(arr[i]);
    }
    return array;
}
console.log(findGreater([4,5,6,7,8], 7));