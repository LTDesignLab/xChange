<template>
    <div>
        <form @submit.prevent="handleSubmit" class="col s12 card-element">
            <div id="card-info-element" class="input-value"></div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { fetchFromAPI } from './helpers';
import { stripe } from '../stripe-config';
//import firebase from 'firebase';

export default {
    name: '',
    data() {
        return {
            mountElements: false,
            amount: 0,
            paymentIntent: null
        }
    },
    mounted() {
        this.createAndMountFormElements();
    },
    methods: {
        createAndMountFormElements() {
            this.mountElements = true;

            var card = elements.create("card", {
                style: {
                    base: {
                    color: "#32325D",
                    fontWeight: 500,
                    fontFamily: "Inter UI, Open Sans, Segoe UI, sans-serif",
                    fontSize: "16px",
                    fontSmoothing: "antialiased",

                    "::placeholder": {
                        color: "#CFD7DF"
                    }
                    },
                    invalid: {
                    color: "#E25950"
                    }
                }
            });

            card.mount("#card-info-element");
        },
        async createPaymentIntent() {
            const validAmount = Math.min(Math.max(this.amount, 50), 9999999);
            this.amount = validAmount;
            await fetchFromAPI('payments', { body: { amount: validAmount } }, true).then((pi) => {
                console.log(pi);
                this.paymentIntent = pi;
                this.createAndMountFormElements();
            });
        },
        async handleSubmit() {
            const cardElement = elements.getElement("card");

            // Confirm Card Payment
            const {
                paymentIntent: updatedPaymentIntent,
                error,
            } = await stripe.confirmCardPayment(this.paymentIntent.client_secret, {
                payment_method: { card: cardElement },
            });

            if (error) {
                console.error(error);
                (error.payment_intent ? this.paymentIntent = error.payment_intent : this.paymentIntent);
            } else {
                this.paymentIntent = updatedPaymentIntent;
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>