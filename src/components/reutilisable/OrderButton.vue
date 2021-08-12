<template>
  <div
    v-if="this.allCommands.length > 1"
    class="flex-col p-1 pr-0.5 cursor-pointer btn"
  >
    <div
      @click="cmd.order != 0 && decrementOrder()"
      class="rounded-t-sm order"
      :class="{ 'cursor-not-allowed': cmd.order == 1 }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        class="h-full"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </div>

    <hr />
    <div
      @click="cmd.order != allCommands.length && incrementOrder()"
      class="rounded-b-sm order"
      :class="{ 'cursor-not-allowed': cmd.order == allCommands.length }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-full transform rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </div>
  </div>
  {{ cmd.order }}
</template>

<script>
export default {
  props: {
    cmd: Object,
  },
  computed: {
    allCommands() {
      return this.$store.getters.getAllCommands;
    },
  },
  methods: {
    incrementOrder() {
      if (this.cmd.order == this.allCommands.length) return;
      this.cmd.order++;
    },
    decrementOrder() {
      if (this.cmd.order == 1) return;
      this.cmd.order--;
    },
  },
};
</script>

<style></style>
