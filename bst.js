
class TreeNode {
    /** @type {number} */
    value;

    /** @type {TreeNode} */
    left;
    
    /** @type {TreeNode} */
    right;

    /**
     * @param {number} value 
     * @param {TreeNode} [left] 
     * @param {TreeNode} [right] 
     */
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    /** @type {TreeNode} */
    root;

    /** @param {number} rootNodeValue */
    constructor(rootNodeValue) {
        this.root = new TreeNode(rootNodeValue);
    }

    // /**
    //  * @param {TreeNode} node
    //  * @param {number} [min] 
    //  * @param {number} [max] 
    //  */
    // static #isBST(node, min, max) {
    //     if(!node) return true;
    //     return ((!min || node.value > min) && (!max || node.value <= max) && this.#isBST(node.left, min, node.value) && this.#isBST(node.right, node.value, max))
    // }
    
    // /** @param {BinarySearchTree} tree  */
    // static isBinarySearchTree(tree) {
    //     return this.#isBST(tree.root);
    // }

    /** @type {number} */
    static #preNodeValue = null;

    /** @param {TreeNode} node */
    static #isBST(node) {
        if(!node) return true;
        if(!this.#isBST(node.left)) return false;
        if(this.#preNodeValue != null && this.#preNodeValue > node.value) return false;
        else this.#preNodeValue = node.value;
        return this.#isBST(node.right);
    }

    /** @param {BinarySearchTree} tree */
    static isBinarySearchTree(tree) {
        const res = this.#isBST(tree.root);
        this.#preNodeValue = null;
        return res;
    }
}

/** @type {BinarySearchTree} */
let tree = {
    root: {
        value: 10,
        left: {
            value: 8,
            left: {
                value: 4
            },
            right: {
                value: 9
            }
        },
        right: {
            value: 13,
            left: {
                value: 11
            },
            right: {
                value: 15
            }
        }
    }
}
console.log(BinarySearchTree.isBinarySearchTree(tree))