export default {
    currentVideoUrl: (state) => state.videos ? state.videos[0].url : null,
    pollingPeriod: (state) => state.pollingPeriod
}