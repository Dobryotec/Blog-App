<script setup lang="ts">
import { formattedDateShort } from "~/utils/FormateDate";
import { capitalizeFirstLetter } from "~/utils/CapitalizeFirstLetter";
import { truncateText } from "@/utils/TruncateText";
import { addHttps } from "@/utils/AddHttps";
import { categories } from "~/categories/categories";

const { posts } = defineProps(["posts"]);
</script>

<template>
  <div
    class="row mb-2 shadow p-3 mb-5 bg-body-tertiary rounded"
    :style="{ justifyContent: 'center' }"
  >
    <div
      class="col-md-6 post-container"
      v-for="{ id, title, createdAt, image, content } in posts"
      :key="id"
    >
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <strong
            class="d-inline-block mb-2"
            :style="{ color: categories[Number(id) - 1]?.color }"
            >{{ categories[Number(id) - 1]?.category }}</strong
          >
          <h3 class="mb-0 title">{{ capitalizeFirstLetter(title) }}</h3>
          <div class="mb-1 text-muted">{{ formattedDateShort(createdAt) }}</div>
          <p class="card-text mb-auto">
            {{ truncateText(content) }}
          </p>
          <NuxtLink :to="`/posts/${id}`" class="link"
            >Continue reading</NuxtLink
          >
        </div>
        <div class="col-auto d-none d-lg-block">
          <NuxtImg
            :src="addHttps(image)"
            class="bd-placeholder-img image-post"
            width="200"
            height="250"
            alt="post"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  font-weight: bold;
  transition: all 300ms;

  &:hover {
    color: gold;
  }
}
.image-post {
  object-fit: cover;
}

.post-container:hover {
  transform: scale(1.05);
  transition: transform 300ms ease;
}
</style>
