<template>
  <div v-if="entityWasSeleted" class="flex__hozAlign">
    Selected command :
    {{ selectedCommand.name }}
    <div v-if="selectedCommand.tipsName" :data-title="selectedCommand.tipsName">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 mx-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <CancelButton @click="reset"></CancelButton>
  </div>

  <div v-else class="mt-2 grid__options dark:text-gray-100">
    <Checkbox
      v-for="cmd in commands"
      v-bind:key="cmd.name"
      @click="onClick(cmd.name)"
      :option="cmd"
    ></Checkbox>
  </div>
</template>

<script>
import CancelButton from "./reutilisable/CancelButton.vue";
import Checkbox from "./reutilisable/Checkbox.vue";
import EventBus from "@/EventBus";
export default {
  components: { Checkbox, CancelButton },
  data() {
    return {
      entityWasSeleted: false,
    };
  },
  created() {
    EventBus.$on("created-new-command", this.reset);
  },
  destroyed() {
    EventBus.$off("created-new-command", this.reset);
  },

  computed: {
    commands() {
      return this.$store.getters.getCommands;
    },
    selectedCommand() {
      return this.$store.getters.getSelectedCommand;
    },
  },
  methods: {
    onClick(name) {
      this.entityWasSeleted = true;
      const cmd = this.commands.find((cmd) => cmd.name == name);
      this.$store.commit("setSelectedCommand", cmd);
    },
    reset() {
      //deselect checkboxes
      this.commands.forEach((cmd) => (cmd.isChecked = false));
      this?.selectedCommand.options.forEach((cmd) => (cmd.isChecked = false));

      this.$store.commit("setSelectedCommand", null);
      this.entityWasSeleted = false;
    },
  },
};
</script>
<style scoped>
.grid__options {
  @apply grid grid-flow-row-dense grid-cols-1 gap-4  xl:grid-cols-6;
}
</style>
