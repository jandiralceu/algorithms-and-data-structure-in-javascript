import { LinkedListNode } from "./LinkedListNode";

export class LinkedList {
  constructor(
    public head: LinkedListNode | null = null,
    public tail: LinkedListNode | null = null
  ) {}

  prepend(value) {
    const newNode = new LinkedListNode(value);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;
    return this;
  }

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
}
