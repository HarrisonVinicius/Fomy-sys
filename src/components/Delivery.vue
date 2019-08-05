<template lang="pug">
    div(class="about")
        SideMenu 
        v-container
            v-layout(row wrap)
                v-flex(xs2)
                v-flex(xs10)
                    br
                    br
                    br
                    h2 Editar Entregas 
                    br
                    h3(style="color: grey;") Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed et culpa molestias! Facilis dolores quae incidunt ipsam dolore reiciendis voluptatibus est vitae, exercitationem, quidem sed iure, ullam tempora numquam laboriosam?
                    br
                    v-divider
                    br
                    v-form
                        v-container
                            h3 TAXA E TEMPO 
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
                                            td(class="text-xs-right ")
                                                v-text-field(
                                                label="TAXA"
                                                value="10.00"
                                                prefix="R$")
                                                
                                            
                                            td(class="text-xs-right ")
                                                v-text-field(label="TEMPO" required)
                                            
                                            //- td
                                            //-     v-checkbox(label="NÃO ENTREGA" :value="props.item.id" v-model="selected" color="error")
                                                //- v-switch(
                                                //- v-model="switch3"
                                                //- label="`NÃO ENTREGA")                      
          
</template>

<script>
import SideMenu from '@/components/SideMenu'

export default {
    name: 'about',
    data () {
        return {     
            selected: [],
            SelectValue: '',
            times: [
                {
                    name: 'Bairro 1',
                    id: 1
                },
                {
                    name: 'Bairro 2',
                    id: 2
                },
                {
                    name: 'Bairro 3',
                    id: 3
                },
                {
                    name: 'Bairro 4',
                    id: 4
                },
                {
                    name: 'Bairro 5',
                    id: 5
                },
                {
                    name: 'Bairro 6',
                    id: 6
                },
                {
                    name: 'Bairro 7',
                    id: 7
                },
            ],
        }
    },

    components: {
        SideMenu
    },

    methods: {
            
    }
}
</script>

<style>
    .td_border{
        border-right: 1px solid grey;
    }
</style>

