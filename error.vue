<script setup lang="ts">
defineProps(["error"]);
const handleClearError = () => {
  navigateTo("/");
};
</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="container text-center error-container">
      <h1 class="display-1">{{ error.statusCode }}</h1>
      <p class="lead">Ooops.</p>
      <p>{{ error.message }}</p>
      <button class="btn btn-primary" @click="handleClearError">
        Go home...
      </button>
    </div>
  </div>
</template>

<style scoped>
.error-container {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
}
</style>
