export const OrderModule = {

  state: {
    store: null,
    items: [],
    payment: {},
    delivery: { fee: 0, address: null }
  },

  mutations: {
    STORE_SET: (state, id) => { state.store = id },
    PAYMENT_SET: (state, payload) => { state.payment = payload },
    DELIVERY_SET: (state, payload) => { state.delivery = payload },
    ITEMS_INSERT: (state, payload) => { state.items.push(payload) },
    ITEMS_REMOVE: (state, payload) => { state.items.splice(state.items.indexOf(payload), 1) },
  },

  actions: {
    setStore: ({ commit }, id) => { commit("STORE_SET", id) },
    setPayment: ({ commit }, payload) => { commit("PAYMENT_SET", payload) },
    setDelivery: ({ commit }, payload) => { commit("DELIVERY_SET", payload) },
    insertItem: ({ commit }, payload) => { commit("ITEMS_INSERT", payload) },
    removeItem: ({ commit }, payload) => { commit("ITEMS_REMOVE", payload) },
  },

  getters: {
    orderItems(state) {
      let items = parseInt(0)
      state.items.forEach(item => { items += item.amount })
      return items
    },
    orderSubtotal(state) {
      let total = parseFloat(0.0)
      state.items.forEach(item => {
        if (item.sale > 0) total += item.sale * item.amount
        else total += item.price * item.amount
      })
      return parseFloat(total)
    },
    orderTotal(state, getters) {
      return parseFloat(getters.orderSubtotal + state.delivery.fee)
    }
  }

}
