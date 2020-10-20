class TreeNode{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    collect(){
       return this._collect(this.root,[])
    }

    _collect(current,nodes){
        if(current === null){
            return nodes;
        }
        nodes.push(current.data);

        this._collect(current.left,nodes);
        this._collect(current.right,nodes);

        return nodes;
    }   

    sum(){
        return this._sum(this.root)
    }

    _sum(current){
        if(current === null){
            return 0
        }
        return current.data + this._sum(current.left) + this._sum(current.right)
    }

    numberOfNodes(){
        return this._numberOfNodes(this.root)

    }

    _numberOfNodes(current){
        if(current === null){
            return 0
        }
        return 1 + this._numberOfNodes(current.left) + this._numberOfNodes(current.right)
    }

    contains(value){
        return this._contains(this.root,value)
    }

    _contains(node,value){
        if(node === null){
            return false
        }
        else if(node.data === value){
            return true;
        }
        return this._contains(node.left,value) || this._contains(node.right,value)
    }
    min() {
        return this._min(this.root)
    }

    _min(node) {
        if (node === null) {
            return undefined
        }
        let leftMin = this._min(node.left)
        let rightMin = this._min(node.right)
        if (node.data < leftMin && node.data < rightMin) {
            return node.data
        } else if (leftMin < rightMin) {
            return leftMin
        } else {
            return rightMin
        }
    }
    
}

let n1 = new TreeNode(32);
let n2 = new TreeNode(84);
let n3 = new TreeNode(94);
let n4 = new TreeNode(56);
let n5 = new TreeNode(13);

let tree = new Tree();
tree.root = n1;
n1.left = n2;
n2.right = n3;
n3.right = n4;
n4.left = n5;

console.log(tree.collect())
console.log(tree.sum())
console.log(tree.numberOfNodes())
console.log(tree.contains(32))