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

function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = "You will be a " + jobTitle + " in " + geoLocation + " and married to " +
        partner + " " + " with " + numKids + " kids.";
    console.log(future);
}

tellFortune('Manager', 'Armenia', 'David', 3);
tellFortune('Developer', 'America', 'Joe', 1);
tellFortune('Singer', 'Russia', 'Nike', 0);




