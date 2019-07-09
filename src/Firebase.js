import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import store from './store'
import router from './router'

const config = {
    apiKey: "AIzaSyDPj5voF0CxRUFdETR3YbnWYD0LpHNvmjo",
    authDomain: "critical-watch.firebaseapp.com",
    databaseURL: "https://critical-watch.firebaseio.com",
    projectId: "critical-watch",
    storageBucket: "critical-watch.appspot.com",
    messagingSenderId: "210597297673",
    appId: "1:210597297673:web:664565803d034411"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
    store.commit('auth/setUser', { user });
    if (user && router.currentRoute.name === 'Signin' && router.currentRoute.query.redirect) {
        router.push(router.currentRoute.query.redirect);
    }
});


export default firebase;