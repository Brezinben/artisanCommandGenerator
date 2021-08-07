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
      v-model="entityName"
      @input="this.$store.commit('setEntityName', entityName)"
    />
    <!-- @input="this.$store.commit('setEntityName', entityName)" -->
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return { entityName: "" };
  },
  methods: {},
};
</script>

<style></style>
