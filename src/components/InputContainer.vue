<template>
  <div class="w-full bg-neutral-200">
    <form @submit.prevent="sendMessageHandler" class="flex p-2 gap-3 h-full">
      <input
        v-model="name"
        class="flex-grow-[2] indent-4"
        type="text"
        placeholder="Name"
      />
      <input
        v-model="content"
        class="flex-grow-[6] indent-4"
        type="text"
        placeholder="Message"
      />
      <button
        class="flex-grow-1 bg-green-600 p-1 px-3 text-white rounded-md active:bg-green-800 disabled:bg-green-300 disabled:cursor-not-allowed"
        type="submit"
        @click="sendMessageHandler"
        :disabled="isEmptyOrWhiteSpaces(name) || isEmptyOrWhiteSpaces(content)"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data: function () {
    return {
      name: "",
      content: "",
    };
  },
  methods: {
    ...mapMutations({sendMessage: "chats/pushMessage"}),
    sendMessageHandler() {
      const newMsg = {
        name: this.name,
        content: this.content
      }
      this.sendMessage(newMsg)
      
      this.$socket.send(JSON.stringify(newMsg))

      this.name = ""
      this.content = ""
    },
    isEmptyOrWhiteSpaces(str) {
      let pattern = /^\s+$/g;
      return pattern.test(str) || str == '';
    },
  },
};
</script>

<style>
</style>