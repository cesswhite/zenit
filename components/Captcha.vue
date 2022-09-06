<template>
  <div class="pb-8">
    <h1 class="text-[#808080]">CAPTCHA</h1>
    <div class="flex flex-col gap-4 items-center md:flex-row">
      <p class="mt-4 text-base text-[#808080] md:m-0">Selecciona la figura que corresponde a un
        <span class="font-bold text-gray-50">
          {{ shapes[randomNum] }}
        </span>
      </p>
      <div class="flex gap-2">
        <template v-for="shape, index in shapes" :key="index">
          <button class="rounded-lg px-2 hover:bg-dark-100" @click.prevent="verifyShape(shape, index, $event)">
            <img width="80" height="80" class="rounded-md" :src="`/${shape}.svg`" alt="">
          </button>
        </template>
      </div>
    </div>
  </div>
</template>


<script setup>
const randomNum = ref(0);
const shapes = ['triangulo', 'rectangulo', 'circulo', 'estrella']
const emit = defineEmits(['getShape'])
onMounted(() => {
  randomNum.value = Math.floor(Math.random() * 3)
})

function verifyShape (shape, index, event) {
  if (shape === shapes[randomNum.value]) {
    event.target.classList.add('bg-green-500')
    emit('getShape', shape)
  } else {
    event.target.classList.remove('bg-green-500')
  }
}
</script>