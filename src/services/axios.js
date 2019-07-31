import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.vendafacil.app',
  headers: {
    "X-API-KEY": 'g48cwscog0gsgsksccg0g08c4cow40co000k44w4',
    "Authorization": localStorage.getItem('session')
  }
})
