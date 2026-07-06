const { createApp, ref } = Vue

createApp(({
    setup() {
        const product = ref('imon')
        const image = ref('./assets/images/socks_blue.jpg')
        const link = ref('https://www.camt.cmu.ac.th./')
        const inStock = ref(true)
        const inventory = ref(100)
        const OnSale = ref(false)
        return {
            product,
            image,
            link,
            inStock,
            inventory,
            OnSale
        }
    }
})).mount('#app')
   