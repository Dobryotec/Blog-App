<template>
  <div class="container">
    <Hero :posts="posts" />
    <Posts :posts="posts" />
  </div>
</template>

<script setup lang="ts">
import { type Data } from "@/types/types";
const { data, pending } = await useFetch<Data[]>(
  "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts"
);

const posts = data.value as Data[];
</script>
