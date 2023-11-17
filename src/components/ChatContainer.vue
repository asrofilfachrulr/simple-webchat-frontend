<template>
  <div class="pt-10 px-1 w-full max-w-[1000px] mx-auto">
    <ul class="list-disc">
      <li v-for="(msg, i) in messages" :key="i">
      <span class="font-extrabold">{{ msg.name }}:</span> {{ msg.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data: function() {
    return {
      dummyMsg: []
    }
  },
  computed: {
    ...mapGetters(
      {messages: 'chats/getMessages'},
    )
  }
}
</script>