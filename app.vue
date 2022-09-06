<template>
  <div class="h-auto w-full px-2 pb-10 relative md:h-screen">
    <div class="flex h-full mx-auto w-full items-center justify-center md:max-w-screen-md">
      <div class="rounded-lg bg-[#414042] mt-24 w-full p-4 relative md:mt-0">
        <img src="/nit.png" class="top-28 left-[-164.5px] hidden absolute md:flex" width="200" height="600" alt="">
        <div class="w-full top-[-5.6rem] left-0 z-2 absolute inline md:hidden">
          <img src="/nit_responsive.png" class="mx-auto" width="200" height="600" alt="">
        </div>
        <div class="rounded-md bg-[#4B4A4D] w-full p-4">
          <h1 class="font-light text-[#CCCCCC] text-center w-full text-3xl">
            Formulario de Contacto
          </h1>
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const data = ref([
  {
    label: 'Nombre',
    icon: '/nombre.svg',
  },
  {
    label: 'E-mail',
    icon: '/email.svg',
  },
  {
    label: 'Teléfono',
    icon: '/phone.svg',
  },
  {
    label: 'Dirección',
    icon: '/direccion.svg',
  },
  {
    label: 'Asunto',
    icon: '/asunto.svg',
  },

])
</script>



  <!-- peer-not-placeholder-shown="-translate-y-3 scale-75 origin-top-left text-green-500" -->
