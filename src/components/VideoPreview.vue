<template>
    <div>
        <img :src="imgSrc" alt="Preview"/>
    </div>
</template>

<script>
    export default {
        name: 'VideoPreview',
        props: [
            'video',
            'previewOnly'
        ],
        methods: {
            clicked() {
                this.$router.push({ name: 'playback', params: { userId: '123' } })
            },
        },
        computed: {
            imgSrc() {
                return `http://i.ytimg.com/vi/${this.video.url}/maxresdefault.jpg`
            }
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
    }
</style>
