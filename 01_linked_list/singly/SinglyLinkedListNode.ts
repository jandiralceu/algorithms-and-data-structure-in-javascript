export class SinglyLinkedListNode {
  constructor(public data, public next = null) {}

  toString() {
    return `${this.data}`;
  }
}
