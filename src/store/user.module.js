import { UserService } from "@/services/user.service"
import { AddressService } from "@/services/address.service"

export const UserModule = {

  state: {
    profile: {},
    addresses: [],
    favorites: []
  },

  mutations: {
    SET_PROFILE:   (state, payload) => { state.profile   = payload },
    SET_ADDRESSES: (state, payload) => { state.addresses = payload },
    ADD_ADDRESSES: (state, payload) => { state.addresses.push(payload) },
    DEL_ADDRESSES: (state, index)   => { state.addresses.splice(index, 1) },
    SET_FAVORITES: (state, payload) => { state.favorites = payload },
    ADD_FAVORITES: (state, payload) => { state.favorites.push(payload) },
    DEL_FAVORITES: (state, index)   => { state.favorites.splice(index, 1) },
  },

  actions: {

    async getProfile({ commit, getters }) {
      const response = await UserService.read(getters.credentials)
      if (!response) return false
      if (response.status === 200)
        commit("SET_PROFILE", response.data)
      return response.status
    },

    async setProfile({ getters }, data) {
      const response = await UserService.update(getters.credentials, data)
      if (!response) return false
      return response.status
    },

    async getAddresses({ commit, getters }) {
      const response = await AddressService.read(getters.credentials, '')
      if (!response) return false
      if (response.status === 200)
        commit("SET_ADDRESSES", response.data)
      return response.status
    },

    async addAddresses({ getters }, address) {
      const response = await AddressService.create(getters.credentials, address)
      if (!response) return false
      return response.status
    },

    async delAddresses({ commit, getters }, payload) {
      const response = await AddressService.destroy(getters.credentials, payload.id)
      if (!response) return false
      if (response.status === 200)
        commit("DEL_USER_ADDRESS", payload.idx)
      return false
    },

  }

}
