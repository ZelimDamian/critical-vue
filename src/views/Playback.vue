<template>
    <v-container fluid grid-list-xl>
        {{currentTime}}
        <div v-if="status === 'ready'">
            <Playback :video="video" :startTime="currentTime"
                      @playbackTimeChanged="onPlaybackTimeChanged" :pollingPeriod="pollingPeriod"/>
        </div>
        <div v-else>
            <v-alert :value="true">
                Loading
            </v-alert>
        </div>
    </v-container>
</template>

<script>
    import { mapState } from 'vuex';
    import Playback from '../components/Playback.vue'
    
    export default {
        name: 'PlaybackView',
        components: {Playback},
        data() {
          return { status: 'loading' }
        },
        async created() {
            await this.$store.dispatch('playback/getCurrentTime', { video: this.video});
            this.status = 'ready';
        },
        computed: {
            ...mapState('playback', ['currentTime', 'pollingPeriod']),
            video() { return { url: this.$route.params.id}; },
        }, methods: {
            async onPlaybackTimeChanged({time}) {
                this.$store.dispatch('playback/storeCurrentTimePolling', {
                    currentTime: await time, videoUrl: this.video.url
                });
            }
        }
    }
</script>
