export default {
    setCurrentTime(state, {currentTime}) {
        console.log(currentTime);
        state['currentTime'] = currentTime;
    },
    setCurrentVideoUrl: (state, {currentVideoUrl}) => (state.currentVideoUrl = currentVideoUrl),
}
