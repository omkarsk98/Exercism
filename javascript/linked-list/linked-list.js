//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(val) {
    this.prevNode = null;
    this.nextNode = null;
    this.val = val;
  }
}

export class LinkedList {
  push(val) {
    let node = new Node(val);
    if (!this.tail)
      this.tail = node;
    if (!this.head)
      this.head = node;
    else {
      node.prevNode = this.tail;
      this.tail.nextNode = node;
      this.tail = node;
    }
  }

  pop() {
    if (this.tail) {
      let temp = this.tail;
      this.tail = this.tail.prevNode;
      if (this.tail)
        delete this.tail.nextNode;
      return temp.val;
    }
  }

  shift() {
    if (this.head) {
      let temp = this.head;
      this.head = this.head.nextNode;
      if (this.head)
        delete this.head.prevNode;
      return temp.val;
    }
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head)
      this.head = node;
    if (!this.tail)
      this.tail = node;
    else {
      node.nextNode = this.head;
      this.head.prevNode = node;
      this.head = node;
    }
  }

  delete(val) {
    if (!this.head)
      return
    let ptr = this.head;
    while (ptr && ptr.val != val) {
      ptr = ptr.nextNode;
    }
    let temp = ptr;
    if (ptr && ptr.prevNode)
      ptr.prevNode.nextNode = temp.nextNode;
    if (ptr == this.head)
      this.head = this.head.nextNode
    if (temp && temp.nextNode)
      temp.nextNode.prevNode = temp.prevNode;
    if (temp == this.tail)
      this.tail = this.tail.prevNode;
  }

  count() {
    let count = 0;
    let ptr = this.head;
    while (ptr) {
      count++;
      ptr = ptr.nextNode;
    }
    return count;
  }

  print() {
    let ptr = this.head;
    let str = ``;
    while (ptr) {
      str += `${ptr.val} `
      ptr = ptr.nextNode;
    }
    console.log("Print:", str);
  }
}
