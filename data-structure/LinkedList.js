console.clear();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(value);
    }
    this.length++;
  }

  pop() {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let temp = this.head.value;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      for (let i = 0; i < this.length - 2; i++) {
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next = null;
      this.length--;
      return temp;
    }
  }

  shift() {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let temp = this.head.value;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let temp = this.head.value;
      this.head = currentNode.next;
      this.length--;
      return temp;
    }
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
  }

  insertAt(index, value) {
    let newNode = new Node(value);
    let currentNode = this.head;
    if (index > this.length || index < 0) {
      return null;
    } else if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
        console.log(currentNode);
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
      return null;
    }
  }

  removeAt(index) {
    let currentNode = this.head;
    if (index >= this.length || index < 0) {
      return null;
    } else if (index === this.length - 1) {
      let result = this.pop();
      return result;
    } else if (index === 0) {
      let result = this.shift();
      return result;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let temp = currentNode.next.value;
      currentNode.next = currentNode.next.next;
      this.length--;
      return temp;
    }
  }

  get(index) {
    let currentNode = this.head;
    if (index >= this.length || index < 0) {
      return null;
    } else {
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.value;
    }
  }

  printAll() {
    if (this.length === 0) {
      console.log("There is no element in the link list");
      return;
    }
    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(this.length);
  }
}

const myLinkList = new LinkList();
myLinkList.push("Mike");
myLinkList.push("Harry");
myLinkList.push("James");
myLinkList.push("Kevin");
const getElem = myLinkList.get(4);
console.log(getElem);
// myLinkList.pop();
// myLinkList.removeAt(4);
// myLinkList.insertAt(2,'Winston');
// const shiftElem = myLinkList.shift();
// console.log('shift:',shiftElem);
myLinkList.printAll();
