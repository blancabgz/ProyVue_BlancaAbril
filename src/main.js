import Vue from 'vue'
import App from './App.vue'
import router from './router' 
Vue.use(require('vue-moment'));
/* Boostrap */
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/*Lodash*/ 
import VueLodash from 'vue-lodash'
const options = { name: 'lodash' } // customize the way you want to call it
Vue.use(VueLodash, options) // options is optional

/* Iconos */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faAngleUp, faTimes, faChartBar, faMinusCircle, faClock, faWind, faTemperatureHigh, faTemperatureLow, faSortUp, faSortDown, faCloudSun} from '@fortawesome/free-solid-svg-icons'
import { faCircle,faCheckCircle, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/*AXIOS*/
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

library.add(faTimes);
library.add(faChartBar);
library.add(faCircle);
library.add(faCheckCircle);
library.add(faMinusCircle);
library.add(faClock);
library.add(faWind);
library.add(faTemperatureHigh);
library.add(faTemperatureLow);
library.add(faSortUp);
library.add(faSortDown);
library.add(faCloudSun);
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
