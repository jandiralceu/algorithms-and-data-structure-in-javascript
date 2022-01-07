export class LinkedListNode {
  constructor(public data, public next = null) {}

  toString(callback?: Function) {
    return callback ? callback(this.data) : `${this.data}`;
  }
}
