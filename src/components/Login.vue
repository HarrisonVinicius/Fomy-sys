<template lang="pug">    
    div
        v-container
            v-layout(style="padding-top: 15%; display: flex; justify-content: center;")
                v-flex(xs12 sm4)
                    v-card(color="white")
                            //- !-- v-img
                            //- src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                            //- aspect-ratio="2.75"
                            //- /v-img --

                    v-card-title(primary-title)
                        div
                            h3(class="headline mb-0") Entrar na conta
                            
                        
                        v-card-text
                            v-form(
                                ref="form"
                                v-model="valid"
                                lazy-validation)
                            
                                v-text-field(
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required)
                                
                                v-text-field(
                                v-model="password"
                                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Senha"
                                hint="At least 8 characters"
                                counter
                                @click:append="show1 = !show1")
                                
                                <router-link to="/" color="pink darken-1"> Esqueci minha senha </router-link>
                        v-card-actions
                            v-btn(
                            :disabled="!valid"
                            color="pink darken-1"
                            flat
                            @click="validate") Login
                            
                            v-btn(flat color="orange" router to="./register") Cadastrar 
                      
    
</template>

<script>
    import axios from 'axios'
    import api from '@/config/api.json'
    import { mapActions } from 'vuex'
    export default {
        data: () => ({
            show1: false,
            valid: true,
            password: '',
            rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            },
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
                    this.loginUser()
                }
            },
            
            /*
            *
            */            

            loginUser() {
                console.log("passou por aqui")
                let user = {
                    email: this.email,
                    password: this.password,
                    login_type: 'client'
                }
                localStorage.setItem('user', JSON.stringify(user))
                this.setAuth(true)
                this.$router.push('/')
                // this.postUserData()
            },

            /*
            *
            */            
            
            ...mapActions(['setAuth'])   

            // async postUserData () {
            //     await axios.post(`${api.apiUrl}/login`, {
            //         email: this.email,
            //         password: this.password,
            //         login_type: 'client'
            //     })
            //     .then(response => {
            //         if( response.status === 200 ) {
            //             let user = response.data
            //             localStorage.setItem('user', JSON.stringify(user))
            //             // this.userData(user)
            //             // this.setAuth(true)
            //             this.$router.push('/')
            //         } else {
                    
            //             if(response.data.usermail){
            //             this.error_email = response.data.usermail
            //             }

            //             if(response.data.userpass){
            //             this.error_pass = response.data.userpass
            //             }
            //         }
            //     })
            //     .catch(error => {
            //         console.log(error)
            //         this.error_mail = true
            //         this.error_pass = true
            //     })
            // },

            /*
            *
            */              
         
        }
    }
</script>

