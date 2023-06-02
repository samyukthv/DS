// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class linkedList {
//   constructor() {
//     this.tail = null;
//     this.head = null;
//   }

//   addFirst(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head.prev = newNode;
//       this.head = newNode;
//     }
//   }

//   addLast(value){
//   const newNode= new Node(value)
//   if(!this.head){
//     this.head=newNode
//     this.tail=newNode
//   }else{
//       this.tail.next=newNode
//       newNode.prev=this.tail
//       this.tail=newNode
//      newNode.next=null;

//   }
//   }

//   deleteFirst(){
//     if(!this.head){
//         return null
//     }else{
    
//       this.head=this.head.next
//       this.head.prev=null    


//     }

//   }

//   deleteLast(){
//     if(!this.head){
//         return null
//     }else{
//         let temp=this.head
//         while(temp.next.next)
//         {
//            temp=temp.next    
//         }
//         temp.next=null
//         this.tail=temp
        
//     }

//   }


//   deletePosition(target){
//     if(!this.head){
//       return null
//     }else if(this.head.value==target){
//       this.head=this.head.next
//       this.head.prev=null
//     }else if(this.tail.value==target){
//       this.tail=this.tail.prev
//       this.tail.next=null
    
//     }else{
//       let temp= this.head
//       while(temp.next){
//         if(this.temp.value==target){
//         temp.next=temp.next.next
//         temp.next.next.prev=temp

//         }
//       }

//     }

//   }


// addBeforePos(value,pos){
//   const newNode= new Node(value)
//   if(this.head.value==pos){
//     newNode.next=this.head
//    this.head.prev=newNode;
//    this.head=newNode
//   }else{
//     let temp=this.head
//     while(temp){
//       if(temp.next.value==pos){
//         newNode.next=temp.next
//         temp.next.prev=newNode
//         temp.next=newNode
//         newNode.prev=temp
//         return

//       }
//       temp=temp.next
//     }
//   }
// }

// addAfterPos(value,pos){
// const newNode= new Node(value)
// let temp=this.head
// while(temp){
//   if(temp.value==pos){
  
//     newNode.next=temp.next
//     temp.next.prev=newNode
//     temp.next=newNode
//     newNode.prev=temp
    
//     return
//   }
//   temp=temp.next
// }
// }



// deleteDup(){
//   if(!this.head){
//     return null

//   }else{
//     let seen={}
//     let curr=this.head
//     let previ =null
//     while(curr){
//       if(seen[curr.value]){
// if(curr.next){

//   curr.next.prev=previ
// }

//         previ.next=curr.next
//       }else{
//         seen[curr.value]=true
//         previ=curr
//       }
//       curr=curr.next

//     }

//     return
//   }
// }


//   print() {
//     if (!this.head){

//         console.log("no elements in the array");
//     }else{

//         let temp = this.head;
    
//         while (temp) {
//           console.log(temp.value);
//           temp = temp.next;
//         }
//     }
// return 
//   }
// }




// const list = new linkedList();

// list.addFirst(5);
// list.addFirst(5);
// list.addFirst(2);
// list.addLast(3)
// list.addLast(3)
// list.addLast(3)
// list.addLast(3)
// list.addLast(3)

// list.addFirst(4);
// list.addFirst(5);
// list.addFirst(5);
// list.addFirst(5);
// list.addFirst(5);


// //list.deleteLast()
// //list.deleteFirst()
// // list.deletePosition(3)
// list.addBeforePos(100,2)
// list.addAfterPos(200,2)
// list.addFirst(5);
// list.addFirst(5);
// list.addFirst(5);

//  list.deleteDup()


// list.print();





class Node{
  constructor(value){
    this.value=value
    this.next=null
    this.prev=null
  }
}


class linkedList{
  constructor(){
    this.head=null
    this.tail=null
  }

  addFront(value){
    const node= new Node(value)
    if(!this.head){
      this.head=node
      this.tail=node

    }else{
      node.next=this.head
      this.head.prev=node
      this.head=node
      
    }
  }

  addLast(value){
    const node=new Node(value)
    if(!this.head){
      this.head=node
    
    }
    else{
      this.tail.next=node
      node.pre=this.tail
    }
    this.tail=node
  }


}