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
                    h2 Cardápio 
                    br
                    h3(style="color: grey;") Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa corporis, perferendis dicta voluptates odit necessitatibus quas aliquam aperiam voluptas eveniet facilis! Perferendis hic dicta vel numquam voluptatibus unde neque!
                    br
                    v-divider
                    br
                    v-btn(flat color="pink darken-1" @click="toggleCreateCategory()")
                        v-icon add
                        span Adicionar Categoria
                    br
                    br

                    br
                    br
                    div(v-for="(category, index) in vendor.catalog.categories")
                        v-card
                            v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; background-color: #e8e7e7; display: flex; align-items: center;")
                                h3 {{category.name}}
                                v-spacer
                                v-btn(flat color="pink darken-1")
                                    v-icon pause
                                    span Pausar Vendas 
                                
                                v-btn(flat color="pink darken-1")
                                    span Editar 
                            v-list
                              v-list-tile(v-for='item in category.items', :key='item.text', avatar='', @click='')
                                v-list-tile-content
                                  v-list-tile-title {{ item.name }}
                                v-list-tile-action
                                  v-layout(row wrap)
                                    v-flex
                                      v-btn(flat style="margin-left: -165px;" color="pink darken-1")
                                        v-icon pause
                                        span Pausar Vendas
                                    v-flex  
                                      v-btn(flat color="pink darken-1")
                                        span Editar 
                            
                            //- v-card-text
                            //-      div(v-for="CategoryItems in CategoriesItems" :key="CategoryItems.text")
                            //-         v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                            //-             h3 {{ CategoryItems.name }} 
                            //-             v-spacer
                            //-             h3 R$ {{ CategoryItems.price }} 
                            //-             v-btn(flat color="pink darken-1")
                            //-                 v-icon pause
                            //-                 span Pausar Vendas 
                                        
                            //-             v-btn(flat color="pink darken-1")
                            //-                 span Editar 
                                        
 
                            v-card-actions
                                v-btn(flat color="pink darken-1x" @click="toggleCreateItem(index)")
                                    v-icon add 
                                    | Adicionar Item
                                                 
                        br
                        br
                    
                    
                    div(v-for="PizzaCategory in PizzaCategories" :key="PizzaCategory.text")
                        v-card
                            v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; background-color: #e8e7e7; display: flex; align-items: center;")
                                h3 Pizzas 
                                v-spacer
                                v-btn(flat color="pink darken-1")
                                    v-icon pause
                                    span Pausar Vendas 
                                
                                v-btn(flat color="pink darken-1")
                                    span Editar 
                                
                            v-card-text
                              v-list(subheader)
                                v-subheader TAMANHOS
                                v-list-tile(v-for='item in itemspizza', :key='item.title', avatar='', @click='')
                                  v-list-tile-content
                                    v-list-tile-title(v-html='item.title')
                                  v-list-tile-action
                                    v-layout(row wrap)
                                      v-flex
                                        v-btn(flat style="margin-left: -165px;" color="pink darken-1")
                                          v-icon pause
                                          span Pausar Vendas
                                      v-flex  
                                        v-btn(flat color="pink darken-1")
                                          span Editar 
                                v-btn(flat color="pink darken-1x" @click="toggleCreateFlavor()")
                                    v-icon add 
                                    | Adicionar Item
                              v-list(subheader)
                                v-subheader BORDAS
                                v-list-tile(v-for='item in itemspizza', :key='item.title', avatar='', @click='')
                                  v-list-tile-content
                                    v-list-tile-title(v-html='item.title')
                                  v-list-tile-action
                                    v-layout(row wrap)
                                      v-flex
                                        v-btn(flat style="margin-left: -165px;" color="pink darken-1")
                                          v-icon pause
                                          span Pausar Vendas
                                      v-flex  
                                        v-btn(flat color="pink darken-1")
                                          span Editar 
                                v-btn(flat color="pink darken-1x" @click="toggleCreateFlavor()")
                                    v-icon add 
                                    | Adicionar Item
                              v-list(subheader)
                                v-subheader MASSAS
                                v-list-tile(v-for='item in itemspizza', :key='item.title', avatar='', @click='')
                                  v-list-tile-content
                                    v-list-tile-title(v-html='item.title')
                                  v-list-tile-action
                                    v-layout(row wrap)
                                      v-flex
                                        v-btn(flat style="margin-left: -165px;" color="pink darken-1")
                                          v-icon pause
                                          span Pausar Vendas
                                      v-flex  
                                        v-btn(flat color="pink darken-1")
                                          span Editar 
                                v-btn(flat color="pink darken-1x" @click="toggleCreateFlavor()")
                                    v-icon add 
                                    | Adicionar Item
                              v-list(subheader)
                                v-subheader SABORES
                                v-list-tile(v-for='item in itemspizza', :key='item.title', avatar='', @click='')
                                  v-list-tile-content
                                    v-list-tile-title(v-html='item.title')
                                  v-list-tile-action
                                    v-layout(row wrap)
                                      v-flex
                                        v-btn(flat style="margin-left: -165px;" color="pink darken-1")
                                          v-icon pause
                                          span Pausar Vendas
                                      v-flex  
                                        v-btn(flat color="pink darken-1")
                                          span Editar 
                                v-btn(flat color="pink darken-1x" @click="toggleCreateFlavor()")
                                    v-icon add 
                                    | Adicionar Item
                                //- v-card
                                //-     v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                //-         h3 Tamanhos 
                                    
                                //-     v-card-text
                                        
                                //-         div(v-for="PizzaSize in PizzaSizes" :key="PizzaSize.text")
                                //-             v-layout(row wrap style="padding: 10px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                //-                 h3(style="color:grey;") {{ PizzaSize.name }} 
                                //-                 v-spacer
                                //-                 v-btn(flat color="pink darken-1")
                                //-                     v-icon pause
                                //-                     span Pausar Vendas 
                                                
                                //-                 v-btn(flat color="pink darken-1")
                                //-                     span Editar 
                                            
                                //-     v-card-actions
                                //-         v-btn(flat color="pink darken-1x" @click="toggleCreateSize()")
                                //-             v-icon add 
                                //-             | Adicionar Item
                                        
                                //-     v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                //-         h3 Bordas e Massas 
                                    
                                //-     v-card-text
                                        
                                //-         div(v-for="PizzaPasta in PizzaPastas" :key="PizzaPasta.text")
                                //-             v-layout(row wrap style="padding: 10px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                //-                 h3(style="color:grey;") {{ PizzaPasta.name }} 
                                //-                 v-spacer
                                //-                 h3(style="color:grey;") R$ {{ PizzaPasta.price }} 
                                //-                 v-btn(flat color="pink darken-1")
                                //-                     v-icon pause
                                //-                     span Pausar Vendas 
                                                
                                //-                 v-btn(flat color="pink darken-1")
                                //-                     span Editar 
                                                
                                //-     v-card-actions
                                //-         v-btn(flat color="pink darken-1x" @click="toggleCreateBorder()")
                                //-             v-icon add 
                                //-             | Adicionar Item
                                
                                //-     v-layout(row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                //-         h3 Sabores 
                                    
                                //-     v-card-text
                                //-         div(v-for="PizzaFlavor in PizzaFlavors" :key="PizzaFlavor.text")
                                //-             v-layout(row wrap style="padding: 10px; border-bottom: 1px solid grey; display: flex; align-items: center;")
                                //-                 h3(style="color:grey;") {{ PizzaFlavor.name }} 
                                //-                 v-spacer
                                //-                 h3(style="color:grey;") R$ {{ PizzaFlavor.price }} 
                                //-                 v-btn(flat color="pink darken-1")
                                //-                     v-icon pause
                                //-                     span Pausar Vendas 
                                                
                                //-                 v-btn(flat color="pink darken-1")
                                //-                     span Editar 
                                                
                                //-     v-card-actions
                                //-         v-btn(flat color="pink darken-1x" @click="toggleCreateFlavor()")
                                //-             v-icon add 
                                //-             | Adicionar Item
                                                   
                                br
                                br
                                   
                        br
                        br
                                        
            CreateCategory( ref="teste" )
            CreateItem(ref="teste2" )
            CreateSize(ref="teste3" )
            CreateBorder(ref="teste4" )
            CreateFlavor(ref="teste5" )
            //- FeedbackDialog
</template>

<script>
import SideMenu from '@/components/SideMenu'
import CreateCategory from '@/components/CreateCategory'
import CreateItem from '@/components/CreateItem'
import CreateSize from '@/components/CreateSize'
import CreateBorder from '@/components/CreateBorder'
import CreateFlavor from '@/components/CreateFlavor'
// import FeedbackDialog from '@/components/FeedbackDialog'
import { mapActions , mapState } from 'vuex'

export default {
  name: 'menu-view',

  components: {
    SideMenu,
    CreateCategory,
    CreateItem,
    CreateSize,
    CreateBorder,
    CreateFlavor,
    // FeedbackDialog
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
        
        itemspizza: [
          { title: 'Xtudo' },
          { title: 'Xegg' },
          { title: 'XtudoEspecial' },
          { title: 'Xegg2' }
        ],
        
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

        toggleCreateItem(index){
            this.setIndex(index)
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
        },
        
        ...mapActions(['setIndex'])
  },

  computed: {
      ...mapState(['vendor'])
  },
 
}
</script>
