<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialogCreateCategory" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline"> Criar Categoria </span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <v-text-field label="Nome da Categoria" required></v-text-field>
            </v-layout>
            <br>
            <h3> Tipo da Categoria </h3>
            <v-checkbox
            v-model="Pizza"
            label="Pizza"
            ></v-checkbox>
            <v-checkbox
            v-model="Padrao"
            label="Padrão"
            ></v-checkbox>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeCreateCategory()">Voltar</v-btn>
          <v-btn color="blue darken-1" flat @click="CreateCategory()">Criar</v-btn>
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
            dialogCreateCategory: false,
            Pizza: '',
            Padrao: '',
        }
    },

    methods: {
        closeCreateCategory() {
            this.dialogCreateCategory = false
        },
    }
}
</script>
