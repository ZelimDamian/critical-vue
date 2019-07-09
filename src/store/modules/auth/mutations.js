export default {
    setUser(state, {user}) {
       state.user = user;
       console.log('Setting user', user)
    }
}
