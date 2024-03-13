<script setup>
import { ref } from "vue";

import backgroundUrl from '../assets/img/header_image.jpg';
const image = ref(backgroundUrl);
</script>
<template>
    <swiper :modules="modules"
    :slides-per-view="1"
    navigation
    :pagination="{ clickable: true }">
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
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>