import Vue from 'vue'
import Vuex from 'vuex'

import { AuthModule } from './auth.module'
import { UserModule } from './user.module'
import { UIUXModule } from './uiux.module'
import { OrderModule } from './order.module'
import { VendorModule } from './vendor.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    auth: AuthModule,
    uiux: UIUXModule,
    user: UserModule,
    order: OrderModule,
    vendor: VendorModule,
  }
})
