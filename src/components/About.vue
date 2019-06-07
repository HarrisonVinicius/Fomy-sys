<template>
    <div class="about">
         <SideMenu />
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 style="margin-left: 20%;">
                    <br>
                    <br>
                    <br>
                    <h1> Informações Gerais </h1>
                    <br>
                    <h2 style="color: grey;"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed et culpa molestias! Facilis dolores quae incidunt ipsam dolore reiciendis voluptatibus est vitae, exercitationem, quidem sed iure, ullam tempora numquam laboriosam?</h2>
                    <br>
                    <v-divider></v-divider>
                    <v-form>
                        <v-container>
                            <v-btn flat @click="toggleEditInfos()">
                                <v-icon>edit</v-icon>
                                <span>Editar Informações </span>
                            </v-btn>
                            <br>
                            <v-layout style="display:flex; justify-content: space-between;">
                                <v-flex
                                xs12
                                md6
                                >
                                    <h2> Nome do Estabelecimento </h2>
                                    <v-layout row wrap style="display: flex; align-items:center;">
                                        <h3 style="color: grey;"> {{ this.info.info.name }} </h3>
                                    </v-layout>
                                    <br>
                                    <h2> Slug do Estabelecimento </h2>
                                    <v-layout row wrap style="display: flex; align-items:center;">
                                        <h3 style="color: grey;"> {{ this.info.info.slug }} </h3>
                                    </v-layout>
                                    <br>
                                    <h2> Email </h2>
                                    <v-layout row wrap style="display: flex; align-items:center;">
                                        <h3 style="color: grey;"> {{ this.info.info.email }} </h3>
                                    </v-layout>
                                    <br>
                                    <h2> Telefone (Whatsapp) </h2>
                                    <v-layout row wrap style="display: flex; align-items:center;">
                                        <h3 style="color: grey;"> {{ this.info.info.whatsapp }} </h3>
                                    </v-layout>
                                    <br>
                                    <h2> Endereço </h2>
                                    <v-layout row wrap style="display: flex; align-items:center;">
                                        <h3 style="color: grey;"> {{ this.info.info.address }} </h3>
                                    </v-layout>
                                    <br>
                                    <h2> logo </h2>
                                    <v-layout row wrap style="display: flex; align-items:center;">
                                       <v-btn flat>
                                           <span> escolher foto </span>
                                       </v-btn>
                                    </v-layout>
                                </v-flex> 
                            </v-layout>
                            <br>
                            <v-divider></v-divider>
                            <br>
                            <h3> HORARIO DE FUNCIONAMENTO </h3>
                            <br>
                            <v-card>
                                <v-card-text>
                                    <v-data-table
                                    :items="times"
                                    class="elevation-1"
                                    hide-actions
                                    hide-headers
                                    >
                                        <template v-slot:items="props">
                                            <td>{{ props.item.name }}</td>
                                            <td class="text-xs-right">{{ props.item.category }}</td>
                                            <td class="text-xs-right td_border" style="border-left: 1px solid grey;">
                                                <v-select
                                                item-text="text"
                                                item-value="value"
                                                :items="turnos"
                                                label="Turnos"
                                                required
                                                @change="$v.select.$touch()"
                                                @blur="$v.select.$touch()"
                                                ></v-select>
                                            </td>
                                            <td class="text-xs-right td_border" style="border-left: 1px solid grey;">
                                                <v-layout>
                                                    <v-flex>
                                                        <v-text-field
                                                        label="ABRE"
                                                        value="12:30:00"
                                                        type="time"
                                                        class="mr-5"
                                                        ></v-text-field>
                                                    </v-flex>

                                                    <v-flex>
                                                        <v-text-field
                                                        label="FECHA"
                                                        value="12:30:00"
                                                        type="time"
                                                        ></v-text-field>
                                                    </v-flex>
                                                
                                                </v-layout>
                                            </td>
                                            <td class="text-xs-right td_border">
                                                <v-layout>
                                                    <v-flex>
                                                        <v-text-field
                                                        label="ABRE"
                                                        value="12:30:00"
                                                        type="time"
                                                        class="mr-5"
                                                        ></v-text-field>
                                                    </v-flex>

                                                    <v-flex>
                                                        <v-text-field
                                                        label="FECHA"
                                                        value="12:30:00"
                                                        type="time"
                                                        ></v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                            </td>
                                            <td class="text-xs-right td_border">
                                                <v-layout>
                                                    <v-flex>
                                                        <v-text-field
                                                        label="ABRE"
                                                        value="12:30:00"
                                                        type="time"
                                                        class="mr-5"
                                                        ></v-text-field>
                                                    </v-flex>

                                                    <v-flex>
                                                        <v-text-field
                                                        label="FECHA"
                                                        value="12:30:00"
                                                        type="time"
                                                        ></v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                            </td>
                                            <td class="text-xs-right td_border">
                                                <v-layout>
                                                    <v-flex>
                                                        <v-text-field
                                                        label="ABRE"
                                                        value="12:30:00"
                                                        type="time"
                                                        class="mr-5"
                                                        ></v-text-field>
                                                    </v-flex>

                                                    <v-flex>
                                                        <v-text-field
                                                        label="FECHA"
                                                        value="12:30:00"
                                                        type="time"
                                                        ></v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                            </td>
                                        </template>
                                    </v-data-table>
                                </v-card-text>
                            </v-card>
                        </v-container>
                    </v-form>
                </v-flex>
            </v-layout>   
            <EditInfos ref="teste" />
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import SideMenu from '@/components/SideMenu'
import EditInfos from '@/components/EditInfos'

export default {
    name: 'about',
    
    data () {
        return {     
            sellerName: '',
            sellerMail: '',
            sellerAddress: '',
            sellerPhone: '',
            SelectValue: '',
            times: [
                {
                    name: 'SEG',
                },
                {
                    name: 'TER',
                },
                {
                    name: 'QUA',
                },
                {
                    name: 'QUI',
                },
                {
                    name: 'SEX',
                },
                {
                    name: 'SAB',
                },
                {
                    name: 'DOM',
                },
            ],
            
            turnos: [
                {
                    text: '1 turno',
                    value: 1
                },
                {
                    text: '2 turnos',
                    value: 2
                },
                {
                    text: '3 turnos',
                    value: 3
                },
                {
                    text: '4 turnos',
                    value: 4
                },
            ]
            }
    },

    components: {
        SideMenu,
        EditInfos
    },

    methods: {
        toggleEditInfos(){
            this.$refs.teste.dialogEditInfos = !this.$refs.teste.dialogEditInfos
        },
    },

    computed: {
        ...mapState(['seller']),

        info() {
            return this.seller
        }

    }
}
</script>

<style>
    .td_border{
        border-right: 1px solid grey;
    }
</style>

