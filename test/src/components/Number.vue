<script setup>
import { onMounted, ref } from 'vue';
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
})
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
        <div class="yellow-box">
          <p>lorem ipsum dolor sit</p>
        </div>
      </div>
      <div class="counter-container">
        <div class="counter" data-target="100"></div>
        <div class="yellow-box">
          <p>lorem ipsum dolor sit</p>
        </div>
      </div>
      <div class="counter-container">
        <div class="counter plus" data-target="5"></div>
        <div class="yellow-box">
          <p>lorem ipsum dolor sit</p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-dark">lorem ipsum</button>
    </div>
  </div>
</template>