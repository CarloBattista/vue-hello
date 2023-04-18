const { createApp } = Vue

createApp({
    data() {
        return {
            messageStart: 'Hello Vue!',
            image: 'https://i.pinimg.com/originals/d4/df/22/d4df220d581fd5bfb4eba9cb23ded3ff.png',
        }
    }
}).mount('#app')