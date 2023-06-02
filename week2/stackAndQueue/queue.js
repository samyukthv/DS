// class Node {
//     constructor(element){
//         this.element = element
//         this.next  = null
//     }
// }

// class Queue {
//     constructor (){
//         this.front  = null
//         this.rear = null
//     }

//     Enqueue (element){
//         const node  =new Node(element)
//         if(!this.front){
//             this.front = this.rear = node
//         }else{
//             this.rear.next = node
//             this.rear = node
//         }
//     }

//     Dequeue (){
//         if(!this.front){
//             console.log("empty Queue");
//         }else{
//             this.front = this.front.next
//             if(!this.front){
//                 this.rear = null
//             }
//         }
//     }

//     print (){
//         if(!this.front){
//             console.log("empty queue");
//         }else{
//             let temp = this.front
//             while(temp){
//                 console.log(temp.element);
//                 temp = temp.next
//             }
//         }
//     }
// }

// let list  = new Queue()

// list.Enqueue(1)
// list.Enqueue(2)
// list.Enqueue(3)
// list.Enqueue(4)
// // list.Dequeue()
// list.print()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array in queue

// class arrayQueue {
//   constructor() {
//     this.items = [];
//   }

//   push(value) {
//     this.items.push(value);
//   }

//   shift1() {
//     this.items.shift();
//   }

//   print() {
//     console.log(this.items);
//   }
// }

// let arrQueue = new arrayQueue();
// arrQueue.push(200);
// arrQueue.push(300);
// arrQueue.push(400);
// arrQueue.push(500);
// arrQueue.push(600);
// arrQueue.shift1();
// arrQueue.print();




// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.front = null;
//     this.rare = null;
//   }

//   Enqueue(value) {
//     const node = new Node(value);
//     if (!this.front) {
//       this.front = node;
//       this.rare = node;
//     } else {
//       this.rare.next = node;
//       this.rare = node;
//     }
//   }

//   Dequeue() {
//     if (!this.front) {
//       console.log("empty queue");
//     } else {
//       this.front = this.front.next;
//     }
//   }


// print(){
//     if(!this.front){
//         console.log("empty queue");
//     }else{
//         let temp=this.front
//         while(temp){
//             console.log(temp.value);
//             temp=temp.next
//         }
//     }
// }

// }


// let qu= new Queue()

// qu.Enqueue(100)
// qu.Enqueue(200)
// qu.Enqueue(300)
// qu.Enqueue(400)
// qu.print()
// console.log("second");
// qu.Dequeue()
// qu.print()




// class queueArray{
//     constructor(){
//         this.items=[]
//     }
//     push(value){
//         this.items.push(value)
//     }
//     shift(){
//         this.items.shift()
//     }

//     print(){
//         console.log(this.items);
//     }
// }

// let ar= new queueArray()

// ar.push(100)
// ar.push(200)
// ar.push(300)
// ar.push(400)
// ar.print()
// console.log("second");
// ar.shift()
// ar.shift()

// ar.print()




class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}

class Stack{
    constructor(){
        this.front=null
        this.rare=null
    }

    Enqueue(value){
        let node= new Node(value)
        if(!this.front){
            this.front=node
            this.rare=node
        }else{
            this.rare.next=node
            this.rare=node
        }
    }

    Dequeue(){
if(!this.front){
    console.log("empty queue");
}else{
    this.front=this.front.next;
}
    }


    print(){
        
    }
}