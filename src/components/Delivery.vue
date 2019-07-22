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
                    h1 Editar Entregas 
                    br
                    h2(style="color: grey;") Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed et culpa molestias! Facilis dolores quae incidunt ipsam dolore reiciendis voluptatibus est vitae, exercitationem, quidem sed iure, ullam tempora numquam laboriosam?
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
                                            
                                            td
                                                v-switch(
                                                v-model="switch1"
                                                label="`NÃO ENTREGA")                      
          
</template>

<script>
import SideMenu from '@/components/SideMenu'

export default {
    name: 'about',
    data () {
        return {     
            switch1: true,
            SelectValue: '',
            times: [
                {
                    name: 'Bairro 1',
                },
                {
                    name: 'Bairro 2',
                },
                {
                    name: 'Bairro 3',
                },
                {
                    name: 'Bairro 4',
                },
                {
                    name: 'Bairro 5',
                },
                {
                    name: 'Bairro 6',
                },
                {
                    name: 'Bairro 7',
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

