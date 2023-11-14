<script setup lang="ts">
import { type Comments } from "@/types/types";

const { data: comments } = useFetch<Comments[]>(
  "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/comments"
);
</script>

<template>
  <div class="row mb-2 rounded">
    <div
      class="col-md-6"
      v-for="{ id, name, createdAt, avatar, comment } in comments"
      :key="id"
    >
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative"
      >
        <div class="col-auto d-none d-lg-block">
          <NuxtImg
            :src="avatar"
            class="bd-placeholder-img image"
            width="100"
            height="150"
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

<style lang="scss" scoped>
.image {
  height: 100%;
  object-fit: cover;
}
.item {
  display: flex;
  list-style: none;
  border: 1px solid black;
}
</style>
