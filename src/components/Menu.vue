<template>
    <div>
        <SideMenu />
        <v-container>
            <br>
            <br>
            <br>
            <v-layout row wrap>
                <v-flex xs12 style="margin-left: 20%;">
                    <h1> Cardápio </h1>
                    <br>
                    <h2 style="color: grey;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa corporis, perferendis dicta voluptates odit necessitatibus quas aliquam aperiam voluptas eveniet facilis! Perferendis hic dicta vel numquam voluptatibus unde neque!</h2>
                    <br>
                    <v-divider></v-divider>
                    <br>
                    <v-btn flat color="pink darken-1" @click="toggleCreateCategory()">
                        <v-icon>add</v-icon>
                        <span> Adicionar Categoria</span>
                    </v-btn>
                    <br>
                    <br>
                    <div v-for="StandartCategory in StandartCategories" :key="StandartCategory.text">
                        <v-card>
                            <v-layout row wrap style="padding: 15px; border-bottom: 1px solid grey; background-color: #e8e7e7; display: flex; align-items: center;">
                                <h2> Standart Category Title </h2>
                                <v-spacer></v-spacer>
                                <v-btn flat color="pink darken-1">
                                    <v-icon>pause</v-icon>
                                    <span> Pausar Vendas </span>
                                </v-btn>
                                <v-btn flat color="pink darken-1">
                                    <span> Editar </span>
                                </v-btn>
                            </v-layout>
                            <v-card-text>
                                 <div v-for="CategoryItems in CategoriesItems" :key="CategoryItems.text">
                                    <v-layout row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;">
                                        <h2> {{ CategoryItems.name }} </h2>
                                        <v-spacer></v-spacer>
                                        <h2> R$ {{ CategoryItems.price }} </h2>
                                        <v-btn flat color="pink darken-1">
                                            <v-icon>pause</v-icon>
                                            <span> Pausar Vendas </span>
                                        </v-btn>
                                        <v-btn flat color="pink darken-1">
                                            <span> Editar </span>
                                        </v-btn>
                                    </v-layout>                                 
                                 </div>    
                            </v-card-text>
                            <v-card-actions>
                                <v-btn flat color="pink darken-1x" @click="toggleCreateItem()">
                                    <v-icon> add </v-icon>
                                    Adicionar Item
                                </v-btn>
                            </v-card-actions>
                        </v-card>                     
                        <br>
                        <br>
                    </div>
                    
                    
                    <div v-for="PizzaCategory in PizzaCategories" :key="PizzaCategory.text">
                        <v-card>
                            <v-layout row wrap style="padding: 15px; border-bottom: 1px solid grey; background-color: #e8e7e7; display: flex; align-items: center;">
                                <h2> Pizzas </h2>
                                <v-spacer></v-spacer>
                                <v-btn flat color="pink darken-1">
                                    <v-icon>pause</v-icon>
                                    <span> Pausar Vendas </span>
                                </v-btn>
                                <v-btn flat color="pink darken-1">
                                    <span> Editar </span>
                                </v-btn>
                            </v-layout>
                            <v-card-text>
                                <v-card>
                                    
                                    
                                    <v-layout row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;">
                                        <h2> Tamanhos </h2>
                                    </v-layout>
                                    <v-card-text>
                                        
                                        <div v-for="PizzaSize in PizzaSizes" :key="PizzaSize.text">
                                            <v-layout row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;">
                                                <h2 style="color:grey;"> {{ PizzaSize.name }} </h2>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="pink darken-1">
                                                    <v-icon>pause</v-icon>
                                                    <span> Pausar Vendas </span>
                                                </v-btn>
                                                <v-btn flat color="pink darken-1">
                                                    <span> Editar </span>
                                                </v-btn>
                                            </v-layout>                                 
                                        </div>    
                                    
               
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn flat color="pink darken-1x" @click="toggleCreateSize()">
                                            <v-icon> add </v-icon>
                                            Adicionar Item
                                        </v-btn>
                                    </v-card-actions>
                                    
                                    
                                    <v-layout row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;">
                                        <h2> Bordas e Massas </h2>
                                    </v-layout>
                                    <v-card-text>
                                        
                                        <div v-for="PizzaPasta in PizzaPastas" :key="PizzaPasta.text">
                                            <v-layout row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;">
                                                <h2 style="color:grey;"> {{ PizzaPasta.name }} </h2>
                                                <v-spacer></v-spacer>
                                                <h2 style="color:grey;"> R$ {{ PizzaPasta.price }} </h2>
                                                <v-btn flat color="pink darken-1">
                                                    <v-icon>pause</v-icon>
                                                    <span> Pausar Vendas </span>
                                                </v-btn>
                                                <v-btn flat color="pink darken-1">
                                                    <span> Editar </span>
                                                </v-btn>
                                            </v-layout>                                 
                                        </div>    
                                    
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn flat color="pink darken-1x" @click="toggleCreateBorder()">
                                            <v-icon> add </v-icon>
                                            Adicionar Item
                                        </v-btn>
                                    </v-card-actions>
                                
                                
                                    <v-layout row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;">
                                        <h2> Sabores </h2>
                                    </v-layout>
                                    <v-card-text>
                                        
                                        <div v-for="PizzaFlavor in PizzaFlavors" :key="PizzaFlavor.text">
                                            <v-layout row wrap style="padding: 15px; border-bottom: 1px solid grey; display: flex; align-items: center;">
                                                <h2 style="color:grey;"> {{ PizzaFlavor.name }} </h2>
                                                <v-spacer></v-spacer>
                                                <h2 style="color:grey;"> R$ {{ PizzaFlavor.price }} </h2>
                                                <v-btn flat color="pink darken-1">
                                                    <v-icon>pause</v-icon>
                                                    <span> Pausar Vendas </span>
                                                </v-btn>
                                                <v-btn flat color="pink darken-1">
                                                    <span> Editar </span>
                                                </v-btn>
                                            </v-layout>                                 
                                        </div>    
                                    
               
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn flat color="pink darken-1x" @click="toggleCreateFlavor()">
                                            <v-icon> add </v-icon>
                                            Adicionar Item
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>                     
                                <br>
                                <br>
                                
                            </v-card-text>
                        </v-card>                     
                        <br>
                        <br>
                    </div>                    
                </v-flex>
            </v-layout>
            
            <CreateCategory ref="teste" />
            <CreateItem ref="teste2" />
            <CreateSize ref="teste3" />
            <CreateBorder ref="teste4" />
            <CreateFlavor ref="teste5" />
        
        </v-container>

    </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import CreateCategory from '@/components/CreateCategory'
import CreateItem from '@/components/CreateItem'
import CreateSize from '@/components/CreateSize'
import CreateBorder from '@/components/CreateBorder'
import CreateFlavor from '@/components/CreateFlavor'

export default {
  name: 'App',

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
        StandartCategories: [
        {
            name: 'Promoções'
        }
        ],
        CategoriesItems: [
        {
            name: 'x-tudo',
            price: '15,00'
        },
                {
            name: 'x-Egg',
            price: '19,00'
        },
                {
            name: 'x-Picanha',
            price: '20,00'
        },
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

//   created: function() {
//       this.fetchCategories();
//   }
}
</script>
