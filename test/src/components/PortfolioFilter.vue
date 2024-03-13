<script setup>
import { onMounted, ref, computed } from 'vue';

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
  } else {
    return images
  }
});
</script>

<template>
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
</template>