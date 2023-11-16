<script setup lang="ts">
import { useComments } from "@/composables/useComments";

const data = await useComments(
  "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/comments"
);

const comments = data.value;
</script>

<template>
  <div class="row mb-2 rounded">
    <div
      class="col-md-6"
      v-for="{ id, name, createdAt, avatar, comment } in comments"
      :key="id"
    >
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative"
        :style="{ height: '140px' }"
      >
        <div class="col-auto d-none d-sm-block">
          <NuxtImg
            :src="avatar"
            class="bd-placeholder-img image"
            width="100"
            height="140"
          />
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{{ name }}</h3>
          <div class="mb-1 text-muted">
            {{ formattedDate(createdAt) }}
          </div>
          <p class="card-text mb-auto">
            {{ comment }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  object-fit: cover;
}
.item {
  display: flex;
  list-style: none;
  border: 1px solid black;
}
</style>
