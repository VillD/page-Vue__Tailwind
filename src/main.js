import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
// import './assets/index.css'

//import './assets/main.css'
library.add(faGithub, faInstagram, faLinkedin, faPenNib, faCode, faMobileScreenButton)
const pinia = createPinia()



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(pinia)
.mount('#app')



