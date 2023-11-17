<template>
  <div class="w-full bg-neutral-100 flex p-2 gap-3">
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
      @click="sendMessageHandler"
      :disabled="isEmptyOrWhiteSpaces(name) || isEmptyOrWhiteSpaces(content)"
    >
      Send
    </button>
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
      this.sendMessage({
        name: this.name,
        content: this.content
      })

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