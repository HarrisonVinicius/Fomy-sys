<template lang="pug">
    v-navigation-drawer(
      v-model="drawer"
      permanent
      fixed
      style="margin-top: 65px; width: 18%;")
    
      v-toolbar(flat class="transparent")
        v-list(class="pa-0")
          v-list-tile
            v-list-tile-avatar
              img(src="https://randomuser.me/api/portraits/men/85.jpg")
    
            v-list-tile-content
              v-list-tile-title
                //- span.title {{this.seller.info.name}}
            

      v-list(class="pt-0" dense)
        v-divider
        br
        v-list-tile(
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
          style="margin-bottom: 15px;"
          )
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title 
              span.title {{ item.title }}
        v-list-tile(
          @click="logout()"
          style="margin-bottom: 15px;"
          )
          v-list-tile-action
            v-icon exit_to_app
          v-list-tile-content
            v-list-tile-title 
              span.title Sair da Conta
        
</template>

<script>
  import { mapActions , mapState } from 'vuex'
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard', route:'/' },
          { title: 'Cárdapio', icon: 'menu', route:'/menu' },
          { title: 'Informações do Estabelecimento', icon: 'info', route:'/about' },
          { title: 'Horários', icon: 'timer', route:'/schedule' },
          { title: 'Editar entregas', icon: 'map', route:'/delivery' },  
        ],
        right: null
      }
    },

    methods: {
      logout() {
        this.setAuth(false)
        this.$router.push('/login')
      },

      ...mapActions(['setAuth']) 
    },

    computed: {
      ...mapState(['seller'])
    }
  }
</script>
