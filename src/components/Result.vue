<template>
  <div
    v-for="cmd in allCommands"
    v-bind:key="cmd.order"
    class="flex items-center space-x-4 dark:text-white"
  >
    <button
      class="flex items-center justify-center w-10 h-10 m-2 text-white duration-100 bg-red-700 rounded-md  hover:bg-red-500"
      @click="deleteCmd(cmd)"
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

    <input
      style="width: 4rem"
      type="number"
      class="form__input"
      v-model.number="cmd.order"
    />

    <Command :command="cmd.command"></Command>
  </div>

  <button
    v-if="this.result"
    class="flex items-center justify-center w-10 h-10 m-2 text-white duration-100 bg-green-700 rounded-md  hover:bg-green-500"
    @click="addCommand"
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
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  </button>
  <div
    class="w-full h-32 mt-5 bg-black rounded-lg  dark:text-white ring-8 ring-gray-600"
  >
    <Command v-if="allResult" class="pt-5 ml-3" :command="allResult"></Command>
  </div>
</template>

<script>
import Command from "./Command.vue";
import EventBus from "./../EventBus";
export default {
  emits: ["created-new-command"],
  components: { Command },
  computed: {
    result() {
      return this.$store.getters.getResultOfOne;
    },
    allResult() {
      return this.$store.getters.getResult;
    },
    allCommands() {
      return this.$store.getters.getAllCommands;
    },
  },
  methods: {
    addCommand() {
      this.$store.commit("addCommand", {
        order: this.$store.getters.getAllCommands.length + 1,
        command: this.result,
      });

      EventBus.$emit("created-new-command");
    },

    deleteCmd(cmd) {
      this.$store.commit("deleteCommand", cmd);
    },
  },
};
</script>

<style></style>
