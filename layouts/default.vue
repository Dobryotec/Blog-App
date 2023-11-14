<script setup lang="ts">
import "@/styles/styles.css";
</script>

<template>
  <div
    class="container"
    :style="{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }"
  >
    <div class="container">
      <header class="blog-header lh-1 py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="text-center">
            <NuxtLink class="blog-header-logo text-dark" to="/"
              >My Blog</NuxtLink
            >
          </div>
        </div>
      </header>
    </div>
    <slot />
    <footer class="blog-footer">
      <p>
        <a
          class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          href="#"
          >Back to top</a
        >
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped></style>
