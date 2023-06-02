//  let arr=[11,12,13,14,15,16,17,18,19,20]
// // arr2=[21,22,23,24,25]
// // arr3=[2,4,6,8]
// //   1)--------------------concate-----------------
// let arr2=arr.sort(function(a,b){
//     return b-a
// })

// console.log(arr2);
// let arr2=arr.splice(2,5)
// console.log(arr2);

// let arr3=arr.slice(2,5)
// console.log(arr3);

// arr3=arr.concat(arr2)
// console.log(arr3);

//   2)--------------------copyWithin()-----------------

// arr.copyWithin(0,2,3)
// console.log(arr);


//   3)--------------------every()-----------------


// const isEven=(num)=>num%2==0
// const areAllEven=arr3.every(isEven)
// console.log(areAllEven);
    
//   4)--------------------fill()-----------------


//     arr.fill(0)
// console.log(arr);


//   5)--------------------filter()-----------------

// const isEven=(num)=>num%2==0

// const result= arr.filter(isEven)
// console.log(result);


//   6)--------------------find()-----------------


//    const isEven=(num)=>num%2===0
//    const result= arr.find(isEven)
//    console.log(result);

//   7)--------------------includes()-----------------


    // const result= arr.includes(30)
    // console.log(result);
    


// let str="samyukth"
// let arr4=str.split("").reverse()
// console.log(arr4);
// arr4[3]="v"
// console.log(arr4);
// const hy= arr4.join("")
// console.log(hy);


// const hi= arr.join("")
// console.log(hi);


// arr5=[12,23,45,6]
// const final= arr5.sort((a,b)=>b-a)
// console.log(final);



// function hy(n){
// if(n<=1)
// return
// hy(n-1)
// console.log(n);
// hy(n-1)
// }

// hy(5)


// function rec(value){
//     if(value<=1)
//     return 1


//     return value * rec(value-1)
// }


// console.log(rec(5));

// function Psum(arr,target)
// {
// const nums=new Set()
// for(i=0;i<arr.length;i++){
//     let num=arr[i]
//     let match=target-num
//     if(nums.has(match)){
//         return console.log(num,match);
//     }
//     nums.add(num)
// }
// return[]

// function particularSum(arr,target){

// const nums= new Set()

// for(let i=0;i<arr.length;i++){
//     let num=arr[i];
//     let match= target-num
//     if(nums.has(match)){
//         return console.log(num,match);
//     }
//     nums.add(num)
// }
// return[]

// }
// let arr=[1,2,5,6,7,8]
// particularSum(arr,10);


// var searchInsert = function(nums, target) {
    
//     for(let i=0;i<nums.length;i++){
      
//         if(nums[i]>target){
//           console.log(i)
//           break;
//         }
//     }  
//   };
  
//   let nums=[1,2,3,5,6]
//   searchInsert(nums,4);




// function change(string,key){
//     let keey=key % 122;
//     let newarray=[string.length]
//     for(let i=0;i<string.length;i++){
//         let letterposition=string.charCodeAt(i)+keey;
//         if(letterposition<=122){
//             newarray[i]=String.fromCharCode(letterposition)

//         }else{
//             newarray[i]=String.fromCharCode(96+letterposition%122)
//         }
//     }
//     return newarray
// }

// console.log(change("hai",2));

arr=[1,2,3,4,9,6,7,8]
max1=0
max2=0
max3=0

let hy= arr.splice(2,4)
console.log(arr);




