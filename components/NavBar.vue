<script setup lang="ts">
import { categories } from "~/categories/categories";
import { useStore } from "@/stores/posts";

const store = useStore();

const selectTab = (id: string) => {
  store.setSelectTab(id);
};
</script>

<template>
  <nav class="nav d-flex justify-content-between">
    <button
      class="post-container btn btn-link link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
      v-for="{ id, category } in categories"
      :key="id"
      @click="selectTab(id)"
    >
      {{ category }}
    </button>
  </nav>
</template>

<style scoped>
.post-container:hover {
  transform: scale(1.05);
  transition: all 300ms ease;
}
</style>
