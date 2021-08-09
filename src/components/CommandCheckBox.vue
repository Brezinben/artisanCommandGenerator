<template>
  <div v-if="entityWasSeleted" class="flex items-center text-white dark:">
    Selected command :
    {{ selectedCommand.name }}
    <button
      class="flex items-center justify-center w-10 h-10 m-2 text-white duration-100 bg-red-700 rounded-md  hover:bg-red-500"
      @click="reset"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>

  <div
    v-else
    class="grid grid-flow-row-dense grid-cols-6 grid-rows-3 gap-4 mt-2"
  >
    <div
      v-for="cmd in commands"
      v-bind:key="cmd.name"
      class="dark:text-gray-100"
    >
      <label :for="cmd.name" class="flex items-center" v-if="!entityWasSeleted">
        <input
          type="checkbox"
          :name="cmd.name"
          :id="cmd.name"
          class="mr-2"
          v-model="cmd.isChecked"
          @click="onClick(cmd.name)"
        />
        {{ cmd.name }}
      </label>
    </div>
  </div>
</template>

<script>
import EventBus from "./../EventBus";
export default {
  created() {
    EventBus.$on("created-new-command", this.reset);
  },
  destroyed() {
    EventBus.$off("created-new-command", this.reset);
  },
  data() {
    return {
      entityWasSeleted: false,
    };
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

<style></style>
