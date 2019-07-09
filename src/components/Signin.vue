<template>
    <div>
        <v-btn @click.prevent="signInWithGoogle">Signin with Google</v-btn>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    
    export default {
        name: 'Signin',
        methods: {
            ...mapActions('auth', ['signInWithGoogle'])
        }
    }
</script>

<style scoped>
</style>
