<script setup lang="ts">
import { type Data } from "@/types/types";
import { addHttps } from "~/utils/AddHttps";
import { capitalizeFirstLetter } from "~/utils/CapitalizeFirstLetter";

const { postid } = useRoute().params;

const { data } = await useFetch<Data>(
  `https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts/${postid}`
);

const { image, createdAt, title, content } = data.value as Data;

const isOpen = useState("open", () => false);

onUnmounted(() => {
  isOpen.value = false;
});

useHead({
  title,
});
</script>

<template>
  <div>
    <div
      class="row g-0 row-gap-5 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-230 position-relative"
      :style="{ justifyContent: 'center' }"
    >
      <div class="col-auto d-none py-4 ps-4 d-lg-block">
        <NuxtImg
          :src="addHttps(image)"
          class="bd-placeholder-img image"
          width="400"
          height="400"
        />
      </div>
      <div class="col p-4 d-flex flex-column position-static">
        <button
          class="icon-link icon-link-hover btn mb-4 btn-back fs-5"
          @click="navigateTo('/')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          Back
        </button>
        <h3 class="mb-0 title">{{ capitalizeFirstLetter(title) }}</h3>
        <div class="mb-1 text-muted">
          {{ formattedDate(createdAt) }}
        </div>
        <p class="card-text mb-5 text">
          {{ content }}
        </p>
        <button type="button" @click="isOpen = !isOpen" class="btn btn-primary">
          {{ isOpen ? "Hide" : "Show" }} comments
        </button>
      </div>

      <Comments v-if="isOpen" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  width: 200px;
  &-back {
    width: 100px;
    transition: all 300ms;

    &:hover {
      background-color: gold;
    }
  }
}
.image {
  object-fit: cover;
  border-radius: 10px;
}
.title::first-letter {
  text-transform: uppercase;
}
.text {
  text-align: justify;
}
</style>
