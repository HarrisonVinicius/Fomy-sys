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
                    h1 Cardápio 
                    br
                    h2(style="color: grey;") Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa corporis, perferendis dicta voluptates odit necessitatibus quas aliquam aperiam voluptas eveniet facilis! Perferendis hic dicta vel numquam voluptatibus unde neque!
                    br
                    v-divider
                    br
                    v-btn(flat color="pink darken-1" @click="toggleCreateCategory()")
                        v-icon add
                        span Adicionar Categoria
                    
                    br
                    br
                    div(v-for="category in menu.categories")
                        v-card
                            v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; background-color: #e8e7e7; display: flex; align-items: center;")
                                h2 {{category.name}} 
                                v-spacer
                                v-btn(flat color="pink darken-1")
                                    v-icon pause
                                    span Pausar Vendas 
                                
                                v-btn(flat color="pink darken-1")
                                    span Editar 
                                
                            
                            //- v-card-text
                            //-      div(v-for="CategoryItems in CategoriesItems" :key="CategoryItems.text")
                            //-         v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                            //-             h2 {{ CategoryItems.name }} 
                            //-             v-spacer
                            //-             h2 R$ {{ CategoryItems.price }} 
                            //-             v-btn(flat color="pink darken-1")
                            //-                 v-icon pause
                            //-                 span Pausar Vendas 
                                        
                            //-             v-btn(flat color="pink darken-1")
                            //-                 span Editar 
                                        
 
                            v-card-actions
                                v-btn(flat color="pink darken-1x" @click="toggleCreateItem()")
                                    v-icon add 
                                    Adicionar Item
                                                 
                        br
                        br
                    
                    
                    div(v-for="PizzaCategory in PizzaCategories" :key="PizzaCategory.text")
                        v-card
                            v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; background-color: #e8e7e7; display: flex; align-items: center;")
                                h2 Pizzas 
                                v-spacer
                                v-btn(flat color="pink darken-1")
                                    v-icon pause
                                    span Pausar Vendas 
                                
                                v-btn(flat color="pink darken-1")
                                    span Editar 
                                
                            v-card-text
                                v-card
                                    
                                    
                                    v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                        h2 Tamanhos 
                                    
                                    v-card-text
                                        
                                        div(v-for="PizzaSize in PizzaSizes" :key="PizzaSize.text")
                                            v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                                h2(style="color:grey;") {{ PizzaSize.name }} 
                                                v-spacer
                                                v-btn(flat color="pink darken-1")
                                                    v-icon pause
                                                    span Pausar Vendas 
                                                
                                                v-btn(flat color="pink darken-1")
                                                    span Editar 
                                            
                                    v-card-actions
                                        v-btn(flat color="pink darken-1x" @click="toggleCreateSize()")
                                            v-icon add 
                                            Adicionar Item
                                        
                                    v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                        h2 Bordas e Massas 
                                    
                                    v-card-text
                                        
                                        div(v-for="PizzaPasta in PizzaPastas" :key="PizzaPasta.text")
                                            v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                                h2(style="color:grey;") {{ PizzaPasta.name }} 
                                                v-spacer
                                                h2(style="color:grey;") R$ {{ PizzaPasta.price }} 
                                                v-btn(flat color="pink darken-1")
                                                    v-icon pause
                                                    span Pausar Vendas 
                                                
                                                v-btn(flat color="pink darken-1")
                                                    span Editar 
                                                
                                    v-card-actions
                                        v-btn(flat color="pink darken-1x" @click="toggleCreateBorder()")
                                            v-icon add 
                                            Adicionar Item
                                
                                    v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                        h2 Sabores 
                                    
                                    v-card-text
                                        div(v-for="PizzaFlavor in PizzaFlavors" :key="PizzaFlavor.text")
                                            v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                                h2(style="color:grey;") {{ PizzaFlavor.name }} 
                                                v-spacer
                                                h2(style="color:grey;") R$ {{ PizzaFlavor.price }} 
                                                v-btn(flat color="pink darken-1")
                                                    v-icon pause
                                                    span Pausar Vendas 
                                                
                                                v-btn(flat color="pink darken-1")
                                                    span Editar 
                                                
                                    v-card-actions
                                        v-btn(flat color="pink darken-1x" @click="toggleCreateFlavor()")
                                            v-icon add 
                                            Adicionar Item
                                                   
                                br
                                br
                                   
                        br
                        br
                                        
            CreateCategory( ref="teste" )
            CreateItem(ref="teste2" )
            CreateSize(ref="teste3" )
            CreateBorder(ref="teste4" )
            CreateFlavor(ref="teste5" )
    
</template>

<script>
import SideMenu from '@/components/SideMenu'
import CreateCategory from '@/components/CreateCategory'
import CreateItem from '@/components/CreateItem'
import CreateSize from '@/components/CreateSize'
import CreateBorder from '@/components/CreateBorder'
import CreateFlavor from '@/components/CreateFlavor'
import { mapActions , mapState } from 'vuex'

export default {
  name: 'menu-view',

  components: {
    SideMenu,
    CreateCategory,
    CreateItem,
    CreateSize,
    CreateBorder,
    CreateFlavor
  },
  
  data () {
    return {
        dialog: false,
        // StandartCategories: [
        // {
        //     name: 'Promoções'
        // }
        // ],
        // CategoriesItems: [
        // {
        //     name: 'x-tudo',
        //     price: '15,00'
        // },
        //         {
        //     name: 'x-Egg',
        //     price: '19,00'
        // },
        //         {
        //     name: 'x-Picanha',
        //     price: '20,00'
        // },
        // ],

        PizzaCategories: [
            'categoria 1',
        ],

        PizzaSizes: [
        {
            name: 'Grande'
        },
        {
            name: 'Média'
        },
        {
            name: 'Pequena'
        },
        ],

        PizzaPastas: [
        {
            name: 'Massa Tradicional',
            price: '05,00'
        },    
        {
            name: 'Borda de chocolate',
            price: '08,00'
        },
        {
            name: 'Borda de Catupiry',
            price: '04,00'
        },
        {
            name: 'Borda de Cheddar',
            price: '05,00'
        },
        ],

        PizzaFlavors: [
        {
            name: 'Poti Frango creme cheese',
            price: '23,00'
        },    
        {
            name: 'Bacon',
            price: '26,00'
        },
        {
            name: 'Calabresa',
            price: '28,00'
        },
        ]
    }
  },

  methods: {
        // fetchCategories(){
        //     this.$http.get('...')
        //         .then(function(response){
        //             this.StandartCategories = JSON.parse(response.body)
        //         })
        // },
        
        toggleCreateCategory(){
            this.$refs.teste.dialogCreateCategory = !this.$refs.teste.dialogCreateCategory
        },

        toggleCreateItem(){
            this.$refs.teste2.dialogCreateItem = !this.$refs.teste2.dialogCreateItem
        },
        
        toggleCreateSize(){
            this.$refs.teste3.dialogCreateSize = !this.$refs.teste3.dialogCreateSize
        },
        
        toggleCreateBorder(){
            this.$refs.teste4.dialogCreateBorder = !this.$refs.teste4.dialogCreateBorder
        },
        
        toggleCreateFlavor(){
            this.$refs.teste5.dialogCreateFlavor = !this.$refs.teste5.dialogCreateFlavor
        }  
  },

  computed: {
      ...mapState(['menu'])
  }

//   created: function() {
//       this.fetchCategories();
//   }
}
</script>
