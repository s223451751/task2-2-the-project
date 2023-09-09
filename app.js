const app = Vue.createApp({
    data() {
        return {
            products: [
                {
                    name: "Handmade Jewelry",
                    description: "Beautiful handmade jewelry crafted with care.",
                    price: 50.00,
                    image: "assets/images/product1.jpg",
                },
                {
                    name: "Artisan Pottery",
                    description: "Unique pottery pieces perfect for your home.",
                    price: 35.00,
                    image: "assets/images/product2.jpg",
                },
                {
                    name: "Handcrafted Candles",
                    description: "Hand-poured candles in various scents.",
                    price: 12.00,
                    image: "assets/images/product3.jpg",
                },
            ],
            cart: [],
        };
    },
    methods: {
        addToCart(product) {
            this.cart.push(product);
        },
    },
});

app.mount('#app');