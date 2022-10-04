Vue.component('search', {
  template: `<input type="text" placeholder="Начни вводить текст для поиска..." class="filter-input" v-model="$root.userSearch"
           @input="$root.filterProduct()">`,
});