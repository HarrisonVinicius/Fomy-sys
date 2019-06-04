<template>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      fixed
      style="margin-top: 65px;"
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Poti</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
        
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard', route:'/' },
          { title: 'Cárdapio', icon: 'menu', route:'/menu' },
          { title: 'Informações do Estabelecimento', icon: 'info', route:'/about' },
          { title: 'Sair da Conta', icon: 'exit_to_app', route:'/login' }, 
        ],
        right: null
      }
    }
  }
</script>