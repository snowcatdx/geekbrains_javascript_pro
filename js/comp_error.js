Vue.component('url-error', {
  props: ['error'],
  template: `<div style="background: #fff; color: red" v-if="error">Неправильный url json</div>`,
});