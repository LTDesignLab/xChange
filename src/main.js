import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'
import { firebaseConfig } from '../firebase-config.js'
//import { loadStripe } from '@stripe/stripe-js' 
//import { Elements } from '@stripe/react-stripe-js';

/*export const stripePromise = loadStripe(
    'pk_test_51HvILvHUKxrEYb5x1DKN1D7yf80AS7OYixPzMBW4q5VH69vtJ4IfqbMZyV5OZHyfe5Z2pcjbGkkxLpiPClpZGDk900kDGDYx4Y'
);*/

firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
