<template lang="pug">
  v-layout(row justify-center)
    v-dialog(v-model="dialogEditInfos" persistent max-width="600px")
      v-card
        v-card-title
          span(class="headline") EDITAR INFORMAÇÕES 
        
        v-card-text
          v-container(grid-list-md)
              form(action="")
                v-text-field(label="Slug" v-model="sellerSlug")
                v-text-field(label="Nome" v-model="sellerName")
                v-text-field(
                v-model="sellerMail"
                label="E-mail"
                required)
                
                v-text-field(
                v-model="sellerPhone"
                label="Telefone (Whatsapp)"
                required)
                
                v-textarea(
                v-model="sellerAddress"
                name="input-7-1"
                label="Endereço"
                value="")
                
        v-card-actions
          v-spacer
          v-btn(color="blue darken-1" flat @click="closeEditInfos()") Voltar
          v-btn(color="blue darken-1" flat @click="editInfo()") Salvar
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data () {
        return {
            PhoneRules: '',
            emailRules: '',
            dialog: false,
            dialogEditInfos: false,
            sellerSlug: '',
            sellerName: '',
            sellerMail: '',
            sellerPhone: '',
            sellerAddress: '',
        }
    },

    methods: {
        closeEditInfos() {
            this.dialogEditInfos = false
        },

        editInfo() {
            const formData = {
            slug: this.sellerSlug,
            name: this.sellerName,
            email: this.sellerMail,
            whatsapp: this.sellerPhone,
            address: this.sellerAddress
            }
            console.log(formData)
            this.setSellerSlug(formData.slug)
            this.setSellerName(formData.name)
            this.setSellerEmail(formData.email)
            this.setSellerWhatsapp(formData.whatsapp)
            this.setSellerAddress(formData.address)
            this.dialogEditInfos = false
        },
        
        ...mapActions(['setSellerSlug', 'setSellerName', 'setSellerEmail', 'setSellerWhatsapp', 'setSellerLogo', 'setSellerBanner', 'setSellerAddress'])
    }

}
</script>
