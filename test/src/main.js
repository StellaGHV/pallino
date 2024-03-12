import './assets/main.css'

import * as Vue from 'vue';
import vueVimeoPlayer from 'vue-vimeo-player'
import { createApp } from 'vue'
import App from './App.vue'

import "./assets/scss/style.scss";

const app = Vue.createApp(App)
app.use(vueVimeoPlayer)
app.mount('#app')