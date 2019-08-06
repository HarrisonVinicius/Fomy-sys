<template lang="pug">
  div
    SideMenu
    v-container
            br
            br
            br
            v-layout(row wrap)
                v-flex(xs2)
                v-flex(xs10)
                    h2 Horários de funcionamento 
                    br
                    h3(style="color: grey;") Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa corporis, perferendis dicta voluptates odit necessitatibus quas aliquam aperiam voluptas eveniet facilis! Perferendis hic dicta vel numquam voluptatibus unde neque!
                    br
                    v-divider
                    br
                    h3 HORARIO DE FUNCIONAMENTO 
                            br
                            br
                            v-card
                                v-card-text
                                    v-layout(row wrap)
                                      v-flex
                                        span Dia
                                      v-flex
                                        span MANHÃ
                                      v-flex
                                        span TARDE
                                      v-flex
                                        span NOITE
                                    br
                                    v-data-table(
                                    :items="times"
                                    class="elevation-1"
                                    hide-actions
                                    hide-headers)
                                        template(v-slot:items="props")
                                            td {{ props.item.name }}
                                            td(class="text-xs-right") {{ props.item.category }}
                                            //- td(class="text-xs-right td_border" style="border-left: 1px solid grey;")
                                            //-     v-select(
                                            //-     item-text="text"
                                            //-     item-value="value"
                                            //-     :items="turnos"
                                            //-     label="Turnos"
                                            //-     required
                                            //-     @change="$v.select.$touch()"
                                            //-     @blur="$v.select.$touch()")
                                                
                                            
                                            td(class="text-xs-right td_border" style="border-left: 1px solid #e5e5e5;")
                                                br
                                                v-layout
                                                    v-flex
                                                        v-text-field(
                                                        solo
                                                        prepend-inner-icon="check_circle"
                                                        value="12:30:00"
                                                        type="time"
                                                        class="mr-5")
                                                        
                                                    v-flex
                                                        v-text-field(
                                                        solo
                                                        prepend-inner-icon="not_interested"
                                                        value="12:30:00"
                                                        type="time")
                                                v-layout
                                                    v-flex(xs12)
                                                      v-checkbox(label="FECHADO" v-model="selected" color="error")
                                            td(class="text-xs-right td_border")
                                                br
                                                v-layout
                                                    v-flex
                                                        v-text-field(
                                                        solo
                                                        prepend-inner-icon="check_circle"
                                                        value="12:30:00"
                                                        type="time"
                                                        class="mr-5")
                                                        

                                                    v-flex
                                                        v-text-field(
                                                        solo
                                                        prepend-inner-icon="not_interested"
                                                        value="12:30:00"
                                                        type="time")
                                                v-layout
                                                    v-flex(xs12)
                                                      v-checkbox(label="FECHADO" v-model="selected" color="error")
                                            td(class="text-xs-right td_border")
                                                br
                                                v-layout
                                                    v-flex
                                                        v-text-field(
                                                        solo
                                                        prepend-inner-icon="check_circle"
                                                        value="12:30:00"
                                                        type="time"
                                                        class="mr-5")
                                                        
                                                    

                                                    v-flex
                                                        v-text-field(
                                                        solo
                                                        prepend-inner-icon="not_interested"
                                                        value="12:30:00"
                                                        type="time")
                                                v-layout
                                                    v-flex(xs12)
                                                      v-checkbox(label="FECHADO" v-model="selected" color="error")
                                            //- td(class="text-xs-right td_border")
                                            //-     v-layout
                                            //-         v-flex
                                            //-             v-text-field(
                                            //-             label="ABRE"
                                            //-             value="12:30:00"
                                            //-             type="time"
                                            //-             class="mr-5")
                                                        
                                            //-         v-flex
                                            //-             v-text-field(
                                            //-             label="FECHA"
                                            //-             value="12:30:00"
                                            //-             type="time")  
</template>

<script>
import SideMenu from '@/components/SideMenu'

export default {
  name: 'Schedule-view',

  components: {
    SideMenu
  },

  data () {
    return {
     selected: [],
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
  }


}
</script>

