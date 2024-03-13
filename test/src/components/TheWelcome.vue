<script setup>
import { onMounted, ref } from 'vue';
import VimeoPlayer from './VimeoPlayer.vue'
import Number from './Number.vue'
import StickyImg from './StickyImg.vue'
import PortfolioFilter from './PortfolioFilter.vue'
</script>

<template>
  <Number />
  
  <VimeoPlayer />

  <StickyImg />

  <div class="content-txt-scroll">
    <div class="scroll-text">
      <p>LOREM IPSUM - LOREM IPSUM - LOREM IPSUM</p>
    </div>
  </div>

  <PortfolioFilter />  

  <div class="brand-client" ref="scrollXbrand">
    <div class="slide-client">
      <img src="../assets/img/image1.png" alt="logo1">
      <img src="../assets/img/image2.png" alt="logo2">
      <img src="../assets/img/image3.png" alt="logo3">
      <img src="../assets/img/image4.png" alt="logo4">
      <img src="../assets/img/image1.png" alt="logo1">
      <img src="../assets/img/image2.png" alt="logo2">
      <img src="../assets/img/image3.png" alt="logo3">
      <img src="../assets/img/image4.png" alt="logo4">
    </div>
  </div>
</template>