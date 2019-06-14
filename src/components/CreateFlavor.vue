<template lang="pug">
  v-layout(row justify-center)
    v-dialog(v-model="dialogCreateFlavor" persistent max-width="600px")
      v-card
        v-card-title
          span(class="headline") CRIAR SABOR 
        
        v-card-text
          v-container(grid-list-md)
            v-layout(row wrap)
                v-flex(xs12 md5 mr-5)
                    v-text-field(label="NOME" required)
                
                v-flex(xs12 md5)
                    v-text-field(
                    label="PREÇO"
                    value="10.00"
                    prefix="R$")
                    
                

       
            br
            v-layout
                v-textarea(
                name="input-7-1"
                label="Descrição"
                value="")
                 
       
         
        
        v-card-actions
          v-spacer
          v-btn(color="blue darken-1" flat @click="closeCreateFlavor()") Voltar
          v-btn(color="blue darken-1" flat @click="createFlavor()") Criar
       
      
</template>

<script>
export default {
    data () {
        return {
            dialog: false,
            dialogCreateFlavor: false,
        }
    },

    methods: {
        closeCreateFlavor() {
            this.dialogCreateFlavor = false
        },
    }
}
</script>
