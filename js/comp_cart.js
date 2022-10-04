Vue.component('cart', {
  props: ['cart-items', 'img', 'visible'],
  template: `<div class="cart-preview" :class="{ visible: visible }">
      <button class="btn-cart" type="button" @click="$root.openCart()">
        <span class="btn-cart_counter">{{ cart-items.length }}</span>
        <span>Корзина</span>
      </button>
      <div class="cart-preview_content">
        <p v-if="!cart-items.length" style="text-align: center">Корзина пуста :(</p>

        <div v-else>
          <div class="cart-item">
            <img :src="img" :alt="cart-items.product_name">
            <span class="cart-item_name">{{ cart-items.product_name }}</span>
            <strong class="cart-item_price">{{ cart-items.price }}$</strong>
            <span class="cart-item_qty"> - {{ cart-items.qty }}шт. - </span>
            <strong>Всего: {{ cart-items.price * cart-items.qty }}$</strong>
            <span class="remove_btn" @click="removeProduct(item)"><i class="fa-solid fa-trash"></i></span>
          </div>
          <span class="total-sum">Итого: {{ cartTotal }}$</span>
        </div>
      </div>
</div>`,
});