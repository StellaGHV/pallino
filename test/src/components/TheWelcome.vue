<script setup>
import { onMounted, ref, computed } from 'vue';
import VimeoPlayer from './VimeoPlayer.vue'
import Number from './Number.vue'

const images = [
  {
    id: 1,
    src: './src/assets/img/filter-tigre.jpg',
    category: 'Events'
  },
  {
    id: 2,
    src: './src/assets/img/filter-girl.jpg',
    category: 'News'
  },
  {
    id: 3,
    src: './src/assets/img/filter-panda.jpg',
    category: 'Events'
  }
];

const selectedCategory = ref(null);

const filteredImages = computed(() => {
  const labelFil = document.querySelectorAll(".filter label");
  if (selectedCategory.value && selectedCategory.value !== 'All') {
    return images.filter(e => e.category == selectedCategory.value);
    labelFil.value.classList.remove('selected')
  } else {
    return images
    labelFil.value.classList.add('selected')
  }
});
</script>

<template>
  <Number />
  <div class="double-box">
    <div class="row align-items-center">
      <div class="col-12 col-md-6">
        <div class="box-video">
          <VimeoPlayer />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="content-text">
          <p class="subtxt text-white">
            Subcategory
          </p>
          <p class="title text-white">
            LOREM IPSUM doLOR SIT
          </p>
          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="px-6030">
    <div class="sticky-image">
      <div class="row justify-content-between">
        <div class="col-12 col-md-6 col-lg-5">
          <p class="subtxt">
            Subcategory
          </p>
          <p class="title">
            LOREM IPSUM
          </p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>
        <div class="col-12 col-md-6">
          <img src="../assets/img/tigre.jpg" alt="tigre">
        </div>
      </div>
    </div>
  </div>

  <div class="content-txt-scroll">
    <div class="scroll-text">
      <p>LOREM IPSUM - LOREM IPSUM - LOREM  IPSUM</p>
    </div>
  </div>

  <div class="px-6030 box-portfolio">
    <div class="box-filter">
      <p class="title__mini">FILTERABLE PORTFOLIO</p>
      <div class="container-filter" id="portfolio">
        <div class="filter">
          <label><input type="radio" v-model="selectedCategory" value="All" /> All</label>
          <label><input type="radio" v-model="selectedCategory" value="News" /> News</label>
          <label><input type="radio" v-model="selectedCategory" value="Events" /> Events</label>
        </div>
        <div class="filter-list row">
          <div class="col-12 col-md-4" v-for="image in filteredImages" :key="image.id">
            <div class="box-img-filter">
              <img class="img-fluid" :src="image.src" alt="">
              <p>{{ image.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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