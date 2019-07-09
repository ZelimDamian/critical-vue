<template>
  <v-container fill-height fluid grid-list-xl >
      <Signin/>
  </v-container>
</template>

<script>
  import Signin from '../components/Signin.vue'

  export default {
    name: 'app',
    components: {
      Signin
    }
  }
</script>
