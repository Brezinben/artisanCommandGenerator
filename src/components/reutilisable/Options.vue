<template>
  <div v-for="option in options" v-bind:key="option.name" class="options">
    <Checkbox :option="option"></Checkbox>
    <input
      v-if="option.isChecked && option.value?.need"
      v-model="option.value.value"
      type="text"
      class="mx-5 form__input"
    />
  </div>
</template>

<script setup>
import Checkbox from "./Checkbox.vue";
defineProps({
  options: Object,
});
</script>

<style>
.options {
  @apply flex items-center dark:text-gray-400;
}
</style>
