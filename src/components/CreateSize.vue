<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialogCreateSize" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline"> ADICIONAR TAMANHO </span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <v-text-field label="TAMANHO" required v-model="SizeName"></v-text-field>
            </v-layout>
            <br>
            <h3> ESSE TAMANHO ACEITA </h3>
            <v-checkbox
            v-model="dois_sabores"
            label="2 SABOR"
            ></v-checkbox>
            <v-checkbox
            v-model="tres_sabores"
            label="3 SABORES"
            ></v-checkbox>
            <v-checkbox
            v-model="quatro_sabores"
            label="4 SABORES"
            ></v-checkbox>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeCreateSize()">Voltar</v-btn>
          <v-btn color="blue darken-1" flat @click="createSize()">Criar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    data () {
        return {
            dialog: false,
            dialogCreateSize: false,
            dois_sabores: '',
            tres_sabores: '',
            quatro_sabores: '',
            SizeName: ''
        }
    },

    methods: {
        createSize() {
          if(this.dois_sabores){
            let newSize = {
              name: this.SizeName,
              flavors: 'Aceita dois sabores'
            }
          console.log(newSize)
          this.dialogCreateSize = false
          }
          if(this.tres_sabores){
            let newSize = {
              name: this.SizeName,
              flavors: 'Aceita tres sabores'
            }
          console.log(newSize)
          this.dialogCreateSize = false
          }
          if(this.quatro_sabores){
            let newSize = {
              name: this.SizeName,
              flavors: 'Aceita quatro sabores'
            }
          console.log(newSize)
          this.dialogCreateSize = false
          }

          // this.$http.post('...', newSize)
          //   .then(function(response){
          //     console.log(newSize)
          //     this.dialogCreateCategory = false
          //   });
        },
        
        closeCreateSize() {
            this.dialogCreateSize = false
        },
    }
}
</script>
