const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
  constructor(container = '.products'){
    this.container = container;
    this.goods = [];//массив товаров из JSON документа
    this._getProducts()
        .then(data => { //data - объект js
          //console.log(data);
        this.goods = data;
        this.render();//вывод товаров на страницу
    });
  }
  _getProducts(){
    return fetch(`${API}/catalogData.json`)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          });
  }
  totalGoodsSum(){
    return this.goods.reduce((acc, value) => acc + value.price, 0);
  }
  render(){
    const block = document.querySelector(this.container);
    for(let product of this.goods){
      const item = new ProductItem(product);
      block.insertAdjacentHTML("beforeend",item.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'img/placeholder.png'){
    this.name = product.product_name;
    this.id = product.id_product;
    this.price = product.price;
    this.img = img;
  }
  render(){
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="${this.name}">
                <h3>${this.name}</h3>
                <p>$${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
  }
}

let list = new ProductList();

//console.log(list.totalGoodsSum());

class CartContent {
  constructor(container = '.cart-preview_content') {
    this.container = container;
    this.goods = [];
    this._getContent()
      .then(data => {
      this.goods = data.contents;
      this.render();
    });
  }
  _getContent() {
    return fetch(`${API}/getBasket.json`)
      .then(text => text.json())
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const itemsWrapper = document.querySelector(this.container);
    for(let product of this.goods) {
      const productNew = new ProductInCart(product);
      itemsWrapper.insertAdjacentHTML('beforeend', productNew.render());
    }
  }
  // totalGoodsSum(){
  //   return this.goods.reduce((acc, value) => acc + value.price, 0);
  // }
}

class ProductInCart {
  constructor(product, img = 'img/placeholder.png') {
    this.id = product.id_product;
    this.img = img;
    this.name = product.product_name;
    this.price = product.price;
    this.qty = product.quantity;
  }

  render() {
    return `<div class="cart-item" data-id="${this.id}">
                <img src="${this.img}" alt="${this.name}">
                <span class="cart-item_name">${this.name}</span>
                <span class="cart-item_price">${this.price * this.qty}$</span>
                <span class="cart-item_qty">${this.qty}шт.</span>
                <span class="remove_btn" title="Удалить">X</span>
            </div>`;
  }
}

new CartContent();