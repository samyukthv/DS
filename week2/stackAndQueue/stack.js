



// class Node {
//     constructor(element){
//       this.element = element
//       this.next  = null
//     }
//   }
  
//   class Stack{
//     constructor(){
//       this.top = null
//        this.size=0
//     }


//     // getSize(){
//     //     return this.size
//     // }


//     push (element){
//       const node = new Node (element)
//       if(!this.top){
//         this.top = node
     
//       }else{
//         node.next = this.top
        
//         this.top = node
//       }
//        this.size++
//     }
  
//     pop(){
//       if(!this.top){
//         console.log("stack underflow");
//       }else{
//         this.top = this.top.next
//     }
//        this.size--
//     }


// // middle(){
// //     if(!this.top || this.size==1 )
// //     return
  
// //     let mid=Math.floor(this.size/2)
// //     let previ=null;
// //     let curr=this.top
// //     for(let i=0;i<mid;i++){
// //         previ=curr
// //         curr=curr.next
// //     }
// //     console.log("mid");
// //     // console.log( previ.next.element);
// //      previ.next=curr.next

// //     this.size--

// // }


// middle(){
//   if(!this.top)
//   return

//   let temp=this.top
//   let curr=this.top
//   while(temp.next && temp.next.next)
//   {
   

//       temp=temp.next.next
//       curr=curr.next
    


//   }

//   console.log("middle element"+curr.element);
//   curr.next=curr.next.next
// }


  
//     print (){
//       if(!this.top){
//         console.log("stack underflow");
//       }else{
//         let temp = this.top
//         while(temp){
//          console.log(temp.element);
//           temp = temp.next 
//         }
//       }
//     }
//   }
  
//   let list = new Stack ()
  
//   list.push(100)
//   list.push(200)
//   list.push(300)
//   list.push(400)
//   list.push(500)
//   list.push(600)
//   list.push(700)
  
//   // list.pop()
//   list.print()
//   console.log("hyy");
//   list.middle()
//   list.print()

// console.log(list.getSize());


////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////


// stack using array




class arrstack{
  constructor(){
      this.items = []
  }

  push(value){
this.items.push(value)
  }

  pop(){
  if(this.isEmpty()){
      return "stack underflow"
  }
  return this.items.pop();
  }

  print(){
      if(this.isEmpty()){
          console.log("empty");
      }else{
         
          console.log( this.items);
      }
  }

  isEmpty() {
      return this.items.length === 0;
    }
}

let rrsta = new arrstack()
rrsta.push(200)
rrsta.push(7)
rrsta.push(76)
rrsta.pop()
rrsta.print()




