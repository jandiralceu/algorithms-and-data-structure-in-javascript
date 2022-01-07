export class StackArray {
  constructor(public list = []) {}

  insert(value) {
    this.list.push(value);
  }

  peek() {
    return this.isEmpty ? null : this.list[this.list.length - 1];
  }

  delete() {
    return this.isEmpty ? null : this.list.pop();
  }

  isEmpty() {
    return !this.list.length;
  }
}
