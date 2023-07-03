import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars,faChevronDown,faEnvelope,faUser,faPhone, faTruck,faMoneyBill1Wave,faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createApp } from 'vue'
import App from './App.vue'

library.add(faBars,faChevronDown,faEnvelope,faPhone,faUser,faTruck,faMoneyBill1Wave,faCartShopping,faXmark)

localStorage.removeItem('cart')
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
