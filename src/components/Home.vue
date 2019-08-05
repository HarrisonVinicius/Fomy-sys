<template lang="pug">
    div
        SideMenu
        v-container
            br
            br
            br
            v-layout(row wrap)
                v-flex(xs2)
                v-flex(xs10)
                    h2 Pedidos 
                    br
                    h3(style="color: grey;") Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa corporis, perferendis dicta voluptates odit necessitatibus quas aliquam aperiam voluptas eveniet facilis! Perferendis hic dicta vel numquam voluptatibus unde neque!
                    br
                    v-divider
                    br
                    v-layout(row wrap)
                    template
                        v-expansion-panel(v-for='order in orders' :key='order.id' focusable)
                            v-expansion-panel-content
                                template(v-slot:header)
                                    span {{ order.code }}
                                    span {{ order.deliveryRegion }}
                                    v-spacer
                                    v-spacer
                                    span {{ order.name }}
                                v-card
                                    v-divider
                                    v-card-text(class="grey lighten-3")
                                        v-layout(row wrap)
                                            v-flex(xs12)
                                                span Items:
                                                span &nbsp; 1X {{order.item}} 
                                        br
                                        v-layout(row wrap)
                                            v-flex(xs12)
                                                span Valor Pago:
                                                span &nbsp; {{order.price}} 
                                        br
                                        v-layout(row wrap)        
                                            v-flex(xs12)
                                                span Metodo de Pagamento:
                                                span &nbsp; {{order.payment}}
                                        br
                                        v-layout(row wrap)
                                            v-flex(xs12)
                                                span Endereço de Entrega:
                                                span &nbsp; {{order.Delivery}}
                                    v-card-actions(class="grey lighten-3")
                                        v-btn( block large dark color="light-green darken-1")
                                            v-icon check
                                            | CONFIRMAR

                                //-     v-btn( block flat large color="error" @click="removeAddress(index, address.id)" :loading="load")
                                //-         v-icon delete
                                //-         | REMOVER
</template>

<script>
  import SideMenu from '@/components/SideMenu'
  
  export default {
    data () {
      return {
         orders:[
            {
                code: '#01221',
                name: 'Harison Vinicius',
                item: 'Hamburguer duplo',
                price: 'R$ 15,00',
                payment: 'Débito',
                deliveryStreet: 'Rua das Conchas',
                deliveryRegion: 'Lagoa Nova',
                deliveryCity: 'Natal',
                deliveryNumber: '30',
                Delivery: 'Rua das Conchas, 30, Lagoa Nova, Natal'
            },
            {
                code: '#29122',
                name: 'José Mario',
                item: 'x-tudo',
                price: 'R$ 18,00',
                payment: 'Débito',
                deliveryStreet: 'Rua das Areias',
                deliveryRegion: 'São Gonçalo do Amarante',
                deliveryCity: 'Natal',
                deliveryNumber: '20',
                Delivery: 'Rua das Areias, 20, São Gonçalo do Amarante, Natal'
            },
            {
                code: '#33322',
                name: 'Rodrigo verás',
                item: 'x-tudo-especial',
                price: 'R$ 19,50',
                payment: 'Crédito',
                deliveryStreet: 'Rua das Aguas',
                deliveryRegion: 'Nossa Senhora da Apresentação',
                deliveryCity: 'Natal',
                deliveryNumber: '10',
                Delivery: 'Rua das Aguas, 10, Nossa Senhora da Apresentação, Natal'
            },
         ] 
      }
    },

    components: {
        SideMenu
    }
  }
</script>
