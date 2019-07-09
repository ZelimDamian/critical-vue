<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap justify-center >
            <v-flex d-flex sm12 md6 lg4>
                <v-layout row >
                    <v-flex d-flex>
                        <v-layout row wrap v-if="status === 'ready'">
                            <v-flex row v-for="video in videos" :key="video.id" d-flex sm12>
                                <v-card color="lighten-2" :color="video.url === currentVideoUrl ? 'red' : 'green'" dark >
                                    <v-card-title>
                                        {{video.title}}
                                    </v-card-title>
                                    <v-responsive @click="videoClicked(video)">
                                        <VideoPreview :video="video"/>
                                    </v-responsive>
                                </v-card>
                            </v-flex>
                            <v-flex row d-flex sm12>
                                <v-btn sm12 @click.prevent="logout">Logout</v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout v-else>
                            <v-progress-circular
                                    :size="70"
                                    :width="7"
                                    color="purple"
                                    indeterminate
                            ></v-progress-circular>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapState, mapActions} from "vuex";
    import VideoPreview from '../components/VideoPreview.vue'
    
    export default {
        name: 'Dashboard',
        data() {
            return {
                status: 'loading'
            }
        },
        async beforeCreate() {
            await this.$store.dispatch('app/getAllVideos');
            await this.$store.dispatch('playback/getCurrentVideoUrl');
            this.status = 'ready';
        },
        components: {
            VideoPreview
        },
        computed: {
            ...mapState('app', ['videos']),
            ...mapState('playback', ['currentVideoUrl'])
        }, methods: {
            ...mapActions('auth', ['logout']),
            videoClicked(video) {
                this.$router.push(`playback/${video.url}`)
            }
        }
    }
</script>
