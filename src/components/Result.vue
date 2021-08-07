<template>
  <div
    class="w-full h-32 mt-5 text-white bg-black rounded-lg ring-8 ring-gray-600"
  >
    <div v-if="show" class="pt-5 ml-3">{{ result }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    result() {
      return this.$store.getters.getResult;
    },
    show() {
      return (
        this.$store.getters.getSelectedCommand != null &&
        this.$store.getters.getEntityName
      );
    },
  },
};
</script>

<style></style>
