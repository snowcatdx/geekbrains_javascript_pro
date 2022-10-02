const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    imgPlaceholder: 'img/placeholder.png',
    products: [],
    filtered: [],
    cart: [],
    cartIsVisible: false,
    cartTotal: '',
    userSearch: '',
    error: false
  },
  mounted(){
    this.getJson(API + this.catalogUrl)
      .then(data => {
        for(let el of data){
          this.products.push(el);
        }
      });
    this.getJson('getProducts.json')
      .then(data => {
        for(let el of data){
          this.products.push(el);
        }
      });
    this.filtered = this.products;
    this.cartTotal = this.calcCartSum();
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
          this.error = true
        })
    },
    filterProduct(){
      let filterString = new RegExp(this.userSearch, 'i');
      this.filtered = this.products.filter(product => filterString.test(product.product_name));
    },
    openCart(){
      this.cartIsVisible = !this.cartIsVisible;
    },
    calcCartSum(){
      return this.cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    },
    addProduct(item) {
      let find = this.cart.find(product => item.id_product === product.id_product);
      if(find) {
        find.qty++;
      } else {
        this.$set(item, 'qty', 1);
        this.cart.push(item);
      }
      this.cartTotal = this.calcCartSum();
    },
    removeProduct(item){
      let find = this.cart.find(product => item.id_product === product.id_product);
      if(find.qty > 1){
        find.qty--;
      } else {
        this.cart.splice(this.cart.indexOf(find), 1);
      }
      this.cartTotal = this.calcCartSum();
    }
  }
});