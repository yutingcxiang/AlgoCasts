// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null) {
        this.data = data,
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        // let first = new Node(value);
        // let temp = this.head;
        // this.head = first;
        // this.head.next = this.head;
        this.head = new Node(data, this.head)
    }

    size() {
        let length = 0;
        let node = this.head;

        // while (this.head) {
        //     length++;
        //     this.head = this.head.next;
        // }

        while (node){
            length++;
            node = node.next;
        }

        return length;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let node = this.head;

        while (node) {
            if (node.next === null) {
                return node
            } 
            node = node.next
        }

        return node;
    }

    clear(){
        // this.head.next = null;
        this.head = null;
    }

    removeFirst(){
        // this.head.next = null;
        // this.head = this.head.next;

        if (!this.head){
            return
        }
        this.head = this.head.next;
    }

    removeLast(){
        // let node = this.head;

        // if (this.size() <= 1) {
        //     this.head = null;
        //     return this.head;
        // }

        // while (node.next) {
        //     if (node.next.next === null) {
        //         node.next = null;
        //         node = null;
        //         break;
        //     } 
        //     node = node.next;
        // }

        if (!this.head){
            return
        }

        if (!this.head.next){
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while(node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        let last = this.getLast();

        if (last) {
            last.next = new Node(data, null);
        } else {
            this.head = new Node(data, null);
        }
    }

    getAt(index){
        let position = 0;
        let node = this.head;

        while (node) {
            if (position === index) {
                return node;
            }
            position++;
            node = node.next;
        }

        return null;
    }

    removeAt(index){
        if (this.size() === 0) {
            return;
        }

        if (index === 0){
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index-1);

        if (!previous || !previous.next) {
            return;
        } 

        previous.next = previous.next.next;
    }

    insertAt(data,index){
        if (this.size() === 0) {
            this.head = new Node(data, null);
            return;
        }

        if (index === 0) {
            let node = new Node(data, this.head)
            this.head = node;
            return;
        }

        let previous = this.getAt(index-1) || this.getLast();
        let current = new Node(data, previous.next)

        // if (!previous || !previous) {
        //     previous.next = node;
        //     return;
        // }
        
        previous.next = current;
    }

    // forEach(func){
    //     let node = this.head;

    //     while (node) {
    //         func(node.data);
    //         node = node.next;
    //     }
    // }
}

module.exports = { Node, LinkedList };
