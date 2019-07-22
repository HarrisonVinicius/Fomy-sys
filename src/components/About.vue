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
                    h1 Informações Gerais 
                    br
                    h2(style="color: grey;") Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed et culpa molestias! Facilis dolores quae incidunt ipsam dolore reiciendis voluptatibus est vitae, exercitationem, quidem sed iure, ullam tempora numquam laboriosam?
                    br
                    v-divider
                    v-form
                        v-container
                            br
                            v-layout(style="display:flex; justify-content: space-between;")
                                v-flex(
                                xs12
                                md6)
                                
                                    h2 Nome do Estabelecimento 
                                    br
                                    v-layout(row wrap style="display: flex; align-items:center;")
                                        h3(style="color: grey;") {{ this.info.info.name }}
                                    
                                    br
                                    br
                                    h2 Slug do Estabelecimento 
                                    br
                                    v-layout(row wrap style="display: flex; align-items:center;")
                                        h3(style="color: grey;") {{ this.info.info.slug }} 
                                    br
                                    br
                                    h2 Email 
                                    br
                                    v-layout(row wrap style="display: flex; align-items:center;")
                                        h3(style="color: grey;") {{ this.info.info.email }} 
                                    br
                                    br
                                    h2 Telefone (Whatsapp) 
                                    br
                                    v-layout(row wrap style="display: flex; align-items:center;")
                                        h3(style="color: grey;") {{ this.info.info.whatsapp }} 
                                    
                                    br
                                    br
                                    h2 Endereço 
                                    br
                                    v-layout(row wrap style="display: flex; align-items:center;")
                                        h3(style="color: grey;") {{ this.info.info.address }} 
                                    br
                                   
                                    //- h2 logo 
                                    //- br
                                    //- v-layout(row wrap style="display: flex; align-items:center;")
                                    //-    v-btn(flat)
                                    //-        span escolher foto 
                            v-btn(large block @click="toggleEditInfos()")
                                v-icon edit
                                span Editar Informações 
                            br
                            v-divider
                            br
                            h3 HORARIO DE FUNCIONAMENTO 
                            br
                            v-card
                                v-card-text
                                    v-data-table(
                                    :items="times"
                                    class="elevation-1"
                                    hide-actions
                                    hide-headers)
                                    
                                        template(v-slot:items="props")
                                            td {{ props.item.name }}
                                            td(class="text-xs-right") {{ props.item.category }}
                                            td(class="text-xs-right td_border" style="border-left: 1px solid grey;")
                                                v-select(
                                                item-text="text"
                                                item-value="value"
                                                :items="turnos"
                                                label="Turnos"
                                                required
                                                @change="$v.select.$touch()"
                                                @blur="$v.select.$touch()")
                                                
                                            
                                            td(class="text-xs-right td_border" style="border-left: 1px solid grey;")
                                                v-layout
                                                    v-flex
                                                        v-text-field(
                                                        label="ABRE"
                                                        value="12:30:00"
                                                        type="time"
                                                        class="mr-5")
                                                        
                                                    v-flex
                                                        v-text-field(
                                                        label="FECHA"
                                                        value="12:30:00"
                                                        type="time")
                                                        
                                            td(class="text-xs-right td_border")
                                                v-layout
                                                    v-flex
                                                        v-text-field(
                                                        label="ABRE"
                                                        value="12:30:00"
                                                        type="time"
                                                        class="mr-5")
                                                        

                                                    v-flex
                                                        v-text-field(
                                                        label="FECHA"
                                                        value="12:30:00"
                                                        type="time")
                                                        

                                            td(class="text-xs-right td_border")
                                                v-layout
                                                    v-flex
                                                        v-text-field(
                                                        label="ABRE"
                                                        value="12:30:00"
                                                        type="time"
                                                        class="mr-5")
                                                        
                                                    

                                                    v-flex
                                                        v-text-field(
                                                        label="FECHA"
                                                        value="12:30:00"
                                                        type="time")

                                            td(class="text-xs-right td_border")
                                                v-layout
                                                    v-flex
                                                        v-text-field(
                                                        label="ABRE"
                                                        value="12:30:00"
                                                        type="time"
                                                        class="mr-5")
                                                        
                                                    v-flex
                                                        v-text-field(
                                                        label="FECHA"
                                                        value="12:30:00"
                                                        type="time")                                       
               
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
            sellerName: '',
            sellerMail: '',
            sellerAddress: '',
            sellerPhone: '',
            SelectValue: '',
            times: [
                {
                    name: 'SEG',
                },
                {
                    name: 'TER',
                },
                {
                    name: 'QUA',
                },
                {
                    name: 'QUI',
                },
                {
                    name: 'SEX',
                },
                {
                    name: 'SAB',
                },
                {
                    name: 'DOM',
                },
            ],
            
            turnos: [
                {
                    text: '1 turno',
                    value: 1
                },
                {
                    text: '2 turnos',
                    value: 2
                },
                {
                    text: '3 turnos',
                    value: 3
                },
                {
                    text: '4 turnos',
                    value: 4
                },
            ]
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
        ...mapState(['seller']),

        info() {
            return this.seller
        }

    }
}
</script>

<style>
    .td_border{
        border-right: 1px solid grey;
    }
</style>

