<template lang="pug">
  v-layout(style="margin-top: 8vh; height: 92%;")
    v-flex(xs12)
      v-stepper(v-model="e1" style="width: 100%; height: 100%;")
        v-stepper-header
          v-stepper-step(:complete="e1 > 1" step="1" color="success") Bem Vindo ao Fomy
          v-divider
          v-stepper-step(:complete="e1 > 2" step="2" color="success") Informações Obrigatórias
          v-divider
          v-stepper-step(:complete="e1 > 3" step="3" color="success") Informações Adicionais
          v-divider
          v-stepper-step(step="4" color="success") Detalhes
        br
        v-stepper-items
          v-stepper-content(step="1" height="40vh")
            v-card.mb-5(height="40vh")
              div(style="height: 140px; background-color: LightGray;")
              v-card-title(primary-title="")
                div
                  h3.headline.mb-0 Bem vindo ao Fomy!
                  br
                  div  {{ card_text }} 
            v-btn(dark color="black" @click="e1 = 2")
              | Continuar
            v-btn(flat="" router to="/login") Voltar
          v-stepper-content(step="2" height="40vh")
            v-container
              v-card.mb-5(height="40vh" flat)
                v-card-title(primary-title="" style="margin-left: -15px;")
                  div
                    h3.headline.mb-0 Vamos começar!
                    br
                    div  Primeiro preencha as informações corretamente abaixo
                br
                v-form(
                ref="form"
                v-model="valid"
                lazy-validation)
                
                    v-text-field(
                    solo
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required)
                    
                    v-text-field(
                    solo
                    v-model="password"
                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Senha"
                    hint="Possui 8 characters"
                    counter
                    @click:append="show1 = !show1")

                    v-text-field(
                    solo
                    v-model="password2"
                    :append-icon="show2 ? 'visibility' : 'visibility_off'"
                    :rules="[password2rules.required, password2rules.min]"
                    :type="show2 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Confirmar Senha"
                    hint="Possui 8 characters"
                    counter
                    @click:append="show2 = !show2")
              br
              v-btn(:loading="loading" color="black" dark @click="validate" style="margin-left: -1px;")
                | Continuar
              v-btn(flat="" @click="e1 = 1") Voltar
          
          v-stepper-content(step="3" height="58vh")
              v-container
                v-card.mb-5(height="58vh" flat style="margin-top: -45px;")
                  v-card-title(primary-title="" style="margin-left: -15px;")
                    div
                      h3.headline.mb-0 Quase lá!
                      br
                      div  Agora preencha os dados abaixo para finalizar o seu cadastro
                  br
                  v-form(
                  ref="form2"
                  v-model="valid"
                  lazy-validation)
                  
                      v-text-field(
                      solo
                      v-model="name"
                      :rules="nameRules"
                      label="Nome do Estabelecimento"
                      required)
                      
                      v-text-field(
                      solo
                      v-model="phone"
                      :rules="phoneRules"
                      prefix="55"
                      label="Telefone(Whatsapp) do Estabelecimento"
                      required)

                      v-select(:items="items" label="Estado do Estabelecimento" solo="")

                      v-text-field(
                      solo
                      v-model="city"
                      :rules="cityRules"
                      label="Cidade do Estabelecimento"
                      required)
                      
                      v-text-field(
                      solo
                      v-model="region"
                      :rules="regionRules"
                      label="Bairro do Estabelecimento"
                      required)
                      //- v-text-field(
                      //- v-model="address"
                      //- :rules="addressRules"
                      //- label="Endereço do Estabelecimento"
                      //- required)
                br
                v-btn(:loading="loading2" color="black" dark @click="validate2" style="margin-left: -1px;")
                  | Continuar
                v-btn(flat="" @click="e1 = 4") Pular etapa
                v-btn(flat="" @click="e1 = 2") Voltar
          
          v-stepper-content(step="4")
            v-container
              v-card.mb-5(height="40vh" flat)
                v-card-title(primary-title="" style="margin-left: -15px;")
                  div
                    h3.headline.mb-0 Ultima Etapa!
                    br
                    div  Preencha os ultimos detalhes para finalizar o cadastro
                br
                v-form(
                ref="form3"
                v-model="valid"
                lazy-validation)
                
                    v-text-field(
                    solo
                    v-model="slug"
                    :rules="slugRules"
                    label="Slug do Estabelecimento"
                    required)

                    v-textarea(v-model="details" solo="" name="input-7-4" label="Descrição do Estabelecimento" required)

              br
              v-btn(:loading="loading3" color="black" dark @click="validate3" style="margin-left: -1px;")
                | Continuar
              v-btn(flat="" router to="/") Pular Etapa e Continuar
              v-btn(flat="" @click="e1 = 3") Voltar


