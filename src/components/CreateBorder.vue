<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialogCreateBorder" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline"> ADICIONAR MASSA OU BORDA </span>
        </v-card-title>
        <v-card-text>
            <v-layout wrap>
                <v-flex xs12 md5 mr-5>
                    <v-text-field label="NOME" required></v-text-field>
                </v-flex>
                <v-flex xs12 md5>
                    <v-text-field
                    label="PREÇO"
                    value="10.00"
                    prefix="R$"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <br>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeCreateBorder()">Voltar</v-btn>
          <v-btn color="blue darken-1" flat @click="createBorder()">Criar</v-btn>
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
            dialogCreateBorder: false,
        }
    },

    methods: {
        closeCreateBorder() {
            this.dialogCreateBorder = false
        },
    }
}
</script>
