import firebase from '../../../Firebase'
const db = firebase.firestore();

export default {
    async getAllVideos({commit, state}, payload) {
        if (!firebase.auth().currentUser) return ;
        commit('startLoading', {}, { root: true});
        const videosRef = await db.collection('videos').get();
        const videos = videosRef.docs.map(d => d.data());
        commit('setVideos', videos);
        commit('endLoading', {}, { root: true});
    }
}