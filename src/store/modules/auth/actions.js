import firebase from '../../../Firebase'
import router from '../../../router'

export default {
    signInWithGoogle({commit}, payload) {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            commit('setUser', {result});
            router.push('dashboard');
        }).catch(error => {
            console.error(error)
        })
    }, 
    async logout({commit}, payload) {
        await firebase.auth().signOut();
        commit('setUser', {user: null});
        router.push('signin');
    }
}
