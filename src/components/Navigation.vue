<template>
  <header class="flex justify-center">
    <div class="font-bold mx-4" v-for="item in tabList" :key="item.name">
      <RouterLink :to="item.link" active-class="text-red-400" exact>{{
        item.name
      }}</RouterLink>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  setup() {
    const tabList = [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" }
    ];

    return {
      tabList
    };
  }
});
</script>
