<template lang="pug">
    div( class="about")
        SideMenu 
        v-container
            v-layout(row wrap)
                v-flex(xs2)
                v-flex(xs10)
                    br
                    br
                    br
                    h2 Informações Gerais 
                    br
                    h3(style="color: grey;") Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed et culpa molestias! Facilis dolores quae incidunt ipsam dolore reiciendis voluptatibus est vitae, exercitationem, quidem sed iure, ullam tempora numquam laboriosam?
                    br
                    v-divider
                    v-form
                        v-container
                            br
                            v-layout(style="display:flex; justify-content: space-between;")
                                v-flex(
                                xs12
                                md6)
                                
                                    h3 Nome do Estabelecimento 
                                    br
                                    v-layout(row wrap style="display: flex; align-items:center;")
                                        h3(style="color: grey;") {{ this.vendor.profile.name }}
                                    
                                    br
                                    br
                                    h3 Slug do Estabelecimento 
                                    br
                                    v-layout(row wrap style="display: flex; align-items:center;")
                                        h3(style="color: grey;") {{ this.vendor.profile.slug }} 
                                    br
                                    br
                                    h3 Email 
                                    br
                                    v-layout(row wrap style="display: flex; align-items:center;")
                                        h3(style="color: grey;") {{ this.vendor.profile.email }} 
                                    br
                                    br
                                    h3 Telefone (Whatsapp) 
                                    br
                                    v-layout(row wrap style="display: flex; align-items:center;")
                                        h3(style="color: grey;") {{ this.vendor.profile.telefone }} 
                                    
                                    br
                                    br
                                    h3 Endereço 
                                    br
                                    v-layout(row wrap style="display: flex; align-items:center;")
                                        h3(style="color: grey;") {{ this.vendor.profile.address }} 
                                    br
                                   
                                    //- h3 logo 
                                    //- br
                                    //- v-layout(row wrap style="display: flex; align-items:center;")
                                    //-    v-btn(flat)
                                    //-        span escolher foto 
                            v-btn(large block @click="toggleEditInfos()")
                                v-icon edit
                                span Editar Informações 
                                                            
               
            EditInfos(ref="teste") 
       
</template>

<script>
import { mapState } from 'vuex'
import SideMenu from '@/components/SideMenu'
import EditInfos from '@/components/EditInfos'

export default {
    name: 'about',
    
    data () {
        return {     
            vendorName: '',
            vendorMail: '',
            vendorAddress: '',
            vendorPhone: '',
            SelectValue: '',
            }
    },

    components: {
        SideMenu,
        EditInfos
    },

    methods: {
        toggleEditInfos(){
            this.$refs.teste.dialogEditInfos = !this.$refs.teste.dialogEditInfos
        },
    },

    computed: {
        ...mapState(['vendor']),

        info() {
            return this.vendor
        }

    }
}
</script>

<style>
    .td_border{
        border-right: 1px solid grey;
    }
</style>

