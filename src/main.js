import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/base.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { fa } from 'vuetify/locale'


const vuetify = createVuetify({
    components,
    directives,
    locale: {
        locale: 'fa',
        fallback: 'fa',
        messages: { fa },
        rtl: {
            fa: true
        }
    },
});

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
