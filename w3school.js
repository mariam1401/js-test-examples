
document.getElementById("demo").innerHTML = 5 + 9;
document.write(5 + 6);
window.alert(5 + 8);
console.log(5 + 8);


function myfunction() {
    document.getElementById("text1").innerHTML = "Hello Daniel";
    document.getElementById("test2").innerHTML = "how are you";
    console.log("M")
    console.log("M")
    console.log("M")
    console.log("M")
}

var pi = 3.14;
var person = "Mariam";
var answer = 'yes i am';

document.getElementById("deno").innerHTML = pi + "<br>" + person + "<br>" + answer;

var carName = 'Volvo'
document.getElementById('car').innerHTML = carName;

var names = 'Mariam', lastNames = 'Karapetyan',age = 20;
document.getElementById('hamar1').innerHTML = lastNames;

var personName;
document.getElementById('hamar2').innerHTML = personName;

var x = 5 + 2 * 8;
document.getElementById('hamar3').innerHTML = x;

const cars = ["BMW", "Toyota", "Saab"];
cars[0] = "Volvo";
cars.push("Nisan");
document.getElementById('hamar4').innerHTML = cars;

let n =  10;
let m = 2;
let l = n + m;
document.getElementById('hamar5').innerHTML = l;

var x = 20;
x +=30;
document.getElementById('hamar6').innerHTML=x;

let name1 = "Narek";
let name2 = "Lilit";
let name3 = name1 + " " + name2;
document.getElementById('hamar7').innerHTML = name3;

let d = 5;
let o = "Joe";
var x = 20;
let k = 7;
let q = d + o +k;
var x = 20;
document.getElementById('hamar8').innerHTML = q;

let v = 17;
let s = 7;
let f = v % s ;
document.getElementById('hamar9').innerHTML = f;

let number1 = 6;
document.getElementById('hamar10').innerHTML = number1 ** 4;

let p = 20;
let t = 34;
let w = "Joe";
let g = p + t + w;
document.getElementById('hamar11').innerHTML = g;

let step1 = 7;
let step2 = 14;
let step3 = 7;
document.getElementById('hamar12').innerHTML = (step1 === step2) + "<br>" + (step1 === step3);

var x = myFunction(4, 3);
document.getElementById("demo5").innerHTML = x;
function myFunction (a, b) {
    return a * b;
}
    function ourFunction() {
        let carName = "volvo";
        document.getElementById("demo3").innerHTML = typeof carName + " " + carName;
    }

ourFunction();
    document.getElementById("demo6").innerHTML = typeof carName;

    // question
    let text = 'We are the so-called "Vikings" from the north.';
    document.getElementById("done").innerHTML = text;

    //quetion
    let x1 = "John";        // x is a string
    let y1 = new String("John");  // y is an object

    document.getElementById("demo77").innerHTML =
        typeof x1 + "<br>" + typeof y1;

    let str = "Apple, Banana, Kiwi";
    document.getElementById("demo22").innerHTML = str.slice(7,13);

    function myFunction1() {
        let text22 = document.getElementById("demo33").innerHTML;
        document.getElementById("demo33").innerHTML =
            text22.replace("Microsoft", "W3Schools");
    }
        function myFunction2() {
            let text = document.getElementById("demo32").innerHTML;
            document.getElementById("demo32").innerHTML =
                text.toUpperCase();
        }

        let text13 = "Hello";
        let text23 = "World!";
        let text24 = text13.concat(" ",text23);
        document.getElementById("demo34").innerHTML = text24;

        let text88 = "5";
        document.getElementById("demo45").innerHTML = text88.padStart(4,0);

        //questuon
        let text38 = "HELLO WORLD";
        document.getElementById("demo57").innerHTML = text38.charCodeAt(0);

        let lones = "hi everyone,i want to say everyone";
        document.getElementById("nans1").innerHTML = lones.lastIndexOf(/e/);


        let bas = "the wether is nise,and the people is rise";
        document.getElementById('mar').innerHTML = bas.match(/is/gi);

        //Template Literals ?
        //Hexadecimal ?
        let x37 = 9.656;
        document.getElementById("demo89").innerHTML =
            x37.toExponential() + "<br>" +
            x37.toExponential(2) + "<br>" +
            x37.toExponential(4) + "<br>" +
            x37.toExponential(6);

        const fruits = ["Banana", "Orange", "Apple"];
        document.getElementById("demo96").innerHTML = fruits;

        function myFunction5() {
            fruits.push("Lemon");
            document.getElementById("demo96").innerHTML = fruits;
        }

        const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
        document.getElementById("demo19").innerHTML = "Original Array:<br>" + fruits1;

        function myFunction() {
            fruits.splice(2, 0, "Lemon", "Kiwi");
            document.getElementById("demo29").innerHTML = "New Array:<br>" + fruits1;
            const fruitss = ["Banana", "Orange", "Apple", "Mango"];
            document.getElementById("demod").innerHTML = fruitss;
        }
            function myFunction() {
                fruitss.sort();
                document.getElementById("demod").innerHTML = fruitss;
            }
//question
            const points = [40, 100, 1, 5, 25, 10];
            document.getElementById("demod").innerHTML = points;

            function myFunction9() {
                points.sort(function(a, b){return a - b});
                document.getElementById("demod").innerHTML = points;
            }

            const pointsd = [40, 100, 1, 5, 25, 10];
            document.getElementById("demol").innerHTML = myArrayMin(pointsd);

            function myArrayMin(arr) {
                return Math.min(pointsd);
            }

                const numbersj = [45, 4, 9, 16, 25];

                let txt = "";
                numbersj.forEach(myFunctionj);
                document.getElementById("demok").innerHTML = txt;
                function myFunctionj(value, index, array) {
                    txt += value + "<br>";
                }


                const numbersg = [45, 4, 9, 916, 25];
                const numberssg = numbersg.map(myFunctionl);

                document.getElementById("demom").innerHTML = numberssg;

                function myFunctionl(value, index, array) {
                    return value * 2;
                }
                    const numberskk = [45, 8, 9, 16, 25];
                    const over18 = numberskk.filter(myFunctionkk);


                    document.getElementById("demo").innerHTML = Boolean(10 > 9);


                    document.getElementById("demoll").innerHTML = over18;

                    function myFunctionkk(value, index, array) {
                        return value > 19;
                    }


                    const personnm = {
                        firstname: "John",
                        lastname: "Doe",
                        age: 58,
                        eyecolor: "blue"
                    };

                    delete personnm.age;
                    document.getElementById("demokl").innerHTML = personnm.firstname + " is " + personnm.age + " years old.";

const inventory = [
    {name: 'apples', quantity: 5},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);

console.log(map1);