/*let a = "()()";
let b = "()(";
let arr1 = [];
let arr2 = [];
function checkSymbol(val){
    for(let i = 0; i < val.length;i++){
        if(val[i] === "("){
            arr1.push(val[i]);
        }
        else if(val[i] === ")"){
            arr2.push(")");
        }
    }
    if(arr1.length === arr2.length){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

done(a);*/

/*let arr3 = [];
function checkSymbol(val){
    for(let i = 0;i < val.length; i++){
        if (val[i] === "(") {
            arr3.push(val[i]);
        }
        else if (val[i] === ")"){
           arr3.shift(val[i]);
        }
    }
    if (arr3.length === 0 ){
        console.log(true);
    }
    else{
        console.log(false);
    }
    }
checkSymbol("(()())");*/

/*Write a function named calculateDogAge that:
    takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.*/


function calculateDogAge (age) {
    let dogAge = 7 * age
   console.log(dogAge);
 }
calculateDogAge(5);
calculateDogAge(30);
calculateDogAge(1);
/*Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments. */

function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = "You will be a " + jobTitle + " in " + geoLocation + " and married to " +
        partner + " " + " with " + numKids + " kids.";
    console.log(future);
}

tellFortune('Manager', 'Armenia', 'David', 3);
tellFortune('Developer', 'America', 'Joe', 1);
tellFortune('Singer', 'Russia', 'Nike', 0);

//Write a JavaScript function that checks whether a passed string is palindrome or not?

function checkString (palindrome) {
    for (let i = 0; i < palindrome.length; i++) {
        const firstIndex = i;
        const secondIndex = palindrome.length - i-1;
        if (palindrome[firstIndex] !== palindrome[secondIndex]) {
                return false;
        }
    }
    return true;
}

checkString("madam")