const state = {
  /* eslint-disable */
  messages: [
    {
      name: "thomasdarmawan",
      content: "halo guys",
    },
    {
      name: "sabrina",
      content: "selamat siang",
    },
    {
      name: "Rivaldo",
      content: "Mari berusaha menjadi yang terbaik",
    },
  ] // => [{name: 'John Doe', message: 'Your Mom'}]
}

const actions = {

}

const mutations = {
  pushMessage(state, msg) {
    state.messages.push(msg)
  }
}

const getters = {
  getMessages: (state) => {
    return state.messages
  }
}

const namespaced = true

export default {
  namespaced,
  state, 
  actions, 
  mutations, 
  getters,
}