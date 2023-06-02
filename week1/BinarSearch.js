let arr=[4,5,6,7,8,9,10,11,12,13]

function binarySearch(array,target){
 let left = 0
 let right =array.length-1
 
 while(left<=right){
 let mid= Math.floor((left+right)/2)
 console.log("mid is"+mid);
    if(array[mid]==target)
    {
      return mid
    }else if(array[mid]<target){
        left=mid+1
    }else{
        right=mid-1
    }
 
 }
 return "value not found"

}

console.log(binarySearch(arr,12));