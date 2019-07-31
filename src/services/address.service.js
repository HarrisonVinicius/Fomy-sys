import axios from 'axios'

export const AddressService = {

  create: function(api, data){
    return axios
      .post(`${api.base}/addresses`, data, api.config)
      .then(response => response)
      .catch(error => { console.log(error); return false })
  },

  read: function(api, id){
    return axios
      .get(`${api.base}/addresses/${id}`, api.config)
      .then(response => response)
      .catch(error => { console.log(error); return false })
  },

  destroy: function(api, id){
    return axios
      .delete(`${api.base}/addresses/${id}`, api.config)
      .then(response => response)
      .catch(error => { console.log(error); return false })
  }

}
