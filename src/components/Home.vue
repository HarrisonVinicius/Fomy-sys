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
                    h1 Pedidos 
                    br
                    h2(style="color: grey;") Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa corporis, perferendis dicta voluptates odit necessitatibus quas aliquam aperiam voluptas eveniet facilis! Perferendis hic dicta vel numquam voluptatibus unde neque!
                    br
                    v-divider
                    br
                    v-layout(row wrap)
                    template
                        v-expansion-panel(v-for='order in orders' :key='order.id' focusable style="margin-bottom: 60px;")
                            v-expansion-panel-content
                                template(v-slot:header)
                                    span.headline 1X
                                    span.headline {{ order.item }}
                                v-card
                                    v-card-text(class="grey lighten-3")
                                        v-layout(row wrap)
                                            v-flex(xs12)
                                                span.title Valor Pago:
                                                span.title &nbsp; {{order.price}} 
                                        br
                                        v-layout(row wrap)        
                                            v-flex(xs12)
                                                span.title Metodo de Pagamento:
                                                span.title &nbsp; {{order.payment}}
                                        br
                                        v-layout(row wrap)
                                            v-flex(xs12)
                                                span.title Endereço de Entrega:
                                                span.title &nbsp; {{order.Delivery}}
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
                item: 'Hamburguer duplo',
                price: 'R$ 15,00',
                payment: 'Débito',
                Delivery: 'Rua das Conchas, 30, Ponta Negra, Natal'
            },
            {
                item: 'x-tudo',
                price: 'R$ 18,00',
                payment: 'Débito',
                Delivery: 'Rua das Areias, 20, Ponta Negra, Natal'
            },
            {
                item: 'x-tudo-especial',
                price: 'R$ 19,50',
                payment: 'Crédito',
                Delivery: 'Rua das Aguas, 10, Ponta Negra, Natal'
            },
         ] 
      }
    },

    components: {
        SideMenu
    }
  }
</script>