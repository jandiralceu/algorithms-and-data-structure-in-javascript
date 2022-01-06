export class LinkedListNode {
  constructor(public data, public next = null) {}

  toString() {
    return `${this.data}`;
  }
}
