<template>
  <keep-alive v-if="route.meta.keepAlive">
    <router-view />
  </keep-alive>
  <router-view v-else />
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped></style>