</template>

<script>
import axios from "axios";
import api from "@/config/api.json";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      items: ["RN", "RJ", "SP", "RS"],
      name: "",
      city: "",
      cityRules: [v => !!v || "Insira a cidade"],
      region: "",
      regionRules: [v => !!v || "Insira o bairro"],
      slug: "",
      slugRules: [v => !!v || "Insira o Slug"],
      details: "",
      nameRules: [v => !!v || "Insira o Nome"],
      phone: "",
      phoneRules: [
        v => !!v || "Insira o Numero",
        v => v.length == 11 || "Numero Inválido"
      ],
      // address: '',
      // addressRules: [
      // v => !!v || 'Insira o Endereço',
      // ],
      email: "",
      emailRules: [
        v => !!v || "Insira o Email",
        v => /.+@.+/.test(v) || "Email precisa ser válido"
      ],
      password: "",
      rules: {
        required: value => !!value || "Insira uma senha.",
        min: v => v.length >= 8 || "Min 8 characters"
      },
      password2: "",
      password2rules: {
        required: value => !!value || "Insira uma senha.",
        min: v => v.length >= 8 || "Min 8 characters"
      },
      loading: false,
      loading2: false,
      loading3: false,
      show1: false,
      show2: false,
      valid: true,
      e1: 0,
      card_text:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat. Para iniciar o Cadastro clique em Continuar"
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        let vendor = {
          email: this.email,
          senha: this.password2
        };
        this.loading = true;
        this.setVendorProfile(vendor);
        this.snackbar = true;
        localStorage.setItem("user", JSON.stringify(vendor));
        this.setAuth(true);
        this.e1 = 3;
        if (this.setAuth) {
          this.loading = false;
        }
        // this.$router.push("/");
        // this.postUserData()
      }
    },

    /*
     *
     */

    validate2() {
      if (this.$refs.form2.validate()) {
        let vendor = {
          nome: this.name,
          telefone: this.phone,
          cidade: this.city,
          bairro: this.region
        };
        this.loading2 = true;
        this.setVendorProfile(vendor);
        this.snackbar = true;
        localStorage.setItem("user", JSON.stringify(vendor));
        this.setAuth(true);
        this.e1 = 4;
        if (this.setAuth) {
          this.loading2 = false;
        }
        // this.$router.push("/");
        // this.postUserData()
      }
    },

    /*
     *
     */

    validate3() {
      if (this.$refs.form3.validate()) {
        let vendor = {
          slug: this.slug,
          detalhes: this.details
        };
        this.loading3 = true;
        this.setVendorProfile(vendor);
        this.snackbar = true;
        localStorage.setItem("user", JSON.stringify(vendor));
        this.setAuth(true);
        if (this.setAuth) {
          this.loading3 = false;
        }
        this.$router.push("/");
        // this.postUserData()
      }
    },

    /*
     *
     */

    ...mapActions(["setVendorProfile", "setAuth"])

    /*
     *
     */

    // async postUserData () {
    //     await axios.post(`${api.apiUrl}/conta`, {
    //         email: this.email,
    //         password: this.password,
    //         register_type: 'client'
    //     })
    //     .then(response => {
    //         console.log(response)
    //         if( response.status === 200 ) {
    //             // let id = response.data.object
    //             // this.setUserId(id)
    //             this.$router.push('/')
    //             console.log(response.data)
    //         }
    //     })
    //     .catch(error => {
    //         console.log("deu merda")
    //         console.log(error)
    //         // this.error_name = true
    //         // this.error_email = true
    //         // this.error_phone = true
    //         // this.error_pass = true
    //     })
    // },

    /*
     *
     */
  }
};
</script>
