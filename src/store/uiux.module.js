export const UIUXModule = {

  state: {
    toggle: {
      loading: false,
      sending: false,
      request: false,
    },
    feedback: {
      dialog: { show: false, text: null },
      snackbar: { show: false, text: null },
    },
  },

  mutations: {
    SET_LOADING: (state, value) => { state.toggle.loading = value },
    SET_SENDING: (state, value) => { state.toggle.sending = value },
    SET_REQUEST: (state, value) => { state.toggle.request = value },
    SET_DIALOG: (state, payload) => { state.feedback.dialog = payload },
    SET_SNACKBAR: (state, payload) => { state.feedback.snackbar = payload },
  },

}
