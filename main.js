const { createApp, ref } = Vue

createApp(({
    setup() {
        const product = ref('imon')
        const image = ref('./assets/images/socks_blue.jpg')
        const link = ref('https://www.camt.cmu.ac.th./')
        const inStock = ref(true)
        const inventory = ref(100)
        const OnSale = ref(false)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const size = ref(['S', 'M', 'L'])
        const variants = ref([
            { id: 2234, color: 'green'},
            { id: 2235, color: 'blue'}
        ])
        const cart = ref(0)
        function addToCart() {
            cart.value += 1
        }
        return {
            product,
            image,
            link,
            inStock,
            inventory,
            OnSale,
            details,
            variants,
            size,
            cart,
            addToCart
        }
    }
})).mount('#app')
   