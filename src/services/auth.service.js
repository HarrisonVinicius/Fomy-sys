import { api } from "./axios"

export const AuthService = {

  login: function(data) {
    return api
      .post(`/auth/login`, data)
      .then(response => response)
      .catch(error => error.response)
  },

  register: function(data) {
    return api
      .post(`/auth/register`, data)
      .then(response => response)
      .catch(error => error.response)
  }

}
