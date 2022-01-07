export class QueueOnArray {
  constructor(public list = []) {}

  enqueue(value) {
    return this.list.push(value);
  }

  dequeue(value) {
    return this.isEmpty ? null : this.list.shift();
  }

  peek() {
    return this.isEmpty ? null : this.list[0];
  }

  isEmpty() {
    return !this.list.length;
  }

  toString() {
    return this.list.toString();
  }
}
