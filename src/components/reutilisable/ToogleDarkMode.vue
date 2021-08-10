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
          class="absolute inset-y-0 block w-4 h-4 mt-1 ml-1 duration-500 transform rounded-full shadow  focus-within:shadow-outline"
        >
          <input
            id="unchecked2"
            class="absolute w-0 h-0 opacity-0"
            type="checkbox"
          />
        </span>
      </span>
      <span v-if="this.isDark" class="toogleOption">Edition 🔥</span>
      <span v-else class="toogleOption">Edition ❄</span>
    </label>
  </div>
</template>

<script>
const docClassList = document.documentElement.classList;
export default {
  data() {
    return { isDark: docClassList.contains("dark") };
  },
  methods: {
    toggleDarkMode() {
      if (this.isDark) {
        docClassList.remove("dark");
        docClassList.add("light");
      } else {
        docClassList.add("dark");
        docClassList.remove("light");
      }
      this.isDark = !this.isDark;
    },
  },
  computed: {
    toggler() {
      return {
        "bg-gradient-to-r from-yellow-400  to-yellow-600   translate-x-full":
          this.isDark,
        "bg-gradient-to-r from-blue-400  to-blue-600  translate-x-0":
          !this.isDark,
      };
    },
  },
};
</script>

<style>
.toogleOption {
  @apply ml-3 mr-2 text-sm whitespace-nowrap;
}
</style>
