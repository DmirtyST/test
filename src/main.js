import { createApp } from 'vue'
import './style/global.scss'
import App from './App.vue'

import router from "./router/index";
import { languages,defaultLocale } from './i18n';
import {createI18n,useI18n} from 'vue-i18n'
const localStorageLang  = localStorage.getItem('lang')
const messages  = Object.assign(languages)
const i18n = createI18n({
 legacy:false,
 locale:localStorageLang || defaultLocale,
 fallbackLocale:'eng',
messages

})




createApp(App,{ 
mixins:[0],
setup() {
    const {t} = useI18n()
    return {t}
}
}).use(i18n).use(router).mount('#app')
