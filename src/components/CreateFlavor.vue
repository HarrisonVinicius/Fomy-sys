<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialogCreateFlavor" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline"> CRIAR SABOR </span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
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
            <v-layout>
                <v-textarea
                name="input-7-1"
                label="Descrição"
                value=""
                ></v-textarea> 
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeCreateFlavor()">Voltar</v-btn>
          <v-btn color="blue darken-1" flat @click="createFlavor()">Criar</v-btn>
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
