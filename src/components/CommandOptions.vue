<template>
  <div class="options__grid">
    <Options :options="options"></Options>
  </div>
</template>

<script setup>
import store from "@/store";
import { computed } from "@vue/reactivity";
import Options from "./reutilisable/Options.vue";

const options = computed(() => store.getters.getSelectedCommand.options);
store.commit("setOptions", options.value);
</script>

<style scoped>
.options__grid {
  @apply mb-5 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-2 2xl:grid-cols-5;
}
</style>
