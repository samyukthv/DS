class Node {
    constructor(value){
        this.value = value
        this.next = null
       
    }
}



class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }


    FirstAdd(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node 
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
    }


    LastAdd(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node 
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }


    deletefirst(){
        if(!this.head){
            return null
        }else{
            this.head= this.head.next
        }
    }

    deleteLast(){
        if(!this.head){
            return null
        }else{
            let temp = this.head
            while(temp.next.next){
             temp = temp.next
            }
            temp.next = null
            this.tail = temp
        } 
    }

   

    addAtPos(pos,value){
        const node = new Node(value)
        if(this.head.value == pos){

            node.next = this.head
            this.head = node
            
        }else{
             let temp = this.head
            while(temp){
                if(temp.next.value == pos){

                    node.next = temp.next
                    temp.next = node
                    return
                    
                }else{

                    temp = temp.next

                }
                
            }
        }

    }


    deleteAtpos(target){
        if(!this.head){
            return null
        } 
        else if (this.head.value == target) {
            this.head = this.head.next;
        }else if(this.tail.value===target){

         temp=this.head
         while(temp.next.next){
            temp=temp.next
         }
         temp.next=null
         this.tail=temp

        }
        else{
            let temp = this.head
           while(temp.next){

            if(temp.next.value == target){
                temp.next = temp.next.next
                return
            }
           temp = temp.next
             
           }
           return "target not found"
        }
    }



    deleteDuplicate (){
        let seen ={}
        let current = this.head
        let prev = null
        while(current){
            if(seen[current.value]){
                prev.next = current.next
            }else{
                seen[current.value] =true
                prev = current
            }
            current =current.next
        }
    } 

    


    

    print(){
        if(!this.head){
            console.log("no head");
        }else{
            let temp = this.head
            while(temp){
                console.log(temp.value);
                 temp = temp.next
            } 
        }
    }

}


list = new LinkedList()


list.FirstAdd(10)
list.FirstAdd(15)
list.FirstAdd(16)
list.FirstAdd(15)

list.FirstAdd(20)
list.LastAdd(30)
list.LastAdd(40)

list.LastAdd(400)

list.addAtPos(15,9999)
list.deleteAtpos(15)
list.deleteDuplicate()

list.print()