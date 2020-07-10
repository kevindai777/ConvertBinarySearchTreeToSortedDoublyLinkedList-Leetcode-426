//Objective is to convert a BST into a doubly-linked list, where the 'next' and
//'prev' pointers use the 'right' and 'left' pointers from the BST respectively.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(4)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 5)
tree.addRightNode(tree.root.left, 3)
tree.addLeftNode(tree.root.left, 1)


//O(n) solution that does an inorder traversal of the tree then 
//makes a doubly linked list by shifting values out of the list

let arr = []
    
//Inorder traversal of the binary search tree to get a sorted list
function dfs(node) {
    if (!node) {
        return
    }
        
    dfs(node.left)
    arr.push(node.val)
    dfs(node.right)
}
dfs(root)
    
//Make a new linked list by shifting values out of the array
let head = new Node(arr.shift())
let temp = head
    
while (arr.length) {
    let next = new Node(arr.shift())
    temp.right = next
    next.left = temp
    temp = temp.right
}
//Connect the head and tail
temp.right = head
head.left = temp
    
return head