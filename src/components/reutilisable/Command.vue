<template>
  <div class="relative flex-grow flex__hozAlign firaCode">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 duration-75 transform cursor-pointer hover:skew-x-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      :class="{ copied: copied }"
      @click="copy"
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
import EventBus from "../../EventBus";
export default {
  data() {
    return { copied: false };
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.command);

      this.copied = true;
      setTimeout(() => (this.copied = false), 800);
      EventBus.$emit("commandCopied", {
        type: "success",
        message: "Command has been copied into clipboard",
      });
    },
  },
  props: {
    command: String,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@200&display=swap");

.firaCode {
  font-family: "Fira Code", monospace;
  word-spacing: -3px;
}

.copied {
  animation: copied 1s ease;
}
@keyframes copied {
  50% {
    transform: scale(1.25);
  }
}
</style>
