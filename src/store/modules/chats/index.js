const state = {
  /* eslint-disable */
  messages: [] // => [{name: 'John Doe', message: 'Your Mom'}]
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