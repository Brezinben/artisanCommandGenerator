<template>
  <div class="relative">
    <label for="name-with-label" class="text-gray-700 dark:text-gray-50">
      Entity Name
    </label>
    <input
      type="text"
      id="name-with-label"
      class="my-5 form__input"
      name="email"
      placeholder="Entity Name"
      v-model="entityName"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  data() {
    return { entityName: "" };
  },
  methods: {
    onInput() {
      this.$store.commit("setEntityName", this.entityName);
    },
  },
};
</script>

<style scoped>
input:placeholder-shown {
  @apply ring ring-red-600 ring-offset-2 ring-offset-red-400;
}
</style>
