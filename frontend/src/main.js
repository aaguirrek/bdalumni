/* eslint-disable import/order */
import App from '@/App.vue'
import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Create vue app
const app = createApp(App)
app.use(VueSweetalert2);
// Mount vue app
app.mount('#app')



//Recupera$23