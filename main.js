const { createApp, ref, computed } = Vue

createApp(({
    setup() {
        const product = ref('imon')
        const brand = ref('SE 331')
        const link = ref('https://www.camt.cmu.ac.th./')
        const inventory = ref(100)
        const OnSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const size = ref(['S', 'M', 'L'])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ])
        const selectedVariant = ref(0)
        function updateVariant(index) {
            selectedVariant.value = index
        }
        const cart = ref(0)
        function addToCart() {
            cart.value += 1
        }
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        function updateImage(variantImage) {
            image.value = variantImage
        }
        function updateinSale() {
            if (variants.value[selectedVariant.value].quantity > 0) {
                variants.value[selectedVariant.value].quantity = 0;
            }
            else {
                variants.value[selectedVariant.value].quantity = 100;
            }
        }
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity > 0
        })
        const saleMessage = computed(() => {
            if (inStock.value) {
                return brand.value + ' ' + product.value + ' ' + variants.value[selectedVariant.value].color + ' is on sale'
            }
            else {
                return brand.value + ' ' + product.value + ' ' + variants.value[selectedVariant.value].color + ' is not on sale'
            }
        })



        return {
            title,
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
            updateVariant,
            updateinSale,
            saleMessage

        }
    }
})).mount('#app')
