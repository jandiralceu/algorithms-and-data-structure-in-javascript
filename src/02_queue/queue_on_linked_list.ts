import { LinkedList } from "../01_linked_list/01_singly/LinkedList";

export class Queue {
  constructor(public linkedList = new LinkedList()) {}

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    return this.linkedList.deleteHead();
  }

  peek() {
    return this.linkedList.head?.data ?? null;
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  toString(callback?: Function) {
    return this.linkedList.toString(callback);
  }
}
