// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromHead() {
    let removeHead;
    if (this.head) {
      removeHead = this.head;
      this.head = this.head.next;
      this.length--;
      return removeHead;
    }
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    // Remove node at tail
    let curr = this.head;
    if (this.head) {
      let futureTail = curr.next;
      this.length--;
      if (futureTail === null) {
        this.head = null;
        return curr;
      }
      while (futureTail.next) {
        futureTail = futureTail.next;
        curr = curr.next;
      }
      curr.next = null;
      return futureTail;
    }
    return undefined;
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    // Return the value of head node
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    // Print out the linked list
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
