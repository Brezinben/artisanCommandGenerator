<template>
  <entity />
  <command-check-box />
  <command-options v-if="this.$store.getters.getSelectedCommand" />
</template>

<script>
import CommandOptions from "@/components/CommandOptions.vue";
import CommandCheckBox from "@/components/CommandCheckBox.vue";
import Entity from "@/components/Entity.vue";
export default {
  components: { Entity, CommandCheckBox, CommandOptions },
};
</script>

<style></style>
