import { VendorService } from '@/services/vendor.service'

export const VendorModule = {

  state: {
    list: [],
    selected: {
      reference: null,
      address: {},
      catalog: [],
      payment: {},
      profile: {},
      wshifts: [],
      product: {},
    },
  },

  mutations: {
    SET_VENDORS_LIST: (state, payload) => { state.list = payload },
    SET_VENDOR_PROFILE: (state, payload) => { state.selected.profile = payload },
    SET_VENDOR_CATALOG: (state, payload) => { state.selected.catalog = payload },
    SET_VENDOR_ADDRESS: (state, payload) => { state.selected.address = payload },
    SET_VENDOR_PAYMENT: (state, payload) => { state.selected.payment = payload },
    SET_VENDOR_WSHIFTS: (state, payload) => { state.selected.wshifts = payload },
    SET_VENDOR_PRODUCT: (state, payload) => { state.selected.product = payload },
    SET_VENDOR_REFERENCE: (state, slug) => { state.selected.reference = slug },
  },

  actions: {

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
