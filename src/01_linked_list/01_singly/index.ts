import { LinkedList } from "./LinkedList";

const linkedList = new LinkedList();

console.log(linkedList.toArray());

linkedList.prepend(5);
console.log(linkedList.head);
console.log(linkedList.toArray());

linkedList.append(12);
console.log(linkedList.head);
console.log(linkedList.toArray());

linkedList.prepend(1);
console.log(linkedList.toArray());

linkedList.append(0);
linkedList.append(2);
linkedList.append(9);
linkedList.append(11);
linkedList.append(7);
console.log(linkedList.toArray());

linkedList.delete(11);
console.log(linkedList.toArray());

linkedList.deleteTail();
console.log(linkedList.toArray());

console.log(linkedList.find(2));

console.log("Not found:\n", linkedList.find(99));
