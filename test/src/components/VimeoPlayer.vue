<script setup>
import { onMounted, ref, computed } from 'vue';

const videoURL = 'https://vimeo.com/596776041',
height = 450,
options = {
    muted: true,
    autoplay: true,
},
playerReady = ref(false);

const videoPlayer = ref(null);

const onReady = () => {
    playerReady.value = true
};
const play = () => {
    videoPlayer.play()
};
const pause = () => {
    videoPlayer.pause()
};
</script>
<template>
    <div class="double-box">
    <div class="row align-items-center">
      <div class="col-12 col-md-6">
        <div class="box-video">
            <vimeo-player ref="videoPlayer" :video-url="videoURL" :player-height="height" @ready="onReady"/>
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
</template>