arr=[1,3,6,7,4,5,9,10,2]

function linearSearch(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            return i
        }
    }
return "target not found"
}

console.log(linearSearch(arr,2));