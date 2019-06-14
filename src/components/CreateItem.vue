<template lang="pug">
    v-dialog(v-model="dialogCreateItem" persistent max-width="900px")
        v-stepper(v-model="e1")
            v-stepper-header
                v-stepper-step(:complete="e1 > 1" step="1") Informações gerais

                v-divider

                v-stepper-step(:complete="e1 > 2" step="2") Disponibilidade

                v-divider

                v-stepper-step(step="3") Complementos
            

            v-stepper-items
                v-stepper-content(step="1")
                    v-card
                        v-layout(row wrap)
                            v-form(v-model="valid")
                                v-container
                                    v-layout
                                        v-flex(
                                        xs12
                                        md9)
                                        
                                            v-text-field(
                                            v-model="name"
                                            label="Nome do item"
                                            required)
                                        
                                        

                                        v-flex(
                                        xs12
                                        md7)
                                        
                                            v-select(
                                            v-model="CategoriesSelect"
                                            label="Categoria"
                                            required)
                                            
                                        

                                        v-flex(
                                        xs12
                                        md4)
                                        
                                            v-text-field(
                                                v-model="price"
                                                label="Preço"
                                                required)
                                                                                    
                                        
                                 
                        v-layout(row wrap)
                            v-container
                                v-textarea(
                                name="input-7-1"
                                label="Descrição"
                                value=""
                                hint="Deixe uma observação")
                                 
                       
                      
                        v-layout(row wrap)
                            v-container
                                v-btn Escolha uma foto 
                           
                      
                  

                    v-btn(
                    color="primary"
                    @click="e1 = 2") Continue
                 

                    v-btn(flat @click="closeCreateItem()") Cancel
                

                v-stepper-content(step="2")
                    v-card
                        v-container
                            br
                            h3 Dias em que o item estará disponivel 
                            br                            
                            v-layout(row wrap)
                                v-checkbox(
                                v-model="domingo"
                                label="Dom")
                                
                                v-checkbox(
                                v-model="segunda"
                                label="Seg")
                                                            
                                v-checkbox(
                                v-model="terca"
                                label="Ter")
                                
                                v-checkbox(
                                v-model="quarta"
                                label="Qua")
                                
                                v-checkbox(
                                v-model="quinta"
                                label="qui")
                                
                                v-checkbox(
                                v-model="sexta"
                                label="sex")
                                
                                v-checkbox(
                                v-model="sabado"
                                label="Sab")
                                
                            
                       
                   

                    v-btn(
                    color="primary"
                    @click="e1 = 3") Continue
                    

                    v-btn(flat @click="closeCreateItem()") Cancel
               

                v-stepper-content(step="3")
                    v-card
                        v-container
                            v-layout(row wrap)
                                v-btn(flat)
                                    v-icon add
                                    span Adicionar Categoria 
                                
                                                        
                            div(v-for="additional in additionals" :key="additional.text")
                                v-layout(row wrap)
                                    v-text-field(
                                        v-model="name"
                                        label="Complemento "
                                        required)
                                      
                                    v-btn(flat) excluir 
                                
                                v-layout(row wrap)
                                    v-checkbox(
                                    v-model="important"
                                    label="Complemento Obrigatório")
                                    
                                    v-text-field(
                                        v-model="minimum"
                                        label="Qtd min "
                                        required)
                                     
                                    v-spacer
                                    v-text-field(
                                        v-model="maximum"
                                        label="Qtd max "
                                        required)
                     

                    v-btn(
                    color="primary"
                    @click="e1 = 1") Continue
                    

                    v-btn(flat @click="closeCreateItem()") Cancel
             
</template>

<script>
  export default {
    data () {
      return {
        e1: 0,
        pizza: '',
        padrao: '',
        valid: false,
        CategoriesSelect: '',
        price:'',
        name: '',
        domingo: '',
        segunda: '',
        terca: '',
        quarta: '',
        quinta: '',
        sexta: '',
        sabado: '',
        important: '',
        minimum: '',
        maximum: '',
        dialogCreateItem: false,
        additionals: [
            'add1'                
        ]
      }
    },

    methods: {
        closeCreateItem() {
            this.dialogCreateItem = false
        }
    }
  }
</script>