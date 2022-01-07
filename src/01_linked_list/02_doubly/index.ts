import { LinkedList } from "./LinkedList";

const linkedList = new LinkedList();

linkedList.prepend(10);

console.log(linkedList.head);
console.log(linkedList.tail);

linkedList.append(12);
linkedList.append(8);
linkedList.append(3);

console.log("head\n", linkedList.head);
console.log("tail\n", linkedList.tail);

console.log(linkedList.toArray());

linkedList.delete(10);

console.log("head - removed\n", linkedList.head);
console.log("tail\n", linkedList.tail);

console.log(linkedList.toArray());

linkedList.deleteHead();

console.log("head - removed\n", linkedList.head);
console.log("tail\n", linkedList.tail);

console.log(linkedList.toArray());

linkedList.deleteTail();

console.log("head - removed\n", linkedList.head);
console.log("tail\n", linkedList.tail);

console.log(linkedList.toArray());
