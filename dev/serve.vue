<script lang="ts">
import { defineComponent } from 'vue';
import WaveSkeleton from '@/wave-skeleton.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    WaveSkeleton
  }
});
</script>

<template>
  <div id="app">
    <wave-skeleton />
  </div>
</template>
