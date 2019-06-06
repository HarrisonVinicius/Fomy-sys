import Vue from 'vue'
import Vuex from 'vuex'
import json from '@/assets/menu.json'
import json2 from '@/assets/infos.json'

Vue.use(Vuex)

export default new Vuex.Store({
  data (){
    return {
      dados: json,
      info_dados: json2
    }
  },

  state: {
    
    auth: {
      authenticated: false,
    },
    
    seller: {
      info: {},
      menu: []
    },
  
  },
  
  mutations: {
    // AUTHENTICATION MUTATIONS
    AUTH_AUTHENTICATE: (state, status) => { state.auth.authenticated = status },


    // INFO MUTATIONS
    SET_SELLER_SLUG (state, slug) { state.seller.info.slug = slug },
    SET_SELLER_NAME (state, name) { state.seller.info.name = name },
    SET_SELLER_EMAIL (state, email) { state.seller.info.email = email },
    SET_SELLER_WHATSAPP: (state, whatsapp) => { state.seller.info.whatsapp = whatsapp },
    SET_SELLER_LOGO: (state, logo) => { state.seller.info.logo = logo },
    SET_SELLER_BANNER: (state, banner) => { state.seller.info.banner = banner },
    SET_SELLER_ADDRESS: (state, address) => { state.seller.info.address = address },
    
    // MENU MUTATIONS
    SET_SELLER_MENU (state, menu) { state.business.menu = menu }, 
  },
  actions: {

    // AUTHENTICATION ACTIONS
    setAuth({commit}, status) { commit('AUTH_AUTHENTICATE', status) },
    
    // MENU ACTIONS
    async getMenu(stallTime = 3000) {
      await new Promise(resolve => setTimeout(resolve, stallTime));
      return json
    },
    
    // INFOS ACTIONS
    setSellerSlug ({commit}, slug) {commit('SET_SELLER_SLUG', slug)},
    setSellerName ({commit}, name) { commit('SET_SELLER_NAME', name) },
    setSellerEmail ({commit}, email) { commit('SET_SELLER_EMAIL', email) },
    setSellerWhatsapp ({commit}, whatsapp) { commit('SET_SELLER_WHATSAPP', whatsapp) },
    setSellerLogo ({commit}, logo) { commit('SET_SELLER_LOGO', logo) },
    setSellerBanner ({commit}, banner) { commit('SET_SELLER_BANNER', banner) },
    setSellerAddress ({commit}, address) { commit('SET_SELLER_ADDRESS', address) },

    async getInfos(stallTime = 3000) {
      await new Promise(resolve => setTimeout(resolve, stallTime));
      return json2
    }

  }
})
