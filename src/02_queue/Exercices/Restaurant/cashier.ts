import { Customer } from "./customer";
import { Queue } from "../../queue_on_linked_list";

export class Cashier {
  constructor(public customers = new Queue()) {}

  addOrder(customer: Customer) {
    this.customers.enqueue(customer);
  }

  deliverOrder() {
    const finishedCustomer = this.customers.dequeue();
    return `Hi, ${finishedCustomer?.name}, Your ${finishedCustomer?.order} is ready!`;
  }

  currentCustomer() {
    return this.customers.peek();
  }
}
