Vue.component('products', {
  data(){
    return {
      products: [],
      filtered: [],
      imgFolder: "/img/"
    }
  },
  mounted(){
    this.$parent.getJson('/api/products')
      .then(data => {
        for(let item of data){
          this.$data.products.push(item);
          this.$data.filtered.push(item);
        }
      });
  },
  methods: {
    filter(userSearch){
      let regexp = new RegExp(userSearch, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.title));
    }
  },
  template: `<div class="row">
                <product v-for="item of filtered" 
                :img-folder="imgFolder"
                :product="item"></product>
             </div>`
});

Vue.component('product', {
  props: ['product', 'imgFolder'],
  template: `<div class="col-sm-6 col-md-4">
                <div class="product-card">
                  <div class="product-card_img">
                    <div class="overlay">
                      <button type="button" class="product-card_btn">
                        Add to Cart
                      </button>
                    </div>
                    <img
                      :src="imgFolder + product.img"
                      :alt="product.title"
                      class="img-fluid"
                    />
                  </div>

                  <a href="catalog/detail.html" class="product-card_descr">
                    <span class="title"> {{ product.title }} </span>
                    <span class="price">{{ product.currency }}{{ product.price }}</span>
                  </a>
                </div>
              </div>`
});