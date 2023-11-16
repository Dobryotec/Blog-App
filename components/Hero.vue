<script setup lang="ts">
import { type Data } from "~/types/types";
import { truncateText } from "~/utils/TruncateText.js";
import { capitalizeFirstLetter } from "~/utils/CapitalizeFirstLetter.js";

const { posts } = defineProps<{ posts: Data[] }>();

const { title, content, id } = [...posts].find(({ id }) => id === "1") as Data;
</script>

<template>
  <div>
    <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic title">
          {{ capitalizeFirstLetter(title) }}
        </h1>
        <p class="lead my-3">
          {{ truncateText(content) }}
        </p>
        <p class="lead mb-0">
          <NuxtLink :to="`/posts/post-${id}`" class="hero-link link fw-bold"
            >Continue reading...</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-link {
  text-decoration: none;
  color: white;
  transition: all 300ms;
}
.hero-link:hover {
    color: gold;
  }

</style>
