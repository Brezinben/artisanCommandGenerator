<template>
  <button class="bg-red-700 btn hover:bg-red-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 duration-200 ease-in transform hover:rotate-90"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</template>

<style>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  margin: 0.5rem;

  border-radius: 0.375rem;
  color: #fef;
  transition-duration: 100ms;
}
</style>
