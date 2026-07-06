const { createApp, ref } = Vue

createApp(({
    setup() {
        const product = ref('imon')
        const image = ref('./assets/images/socks_blue.jpg')
        const link = ref('https://www.camt.cmu.ac.th./')
        const inStock = ref(true)
        const inventory = ref(100)
        const OnSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const size = ref(['S', 'M', 'L'])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
        ])
        const cart = ref(0)
        function addToCart() {
            cart.value += 1
        }
        function updateImage(variantImage) {
            image.value = variantImage
        }
        function updateinSale() {
            if(inventory.value > 0) {
                inventory.value = 0;
            }
            else {
                inventory.value = 100;
            }
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
            addToCart,
            updateImage,
            updateinSale
            
        }
    }
})).mount('#app')
   