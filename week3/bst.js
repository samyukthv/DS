class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  emptyCheck() {
    return this.root === null;
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // breath first search

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  IsBst(root) {
    if (root === null) {
      return true;
    }
    if (root.left && root.left.value > root.value) {
      return false;
    }
    if (root.right && root.right.value < root.value) {
      return false;
    }
    if (!this.IsBst(root.left) || !this.IsBst(root.right)) {
      return false;
    }
    return true;
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  closestNum(target) {
    let currentNode = this.root;
    let closest = currentNode.value;
    while (currentNode) {
      if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
        closest = currentNode.value;
      }
      if (target < currentNode.value) {
        currentNode = currentNode.left;
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
    return closest;
  }

  search(target, root) {
    if (!root) {
      return false;
    }
    if (root.value == target) {
      return true;
    }
    if (root.value < target) {
      return this.search(target, root.right);
    } else {
      return this.search(target, root.left);
    }
  }

  //kili contains
  contains(element) {
    let currentNode = this.root;
    while (currentNode != null) {
      if (element < currentNode.element) {
        currentNode = currentNode.left;
      } else if (element > currentNode.element) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (!this.root) {
      return null;
    } else {
      if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
      } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
      return root;
    }
  }
}

const Bst = new BST();
Bst.insert(30);
Bst.insert(25);
Bst.insert(35);
Bst.insert(20);
Bst.insert(26);
Bst.insert(32);
Bst.insert(40);
Bst.insert(38);
Bst.insert(41);
Bst.insert(21);
Bst.insert(15);

// console.log("Empty or not : "+Bst.emptyCheck());
// Bst.delete(30)
 Bst.inorder(Bst.root)
// Bst.preOrder(Bst.root)
Bst.postOrder(Bst.root);
console.log(Bst.emptyCheck());
// console.log("Bst or not : "+Bst.IsBst(Bst.root));
// console.log("smallest : "+Bst.min(Bst.root));
// console.log("biggest : "+Bst.max(Bst.root));
// console.log("closest num"+Bst.closestNum(14));

// console.log(Bst.search(4567,Bst.root));
