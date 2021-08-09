<template>
  <div class="relative">
    <label for="name-with-label" class="text-gray-700 dark:text-gray-50">
      Entity Name
    </label>
    <input
      type="text"
      id="name-with-label"
      class="form__input"
      name="email"
      placeholder="Entity Name"
      v-model="entityNameTemp"
      @input="this.$store.commit('setEntityName', entityName)"
    />
    <!-- @input="this.$store.commit('setEntityName', entityName)" -->
  </div>
</template>

<script>
const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );
export default {
  data() {
    return { entityNameTemp: "" };
  },

  computed: {
    entityName() {
      return capitalize(this.entityNameTemp).replaceAll(" ", "");
    },
  },
};
</script>

<style></style>
