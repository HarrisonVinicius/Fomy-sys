<template lang="pug">
  v-layout(row justify-center)
    v-dialog(v-model="dialogCreateCategory" persistent max-width="600px")
      v-card
        v-card-title
          span(class="headline") Criar Categoria 
        
        v-card-text
          v-container(grid-list-md)
            v-layout(wrap)
                v-text-field(label="Nome da Categoria" required v-model="CategoryName")
            
            br
            h3 Tipo da Categoria 
            v-checkbox(
            v-model="Pizza"
            label="Pizza")
            
            v-checkbox(
            v-model="Padrao"
            label="Padrão")
            
 
          small *indicates required field
        
        v-card-actions
          v-spacer
          v-btn(color="blue darken-1" flat @click="closeCreateCategory()") Voltar
          v-btn(color="blue darken-1" flat @click="createCategory()") Criar
  
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
    data () {
        return {
            dialog: false,
            dialogCreateCategory: false,
            Pizza: '',
            Padrao: '',
            CategoryName: ''
        }
    },

    methods: {
        createCategory() {
            if(this.Padrao){
              let newCategory = {
                name: this.CategoryName,
                categoryType: 'Padrao'
              }
            }else {
              let newCategory = {
                name: this.CategoryName,
                categoryType: 'Pizza'
              }
            }
            // this.$http.post('...', newCategory)
            //   .then(function(response){
            //     console.log(newCategory)
            //     this.dialogCreateCategory = false
            //   });
        },

        closeCreateCategory() {
            this.dialogCreateCategory = false
        },

        ...mapActions(['userData', 'setUserId'])
    }
}
</script>
