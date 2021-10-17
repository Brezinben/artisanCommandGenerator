<template>
  <div class="flex flex-col">
    <label class="inline-flex items-center cursor-pointer">
      <span class="relative">
        <span
          class="block w-10 h-6 bg-gray-200 rounded-full shadow-inner"
        ></span>
        <span
          :class="toggler"
          @click="toggleDarkMode"
          class="absolute inset-y-0 block w-4 h-4 mt-1 ml-1 duration-500 transform rounded-full shadow  bg-gradient-to-r focus-within:shadow-outline"
        >
          <input
            id="unchecked2"
            class="absolute w-0 h-0 opacity-0"
            type="checkbox"
          />
        </span>
      </span>
      <span v-if="isDark" class="toogleOption">Edition 🔥</span>
      <span v-else class="toogleOption">Edition ❄</span>
    </label>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";
const docClassList = document.documentElement.classList;
const isDark = ref(docClassList.contains("dark"));

const toggler = computed(() => {
  return {
    "from-yellow-400 to-yellow-600 translate-x-full": isDark.value,
    "from-blue-400 to-blue-600 translate-x-0": !isDark.value,
  };
});
function toggleDarkMode() {
  if (isDark.value) {
    docClassList.remove("dark");
    docClassList.add("light");
  } else {
    docClassList.add("dark");
    docClassList.remove("light");
  }
  isDark.value = !isDark.value;
}
</script>

<style>
.toogleOption {
  @apply ml-3 mr-2 text-sm whitespace-nowrap;
}
</style>
