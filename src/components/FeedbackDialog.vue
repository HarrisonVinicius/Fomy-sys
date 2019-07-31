<template lang="pug">
  v-snackbar(
    color="black"
    v-model='uiux.feedback.snackbar.show'
    bottom
    multi-line
    :timeout='timeout')
    | {{ uiux.feedback.snackbar.text }}
    v-btn.white--text(flat='', @click='snackbar = false')
      | Fechar

</template>

<script>
  // import { mapState } from 'vuex'

  export default {
    name: 'feedback_snackbar',

    // computed: {
    //   ...mapState(['feedback']),
    // },

    data () {
      return {
        snackbar: false,
        timeout: 3000,
      }
    },
  }
</script>