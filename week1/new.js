

// let arr=[1,2,3,4,5,6]

// function binarySearch(arr,target){
//     let left=0
//     let right=arr.length-1;
//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         if(arr[mid]==target){
//             return true
//         }else if(arr[mid]<target){
//             left=mid+1
//         }else{
//             right=mid-1
//         }
//     }
//     return false

// }

// console.log(binarySearch(arr,5));





class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}


class linkedList{
    constructor(){
        this.head=null
        this.tail=null
    }


    
addLast(value){
    let node = new Node(value)
    if(!this.head){
       this.head=node
       this.tail=node 
    }else{
          
            this.tail.next=node
            this.tail=node
        
    }
}


deleteLast(){
    let temp=this.head
    while(temp.next.next){
        temp=temp.next
    }
    temp.next=null
    this.tail=temp
}



}