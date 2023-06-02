class Node{
    constructor(value){

        this.value=value;
        this.next=null
    }

}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }

    arrayToString(arr){
        let i=0;

       while(i<arr.length){
        const node= new Node(arr[i])
        if(this.head==null){
            this.head=node
        }else{
           this.tail.next=node
        }
        i++;
        this.tail=node 
       } 
       console.log("head"+this.head.value);
       console.log("tail"+this.tail.value)
    }




    print(){
        if(!this.head){
            console.log("no head");
        }else{
            let temp=this.head
            while(temp){
                console.log(temp.value);
                temp=temp.next
                
            }
        }
    }
}

arr=[34,5,64,2,4,6]

list=new LinkedList()
list.arrayToString(arr)

list.print()
 