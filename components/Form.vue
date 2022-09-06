<template>
  <div class="h-auto w-full relative">
    <form @submit.prevent="validateForm">
      <div class="mt-6 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div class="col-span-2  relative md:col-span-1">
          <div class="w-full relative">
            <img class="h-full px-2 w-8 absolute" src="/nombre.svg">
            <div class="relative">
              <input v-model="name" name="name" type="text"
                class="bg-transparent border-[#272727] placeholder-transparent w-full py-1 pl-8 text-gray-50 z-2 peer relative new-border-gray b-2 focus:outline-none"
                placeholder="Escriba aquí" />
              <label for="name" class="text-sm text-[#CCCCCC] transition-all -top-5 left-8 absolute"
                peer-placeholder-shown="text-base text-[#808080] top-2" peer-focus="text-sm -top-5 text-[#CCCCCC]">
                Nombre *</label>
            </div>
          </div>
        </div>
        <div class="col-span-2 relative md:col-span-1">
          <div class="w-full relative">
            <img class="h-full px-2 w-8 absolute" src="/email.svg">
            <div class="relative">
              <input v-model="email" name="email" type="email"
                class="bg-transparent border-[#272727] placeholder-transparent w-full py-1 pl-8 text-gray-50 z-2 peer relative new-border-gray b-2 focus:outline-none"
                placeholder="Escriba aquí" />
              <label for="email" class="text-sm text-[#CCCCCC] transition-all -top-5 left-8 absolute"
                peer-placeholder-shown="text-base text-[#808080] top-2" peer-focus="text-sm -top-5 text-[#CCCCCC]">
                E-mail *</label>
            </div>
          </div>
        </div>
        <div class="col-span-2 relative md:col-span-1">
          <div class="w-full relative">
            <img class="h-full px-2 w-8 absolute" src="/phone.svg">
            <div class="relative">
              <input v-model="phone" minlength="1" maxlength="10" name="phone" type="tel"
                class="bg-transparent border-[#272727] placeholder-transparent w-full py-1 pl-8 text-gray-50 z-2 peer relative new-border-gray b-2 focus:outline-none"
                placeholder="Escriba aquí" />
              <label for="phone" class="text-sm text-[#CCCCCC] transition-all -top-5 left-8 absolute"
                peer-placeholder-shown="text-base text-[#808080] top-2" peer-focus="text-sm -top-5 text-[#CCCCCC]">
                Teléfono *</label>
            </div>
          </div>
        </div>
        <div class="col-span-2 relative md:col-span-1">
          <div class="w-full relative">
            <img class="h-full px-2 w-8 absolute" src="/direccion.svg">
            <div class="relative">
              <input v-model="address" name="address" type="text"
                class="bg-transparent border-[#272727] placeholder-transparent w-full py-1 pl-8 text-gray-50 z-2 peer relative new-border-gray b-2 focus:outline-none"
                placeholder="Escriba aquí" />
              <label for="address" class="text-sm text-[#CCCCCC] transition-all -top-5 left-8 absolute"
                peer-placeholder-shown="text-base text-[#808080] top-2" peer-focus="text-sm -top-5 text-[#CCCCCC]">
                Dirección</label>
            </div>
          </div>
        </div>
        <div class="col-span-2 relative md:col-span-1">
          <div class="w-full relative">
            <img class="h-full px-2 w-8 absolute" src="/asunto.svg">
            <div class="relative">
              <input v-model="asunto" name="asunto" type="text"
                class="bg-transparent border-[#272727] placeholder-transparent w-full py-1 pl-8 text-gray-50 z-2 peer relative new-border-gray b-2 focus:outline-none"
                placeholder="Escriba aquí" />
              <label for="asunto" class="text-sm text-[#CCCCCC] transition-all -top-5 left-8 absolute"
                peer-placeholder-shown="text-base text-[#808080] top-2" peer-focus="text-sm -top-5 text-[#CCCCCC]">
                Asunto</label>
            </div>
          </div>
        </div>
        <div class="col-span-2 hidden relative items-center md:flex md:col-span-1">
          <span class="text-sm text-[#808080]">
            * <span class="ml-4 inline">Campos obligatorios</span>
          </span>
        </div>
      </div>
      <div class="flex flex-col mt-4 col-span-2 relative">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img class="h-full px-2 w-8" src="/comentarios.svg">
            <label class="text-base text-[#808080]">
              Comentarios
            </label>
          </div>
          <div class="col-span-2 inline relative items-center md:col-span-1 md:hidden">
            <span class="text-sm text-[#808080]">
              * <span class="ml-4 inline">Campos obligatorios</span>
            </span>
          </div>
        </div>
        <textarea v-model="comments" rows="5"
          class="bg-transparent border-[#272727] placeholder-transparent mt-2 w-full py-1 px-2 text-gray-50 z-2 peer relative new-border-gray b-2 focus:outline-none"
          placeholder="Escriba aquí" />
        <div class="mt-4">
          <Captcha @getShape="selectShape" />
        </div>

      </div>
      <div class="w-full px-8 -bottom-16 left-0 absolute">
        <button
          class="rounded-md font-semibold bg-[#559384] text-base w-full py-6 text-gray-50 items-center justify-center">
          Enviar
        </button>
      </div>
    </form>
    <Modal v-if="showModal" @close="closeModal" @done="doneModal">
      <div v-if="sendData">
        <span class="w-full inline-block">Nombre: {{ name }}</span>
        <span class="w-full inline-block">Teléfono: {{ phone }}</span>
        <span class="w-full inline-block">Email: {{ email }}</span>
        <span class="w-full inline-block">Dirección: {{ address || 'Campo vacío' }}</span>
        <span class="w-full inline-block">Asunto: {{ asunto || 'Campo vacío' }}</span>
        <span class="w-full inline-block">Comentarios: {{ asunto || 'Campo vacío' }}</span>
      </div>
      <div class="text-center" v-else>
        Datos enviados :)
      </div>
    </Modal>
  </div>
</template>

<script setup>
const sendData = ref(true)
const showModal = ref(false)
const selectedShape = ref('');
const name = ref('');
const email = ref('');
const phone = ref('');
const asunto = ref('');
const address = ref('');
const comments = ref('');
const emailRegex =
  new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

function selectShape (value) {
  selectedShape.value = value
}
function closeModal () {
  showModal.value = false
}

function doneModal () {
  sendData.value = false
  setTimeout(() => {
    showModal.value = false
  }, "3000")
  name.value = ''
  email.value = ''
  phone.value = ''
  asunto.value = ''
  address.value = ''
  comments.value = ''
}

function validateForm () {
  const isValidEmail = emailRegex.test(email.value)
  if (!name.value || !email.value || !phone.value) {
    alert('Por favor, llena los campos requeridos')
  }
  if (!isValidEmail) {
    alert('Email, no valido')
    return
  }
  if (phone.value.length > 10) {
    alert('Teléfono incorrecto')
    return
  }
  showModal.value = true
}
</script>
