<template lang="pug">
  v-layout(style="margin-top: 25vh;")
    v-flex(xs12 sm6 offset-sm3)
        v-card
            v-container
                v-card-title(primary-title)
                    div
                        h3(class="headline mb-0" Cadastro no Sistema) 
                    
                v-form(
                ref="form"
                v-model="valid"
                lazy-validation)
                
                    v-text-field(
                    v-model="name"
                    label="Nome do Estabelecimento"
                    required)
                    
                    v-text-field(
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required)

                    v-text-field(
                    v-model="phone"
                    :rules="phoneRules"
                    prefix="55"
                    label="Telefone(Whatsapp) do Estabelecimento"
                    required)

                    v-text-field(
                    v-model="address"
                    label="Endereço do Estabelecimento"
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
                
                v-card-actions
                    v-btn(
                    :disabled="!valid"
                    color="pink darken-1"
                    @click="validate"
                    flat) Cadastrar
                    
                    v-btn(flat color="orange" router to="./login") Voltar

</template>

<script>
    import axios from 'axios'
    import api from '@/config/api.json'
    import { mapActions } from 'vuex'
    
    export default {
        data() {
            return {
                email: '',
                emailRules: [
                v => !!v || 'Insira o Email',
                v => /.+@.+/.test(v) || 'Email precisa ser válido'
                ],
                password: '',
                rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                },
                show1: false,
                valid: true
            }
        },

        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                    this.postUserData()
                }
            },
            
            /*
            *
            */

            async postUserData () {
                await axios.post(`${api.apiUrl}/conta`, {
                    email: this.email,
                    password: this.password,
                    register_type: 'client'
                })
                .then(response => {
                    console.log(response)
                    if( response.status === 200 ) {
                        // let id = response.data.object
                        // this.setUserId(id)
                        this.$router.push('/')
                        console.log(response.data)    
                    }
                })
                .catch(error => {
                    console.log("deu merda")
                    console.log(error)
                    // this.error_name = true
                    // this.error_email = true
                    // this.error_phone = true
                    // this.error_pass = true
                })
            },
            
            /*
            *
            */

            ...mapActions([''])
        }
    }
</script>