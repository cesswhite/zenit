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
          <button ref="shape_button" @click.prevent="verifyShape(shape, index)">
            <img width="80" height="80" :src="`/${shape}.svg`" alt="">
          </button>
        </template>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const shape_button = ref<HTMLButtonElement>();
const randomNum = ref(0);
const shapes = ['triangulo', 'rectangulo', 'circulo', 'estrella']

const emit = defineEmits(['getShape'])

onMounted(() => {
  randomNum.value = Math.floor(Math.random() * 3)
})

function verifyShape(shape: string, index: any) {
  if (shape === shapes[randomNum.value]) {
    emit('getShape', shape)
  } else {
    console.log('Not shape', shape_button.value, index)
  }
}
</script>