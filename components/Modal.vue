<template>
  <div class="flex h-screen bg-dark-900/90 w-full top-0 left-0 z-3 fixed items-center justify-center">
    <div class="rounded-lg bg-gray-300 p-2">
      <div class="rounded-md bg-gray-50 py-2 px-12">
        <h1 class="text-xl text-center text-red-500">Alerta</h1>
        <p class="text-sm text-center text-gray-500">
          ¿Está seguro que los datos capturados son los correctos?
        </p>
        <div class="mt-2 text-gray-600">
          <slot />
        </div>
        <div class="flex mt-4 gap-8">
          <button @click="closeModal"
            class="rounded-md font-semibold bg-[#95434C] text-sm w-full py-1 text-gray-50">Cancelar</button>
          <button @click="doneModal"
            class="rounded-md font-semibold bg-[#64A3A9] text-sm w-full py-1 text-gray-50">Aceptar</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const emit = defineEmits(['close', 'done'])
function closeModal() {
  emit('close', false)
}
function doneModal() {
  emit('done', true)
}
</script>