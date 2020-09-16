<template>
  <div class="m-4 border-2 rounded p-4 shadow">
    <h1 class="font-bold">{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: ["title", "description"]
});
</script>
