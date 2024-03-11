<script setup>
import { ref } from "vue";
import TheWelcome from './components/TheWelcome.vue'
import FooterCont from './components/FooterCont.vue'
import backgroundUrl from './assets/img/header_image.jpg';
const image = ref(backgroundUrl);

function name(params) {
  const
}

</script>

<template>
  <header>
    <nav id="navbar_top" class="navbar navbar-expand-lg bg-transparent shadow-none nav-pallino px-6030" v-on:scroll="scrollNav">
      <div class="container">
        <a class="navbar-brand" href="javascript:;"><img src="./assets/logo.svg" alt="logo"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-header-2"
          aria-controls="navbar-header-2"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-header-2">
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
            <li class="nav-item">
              <div class="container">
                <div class="row justify-space-between py-2">
                  <div class="col-lg-4 mx-auto">
                    <MaterialInput
                      class="input-group-dynamic mb-4"
                      icon="search"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              luna
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <swiper
      :speed="600"
      :pagination="{
        clickable: true,
        bulletActiveClass: string
      }"
      :modules="modules"
      class="mySwiper">
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
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

  // import required modules
  import { Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination]
      };
    },
  };
</script>