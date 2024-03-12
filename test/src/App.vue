<script setup>
import { ref, onMounted } from "vue";
import TheWelcome from './components/TheWelcome.vue'
import FooterCont from './components/FooterCont.vue'

import backgroundUrl from './assets/img/header_image.jpg';
const image = ref(backgroundUrl);

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Nav sticky
const stickyHeader = ref(null)
function handleScroll(){
  if (window.scrollY > 100) {
    stickyHeader.value.classList.add('fixed-white');
  } else {
    stickyHeader.value.classList.remove('fixed-white');
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
});
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg shadow-none nav-pallino px-6030" ref="stickyHeader">
      <div class="container">
        <a class="navbar-brand" href="javascript:;"><img src="./assets/logo.svg" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarmenu" aria-controls="navbarmenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarmenu">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#">News</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#">Services</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#">Faqs</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#">Contacts</RouterLink>
            </li>
          </ul>
          <ul class="nav navbar-nav">
            <li class="nav-item search">
              <svg height="30px" width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
            </li>
            <li class="nav-item moon">
              <svg height="30px" width="30px" viewBox="0 0 47.539 47.539" xmlns="http://www.w3.org/2000/svg"><g><path d="M24.997,47.511C11.214,47.511,0,36.298,0,22.515C0,12.969,5.314,4.392,13.869,0.132 c0.385-0.191,0.848-0.117,1.151,0.186s0.381,0.766,0.192,1.15C13.651,4.64,12.86,8.05,12.86,11.601 c0,12.681,10.316,22.997,22.997,22.997c3.59,0,7.033-0.809,10.236-2.403c0.386-0.191,0.848-0.117,1.151,0.186 c0.304,0.303,0.381,0.766,0.192,1.15C43.196,42.153,34.597,47.511,24.997,47.511z M12.248,3.372C5.862,7.608,2,14.709,2,22.515 c0,12.68,10.316,22.996,22.997,22.996c7.854,0,14.981-3.898,19.207-10.343c-2.668,0.95-5.464,1.43-8.346,1.43 c-13.783,0-24.997-11.214-24.997-24.997C10.861,8.761,11.327,6.005,12.248,3.372z"></path></g></svg>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <swiper :speed="600" :pagination="true" :modules="modules" class="mySwiper">
      <div slot="container-start"></div>
      <swiper-slide :style="{
          backgroundImage: `url(${image})`, backgroundSize: 'cover'}" loading="lazy">
        <div class="content-slide">
          <p class="title">LOREM <b>IPSUM</b></p>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor.
          </p>
          <button type="button" class="btn btn-dark">lorem ipsum</button>
        </div>
      </swiper-slide>
      <swiper-slide :style="{
          backgroundImage: `url(${image})`, backgroundSize: 'cover'}" loading="lazy">
        <div class="content-slide">
          <p class="title">LOREM <b>IPSUM</b> 2</p>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor.
          </p> 
        </div>
      </swiper-slide>
      <swiper-slide :style="{
        backgroundImage: `url(${image})`, backgroundSize: 'cover'}" loading="lazy">
        <div class="content-slide">
          <p class="title">LOREM <b>IPSUM</b> 3</p>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor.
          </p> 
        </div>
      </swiper-slide>
    </swiper>
  <main>
    <TheWelcome />
  </main>
  <FooterCont />
</template>

<script>
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    }
  };
</script>