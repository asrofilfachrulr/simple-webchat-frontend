<template>
  <main class="w-full h-screen flex flex-col">
    <chat-container :class="'flex-grow-[10]'" />
    <input-container :class="'flex-grow-[1] min-h-[50px] max-h-[60px]'"/>
  </main>
</template>

<script>
import InputContainer from '@/components/InputContainer.vue'
import ChatContainer from '@/components/ChatContainer.vue'

export default {
  components: { InputContainer, ChatContainer },
  
}
</script>

<style>
</style>