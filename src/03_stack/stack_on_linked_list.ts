import { LinkedList } from "../01_linked_list/01_singly/LinkedList";
import { LinkedListNode } from "../01_linked_list/01_singly/LinkedListNode";

export class Stack {
  constructor(public linkedList = new LinkedList()) {}

  push(value) {
    this.linkedList.prepend();
  }

  pop() {
    return this.linkedList.deleteHead();
  }

  peek() {
    return this.linkedList.head?.data ?? null;
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  toArray() {
    return this.linkedList.toArray().map((node: LinkedListNode) => node.data);
  }
}
