<template>
    <Banner />
    <router-view />
    <!-- Footer here -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '@/components/Banner.vue';
import About from '@/views/About.vue';

export default defineComponent({
  name: 'App',
  components: {
    Banner,
    About
  }
})
</script>
