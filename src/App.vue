<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                fixed
                app
        >
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile>

                <v-list-group
                        prepend-icon="account_circle"
                        value="true"
                >
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-title>Users</v-list-tile-title>
                        </v-list-tile>
                    </template>
                    <v-list-group
                            no-action
                            sub-group
                            value="true"
                    >
                        <template v-slot:activator>
                            <v-list-tile>
                                <v-list-tile-title>Campaign 1</v-list-tile-title>
                            </v-list-tile>
                        </template>

                        <v-list-tile
                                v-for="(video, i) in campaignVideos0"
                                :key="i"
                                @click="goToVideo(video)"
                        >
                            <v-list-tile-title v-text="video.title"></v-list-tile-title>
                            <v-list-tile-action>
                                <v-icon>library-video</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-group>

                    <v-list-group
                            sub-group
                            no-action
                    >
                        <template v-slot:activator>
                            <v-list-tile>
                                <v-list-tile-title>Campaign 2</v-list-tile-title>
                            </v-list-tile>
                        </template>
                        <v-list-tile
                                v-for="(video, i) in campaignVideos1"
                                :key="i"
                                @click="goToVideo(video)"
                        >
                            <v-list-tile-title v-text="video.title"></v-list-tile-title>
                            <v-list-tile-action>
                                <v-icon>video</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <router-link to="/dashboard" color="white">
                <v-toolbar-title>
                    Critical Vue
                </v-toolbar-title>
            </router-link>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2019 by <a href="https://staq.dev">Staq.dev</a></span>
        </v-footer>
    </v-app>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                items: [],
                drawer: null
            }
        },
        computed: {
            ...mapGetters('auth', ['user',]),
            ...mapGetters('app', ['campaignVideos0', 'campaignVideos1']),
            ...mapGetters(['isLoading'])
        },
        methods: {
            goToVideo(video) {
                this.$router.push(`playback/${video.url}`)
            }
        }
    }
</script>

<style>
</style>
