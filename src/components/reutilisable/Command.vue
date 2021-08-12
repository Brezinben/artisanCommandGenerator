<template>
  <div v-if="canModify" class="flex items-center">
    <CancelButton @click="deleteCmd(cmd)"></CancelButton>

    <button
      v-if="!modify"
      @click="modify = !modify"
      class="bg-blue-700 btn boogie hover:bg-blue-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
        />
      </svg>
    </button>

    <button
      v-else
      @click="onClick"
      class="bg-green-800 boogie btn hover:bg-green-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
        />
      </svg>
    </button>

    <order-button :cmd="cmd"></order-button>
  </div>
  <div
    class="relative flex-grow flex__hozAlign firaCode"
    :class="{ 'p-4 pl-1': !canModify }"
  >
    <svg
      v-if="!modify"
      xmlns="http://www.w3.org/2000/svg"
      class="flex-shrink-0 w-6 h-6 mx-2 duration-75 transform cursor-pointer  hover:skew-x-6"
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
    <input
      v-if="modify"
      class="form__input"
      type="text"
      v-model="tempCommand"
      @keypress.enter="onClick"
    />
    <span v-else>{{ cmd.command }}</span>
  </div>
</template>

<script>
import OrderButton from "./OrderButton.vue";
import CancelButton from "./CancelButton.vue";
import EventBus from "@/EventBus";
export default {
  components: { CancelButton, OrderButton },
  data() {
    return { copied: false, modify: false, tempCommand: this.cmd.command };
  },
  methods: {
    onClick() {
      if (this.cmd.command != this.tempCommand) {
        this.$store.commit("commandHasChanged", {
          oldValue: this.cmd.command,
          newValue: this.tempCommand,
        });
        EventBus.$emit("commandModified", {
          type: "info",
          message: "Command has been modified",
        });
      }
      this.modify = !this.modify;
    },
    copy() {
      navigator.clipboard.writeText(this.cmd.command);

      this.copied = true;
      setTimeout(() => (this.copied = false), 800);
      EventBus.$emit("commandCopied", {
        type: "success",
        message: "Command has been copied into clipboard",
      });
    },
    deleteCmd(cmd) {
      this.$store.commit("deleteCommand", cmd);
    },
  },
  props: {
    cmd: Object,
    canModify: Boolean,
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
.boogie:hover svg {
  animation: boogie 1s cubic-bezier(1, 0, 0, 1) infinite;
}
@keyframes boogie {
  0% {
    transform: rotate(20deg);
  }
  25% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(20deg);
  }
}
.order {
  @apply flex justify-center w-full h-4 bg-gray-800   hover:bg-gray-700;
}
</style>
