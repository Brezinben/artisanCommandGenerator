<template>
  <div class="options__grid">
    <Options :options="options"></Options>
  </div>
</template>

<script>
import Options from "./reutilisable/Options.vue";

export default {
  components: { Options },
  mounted() {
    this.$store.commit("setOptions", this.options);
  },
  computed: {
    options() {
      return this.$store.getters.getSelectedCommand.options;
    },
  },
};
</script>

<style scoped>
.options__grid {
  @apply grid grid-flow-row-dense grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-2 2xl:grid-cols-6;
}
</style>
