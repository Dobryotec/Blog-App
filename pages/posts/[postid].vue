<template>
  <div :style="{ flex: 1 }">
    <PostDetails />
  </div>
</template>

<script setup lang="ts">
const { postid } = useRoute().params;
</script>
