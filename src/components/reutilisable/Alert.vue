<template>
  <transition name="fade">
    <div
      v-if="show"
      :class="{
        'text-green-700 bg-green-100': alert?.type === 'success',
        'text-blue-700 bg-blue-100': alert?.type === 'info',
        'text-red-700 bg-red-100': alert?.type === 'error',
        'text-yellow-700 bg-yellow-100': alert?.type === 'warning',
      }"
      class="alert"
      role="alert"
    >
      <p v-if="alert.header" class="font-bold">{{ alert.header }}</p>
      <p>{{ alert.message }}</p>
      <span
        class="absolute inset-y-0 right-0 flex items-center mr-4"
        @click="show = !show"
      >
        <svg class="w-4 h-4 fill-current" role="button" viewBox="0 0 20 20">
          <path
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import EventBus from "@/EventBus";

const alert = ref(null);
const show = ref(false);
const triggerAlert = (alertObject) => {
  alert.value = alertObject;
  show.value = true;
  setTimeout(() => {
    show.value = false;
    alert.value = null;
  }, 2000);
};

EventBus.$on("commandCopied", triggerAlert);
EventBus.$on("commandModified", triggerAlert);
</script>

<style scoped>
.alert {
  @apply fixed right-0 py-3 pl-4 pr-10 leading-normal m-2 rounded-md z-10;
}
.fade-enter,
.fade-enter-active,
.fade-enter-to,
.fade-leave,
.fade-leave-active,
.fade-leave-to {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-enter-active,
.fade-enter-to,
.fade-leave,
.fade-leave-active,
.fade-leave-to {
  opacity: 0;
}
</style>
