<template>
    <div class="background">
        <v-container>
            <v-layout style="padding-top: 15%; display: flex; justify-content: center;">
                <v-flex xs12 sm4>
                    <v-card>
                            <!-- <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                            aspect-ratio="2.75"
                            ></v-img> -->

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Entrar na conta</h3>
                            </div>
                        </v-card-title>
                        <v-card-text>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                                ></v-text-field>

                                <v-text-field
                                v-model="password"
                                :rules="passRules"
                                label="Senha"
                                required
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                            :disabled="!valid"
                            color="pink darken-1"
                            flat
                            @click="validate"
                            >
                                Login
                            </v-btn>
                            <v-btn flat color="orange">Esqueci minha senha</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      password: '',
      passRules: [
        v => !!v || 'Pass is required',
        // v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }),

    methods: {
        validate () {
            if (this.$refs.form.validate()) {
                this.snackbar = true
                this.$router.push('/')
                // this.loginUser()
            }
        },
    
        // loginUser() {
        //     console.log("passou por aqui")
        //     this.postUserData()
        // },  
        
        // async postUserData () {
        //     await axios.post(`api`, {
        //         usermail: this.email,
        //         userpass: this.password
        //     })
        //     .then(response => {
        //         if( response.status === 200 ) {
        //         let user = response.data
        //         // localStorage.setItem('user', JSON.stringify(user))
        //         // this.userData(user)
        //         // this.setAuth(true)
        //         this.$router.push('/')
        //         } else {
                
        //         // if(response.data.usermail){
        //         //   this.error_email = response.data.usermail
        //         // }

        //         // if(response.data.userpass){
        //         //   this.error_pass = response.data.userpass
        //         // }
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     },
    }
  }
</script>

<style>
    .background{
        background-image: url(../assets/images.jpeg);
        background-size: cover;
    }
</style>
