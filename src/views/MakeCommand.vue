<template>
  <entity />
  <command-check-box />
  <command-options v-if="$store.getters.getSelectedCommand" />
</template>

<script setup>
import CommandOptions from "@/components/CommandOptions.vue";
import CommandCheckBox from "@/components/CommandCheckBox.vue";
import Entity from "@/components/Entity.vue";
</script>

<style></style>
