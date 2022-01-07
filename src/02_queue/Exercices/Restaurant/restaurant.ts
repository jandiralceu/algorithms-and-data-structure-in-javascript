import { Cashier } from "./cashier";
import { Customer } from "./customer";

const restaurantCashier = new Cashier();

restaurantCashier.addOrder(new Customer("Jandir Alceu", "Hamburger"));
restaurantCashier.addOrder(new Customer("Manuel Cutabiala", "Potatoes"));
console.log(restaurantCashier.currentCustomer());

console.log("\n");
console.log(restaurantCashier.deliverOrder());
console.log("Current customer: ", restaurantCashier.currentCustomer());

console.log("\n");
restaurantCashier.addOrder({ name: "John Doe", order: "Soda" });
console.log(restaurantCashier.deliverOrder());
console.log("Current customer: ", restaurantCashier.currentCustomer());
console.log("\n");
