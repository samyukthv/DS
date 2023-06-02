// class Node {

//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head=null
//         this.size=0
//         this.tail=null
        

//     }
    
//     isEmpty() {
//         return this.size === 0
//     }
    
    
//     getSize() {
//         return this.size
//     }


// prepend(value){

//     const node = new Node(value)
//     if(this.isEmpty()){
//         this.head=node
//     }else{
//         node.next=this.head
//         this.head=node
//     }
//     this.size++;

// }



// }

// const list= new LinkedList()
// console.log(list.isEmpty());
// console.log(list.getSize());
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// console.log(list.isEmpty());
// console.log(list.getSize());

























// class Node{
//     constructor(value){
//      this.value=value
//      this.next=null

//     }
// }


// class LinkedList{

//     constructor(){
//         this.head=null
//         this.size=0
//         this.tail=null
//     }

// isEmpty(){
//     return this.size===0
// }

// getSize(){
// return this.size 
// }

// addFront(value){
//   const node= new Node(value)
//  if(!this.head){
//   this.head=node
//   this.tail=node
//  }else{

//   node.next=this.head
//   this.head=node


//  }
// }

// addLast(value){
//   const node= new Node(value)
//   if(!this.head){
//     this.head=node
//     this.tail=node
//   }else{
//     this.tail.next=node
//     this.tail=node
//   }
// }

// deleteFirst(){
//  if(!this.head){
//   return null
//  }else{
//   this.head=this.head.next
//  }
// }


// deleteLast(){
//   if(!this.head){
//     return null
//   }else{
//     let temp=this.head
//     while(temp.next.next){
//       temp=temp.next

//     }
//     temp.next=null
//     this.tail=temp
//   }
// }

// deletePos(target){
//   if(!this.head){
//     return null
//   }
//  if(this.head.value==target){
  
//    this.head=this.head.next;
//  }
//  else if(this.tail.value==target){
//   let temp=this.head
//   while(temp.next.next)
//   {
//     temp=temp.next
//   }
//   temp.next=null
//   this.tail=temp


// }else{
//   let temp = this.head
//   while(temp.next){

//     if(temp.next.value==target){
//       temp.next=temp.next.next
//       return
//     }
//     temp=temp.next
//   }
// return "target not found"

// }


// }

//  addBeforePos(pos,value){
// const node= new Node(value)
// if(this.head.value==pos){
//   node.next=this.head
//   this.head=node
// }else{
//   let temp=this.head
//   while(temp){
//     if(temp.next.value==pos){
//       node.next=temp.next
//         temp.next=node
//         return
//     }
//     temp=temp.next
//   }
// }
//  }


//  addAfterPos(pos,value){
//   const node= new Node(value)
//   let temp= this.head
//   while(temp){
//    if(temp.value==pos){
  
//     node.next=temp.next
//     temp.next=node
//     return
//    }
//    temp=temp.next
//   }
//  }



//  deleteDup(){
//   if(!this.head){
//     return null
//   }else{
//     let seen={}
//     let curr=this.head
//     let prev=null
//     while(curr){
//       if(seen[curr.value]){
//         prev.next=curr.next
//       }else{
//         seen[curr.value]=true
//         prev=curr
//       }
//       curr=curr.next
 
//     }
//     return

//   }

// }





// print(){
//     if(this.head==null){
//         console.log("list is empty");
        
//     }else{
//         let temp = this.head
//         while(temp){
//           console.log("element are:"+temp.value);
//           temp = temp.next
         
//         }



//     }


// }

// }


// const list = new LinkedList()



// list.addFront(10)
// list.addFront(30)
// list.addFront(20)
// list.addFront(20)
// list.addFront(20)
// list.addFront(20)
// list.addFront(40)
// list.addFront(60)

// list.addLast(50)

// //  list.deleteFirst()
//  list.addBeforePos(10,90)
//  list.addAfterPos(50,100)
// list.deleteDup()


// list.print()











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

  addFront(value){
const node=new Node(value)    
    if(!this.head){
      this.head=node
      this.tail=node
    }else{
    node.next=this.head
    this.head=node
    }

  }


  addLast(value){
    const node=new Node(value)
    if(!this.head){
      this.head=node
      this.tail=node
    }else{
      this.tail.next=node
      this.tail=node
    }
  }


  deleteFirst(){
    if(!this.head){
      return null
    }else{
      this.head=this.head.next
    }
  }

deleteLast(){
  if(!this.head){
    return null
  }else{
  let temp= this.head
  while(temp.next.next){
    temp=temp.next
    
  }
  temp.next=null
  this.tail=temp
  }
}



deletePos(target){
  if(this.head.value==target){
    this.head=this.head.next
  }else if(this.tail.value==target){
    let temp= this.head
    while(temp.next.next){
      temp=temp.next
    }
    temp.next=null
    this.tail=temp
  }else {
    let temp= this.head
    while(temp.next){
      if(temp.next.value==target){
        temp.next=temp.next.next
        return
      }
      temp=temp.next
    }
return console.log("target not found");
  }

}



addAfterPos(pos,value){
  const node =new Node(value)
  let temp=this.head
  while(temp)
  {
    if(temp.value==pos){
     node.next=temp.next
     temp.next=node
     return
    }
    temp=temp.next
  }
}


addBeforePos(pos,value){
  const node= new Node(value)
  if(this.head.value==pos){
    node.next=this.head
    this.head=node
  }else{
    let temp= this.head
    while(temp){
      if(this.next.value==pos){
        node.next=temp.next
        temp.next=node
        return
      }
      temp=temp.next
    }
  }
}

reverse(){
  let previ=null
  let curr= this.head
  while(curr){
    let next1=curr.next
    curr.next=previ
    previ=curr
    curr=next1
  }
 this.tail=this.head
  this.head=previ
  
  }
  

print(){
  if(!this.head){
    console.log("list is empty");
  }else{
    let temp=this.head
    while(temp){
      console.log(temp.value);
      temp=temp.next
    }

  }
}



}




let list= new linkedList()


list.addFront(100)
list.addFront(200)
list.addLast(300)
list.addLast(400)
list.addLast(500)
list.addAfterPos(300,1000)
// list.deleteFirst()
// list.deleteLast()
// list.deletePos(600)
console.log("firstttttttt");
list.print()

list.reverse()
console.log("seconddddddddddd");
list.print()

