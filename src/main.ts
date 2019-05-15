import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Login from './components/Login.vue';


Vue.config.productionTip = false;
const CustomElement = wrap(Vue, Login);
window.customElements.define('my-login', CustomElement);
