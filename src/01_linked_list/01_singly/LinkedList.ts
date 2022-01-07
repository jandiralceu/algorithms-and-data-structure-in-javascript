import { LinkedListNode } from "./LinkedListNode";

export class LinkedList {
  constructor(
    public head: LinkedListNode | null = null, // First item in the list
    public tail: LinkedListNode | null = null // Last item in the list
  ) {}

  // This function has a time complexity = O(1)
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;
    return this;
  }

  // This function has a time complexity = O(1)
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return value;
    }

    const currentTail = this.tail;
    currentTail.next = newNode;
    this.tail = newNode;

    return this;
  }

  // This function has a time complexity = O(n)
  search(value) {
    if (!this.head || !value) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  // This function has a time complexity = O(n)
  delete(value) {
    if (!this.head || !value) return null;

    let deletedNode = null;

    while (this.head?.data === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.data === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail.data === value) this.tail = currentNode;

    return deletedNode;
  }

  // This function has a time complexity = O(1)
  deleteHead() {
    if (!this.head) return null;

    const deletedHead = this.head.data;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return deletedHead;
  }

  // This function has a time complexity = O(1)
  deleteTail() {
    if (!this.tail) return null;

    const deletedTail = this.tail.data;

    if (this.tail === this.head) {
      this.head = this.tail = null;
      return deletedTail;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (!currentNode.next.next) currentNode.next = null;
      else currentNode = currentNode.next;
    }

    this.tail = currentNode;

    return deletedTail;
  }

  // This function has a time complexity = O(n)
  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}
