<template>
  <div
    v-for="cmd in allCommands"
    v-bind:key="cmd.order"
    class="space-x-4 flex__hozAlign"
  >
    <command :canModify="true" :cmd="cmd" />
  </div>
  <button
    v-if="result"
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
    <command :canModify="false" :cmd="{ order: 0, command: allResult }" />
  </div>
</template>

<script setup>
import Command from "./reutilisable/Command.vue";
import EventBus from "@/EventBus";
import { computed } from "@vue/reactivity";
import store from "@/store";

defineEmits(["created-new-command"]);
const result = computed(() => store.getters.getResultOfOne);
const allResult = computed(() => store.getters.getResult);
const allCommands = computed(() => store.getters.getAllCommands);

const addCommand = () => {
  store.commit("addCommand", {
    order: allCommands.value.length + 1,
    command: result.value.trim(),
  });

  EventBus.$emit("created-new-command");
};
</script>
