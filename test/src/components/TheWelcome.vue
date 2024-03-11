<script setup>
import { onMounted, ref, computed } from 'vue'
import { vueVimeoPlayer } from 'vue-vimeo-player'

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
  if (selectedCategory.value && selectedCategory.value !== 'All') {
    return images.filter(e => e.category == selectedCategory.value)
  } else {
    return images
  }
});

onMounted(() => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 200;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 1);
      } else counter.innerText = target;
    };
    updateCounter();
  });
});
</script>

<template>
  <div class="box-numbers px-6030">
    <div class="text-numbers">
      <p class="title text-center">LOREM IPSUM</p>
      <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori.</p>
    </div>
    <div class="content-numbers">
      <div class="counter-container">
        <div class="counter" data-target="1000"></div>
      </div>
      <div class="counter-container">
        <div class="counter" data-target="100"></div>
      </div>
      <div class="counter-container">
        <div class="counter plus" data-target="5"></div>
      </div>
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-dark">lorem ipsum</button>
    </div>
  </div>

  <div class="double-box">
    <div class="row">
      <div class="col-12 col-md-6">
        <vimeo-player ref="player" :video-id="videoID" @ready="onReady" :player-height="height"></vimeo-player>
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

  <div class="brand-client">

  </div>
</template>