<template>
  <div class="container mx-auto">
    <h1 class="mt-5 text-xl font-bold text-center dark:text-white">
      Artisan Command Generator
    </h1>
    <Entity />
    <CommandCheckBox />
    <CommandOptions v-if="this.$store.getters.getSelectedCommand" />
    <Result />
  </div>
</template>

<script>
import Entity from "./components/Entity.vue";
import CommandCheckBox from "./components/CommandCheckBox.vue";
import CommandOptions from "./components/CommandOptions.vue";
import Result from "./components/Result.vue";

export default {
  created() {},
  mounted() {},
  data() {
    return {};
  },
  props: {},
  components: {
    Result,
    CommandOptions,
    CommandCheckBox,
    Entity,
  },
  watch: {},
  methods: {},
  computed: {},
};
</script>
