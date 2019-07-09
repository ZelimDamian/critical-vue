<template>
    <youtube :video-id="video.url" ref="youtube"
             @ready="ready"
             @playing="playing" @ended="ended"
             @paused="paused" @unstarted="unstarted"
             :playerVars="playerVars"
    ></youtube>
</template>

<script>
    export default {
        name: 'Playback',
        props: ['video', 'pollingPeriod', 'startTime'],
        data() {
            return {isPlaying: false}
        },
        created() {
            this.playbackTimeChangedInterval = setInterval(() => {
                if (this.isPlaying) {
                    this.$emit('playbackTimeChanged', {time: this.getCurrentTime()});
                }
            }, this.pollingPeriod);
        },
        destroyed() {
            clearInterval(this.playbackTimeChangedInterval);
        },
        methods: {
            ready() {
            },
            playVideo() {
                this.player.playVideo()
            },
            unstarted() {
                this.isPlaying = false;
            },
            paused() {
                this.isPlaying = false;
            },
            playing() {
                this.isPlaying = true;
            },
            ended() {
                this.isPlaying = false;
            },
            getCurrentTime() {
                return this.player.getCurrentTime()
            }
        },
        computed: {
            player() {
                return this.$refs.youtube.player
            },
            playerVars() {
                return {
                    start: this.startTime,
                    modestbranding: 1,
                    iv_load_policy: 3,
                    controls: 0,
                    rel: 0
                }
            }
        }
    }
</script>

<style scoped>
    youtube, iframe {
        width: 100%
    }
</style>
