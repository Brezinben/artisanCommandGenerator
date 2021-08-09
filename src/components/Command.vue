<template>
  <div class="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      @click="copy(this.command)"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
    {{ command }}
  </div>
</template>

<script>
const copy = (cmd) => navigator.clipboard.writeText(cmd);
export default {
  methods: {
    copy() {
      copy(this.command);
    },
  },
  props: {
    command: String,
  },
};
</script>

<style></style>
