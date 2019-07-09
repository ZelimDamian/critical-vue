import firebase from '../../../Firebase'

const db = firebase.firestore();

const constructKey = (user, videoUrl) => `${user.uid}::${videoUrl}`;

export default {
    async getCurrentTime({commit, rootGetters}, {video}) {
        commit('startLoading', {}, { root: true});
        try {
            const user = rootGetters['auth/user'];
            const found = await db.collection('views')
                .doc(constructKey(user,  video.url))
                .get();
            if (found && found.size > 0) {
                const currentTime = found.data().time;
                commit('setCurrentTime', {currentTime, videoUrl: video.url});
            }
        } catch (e) {
            commit('setError', e, { root: true});
        } finally {
            commit('endLoading', {}, { root: true});
        }
    },
    async storeCurrentTimePolling({commit, rootGetters}, {currentTime, videoUrl}) {
        commit('startLoading', {}, { root: true});
        try {
            const user = rootGetters['auth/user'];
            await db.collection('views')
                .doc(constructKey(user, videoUrl))
                .set({
                    time: currentTime,
                    userId: user.uid,
                    videoUrl: videoUrl,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
            commit('setCurrentTime', {currentTime, videoUrl});
        } catch (e) {
            commit('setError', e, { root: true});
        } finally {
            commit('endLoading', {}, { root: true});
        }
    },
    async getCurrentVideoUrl({commit, rootGetters}) {
        commit('startLoading', {}, { root: true});
        try {
            const user = rootGetters['auth/user'];
            const ref = await db.collection('views')
                .where('userId', '==', user.uid)
                .orderBy('timestamp', 'desc')
                .limit(1)
                .get();
            if (ref && ref.size > 0) {
                const currentVideoUrl = ref.docs[0].data().videoUrl;
                commit('setCurrentVideoUrl', {currentVideoUrl});
            }
        } catch (e) {
            commit('setError', e, { root: true});
        } finally {
            commit('endLoading', {}, { root: true});
        }
    }
}