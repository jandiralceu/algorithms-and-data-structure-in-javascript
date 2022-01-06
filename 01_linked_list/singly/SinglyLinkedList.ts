import { SinglyLinkedListNode } from "./SinglyLinkedListNode";

export class SinglyLinkedList {
  constructor(
    public head: SinglyLinkedListNode | null = null, // First item in the list
    public tail: SinglyLinkedListNode | null = null // Last item in the list
  ) {}

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

  // This function has a time complexity = O(1)
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;
    return this;
  }

  // This function has a time complexity = O(1)
  append(value) {
    const newNode = new SinglyLinkedListNode(value);

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
  delete(value) {
    if (!this.head) return null;

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
  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

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

  // This function has a time complexity = O(1)
  deleteHead() {
    if (!this.head) return null;

    const deletedHead = this.head;

    if (this.head.next) this.head = this.head.next;
    else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }

  // This function has a time complexity = O(n)
  find(value) {
    if (!this.head || !value) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
}
