"use strict";

const menu = {
  bigOne: {id: 11, title: 'Big One', price: 100, cal: 40},
  smallOne: {id: 12, title: 'Small One', price: 50, cal: 20},
  chees: {id: 21, title: 'Cheesburger', price: 10, cal: 20},
  salad: {id: 22, title: 'Saladburger', price: 20, cal: 5},
  fry: {id: 23, title: 'Fryburger', price: 15, cal: 10},
  spice: {id: 31, title: 'Spiceburger', price: 15, cal: 0},
  mayo: {id: 32, title: 'Mayoburger', price: 20, cal: 5},
};

class Hamburger {
  constructor(size, stuffing, topping) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [topping];
  }

  _updSize(param) {
    return this.size = param;
  }
  _updStuffing(param) {
    return this.stuffing = param;
  }
  _addTopping(param) {
    if(this.topping.find(elem => elem.id === param.id)) {
      return;
    }
    this.topping.push(param);
  }
  _removeTopping(param) {
    const elemIndex = this.topping.indexOf(param);
    this.topping.splice(elemIndex, 1);
  }
  _calcPrice(){
    const totalPrice = this.size.price + this.stuffing.price + this.topping.reduce(
      (acc, value) => acc + value.price, 0
    );
    return totalPrice;
  }
  _calcCalories(){
    const totalCal = this.size.cal + this.stuffing.cal + this.topping.reduce(
      (acc, value) => acc + value.cal, 0
    );
    return totalCal;
  }
}

const order = new Hamburger(menu.smallOne, menu.salad, menu.spice);
console.log(order);
console.log(order._calcPrice());
console.log(order._calcCalories());