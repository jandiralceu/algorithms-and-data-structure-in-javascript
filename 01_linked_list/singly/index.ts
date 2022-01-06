import { SinglyLinkedList } from "./SinglyLinkedList";

const singlyLinkedList = new SinglyLinkedList();

console.log(singlyLinkedList.toArray());

singlyLinkedList.prepend(5);
console.log(singlyLinkedList.head);
console.log(singlyLinkedList.toArray());

singlyLinkedList.append(12);
console.log(singlyLinkedList.head);
console.log(singlyLinkedList.toArray());

singlyLinkedList.prepend(1);
console.log(singlyLinkedList.toArray());

singlyLinkedList.append(0);
singlyLinkedList.append(2);
singlyLinkedList.append(9);
singlyLinkedList.append(11);
singlyLinkedList.append(7);
console.log(singlyLinkedList.toArray());

singlyLinkedList.delete(11);
console.log(singlyLinkedList.toArray());

singlyLinkedList.deleteTail();
console.log(singlyLinkedList.toArray());

console.log(singlyLinkedList.find(2));

console.log("Not found:\n", singlyLinkedList.find(99));
