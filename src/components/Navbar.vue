<template>
    <div>
        <v-toolbar fixed dark color="pink darken-1">
            <!-- <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon> -->

            <v-toolbar-title class="white--text">Fomy</v-toolbar-title>

            <v-spacer></v-spacer>
<!-- 
            <v-btn icon>
            <v-icon>search</v-icon>
            </v-btn> -->
<!-- 
            <v-btn flat="">
                <span> Login </span>
            </v-btn> -->

            <!-- <v-btn icon>
            <v-icon>refresh</v-icon>
            </v-btn> -->

            <!-- <v-btn icon>
            <v-icon>more_vert</v-icon>
            </v-btn> -->
        </v-toolbar>
        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
            <v-list class="pa-1">
                <v-list-tile avatar>
                <v-list-tile-content>
                    <v-list-tile-title>MENU</v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <hr>
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
    </div>
</template>

<script>
export default {
    data(){
        return {
           drawer: null,
           items: [
            { title: 'Home', icon: 'dashboard', route:'/'},
            { title: 'About', icon: 'question_answer', route:'/About' },
            { title: 'Logout', icon: 'exit_to_app', route:'/login'}
            ] 
        }
    }
}
</script>
