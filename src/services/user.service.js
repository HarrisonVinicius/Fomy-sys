import axios from 'axios'

export const UserService = {

  read: function (api) {
    return axios
      .get(`${api.base}/me`, api.config)
      .then(response => response)
      .catch(error => { console.log(error); return false })
  },

  update: function (api, data) {
    return axios
      .put(`${api.base}/me`, data, api.config)
      .then(response => response)
      .catch(error => { console.log(error); return false })
  }

}
