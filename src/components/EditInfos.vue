<template lang="pug">
  v-layout(row justify-center)
    v-dialog(v-model="dialogEditInfos" persistent max-width="600px")
      v-card
        v-card-title
          span(class="headline") EDITAR INFORMAÇÕES 
        
        v-card-text
          v-container(grid-list-md)
              form(action="")
                v-text-field(label="Slug" v-model="vendorSlug")
                v-text-field(label="Nome" v-model="vendorName")
                v-text-field(
                v-model="vendorMail"
                label="E-mail"
                required)
                
                v-text-field(
                v-model="vendorPhone"
                label="Telefone (Whatsapp)"
                required)
                
                v-text-field(label="Bairro" v-model="vendorRegion")
                v-text-field(label="Cidade" v-model="vendorCity")
                v-text-field(label="Estado" v-model="vendorState")
                
        v-card-actions
          v-spacer
          v-btn(color="blue darken-1" flat @click="closeEditInfos()") Voltar
          v-btn(color="blue darken-1" flat @click="editInfo()") Salvar
</template>

<script>
import { mapActions , mapState } from 'vuex'

export default {
    data () {
        return {
            PhoneRules: '',
            emailRules: '',
            dialog: false,
            dialogEditInfos: false,
            vendorSlug: '',
            vendorName: '',
            vendorMail: '',
            vendorPhone: '',
            vendorRegion: '',
            vendorCity: '',
            vendorState: ''
        }
    },

    methods: {
        closeEditInfos() {
            this.dialogEditInfos = false
        },

        editInfo() {
            const formData = {
            slug: this.vendorSlug,
            name: this.vendorName,
            email: this.vendorMail,
            telefone: this.vendorPhone,
            }
            const formData2 = {
            bairro: this.vendorRegion,
            cidade: this.vendorCity,
            estado: this.vendorState
            }
            console.log(formData)
            console.log(formData2)
            this.setVendorProfile(formData)
            this.setVendorAddress(formData2)
            this.dialogEditInfos = false
        },
        
        ...mapActions(['setVendorProfile' , 'setVendorAddress'])
    },

    computed: {
      ...mapState(["vendor"])
    },

    mounted() {
      this.vendorSlug = this.vendor.profile.slug
      this.vendorName = this.vendor.profile.name
      this.vendorMail = this.vendor.profile.email
      this.vendorPhone = this.vendor.profile.telefone
      this.vendorAddress = this.vendor.profile.address
    }
}
</script>
