<template>
  <div
    v-for="cmd in allCommands"
    v-bind:key="cmd.order"
    class="space-x-4 flex__hozAlign"
  >
    <CancelButton @click="deleteCmd(cmd)"></CancelButton>

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
    class="flex items-center justify-center w-full h-10 m-2 text-white duration-100 bg-green-700 rounded-md  hover:bg-green-800"
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
    Add command
  </button>
  <div
    v-if="allResult"
    class="w-full mt-5 bg-gray-900 rounded-sm  dark:text-gray-50 h-min ring-8 ring-gray-800 ring-offset-4 ring-offset-gray-700"
  >
    <Command class="p-3 ml-3" :command="allResult"></Command>
  </div>
</template>

<script>
import CancelButton from "./reutilisable/CancelButton.vue";
import Command from "./reutilisable/Command.vue";
import EventBus from "./../EventBus";
export default {
  emits: ["created-new-command"],
  components: { Command, CancelButton },
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
