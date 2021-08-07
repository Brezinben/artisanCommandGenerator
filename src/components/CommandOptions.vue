<template>
  <div
    v-for="option in options"
    v-bind:key="option.name"
    class="dark:text-gray-100"
  >
    <label :for="option.name" class="flex items-center">
      <input
        type="checkbox"
        class="mr-2"
        :name="option.name"
        :id="option.name"
        v-model="option.isChecked"
      />
      {{ option.name }}

      <input
        v-if="option.isChecked && option.value?.need"
        v-model="option.value.value"
        type="text"
        class="mx-5 form__input"
      />
    </label>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setOptions", this.options);
  },
  computed: {
    options() {
      return this.$store.getters.getSelectedCommand.options;
    },
  },
  methods: {},
};
</script>

<style></style>
