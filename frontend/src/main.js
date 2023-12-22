/* eslint-disable import/order */
import App from '@/App.vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Create vue app
const app = createApp(App)
const pinia = createPinia()

// Use plugins
app.use(pinia)
app.use(VueSweetalert2);
// Mount vue app
app.mount('#app')



//Recupera$23