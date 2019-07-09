const filterVideos = (videos, idx) => {
    const found = videos.filter(v => v.campaign === idx);
    return found.length > 0 ? found : [{title: 'no videos'}]
};

export default {
    campaignVideos0: state => filterVideos(state.videos, 0),
    campaignVideos1: state => filterVideos(state.videos, 1)
}