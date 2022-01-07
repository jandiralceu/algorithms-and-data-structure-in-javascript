import { LinkedListNode } from "./LinkedListNode";

export class LinkedList {
  constructor(
    public head: LinkedListNode | null = null,
    public tail: LinkedListNode | null = null
  ) {}

  // This function has a time complexity = O(1)
  prepend(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = this.tail = newNode;
      return this;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    return this;
  }

  // This function has a time complexity = O(1)
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.tail = this.head = newNode;
      return this;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  // This function has a time complexity = O(n)
  search(value) {
    if (!this.head || !value) return null;

    let currentHead = this.head;

    while (currentHead?.next) {
      if (currentHead.data === value) return true;
      currentHead = currentHead.next;
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
      this.head.prev = deletedNode.prev;

      return deletedNode;
    }

    let currentNode = this.head;

    if (currentNode) {
      while (currentNode.next) {
        if (currentNode.next.data === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail?.data === value) this.tail = currentNode;

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
      this.head.prev = null;
    }

    return deletedHead;
  }

  // This function has a time complexity = O(1)
  deleteTail() {
    if (!this.tail) return null;

    let deletedHead = this.head.data;

    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    return deletedHead;
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
