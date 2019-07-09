export default {
    startLoading(state) {
       state.loading = true;
    }, endLoading(state) {
        state.loading = false;
    }, setError(state, error) {
        state.error = error;
        console.error(error);
    }, resetError() {
        state.error = null;
    }
}
