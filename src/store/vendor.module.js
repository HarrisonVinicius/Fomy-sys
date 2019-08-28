import { VendorService } from '@/services/vendor.service'

export const VendorModule = {

  state: {
    address: {},
    catalog: {
      categories:[]
    },
    payment: {},
    profile: {},
    wshifts: [],
    indexEditing: 0
  },

  mutations: {
    SET_INDEX: (state, payload) => { state.indexEditing = payload },

    SET_VENDOR_PROFILE: (state, payload) => { state.profile = payload },
    SET_VENDOR_CATALOG: (state, payload) => { 
      if(state.catalog.categories){
        state.catalog.categories = [payload , ...state.catalog.categories]
      }else{
        state.catalog.categories = [payload]
      } 
    },
    SET_VENDOR_ITEM: (state, payload) => {
      console.log(payload)
      if(state.catalog.categories[state.indexEditing].items){
        state.catalog.categories[state.indexEditing].items = [payload , ...state.catalog.categories[state.indexEditing].items]
      }else{
        state.catalog.categories[state.indexEditing].items = [payload]
      } 
     },
    SET_VENDOR_ADDRESS: (state, payload) => { state.address = payload },
    SET_VENDOR_PAYMENT: (state, payload) => { state.payment = payload },
    SET_VENDOR_WSHIFTS: (state, payload) => { state.wshifts = payload },

  },

  actions: {
    setIndex: ({ commit }, payload) => { commit("SET_INDEX", payload) },
    
    createCategory: ({ commit }, payload) => { commit("SET_VENDOR_CATALOG", payload) },
    createItemCategory: ({ commit }, payload) => { commit("SET_VENDOR_ITEM", payload) },

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
