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
                <v-text-field label="TAMANHO" required></v-text-field>
            </v-layout>
            <br>
            <h3> ESSE TAMANHO ACEITA </h3>
            <v-checkbox
            label="2 SABOR"
            ></v-checkbox>
            <v-checkbox
            label="3 SABORES"
            ></v-checkbox>
            <v-checkbox
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
        }
    },

    methods: {
        closeCreateSize() {
            this.dialogCreateSize = false
        },
    }
}
</script>
