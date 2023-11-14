<template>
  <div class="container">
    <div class="nav-scroller py-1 mb-2">
      <NavBar />
    </div>
    <Hero :posts="posts" />
    <Posts :posts="selectedPosts" />
  </div>
</template>

<script setup lang="ts">
import { type Data } from "@/types/types";
import { computed } from "vue";

const { data, pending } = await useFetch<Data[]>(
  "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts"
);

const posts = data.value as Data[];
const store = useStore();

const selectedPosts = computed(() => {
  if (store.selectedTab === "1") {
    return posts.filter(({ id }) => id !== "1");
  } else if (store.selectedTab) {
    return posts.filter(({ id }) => id === store.selectedTab);
  } else return posts.filter(({ id }) => id !== "1");
});
</script>
