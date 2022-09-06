<template>
  <div class="w-full relative">
    <img class="h-full px-2 w-8 absolute" :src="icon">
    <div class="relative">
      <input :name="label" type="text"
        class="bg-transparent border-[#272727] placeholder-transparent w-full py-1 pl-8 text-gray-50 z-2 peer relative new-border-gray b-2 focus:outline-none"
        placeholder="Escriba aquí" />
      <label :for="label" class="text-sm text-[#CCCCCC] transition-all -top-5 left-8 absolute"
        peer-placeholder-shown="text-base text-[#808080] top-2" peer-focus="text-sm -top-5 text-[#CCCCCC]">
        {{label}}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: String,
  label: String
})
</script>
