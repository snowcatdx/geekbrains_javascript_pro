class ProductList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());                
        }
    }

    totalGoodsSum(){
        const startValue = 0;
        return this.goods.reduce((acc, value) => acc + value.price, startValue);
    }
}

class ProductItem {
    constructor(product, img = 'img/placeholder.png'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                    <img src="${this.img}" alt="${this.title}">
                    <h3>${this.title}</h3>
                    <p>$${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>`;
    }
}



let list = new ProductList();

console.log(list.totalGoodsSum());