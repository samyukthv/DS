






class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class Bst{
    constructor(){
        this.root=null
    }

insert(value){
    const node= new Node(value)
    if(!this.root){
        this.root=null;
    }else{
        this.insertNode(this.root,node)
    }
}
insertNode(root,node){
    if(node.value>root.value){
        if(!root.right){
            root.right=node
        }else{
            this.insertNode(root.right,node)
        }
    }else{
        if(!root.left){
            root.left=node
        }else{
            this.insertNode(root.left,node)
        }
    }
}


inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)

    }
}

}