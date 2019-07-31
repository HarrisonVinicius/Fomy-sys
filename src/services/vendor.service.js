import { api } from './axios'

export const VendorService = {

  getSellersList: function(){
    return api
      .get(`/merchants`)
      .then(response => response)
      .catch(error => { console.log(error.message); return false })
  },

  getSellerInfo: function(slug){
    return api
      .get(`/merchants/${slug}`)
      .then(response => response)
      .catch(error => { console.log(error.response); return false })
  },

  getSellerCatalog: function(id){
    return api
      .get(`/catalog/${id}`)
      .then(response => response)
      .catch(error => { console.log(error.response); return false })
  },

  getProductInfo: function(api, id){
    return api
      .get(`/products/${id}`)
      .then(response => response)
      .catch(error => { console.log(error.response); return false })
  }

}
