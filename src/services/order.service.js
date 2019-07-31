import axios from 'axios'

export const OrderService = {

  create: function(api, data){
    return axios
      .post(`${api.base}/process-order`, data, api.config)
      .then(response => response)
      .catch(error => { console.log(error); return false })
  },

}
