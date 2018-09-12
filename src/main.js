import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// TODO: при общем экспорте, не определяются компоненты в IDE.
// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue);
import container from 'bootstrap-vue/es/components/layout/container';
import row from 'bootstrap-vue/es/components/layout/row';
import col from 'bootstrap-vue/es/components/layout/col';
import table from 'bootstrap-vue/es/components/table/table';
import pagination from 'bootstrap-vue/es/components/pagination/pagination';
import button from 'bootstrap-vue/es/components/button/button';
import formGroup from 'bootstrap-vue/es/components/form-group/form-group';
import inputGroup from 'bootstrap-vue/es/components/input-group/input-group';
import formSelect from 'bootstrap-vue/es/components/form-select/form-select';
import form from 'bootstrap-vue/es/components/form/form';
import formInvalidFeedback from 'bootstrap-vue/es/components/form/form-invalid-feedback';
import formInput from 'bootstrap-vue/es/components/form-input/form-input';

Vue.component('b-container', container);
Vue.component('b-row', row);
Vue.component('b-col', col);
Vue.component('b-table', table);
Vue.component('b-pagination', pagination);
Vue.component('b-button', button);
Vue.component('b-form-group', formGroup);
Vue.component('b-input-group', inputGroup);
Vue.component('b-form-select', formSelect);
Vue.component('b-form', form);
Vue.component('b-form-invalid-feedback', formInvalidFeedback);
Vue.component('b-form-input', formInput);
// ----

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
