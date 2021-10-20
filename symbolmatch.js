let a = "()()";
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

done(a);

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