import { VendorService } from '@/services/vendor.service'

export const VendorModule = {

  state: {
    address: {},
    catalog: [],
    payment: {},
    profile: {},
    wshifts: [],
  },

  mutations: {

    SET_VENDOR_PROFILE: (state, payload) => { state.profile = payload },
    SET_VENDOR_CATALOG: (state, payload) => { state.catalog.push(payload)},
    SET_VENDOR_ADDRESS: (state, payload) => { state.address = payload },
    SET_VENDOR_PAYMENT: (state, payload) => { state.payment = payload },
    SET_VENDOR_WSHIFTS: (state, payload) => { state.wshifts = payload },

  },

  actions: {
    
    createCategory: ({ commit }, payload) => { commit("SET_VENDOR_CATALOG", payload) },

    setVendorProfile: ({ commit }, payload) => { commit("SET_VENDOR_PROFILE", payload) },
    setVendorAddress: ({ commit }, payload) => { commit("SET_VENDOR_ADDRESS", payload) },
    

    async getVendors({ commit, getters }) {
      const response = await VendorService.getSellersList(getters.credentials)
      if (!response) return
      if (response.status === 200) commit("SET_VENDORS_LIST", response.data)
      return response.status
    },

    async getVendorProfile({ commit, getters }, slug) {
      const response = await VendorService.getSellerInfo(getters.credentials, slug)
      if (!response) return
      if (response.status === 200)
        commit("SET_VENDOR_PROFILE", response.data)
      return response.status
    },

    async getVendorCatalog({ commit, getters }, id) {
      const response = await VendorService.getSellerCatalog(getters.credentials, id)
      if (!response) return
      if (response.status === 200)
        commit("SET_VENDOR_CATALOG", response.data)
      return response.status
    },

  }

}
