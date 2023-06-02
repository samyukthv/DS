
//Q1:  factorial of a number using recursion

function factorial(value){
    if(value<=1){
        return 1
    }
    else{
       return value*factorial(value-1)
    }
}

console.log("factorial is:  "+factorial(5));


//Q2: sum  upto that value beginning from 1

function sum(value){
   if(value<=1)
   return 1
   return value+sum(value-1)
}
console.log("sum is: "+sum(5));


//Q3: print upto that number beginning from  1

function printNum(value){
    if(value>1)
    printNum(value-1)
    console.log(value);
}

printNum(5)
