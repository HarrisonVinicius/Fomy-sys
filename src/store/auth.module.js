import { AuthService } from "@/services/auth.service"

export const AuthModule = {

  state: {
    api: 'https://api.fomy.app',
    key: '',
    token: null,
  },

  getters: {
    credentials(state) {
      return {
        base: state.api,
        config: {
          headers: {
            "X-API-KEY": state.key,
            "Authorization": state.token
          }
        }
      }
    },
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem('session', token)
    },
    DEL_TOKEN: (state, token) => {
      state.token = null
      localStorage.removeItem('session')
    },
  },

  actions: {

    async register({ getters }, data) {
      const response = await AuthService.register(getters.credentials, data)
      if (!response) return false
      return response.status
    },

    async login({ commit, getters }, data) {
      const response = await AuthService.login(getters.credentials, data)
      if(!response) return false
      if(response.status === 200)
        commit("SET_TOKEN", response.data.token)
      return response
    },

  },

}
