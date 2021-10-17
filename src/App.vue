<template>
  <Alert></Alert>
  <!-- <toogle-dark-mode></toogle-dark-mode> -->
  <div class="container p-5 mx-auto 2xl:px-10 2xl:p-0">
    <h1 class="mt-5 text-xl font-bold text-center dark:text-white">
      Artisan Command Generator
    </h1>

    <router-view></router-view>
    <result />
  </div>
</template>

<script setup>
import Alert from "./components/reutilisable/Alert.vue";
import Result from "./components/Result.vue";
</script>

<style>
[data-title]:hover:after {
  opacity: 1;
  transition: all 0.1s ease 0.5s;
  visibility: visible;
}
[data-title]:after {
  content: attr(data-title);
  background-color: #ffffff;
  color: rgb(39, 37, 37);
  font-size: 1em;
  position: absolute;
  padding: 1px 5px 2px 5px;
  bottom: -1.6em;
  left: 100%;
  white-space: nowrap;
  box-shadow: 1px 1px 3px #222222;
  opacity: 0;
  border: 1px solid #111111;
  z-index: 99999;
  visibility: hidden;
  border-radius: 0.2em;
}
[data-title] {
  position: relative;
  cursor: pointer;
}
</style>
